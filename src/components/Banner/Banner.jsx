"use client"
import { Image } from "@heroui/react";
import Link from "next/link";

export default function HeroBanner() {
    return (
        <section
            aria-label="Hero Banner"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 "
        >
            <div className="max-w-[1480px] mx-auto flex flex-col md:flex-row items-center justify-between  lg:gap-16">

                {/* ── Left: Text Content ── */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight tracking-tight">
                        Navigating the digital landscape for success
                    </h1>

                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-sm">
                        Our digital marketing agency helps businesses grow and succeed online
                        through a range of services including SEO, PPC, social media marketing,
                        and content creation.
                    </p>

                    <div>
                        <Link
                            href="/contact"
                            className="inline-block bg-dark text-white text-sm font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:bg-dark-soft"
                        >
                            Book a consultation
                        </Link>
                    </div>
                </div>

                {/* ── Right: Hero Illustration ── */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/asserts/Bnner_image.webp"
                        alt="Digital marketing illustration showing a megaphone with social media icons representing SEO, PPC, and content creation services"
                        width={600}
                        height={500}
                        className="w-full max-w-sm sm:max-w-md lg:max-w-7xl h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}