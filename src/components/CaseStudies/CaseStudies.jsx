import React from 'react'
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        description:
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        href: "/case-studies/local-restaurant",
    },
    {
        id: 2,
        description:
            "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        href: "/case-studies/b2b-software",
    },
    {
        id: 3,
        description:
            "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        href: "/case-studies/retail-chain",
    },
];
function CaseStudies() {
    return (
        <section
            id="use-cases"
            aria-labelledby="case-studies-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
                    <h2
                        id="case-studies-heading"
                        className="text-2xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex shrink-0"
                    >
                        Case Studies
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-md">
                        Explore Real-Life Examples of Our Proven Digital Marketing
                        Success through Our Case Studies
                    </p>
                </div>

                {/* ── Cards Container ── */}
                <div className="bg-dark rounded-3xl px-6 sm:px-10 py-10 sm:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dark-soft">
                        {caseStudies.map((study) => (
                            <article
                                key={study.id}
                                className="flex flex-col justify-between gap-8 px-0 py-8 md:py-0 md:px-8 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0"
                            >
                                <p className="text-sm sm:text-base text-default leading-relaxed">
                                    {study.description}
                                </p>

                                <Link
                                    href={study.href}
                                    className="flex items-center gap-2 text-primary text-sm font-medium transition-opacity duration-200 hover:opacity-70 group"
                                    aria-label={`Learn more about this case study`}
                                >
                                    Learn more
                                    <ArrowRight
                                        size={16}
                                        className="-rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CaseStudies