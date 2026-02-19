"use client"
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
        name: "John Smith",
        title: "Marketing Director at XYZ Corp",
    },
    {
        id: 2,
        quote:
            "Positivus completely transformed our digital presence. Their SEO strategies brought us to the first page of Google within months. The team is incredibly knowledgeable and always goes above and beyond to deliver results that exceed expectations.",
        name: "Sarah Johnson",
        title: "CEO at BrightPath Solutions",
    },
    {
        id: 3,
        quote:
            "Working with Positivus has been a game-changer for our e-commerce business. Their PPC campaigns dramatically reduced our cost-per-acquisition while doubling our conversion rate. I can't recommend them highly enough.",
        name: "Michael Chen",
        title: "Founder at StyleHouse",
    },
    {
        id: 4,
        quote:
            "The Positivus team delivered exceptional results for our social media marketing. Our follower count grew by 300% in six months, and engagement has never been better. They truly understand our brand voice and audience.",
        name: "Emily Torres",
        title: "Brand Manager at Luminary Co.",
    },
    {
        id: 5,
        quote:
            "From content creation to analytics tracking, Positivus handles it all seamlessly. Their data-driven approach helped us identify untapped opportunities and increase our monthly revenue by 40%.",
        name: "David Park",
        title: "COO at NexaRetail",
    },
];

// Sparkle dots for pagination indicator
const SparkleDot = ({ active }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="M8,0 L9.1,6.9 L16,8 L9.1,9.1 L8,16 L6.9,9.1 L0,8 L6.9,6.9 Z"
            fill={active ? "#B1F363" : "#59595E"}
        />
    </svg>
);

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(1); // center card index
    useEffect(() => {
        const interval = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
        return () => clearInterval(interval);
    }, []);
    const total = testimonials.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    // Get indices for left, center, right cards
    const leftIdx = (current - 1 + total) % total;
    const rightIdx = (current + 1) % total;

    const getCard = (idx, position) => {
        const t = testimonials[idx];
        const isCenter = position === "center";

        return (
            <article
                key={t.id}
                className={`
                    flex flex-col gap-6 rounded-2xl border-2 h-[300px] p-6 sm:p-8 transition-all duration-500
                    ${isCenter
                        ? "border-primary bg-dark-card flex-1 opacity-100 scale-100 z-10"
                        : "border-dark-soft bg-dark flex-1 opacity-50 scale-95 z-0"
                    }
                `}
            >
                {/* Quote text */}
                <p className="text-sm sm:text-base text-default leading-relaxed">
                    {isCenter ? `"${t.quote}"` : t.quote}
                </p>

                {/* Author */}
                <div className="flex flex-col gap-0.5 mt-auto">
                    <span className="text-sm font-bold text-primary">{t.name}</span>
                    <span className="text-xs text-border">{t.title}</span>
                </div>
            </article>
        );
    };

    return (
        <section
            aria-labelledby="testimonials-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
                    <h2
                        id="testimonials-heading"
                        className="text-3xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex shrink-0"
                    >
                        Testimonials
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-sm">
                        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                    </p>
                </div>

                <div className="bg-dark rounded-3xl px-4 sm:px-8 py-10 sm:py-12">

                    <div className="hidden md:flex items-stretch gap-4 overflow-hidden">
                       
                        <div className="w-[28%] opacity-50 scale-95 origin-right overflow-hidden">
                            {getCard(leftIdx, "left")}
                        </div>

                        <div className="w-[44%]">
                            {getCard(current, "center")}
                        </div>

                        <div className="w-[28%] opacity-50 scale-95 origin-left overflow-hidden">
                            {getCard(rightIdx, "right")}
                        </div>
                    </div>

                    <div className="md:hidden">
                        {getCard(current, "center")}
                    </div>
                    <div className="flex items-center justify-between mt-8 sm:mt-10 px-2">

                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="w-10 h-10 rounded-full border-2 border-default flex items-center justify-center text-default transition-all duration-200 hover:border-primary hover:text-primary"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial indicators">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    role="tab"
                                    aria-selected={i === current}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className="transition-transform duration-200 hover:scale-125"
                                >
                                    <SparkleDot active={i === current} />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="w-10 h-10 rounded-full border-2 border-default flex items-center justify-center text-default transition-all duration-200 hover:border-primary hover:text-primary"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}