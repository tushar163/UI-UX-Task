"use client";
import Link from "next/link";

// Floating sparkle SVG for decoration
const Sparkle = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
        <path
            d="M16 1 L18.2 13.8 L31 16 L18.2 18.2 L16 31 L13.8 18.2 L1 16 L13.8 13.8 Z"
            fill="currentColor"
        />
    </svg>
);

export default function NotFound() {
    return (
        <main className="min-h-screen bg-default flex items-center justify-center px-4 relative overflow-hidden">

            {/* ── Decorative background sparkles ── */}
            <Sparkle size={18} className="absolute top-16 left-12 text-primary opacity-40 animate-pulse" />
            <Sparkle size={10} className="absolute top-32 left-[20%] text-dark opacity-20" />
            <Sparkle size={28} className="absolute top-20 right-16 text-primary opacity-30 animate-pulse [animation-delay:0.5s]" />
            <Sparkle size={12} className="absolute bottom-28 left-16 text-primary opacity-50 animate-pulse [animation-delay:1s]" />
            <Sparkle size={20} className="absolute bottom-20 right-[15%] text-dark opacity-15" />
            <Sparkle size={8}  className="absolute top-[45%] left-8 text-primary opacity-30" />
            <Sparkle size={16} className="absolute top-[30%] right-[8%] text-dark-soft opacity-20 animate-pulse [animation-delay:1.5s]" />

            {/* ── Main content ── */}
            <div className="flex flex-col items-center text-center gap-8 max-w-lg z-10">

                {/* 404 large number */}
                <div className="relative select-none">
                    {/* Shadow/offset layer */}
                    <span
                        className="absolute text-[10rem] sm:text-[14rem] font-black leading-none text-primary"
                        style={{ top: "6px", left: "6px" }}
                        aria-hidden="true"
                    >
                        404
                    </span>
                    <span className="relative text-[10rem] sm:text-[14rem] font-black leading-none text-dark">
                        404
                    </span>
                </div>

                {/* Divider line with sparkle */}
                <div className="flex items-center gap-4 w-full">
                    <hr className="flex-1 border-dark-soft" />
                    <Sparkle size={20} className="text-primary flex shrink-0" />
                    <hr className="flex-1 border-dark-soft" />
                </div>

                {/* Heading */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold text-dark leading-snug">
                        Looks like you're lost in the{" "}
                        <span className="bg-primary px-2 py-0.5 rounded-lg">digital space</span>
                    </h1>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-sm mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-dark text-white text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-dark-soft"
                    >
                        ← Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 border-2 border-dark text-dark text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-dark hover:text-white"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>
        </main>
    );
}