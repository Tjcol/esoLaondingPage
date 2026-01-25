"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="font-bold text-2xl tracking-tight text-foreground">
                    GROW <span className="text-sm font-normal text-muted-foreground ml-1">with Coach Esohe</span>
                </div>

                <AnimatePresence>
                    {!isScrolled && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" className="text-sm px-6 py-2">
                                    Go to WhatsApp
                                </Button>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
