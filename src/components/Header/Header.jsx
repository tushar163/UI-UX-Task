"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SparkleIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="rotate-[35rad]">
        <path
            d="M16 1 L18.2 13.8 L31 16 L18.2 18.2 L16 31 L13.8 18.2 L1 16 L13.8 13.8 Z"
            fill="#1B1C24"
        />
        <circle cx="16" cy="16" r="2.5" fill="#1B1C24" opacity="0.4" />
    </svg>
);

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full bg-default px-4 sm:px-6 lg:px-10">
            <div className="max-w-[1480px] mx-auto flex items-center justify-between h-16 sm:h-20">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <SparkleIcon />
                    <span className="text-dark font-semibold text-xl tracking-tight">Positivus</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href="#"
                            className="text-sm text-dark-soft hover:text-dark transition-colors duration-200"
                        >
                            {link}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block  shrink-0">
                    <Link
                        href="#"
                        className="text-sm font-medium text-dark border border-dark rounded-xl px-5 py-2.5 transition-all duration-200 hover:bg-dark hover:text-white"
                    >
                        Request a quote
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-dark hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border pb-5">
                    <nav className="flex flex-col gap-1 pt-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                href="#"
                                className="text-sm text-dark-soft hover:text-dark hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors duration-200"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-4 px-3">
                        <Link
                            href="#"
                            className="block text-center text-sm font-medium text-dark border border-dark rounded-xl px-5 py-2.5 transition-all duration-200 hover:bg-dark hover:text-white"
                            onClick={() => setMobileOpen(false)}
                        >
                            Request a quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}