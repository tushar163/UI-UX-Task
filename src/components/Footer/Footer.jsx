"use client"
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SparkleIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="rotate-[35rad]">
        {/* 4-pointed sparkle star */}
        <path
            d="M16 2 C16 2, 17.5 10, 16 16 C16 16, 10 17.5, 2 16 C2 16, 10 14.5, 16 16 C16 16, 14.5 8, 16 2Z"
            fill="#FFFFFF"
        />
        <path
            d="M16 30 C16 30, 14.5 22, 16 16 C16 16, 22 14.5, 30 16 C30 16, 22 17.5, 16 16 C16 16, 17.5 24, 16 30Z"
            fill="#FFFFFF"
        />
        <path
            d="M2 16 C2 16, 10 14.5, 16 16 C16 16, 17.5 10, 16 2 C16 2, 14.5 10, 16 16 C16 16, 10 17.5, 2 16Z"
            fill="#FFFFFF"
            opacity="0"
        />
        {/* Cleaner approach: simple 4-point star */}
        <path
            d="M16 1 L18.2 13.8 L31 16 L18.2 18.2 L16 31 L13.8 18.2 L1 16 L13.8 13.8 Z"
            fill="#FFFFFF"
        />
        {/* Small center glow */}
        <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" opacity="0.4" />
    </svg>
);

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

    return (
        <footer className="w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-10 rounded-t-3xl bg-dark">

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-5 mb-8 sm:mb-10">

                <div className="flex items-center gap-2">
                    <SparkleIcon />
                    <span className="text-white font-semibold text-xl tracking-tight">Positivus</span>
                </div>
                <nav className="flex flex-wrap gap-x-8 gap-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link}
                            href="#"
                            className="text-sm lg:text-lg underline underline-offset-2 transition-colors duration-200 text-default hover:text-primary"
                        >
                            {link}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    {[
                        { icon: <Linkedin size={16} />, label: "LinkedIn" },
                        { icon: <Facebook size={16} />, label: "Facebook" },
                        { icon: <Twitter size={16} />, label: "Twitter" },
                    ].map(({ icon, label }) => (
                        <button
                            key={label}
                            aria-label={label}
                            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 bg-dark-soft text-default hover:bg-primary hover:text-dark"
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-between lg:flex-row gap-6 mb-8 sm:mb-10">
                <div className="w-full lg:w-auto lg:flex-shrink-0">
                    <span
                        className="inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: "#B1F363", color: "#1B1C24" }}
                    >
                        Contact us:
                    </span>
                    <div className="space-y-2">
                        {[
                            "Email: info@positivus.com",
                            "Phone: 555-567-8901",
                            "Address: 1234 Main St\nMoonstone City, Stardust State 12345",
                        ].map((line, i) => (
                            <p
                                key={i}
                                className="text-sm leading-relaxed whitespace-pre-line text-default"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:flex-1 flex items-center justify-center rounded-xl px-4 sm:px-6 py-5 sm:py-6 bg-dark-soft max-w-[700px]">
                    <div className="flex flex-col  sm:flex-row gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                            className="flex-1 rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 bg-transparent border-default text-default focus:border-primary placeholder:text-border"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                            style={{
                                backgroundColor: subscribed ? "#6E9B37" : "#B1F363",
                                color: "#1B1C24",
                            }}
                            onMouseEnter={(e) => !subscribed && (e.currentTarget.style.backgroundColor = "#CEF3A1")}
                            onMouseLeave={(e) => !subscribed && (e.currentTarget.style.backgroundColor = "#B1F363")}
                        >
                            {subscribed ? "Subscribed ✓" : "Subscribe to news"}
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mb-5 border-dark-soft" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-border">
                    © 2023 Positivus. All Rights Reserved.
                </p>
                <Link
                    href="#"
                    className="text-sm underline underline-offset-2 transition-colors duration-200 text-default hover:text-primary"
                >
                    Privacy Policy
                </Link>
            </div>

        </footer>
    );
}