"use client";

import { motion, Transition } from "framer-motion";

export function BackgroundDoodles() {
    const driftTransition: Transition = {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
    };

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Top Left Cloud - Soft Sage */}
            <motion.svg
                className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] text-[#d0e0d5] opacity-[0.2]"
                viewBox="0 0 200 200"
                initial={{ scale: 0.98, x: -5, y: -5 }}
                animate={{ scale: 1.02, x: 5, y: 5 }}
                transition={driftTransition}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.6,-11.7,85.6,2.6C83.6,16.9,75.4,30.4,66.4,42.7C57.4,55,47.6,66.1,35.4,73.5C23.2,80.9,8.6,84.7,-4.8,82.8C-18.2,80.9,-30.4,73.3,-41.8,65.3C-53.2,57.3,-63.8,48.9,-71.4,37.8C-79,26.7,-83.6,12.9,-82.7,-0.5C-81.8,-13.9,-75.4,-26.9,-67.1,-38.7C-58.8,-50.5,-48.6,-61.1,-37.1,-69.1C-25.6,-77.1,-12.8,-82.5,1.5,-84.9C15.8,-87.3,31.6,-86.7,45.7,-76.3Z"
                    transform="translate(100 100)"
                />
            </motion.svg>

            {/* Top Right Cloud - Soft Gray */}
            <motion.svg
                className="absolute -top-[10%] -right-[15%] w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] text-gray-200 opacity-[0.15]"
                viewBox="0 0 200 200"
                initial={{ scale: 1.02, x: 5, y: -5 }}
                animate={{ scale: 0.98, x: -5, y: 5 }}
                transition={{ ...driftTransition, delay: 5 }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M38.1,-63.9C49.3,-54.9,58.3,-45.3,66.5,-34C74.6,-22.8,81.9,-9.9,80.3,2.2C78.6,14.3,68,25.6,58.7,36.2C49.5,46.8,41.6,56.7,31.8,63.9C21.9,71.1,10.1,75.6,-0.9,77.2C-11.9,78.8,-22.9,77.5,-33.1,72.2C-43.3,66.9,-52.7,57.6,-61.2,47.2C-69.7,36.9,-77.3,25.5,-79.3,13.1C-81.3,0.7,-77.7,-12.7,-70.5,-23.6C-63.3,-34.5,-52.5,-42.9,-41.7,-52.1C-30.9,-61.3,-20.1,-71.3,-8.3,-72.7C3.5,-74.1,15.3,-66.9,26.9,-72.9"
                    transform="translate(100 100)"
                />
            </motion.svg>

            {/* Bottom Right Cloud - Soft Sage */}
            <motion.svg
                className="absolute -bottom-[20%] -right-[5%] w-[800px] h-[800px] text-[#d0e0d5] opacity-[0.2]"
                viewBox="0 0 200 200"
                initial={{ scale: 0.98, x: 5, y: 5 }}
                animate={{ scale: 1.02, x: -5, y: -5 }}
                transition={{ ...driftTransition, delay: 2 }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M48.2,-63.8C61.3,-56.9,69.9,-42.2,74.9,-27.2C79.9,-12.2,81.3,3.1,77.3,17.2C73.3,31.3,63.9,44.2,52.3,53.4C40.6,62.6,26.7,68.1,12.1,69.9C-2.5,71.7,-17.8,69.8,-31.2,62.8C-44.6,55.8,-56.1,43.7,-64.1,29.9C-72.1,16.1,-76.6,0.6,-73.4,-13.4C-70.2,-27.4,-59.4,-39.9,-47.4,-47.3C-35.4,-54.7,-22.2,-57,-9.1,-58.5C4,-60,18.1,-60.7,35.1,-70.7"
                    transform="translate(100 100)"
                />
            </motion.svg>
        </div>
    );
}
