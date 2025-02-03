// "use client";
// import { useMotionValue } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { useMotionTemplate, motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const EvervaultCard = ({
//   text,
//   subheading,
//   className
// }) => {
//   let mouseX = useMotionValue(0);
//   let mouseY = useMotionValue(0);

//   const [randomString, setRandomString] = useState("");

//   useEffect(() => {
//     let str = generateRandomString(1500);
//     setRandomString(str);
//   }, []);

//   function onMouseMove({ currentTarget, clientX, clientY }) {
//     let { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     const str = generateRandomString(1500);
//     setRandomString(str);
//   }

//   return (
//     <div
//       className={cn(
//         "p-4 bg-transparent aspect-square border-2 rounded-xl border-white/40 flex items-center justify-center w-full h-full relative hover:scale-105 duration-200",
//         className
//       )}
//     >
//       <div
//         onMouseMove={onMouseMove}
//         className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
//       >
//         <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
//         <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
//           <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
//             <div className="absolute w-full h-full bg-transparent dark:bg-black/[0.1] blur-sm rounded-full flex items-center justify-center" />
//             <span className="dark:text-white/80 text-white/80 z-20 flex items-center justify-center">{text}</span>
//           </div>
//           {subheading && (
//             <div className="mt-4 text-white/60 text-sm font-light opacity-80">{subheading}</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export function CardPattern({ mouseX, mouseY, randomString }) {
//   let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
//   let style = { maskImage, WebkitMaskImage: maskImage };

//   return (
//     <div className="pointer-events-none">
//       <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
//       <motion.div
//         className="absolute inset-0 bg-[#0b1a42] opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
//         style={style}
//       />
//       <motion.div
//         className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
//         style={style}
//       >
//         <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
//           {randomString}
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// const characters = "";
// export const generateRandomString = (length) => {
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// };

// export const Icon = ({ className, ...rest }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };





"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  subheading,
  githubLink,
  className
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-4 bg-transparent aspect-square border-[2.5px] rounded-xl border-white/40 flex items-center justify-center w-full h-full relative hover:scale-105 duration-200",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-transparent dark:bg-black/[0.1] blur-sm rounded-full flex items-center justify-center" />
            <span className="dark:text-white/80 text-white/80 z-20 flex items-center justify-center">{text}</span>
          </div>
          {subheading && (
            <div className="mt-4 text-white/60 text-sm font-light opacity-80">{subheading}</div>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline text-sm"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-[#0b1a42] opacity-10 group-hover/card:opacity-100 transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = "";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
