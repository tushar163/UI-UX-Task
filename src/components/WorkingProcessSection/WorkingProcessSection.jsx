"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Consultation",
        description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: "02",
        title: "Research and Strategy Development",
        description:
            "We conduct in-depth research into your industry, competitors, and target audience. Using these insights, we craft a tailored digital marketing strategy aligned with your business objectives.",
    },
    {
        id: "03",
        title: "Implementation",
        description:
            "Our team executes the strategy across the appropriate channels — whether that's SEO, PPC, social media, or content — with precision and attention to detail.",
    },
    {
        id: "04",
        title: "Monitoring and Optimization",
        description:
            "We continuously track campaign performance using analytics tools, making data-driven adjustments to maximize results and return on investment.",
    },
    {
        id: "05",
        title: "Reporting and Communication",
        description:
            "You receive clear, regular reports on key metrics and campaign progress. We maintain open communication so you're always informed and confident in our partnership.",
    },
    {
        id: "06",
        title: "Continual Improvement",
        description:
            "Digital marketing is ever-evolving. We stay ahead of trends and continuously refine our approach to ensure sustained growth and long-term success for your business.",
    },
];

export default function WorkingProcessSection() {
    const [openId, setOpenId] = useState("01");

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section
            aria-labelledby="process-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">

                {/* ── Section Header ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
                    <h2
                        id="process-heading"
                        className="text-xl sm:text-2xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex-shrink-0 whitespace-nowrap"
                    >
                        Our Working Process
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-xs">
                        Step-by-Step Guide to Achieving Your Business Goals
                    </p>
                </div>

                {/* ── Accordion ── */}
                <div className="flex flex-col gap-4">
                    {steps.map((step) => {
                        const isOpen = openId === step.id;

                        return (
                            <article
                                key={step.id}
                                className={`
                                    rounded-4xl border-2 border-dark-soft px-6 sm:px-8 py-5 sm:py-6
                                    transition-all duration-300 shadow-[3px_3px_0px_0px_#1B1C24]
                                    ${isOpen ? "bg-primary" : "bg-[#f3f3f3d8]"}
                                `}
                            >
                                <button
                                    onClick={() => toggle(step.id)}
                                    className="w-full flex items-center justify-between gap-4 cursor-pointer"
                                    aria-expanded={isOpen}
                                    aria-controls={`step-content-${step.id}`}
                                >
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <span className="text-3xl sm:text-4xl font-bold text-dark leading-none">
                                            {step.id}
                                        </span>
                                        <span className="text-base sm:text-lg font-semibold text-dark text-left">
                                            {step.title}
                                        </span>
                                    </div>
                                    <span
                                        className={`
                                            flex-shrink-0 w-9 h-9 rounded-full border-2 border-dark
                                            flex items-center justify-center transition-colors duration-200
                                            ${isOpen ? "bg-default" : "bg-default"}
                                        `}
                                        aria-hidden="true"
                                    >
                                        {isOpen
                                            ? <Minus size={16} className="text-dark" />
                                            : <Plus size={16} className="text-dark" />
                                        }
                                    </span>
                                </button>
                                <div
                                    id={`step-content-${step.id}`}
                                    role="region"
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"
                                    }`}
                                >
                                    <hr className="border-dark mb-5" />
                                    <p className="text-sm sm:text-base text-dark leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}