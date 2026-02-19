"use client"
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section
            aria-labelledby="cta-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">
                {/* Card — overflow-visible so image bleeds outside the rounded card */}
                <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#F3F3F3] rounded-3xl px-8 sm:px-12 py-10 sm:py-14 overflow-visible">

                    {/* ── Left: Text Content ── */}
                    <div className="flex flex-col gap-4 z-10 w-full md:w-1/2 max-w-md">
                        <h2
                            id="cta-heading"
                            className="text-2xl sm:text-3xl font-bold text-dark leading-snug"
                        >
                            Let's make things happen
                        </h2>

                        <p className="text-sm sm:text-base text-text-light leading-relaxed">
                            Contact us today to learn more about how our digital
                            marketing services can help your business grow and
                            succeed online.
                        </p>

                        <div className="mt-2">
                            <Link
                                href="/contact"
                                className="inline-block bg-dark text-white text-sm font-medium px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-dark-soft"
                            >
                                Get your free proposal
                            </Link>
                        </div>
                    </div>
                    <div
                        className="
                            hidden md:block
                            absolute right-0 top-1/2
                            -translate-y-1/2 translate-x-8
                            w-[400px] lg:w-[480px]
                            h-[300px] lg:h-[360px]
                            pointer-events-none z-20
                        "
                    >
                        <Image
                            src="/asserts/cta.svg"
                            alt="Digital marketing illustration with sparkle and abstract shapes representing business growth"
                            fill
                            priority
                            className="object-contain object-left"
                        />
                    </div>

                    {/* ── Right: Illustration (mobile) — inline, no overflow ── */}
                    <div className="block md:hidden w-full h-52 relative mt-4">
                        <Image
                            src="/asserts/cta.svg"
                            alt="Digital marketing illustration with sparkle and abstract shapes representing business growth"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}