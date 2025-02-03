"use client";

import React from "react";

const logos = [
  "/React.png",         // React Logo
  "/Next.js.png",       // Next.js Logo
  "/Tailwind CSS.png",  // Tailwind CSS Logo
  "/Python.png",        // Python Logo
  "/Vite.js.png",       // Vite Logo
  "/CSS3.png",          // CSS3 Logo
  "/C.png",             // C Logo
  "/Cpp.png",           // C++ Logo
  "/Figma.png",         // Figma Logo
  "/JavaScript.png",    // JavaScript Logo
  "/TypeScript.png",    // TypeScript Logo
];

const LogoCarousel = ({
  logoSize = "h-20",          // Set default height for logos (can be modified via prop)
  scrollSpeed = "12s",        // Adjusted scroll speed
  spaceBetweenLogos = "space-x-10", // Adjusted space between logos
  pauseOnHover = true,        // Pause animation on hover
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black p-4 shadow-2xl  border-t-8 border-b-8 border-gray-800">
      {/* Gradient overlays for smooth edge blending */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* Animated carousel container */}
      <div
        className={`flex ${spaceBetweenLogos} items-center animate-scroll`}
        style={{ width: `calc(100% + 20px)` }} // Ensure correct width for looping
      >
        {/* Duplicate logos for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className={`${logoSize} max-w-full transform hover:scale-125 transition-transform duration-500 ease-in-out drop-shadow-xl`}
              onError={(e) => (e.target.style.display = "none")} // Hide broken images
            />
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll ${scrollSpeed} linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
