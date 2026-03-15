"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient-button";
import { Phone } from "lucide-react";

const languages = [
  {
    name: "The Greeting",
    code: 'cout << "Hello World" << endl;',
  },
  {
    name: "The Logic",
    code: "“Talk is cheap. Show me the code.”",
  },
  {
    name: "The Craft",
    code: "“Logic first. Syntax second.”",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-full overflow-hidden text-white font-sans">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), 
                            linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 text-center px-4">
        {/* language heading */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`lang-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-blue-300 font-mono font-bold text-lg tracking-widest uppercase"
          >
            {languages[index].name}
          </motion.p>
        </AnimatePresence>

        {/* Main Title */}
        <div className="h-40 flex items-center justify-center my-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`code-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-mono tracking-tight"
            >
              {languages[index].code}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="my-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            {/* <AceternityLogo /> */}
            <Phone size={18} />
            <span>Contact Me</span>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
