"use client";

import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Audience() {
    const criteria = [
        "Tired of starting strong and fading out",
        "Ready to stop self-sabotaging",
        "Serious about personal growth and inner work",
        "Willing to show up consistently, even imperfectly",
        "Ready to become, not just achieve"
    ];

    return (
        <Section className="bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal width="100%" className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Who This Program Is For</h2>
                </Reveal>

                <Reveal width="100%">
                    <div className="bg-[#fdfbf7] rounded-[2.5rem] p-8 md:p-16 shadow-inner border border-secondary">
                        <ul className="space-y-8 text-left max-w-2xl mx-auto">
                            {criteria.map((item, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <li className="flex items-start gap-4 text-lg md:text-xl text-foreground group">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-green-200 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                            <Check className="w-5 h-5 text-green-800 group-hover:text-white transition-colors" strokeWidth={3} />
                                        </div>
                                        <span className="group-hover:translate-x-1 transition-transform inline-block">{item}</span>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.6}>
                    <div className="mt-12 p-6 bg-red-50 rounded-xl inline-block border border-red-100 max-w-xl">
                        <p className="text-red-900 font-medium">
                            <span className="font-bold underline text-red-600 mr-2">Please Note:</span>
                            This program is not for people looking for shortcuts, magic pills, or hype.
                        </p>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
