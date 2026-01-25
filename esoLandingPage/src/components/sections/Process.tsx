"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
    const phases = [
        {
            title: "Phase 1: Awareness & Identity Reset",
            description: "Uncover the hidden beliefs and patterns driving your inconsistency — without shame or blame.",
        },
        {
            title: "Phase 2: Systems & Behavior Installation",
            description: "Replace willpower with simple, sustainable systems that work even on your worst days.",
        },
        {
            title: "Phase 3: Integration & Self-Trust",
            description: "Recover quickly from setbacks and stay consistent without starting over.",
        },
    ];

    return (
        <Section className="bg-[#2f3e46] text-[#fdfbf7] relative">
            <Reveal width="100%" className="mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How the Program Works</h2>
                    <p className="text-lg md:text-xl text-gray-300">A journey from confusion to clarity.</p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {phases.map((phase, index) => (
                    <Reveal key={index} delay={index * 0.2}>
                        {/* Added 'items-center text-center' for consistent alignment */}
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col items-center text-center group">
                            <div className="text-green-300 font-bold text-sm tracking-widest uppercase mb-6 bg-white/10 px-4 py-1 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                                Step {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{phase.title}</h3>
                            <p className="text-gray-300 leading-relaxed max-w-sm">{phase.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal width="100%" delay={0.8}>
                <div className="text-center mt-20 max-w-2xl mx-auto">
                    <p className="text-2xl md:text-3xl font-serif italic text-green-200">
                        "This is not about perfection. <br />
                        It’s about becoming reliable to yourself."
                    </p>
                </div>
            </Reveal>
        </Section>
    );
}
