"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  useEffect(() => {
    setMounted(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!mounted) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 w-[250px] h-[250px] rounded-full bg-[rgba(212,163,115,0.18)] dark:bg-[rgba(224,216,241,0.12)] mix-blend-screen blur-2xl pointer-events-none z-0"
      style={{ transform: `translate(${mousePosition.x - 125}px, ${mousePosition.y - 125}px)`, }} />
  );
}