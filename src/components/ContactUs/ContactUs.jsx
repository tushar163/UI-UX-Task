"use client"
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
    const [mode, setMode] = useState("say-hi");
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email.trim()) {
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section
            aria-labelledby="contact-heading"
            className="w-full bg-default px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20"
        >
            <div className="max-w-[1480px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-12">
                    <h2
                        id="contact-heading"
                        className="text-2xl font-bold text-dark bg-primary px-3 py-1 rounded-lg flex shrink-0"
                    >
                        Contact Us
                    </h2>
                    <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-xs">
                        Connect with Us: Let's Discuss Your Digital Marketing Needs
                    </p>
                </div>
                <div className="bg-[#f3f3f3cc] rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between">
                    <div className="w-full md:w-[55%] flex flex-col gap-6 px-6 sm:px-10 py-8 sm:py-12">
                        <div className="flex items-center gap-8">
                            {[
                                { value: "say-hi", label: "Say Hi" },
                                { value: "get-quote", label: "Get a Quote" },
                            ].map(({ value, label }) => (
                                <label
                                    key={value}
                                    className="flex items-center gap-2 cursor-pointer text-sm text-dark select-none"
                                >
                                    <span
                                        className={`
                                            w-5 h-5 rounded-full border-2 flex items-center justify-center  shrink-0 transition-colors duration-200
                                            ${mode === value ? "border-primary" : "border-dark-card"}
                                        `}
                                        onClick={() => setMode(value)}
                                    >
                                        {mode === value && (
                                            <span className="w-2.5 h-2.5 rounded-full bg-primary block" />
                                        )}
                                    </span>
                                    <input
                                        type="radio"
                                        name="contact-mode"
                                        value={value}
                                        checked={mode === value}
                                        onChange={() => setMode(value)}
                                        className="sr-only"
                                        aria-label={label}
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs sm:text-sm text-dark font-medium">
                                    Name
                                </label>
                                <input
                                    id="name" name="name" type="text" placeholder="Name"
                                    value={form.name} onChange={handleChange}
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-dark outline-none transition-colors duration-200 focus:border-dark placeholder:text-border"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-xs sm:text-sm text-dark font-medium">
                                    Email<span aria-hidden="true">*</span>
                                </label>
                                <input
                                    id="email" name="email" type="email" placeholder="Email"
                                    value={form.email} onChange={handleChange} required
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-dark outline-none transition-colors duration-200 focus:border-dark placeholder:text-border"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-xs sm:text-sm text-dark font-medium">
                                    Message<span aria-hidden="true">*</span>
                                </label>
                                <textarea
                                    id="message" name="message" placeholder="Message" rows={5}
                                    value={form.message} onChange={handleChange}
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-dark outline-none transition-colors duration-200 focus:border-dark placeholder:text-border resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-dark text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200 hover:bg-dark-soft"
                            >
                                {submitted ? "Message Sent ✓" : "Send Message"}
                            </button>
                        </form>
                    </div>
                    <div className="hidden md:block relative w-[45%] self-stretch min-h-[420px]">
                        <Image
                            src="/asserts/contact-us.webp"
                            alt="Decorative sparkle and starburst illustration"
                            fill
                            className="object-contain object-bottom-right"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}