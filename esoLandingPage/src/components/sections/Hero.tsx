"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
    return (
        <Section className="min-h-[90vh] flex items-center bg-[#fdfbf7] relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#d0e0d5]/10 rounded-l-[100px] -z-10 hidden lg:block" />
            <div className="absolute -left-20 top-20 w-80 h-80 bg-green-100/30 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Text */}
                <div className="space-y-8 relative z-10 flex flex-col justify-center items-center text-center">

                    {/* MOBILE/TABLET IMAGE (Visible below lg) */}
                    <div className="lg:hidden w-full flex justify-center mb-6">
                        <Reveal width="100%">
                            <div className="relative w-64 h-64 mx-auto">
                                <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-60 animate-pulse" />
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl shadow-green-900/10 rotate-3">
                                    <Image
                                        src="/hero-image-v2.png"
                                        alt="Coach Esohe"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Mobile Badge */}
                                <div className="absolute -bottom-4 -right-2 bg-white px-4 py-2 rounded-full shadow-lg border border-secondary text-xs font-bold text-green-900 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                    Coach Esohe
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <div className="space-y-2">
                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                                GROW with <br className="hidden lg:block" /> <span className="text-green-900">Coach Esohe</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-lg mx-auto">
                                A 12-Week Identity-Based Transformation Program.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90 leading-snug">
                                Stop Setting Goals You Don’t Keep, <br />
                                <span className="text-green-800">Start Becoming the Person Who Achieves Them Naturally!</span>
                            </h2>
                            <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-widest text-gray-500 uppercase mt-4">
                                <span className="w-12 h-[2px] bg-green-800/50"></span>
                                Identity • Systems • Self-Trust
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <div className="p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-secondary shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-500 max-w-xl mx-auto">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-100 rounded-full blur-2xl group-hover:bg-green-200 transition-colors duration-500" />
                            <p className="text-lg font-medium text-gray-700 italic relative z-10 leading-relaxed text-center">
                                “I don’t help you set goals.
                                I help you become the person that attracts the goal naturally.”
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.7}>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <motion.a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-green-900/20 shadow-lg hover:shadow-green-900/30">
                                    Register Now
                                </Button>
                            </motion.a>
                            {/* Secondary Button Removed as per request */}
                        </div>
                    </Reveal>
                </div>

                {/* Right: Image (DESKTOP) */}
                {/* Changed 'hidden lg:flex' to 'hidden lg:flex' to be redundant but explicitly checking styles */}
                {/* The user issue might be related to heights or Reveal. Removing specific heights and relying on grid and Aspect Ratio */}
                <Reveal delay={0.4} direction="left" className="relative hidden lg:flex items-center justify-center h-full min-h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-lg xl:max-w-xl"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-green-900/20 bg-[#d0e0d5]">
                            <Image
                                src="/hero-image-v2.png"
                                alt="Coach Esohe Transformation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-10 -left-12 bg-white/95 backdrop-blur-md shadow-xl py-4 px-8 rounded-2xl border border-white/40"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-green-${i * 100} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                                            <div className="w-full h-full bg-gray-200 rounded-full animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Join</p>
                                    <p className="text-sm font-bold text-gray-800">Transformation Community</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Minimal Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            className="absolute top-10 -right-4 bg-white/90 backdrop-blur shadow-lg py-2 px-4 rounded-full text-xs font-bold text-green-800 uppercase tracking-widest border border-white/20 rotate-3 hover:rotate-0 transition-transform"
                        >
                            NLP • CBT • Identity
                        </motion.div>

                    </motion.div>
                </Reveal>
            </div>
        </Section>
    );
}
