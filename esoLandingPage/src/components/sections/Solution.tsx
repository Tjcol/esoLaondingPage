"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Solution() {
    return (
        <Section className="bg-white overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <Reveal className="order-2 md:order-1 w-full" width="100%">
                    {/* Centering the card on mobile/desktop appropriately */}
                    <div className="flex justify-center">
                        <div className="inline-block p-8 rounded-[2rem] bg-secondary/30 border border-secondary relative max-w-md w-full">
                            <div className="absolute -left-4 -top-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-800 text-xl border-4 border-white shadow-sm">
                                ?
                            </div>
                            <h3 className="font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                                Methodology & Tools
                            </h3>
                            <ul className="space-y-5 font-medium text-gray-700">
                                {[
                                    "Life Coaching Principles",
                                    "Neuro-Linguistic Programming (NLP)",
                                    "Cognitive Behavioral Therapy (CBT)",
                                    "Behavioral Systems Design"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <CheckCircle2 className="text-green-700 w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="group-hover:text-green-900 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="order-1 md:order-2 text-center" width="100%" delay={0.4}>
                    <div className="space-y-8 max-w-lg mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            What Makes GROW Different
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                Most programs teach you <em>what</em> to do. <br />
                                <strong className="text-3xl text-green-800 block mt-3 font-serif italic">GROW teaches you who to become.</strong>
                            </p>
                            <p className="leading-relaxed">
                                Because sustainable success doesn’t come from pushing harder —
                                it comes from operating as a different person.
                            </p>
                            <div className="p-6 bg-[#fdfbf7] border-l-4 border-green-700 rounded-r-2xl shadow-sm text-center">
                                <p className="font-medium text-gray-800">
                                    GROW is <span className="italic font-bold text-red-500">not</span> a motivation class. <br />
                                    GROW is not a “try harder” program.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
