"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Calendar, Clock, CreditCard, Sparkles, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Pricing() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const text = "1014070913";
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                setCopied(true);
            } else {
                // Fallback for non-secure contexts or older browsers
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed"; // Avoid scrolling to bottom
                textArea.style.left = "-9999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    setCopied(true);
                } catch (err) {
                    console.error("Fallback: Oops, unable to copy", err);
                }
                document.body.removeChild(textArea);
            }
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    return (
        <Section className="bg-[#fdfbf7] relative">
            <div className="max-w-4xl mx-auto">
                <Reveal width="100%">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-secondary overflow-hidden relative transition-all hover:shadow-green-900/10 duration-500">

                        <div className="bg-[#d0e0d5] py-6 px-6 text-center">
                            <span className="font-bold text-green-900 tracking-widest uppercase text-sm">Now Open for Enrollment</span>
                        </div>

                        <div className="p-8 md:p-14 space-y-10">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Program Details</h2>
                                <p className="text-muted-foreground text-lg">Everything you need to transform your identity.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div whileHover={{ y: -5 }} className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-secondary/50">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Start Date</p>
                                        <p className="text-xl font-bold text-gray-800">March 1st</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ y: -5 }} className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-secondary/50">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Duration</p>
                                        <p className="text-xl font-bold text-gray-800">12 Weeks</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bank Details Block - Priority */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10 space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Make Payment To</p>
                                            <h3 className="text-xl font-bold text-white">THE ESOHE IDEHEN GLOBAL RESOURCES LTD</h3>
                                        </div>
                                        <CreditCard className="text-gray-500 w-8 h-8" />
                                    </div>

                                    <div className="space-y-4 bg-white/10 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-gray-400 text-xs uppercase">Bank Name</p>
                                                <p className="text-lg font-semibold">KEYSTONE BANK</p>
                                            </div>
                                        </div>

                                        <div className="pt-2 border-t border-white/10">
                                            <p className="text-gray-400 text-xs uppercase mb-1">Account Number</p>
                                            <div className="flex items-center gap-3">
                                                <p className="text-xl sm:text-2xl md:text-3xl font-mono font-bold tracking-wider text-green-400">1014070913</p>
                                                <button
                                                    onClick={handleCopy}
                                                    className="p-2 hover:bg-white/10 rounded-full transition-colors relative"
                                                    title="Copy Account Number"
                                                >
                                                    <AnimatePresence mode='wait'>
                                                        {copied ? (
                                                            <motion.div
                                                                key="check"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                exit={{ scale: 0 }}
                                                            >
                                                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                            </motion.div>
                                                        ) : (
                                                            <motion.div
                                                                key="copy"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                exit={{ scale: 0 }}
                                                            >
                                                                <Copy className="w-5 h-5 text-gray-400" />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-black/20 p-3 rounded-lg w-fit">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Registration Fee: <span className="text-white font-bold ml-1">₦20,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-8 border-t border-gray-100">
                                <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
                                    After payment, please send proof of payment via WhatsApp to complete your registration.
                                </p>
                                <motion.a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block w-full sm:w-auto"
                                >
                                    <Button fullWidth size="lg" className="py-8 px-12 text-xl shadow-xl shadow-green-900/20">
                                        Confirm Payment on WhatsApp
                                    </Button>
                                </motion.a>
                            </div>

                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
