"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <Section className="bg-[#2f3e46] text-[#fdfbf7] text-center relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
                        Stop Chasing Goals. <br />
                        <span className="text-green-300">Start Becoming.</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                    <p className="text-xl md:text-3xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        This is not about changing your year. <br />
                        It’s about changing how you show up for the rest of your life.
                    </p>
                </Reveal>

                <Reveal delay={0.4} width="100%">
                    <div className="pt-12">
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Button variant="primary" size="lg" className="px-16 py-8 text-2xl shadow-2xl shadow-green-900/40 bg-green-500 hover:bg-green-600 text-white border-0">
                                Register Now
                            </Button>
                        </motion.a>
                        <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest font-medium">
                            Spaces are limited. Early bird slots close once filled.
                        </p>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
