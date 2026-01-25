"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Problem() {
    return (
        <Section size="sm" className="bg-[#f2f2ef] relative overflow-hidden">
            {/* Background noise texture or subtle pattern could go here */}

            {/* Added strict 'text-center' to parent div */}
            <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10 flex flex-col items-center">
                <Reveal width="100%">
                    <div className="space-y-6 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center w-full">If This Sounds Like You...</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed md:text-xl text-center w-full">
                            <p>
                                You start the year motivated. <br />
                                You write goals. <br />
                                You make plans. <br />
                                You promise yourself “this time will be different.”
                            </p>
                            <div className="py-6 flex justify-center">
                                <span className="font-bold text-gray-800 bg-white/80 px-6 py-2 rounded-full shadow-sm inline-block">
                                    And then… life happens.
                                </span>
                            </div>
                            <p>
                                Motivation fades. <br />
                                Consistency slips. <br />
                                Old patterns return.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4} width="100%">
                    <div className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-white/50 backdrop-blur-sm flex flex-col items-center">
                        <p className="text-xl md:text-2xl text-gray-800 font-light text-center">
                            Suddenly, you’re back where you started — wondering what’s wrong with you.
                        </p>

                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-800/50 to-transparent mx-auto"></div>

                        <div className="space-y-4 text-center">
                            <p className="text-2xl font-bold text-foreground">Here’s the truth:</p>
                            <p className="text-xl text-gray-600">
                                Nothing is wrong with you. <br />
                                The problem isn’t your goals.
                            </p>
                            <p className="text-lg md:text-xl text-gray-800 font-medium pt-2">
                                The problem is that no one taught you how to change at the level of <br className="hidden md:block" />
                                <span className="text-green-800 font-bold bg-green-50 px-2 rounded-md">identity, beliefs, and systems.</span>
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.6} width="100%">
                    <p className="text-xl md:text-3xl font-bold text-foreground pt-4 max-w-2xl mx-auto leading-tight text-center">
                        That’s exactly what <span className="text-green-800 underline decoration-green-300 underline-offset-4 decoration-4">GROW with Coach Esohe</span> is designed to do.
                    </p>
                </Reveal>
            </div>
        </Section>
    );
}
