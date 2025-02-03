// 3 - circle new
"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}) => {
  let mouseX = useMotionValue(-9999); // Set far-off initial values to prevent immediate gradient rendering
  let mouseY = useMotionValue(-9999);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "relative w-full h-full flex items-center bg-black justify-center group",
          containerClassName
        )}
        onMouseMove={handleMouseMove}
      >
        {/* Default Background and Glowing Pattern */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: useMotionTemplate`
              radial-gradient(
                150px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.04) 50%
              ),
              radial-gradient(
                800px circle at center,
                rgba(255, 255, 255, 0.02) 0%,
                rgba(0, 0, 0, 0.8) 100%
              ),
              repeating-radial-gradient(
                circle,
                rgba(255, 255, 255, 0.08),
                rgba(255, 255, 255, 0.08) 1px,
                transparent 5px
              )
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Interactive highlight overlay */}
        <motion.div
          className="pointer-events-none bg-gradient-to-tr from-indigo-800 via-emerald-900 to-pink-600 absolute inset-0 opacity-10 transition duration-300 group-hover:opacity-80"
          style={{
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                black 20%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Content container */}
        <div
          className={cn(
            "relative w-full max-w-7xl mx-auto px-4 md:px-6 text-white",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroHighlight;
