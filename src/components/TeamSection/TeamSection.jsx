"use client"
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const team = [
    {
        id: 1,
        name: "John Smith",
        role: "CEO and Founder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        linkedin: "https://linkedin.com",
    },
    {
        id: 2,
        name: "Jane Doe",
        role: "Director of Operations",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        linkedin: "https://linkedin.com",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Senior SEO Specialist",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        linkedin: "https://linkedin.com",
    },
    {
        id: 4,
        name: "Emily Johnson",
        role: "PPC Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        linkedin: "https://linkedin.com",
    },
    {
        id: 5,
        name: "Brian Williams",
        role: "Social Media Specialist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        linkedin: "https://linkedin.com",
    },
    {
        id: 6,
        name: "Sarah Kim",
        role: "Content Creator",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        linkedin: "https://linkedin.com",
    },
];


function TeamCard({ member }) {
    return (
        <article className="flex flex-col gap-4 bg-default border-2 border-dark rounded-4xl p-5 shadow-[4px_4px_0px_0px_#1B1C24] relative">
            <div className="flex items-end justify-between relative ">
                <div className="flex items-end gap-3">
                    <div className="relative w-16 h-16 flex shrink-0">
                        {/* Green blob */}
                        <div className="absolute inset-0 bg-primary rounded-[40%_60%_55%_45%/45%_55%_60%_40%]" />
                        <Image
                            src={member.image}
                            alt={`${member.name} – ${member.role}`}
                            fill
                            className="object-cover object-top relative z-10 "
                            sizes="64px"
                        />
                    </div>

                    {/* Name & Role */}
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-dark leading-snug">{member.name}</span>
                        <span className="text-xs text-text-light">{member.role}</span>
                    </div>
                </div>
                <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="w-8 h-8 rounded-full bg-dark absolute top-0 right-0 flex justify-center items-center  shrink-0 transition-opacity duration-200  hover:opacity-75"
                >
                    <Linkedin size={14} className="text-primary" />
                </Link>
            </div>
            <hr className="border-dark" />
            <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                {member.bio}
            </p>
        </article>
    );
}

export default function TeamSection() {
    return (
        <section
            aria-labelledby="team-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">

                {/* ── Section Header ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
                    <h2
                        id="team-heading"
                        className="text-2xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex shrink-0"
                    >
                        Team
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-md">
                        Meet the skilled and experienced team behind our successful digital marketing strategies
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {team.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
                <div className="flex justify-end mt-8 sm:mt-10">
                    <Link
                        href="#"
                        className="inline-block bg-dark text-white text-sm font-medium px-7 py-4 rounded-xl transition-all duration-200 hover:bg-dark-soft"
                    >
                        See all team
                    </Link>
                </div>

            </div>
        </section>
    );
}