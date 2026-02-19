"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Search engine optimization",
        image: "/asserts/service1.svg",
        imageAlt: "Search engine optimization illustration",
        bg: "bg-default",
        titleBg: "bg-primary",
        titleColor: "text-dark",
        linkColor: "text-dark",
        arrowBg: "bg-dark",
        arrowColor: "text-white",
        href: "/services/seo",
    },
    {
        id: 2,
        title: "Pay-per-click advertising",
        image: "/services/ppc.png",
        imageAlt: "Pay-per-click advertising illustration",
        bg: "bg-primary",
        titleBg: "bg-white",
        titleColor: "text-dark",
        linkColor: "text-dark",
        arrowBg: "bg-dark",
        arrowColor: "text-white",
        href: "/services/ppc",
    },
    {
        id: 3,
        title: "Social Media Marketing",
        image: "/services/social-media.png",
        imageAlt: "Social media marketing illustration",
        bg: "bg-dark",
        titleBg: "bg-white",
        titleColor: "text-dark",
        linkColor: "text-white",
        arrowBg: "bg-white",
        arrowColor: "text-dark",
        href: "/services/social-media",
    },
    {
        id: 4,
        title: "Email Marketing",
        image: "/services/email.png",
        imageAlt: "Email marketing illustration",
        bg: "bg-default",
        titleBg: "bg-primary",
        titleColor: "text-dark",
        linkColor: "text-dark",
        arrowBg: "bg-dark",
        arrowColor: "text-white",
        href: "/services/email",
    },
    {
        id: 5,
        title: "Content Creation",
        image: "/services/content.png",
        imageAlt: "Content creation illustration",
        bg: "bg-primary",
        titleBg: "bg-white",
        titleColor: "text-dark",
        linkColor: "text-dark",
        arrowBg: "bg-dark",
        arrowColor: "text-white",
        href: "/services/content",
    },
    {
        id: 6,
        title: "Analytics and Tracking",
        image: "/services/analytics.png",
        imageAlt: "Analytics and tracking illustration",
        bg: "bg-dark",
        titleBg: "bg-primary",
        titleColor: "text-dark",
        linkColor: "text-white",
        arrowBg: "bg-white",
        arrowColor: "text-dark",
        href: "/services/analytics",
    },
];

function ServiceCard({ service }) {
    const {
        title, image, imageAlt,
        bg, titleBg, titleColor,
        linkColor, arrowBg, arrowColor, href,
    } = service;

    return (
        <article
            className={`relative flex flex-row items-center justify-between rounded-3xl border border-border p-6 sm:p-8 overflow-hidden min-h-[180px] sm:min-h-[210px] ${bg} group`}
        >
            <div className="flex flex-col justify-between h-full gap-6 z-10 flex-1">
                <h3 className={`text-lg sm:text-3xl font-semibold leading-snug ${titleColor}`}>
                    <span className={`inline ${titleBg} px-1.5 py-0.5 rounded-md box-decoration-clone leading-relaxed`}>
                        {title}
                    </span>
                </h3>
                <Link
                    href={href}
                    className={`flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70 ${linkColor}`}
                    aria-label={`Learn more about ${title}`}
                >
                    <span
                        className={`flex items-center justify-center w-7 h-7 rounded-full  shrink-0 ${arrowBg} ${arrowColor}`}
                    >
                        <ArrowRight size={14} className="-rotate-45" />
                    </span>
                    Learn more
                </Link>
            </div>
            <div className="flex shrink-0 w-1/2 h-28 sm:h-36 relative">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover text-black w-full h-full"
                />
            </div>
        </article>
    );
}

export default function ServicesSection() {
    return (
        <section
            aria-labelledby="services-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-14">
                    <h2
                        id="services-heading"
                        className="text-2xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex shrink-0"
                    >
                        Services
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-md">
                        At our digital marketing agency, we offer a range of services to
                        help businesses grow and succeed online. These services include:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

            </div>
        </section>
    );
}