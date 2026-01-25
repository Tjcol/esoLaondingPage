"use client";

import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Brain, Heart, Settings, BatteryCharging, TrendingUp } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            icon: ShieldCheck,
            description: "Break free from self-sabotage and inconsistency",
        },
        {
            icon: Brain,
            description: "Rewire limiting beliefs that keep you stuck",
        },
        {
            icon: Heart,
            description: "Build emotional discipline — even when motivation is gone",
        },
        {
            icon: Settings,
            description: "Create simple systems that support success automatically",
        },
        {
            icon: BatteryCharging,
            description: "Develop unshakeable self-trust and follow-through",
        },
        {
            icon: TrendingUp,
            description: "Stop starting over — and start progressing steadily",
        },
    ];

    return (
        <Section className="bg-[#fdfbf7]">
            <Reveal width="100%" className="mb-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">What You’ll Gain in 12 Weeks</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        You’ll become the kind of person who keeps promises to themselves.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                        <FeatureCard
                            icon={benefit.icon}
                            description={benefit.description}
                            className="h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
                        />
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.6} width="100%">
                <div className="mt-16 p-8 bg-gradient-to-r from-green-50 to-white rounded-2xl border border-green-100 text-center max-w-3xl mx-auto shadow-sm">
                    <p className="text-lg font-medium text-green-900">
                        <span className="font-bold text-xl">Bonus:</span> Belong to a community of like-minded individuals, with accountability and shared growth.
                    </p>
                </div>
            </Reveal>
        </Section>
    );
}
