"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Bio() {
    return (
        <Section size="sm" className="bg-[#f0f0eb]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-8 md:col-start-3 text-center space-y-8">
                    <Reveal>
                        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 group">
                            <Image
                                src="/hero-image-v2.png" // Could update this to a dedicated bio headshot if provided
                                alt="Coach Esohe Portrait"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Your Coach — Coach Esohe</h2>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-2xl mx-auto">
                            <p>
                                Coach Esohe is a Life Coach with a background in <strong>Neurolinguistic Practitioning (NLP)</strong> and <strong>Cognitive Behavioral Therapy (CBT)</strong>, specializing in identity change, mind re-engineering, and sustainable personal growth.
                            </p>
                            <p>
                                Her approach is compassionate, structured, and results-driven — helping clients move from motivation to mastery.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
