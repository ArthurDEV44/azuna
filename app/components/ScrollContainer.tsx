"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.main 
      ref={containerRef}
      className="relative h-screen overflow-y-auto snap-y snap-mandatory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
};

export default ScrollContainer; 