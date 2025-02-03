// import HeroHighlight from "./ui/hero-highlight";

// const HeroSection = () => {
//   return (
//     <section id="hero" className="relative text-white flex justify-center w-full h-screen">
//      <HeroHighlight>
//      <div className="flex flex-col">
//         {/* Main heading with large text */}
//         <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight p-2">
//           Front-end 
//           <br />
//           <span className="text-[#f4d340]">development</span>
//           <br />
//           and <span className="text-[#40f4d3]">design</span>
//         </h1>
//         <h3 className="text-xl text-[#d7d7d7] w-full p-4 ">
//         Crafting visually stunning and user-friendly web experiences.
//       </h3>
//       </div>
//      </HeroHighlight>
      
//     {/* add avatar */}

//     </section>
//   );
// };

// export default HeroSection;




import HeroHighlight from "./ui/hero-highlight";

const HeroSection = () => {
  return (
    <section id="hero" className="relative text-white flex justify-center w-full h-screen">
      <HeroHighlight>
        <div className="flex flex-col">
          {/* Main heading with large text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight p-2">
            Front-end 
            <br />
            <span className="text-[#f4d340]">development</span>
            <br />
            and <span className="text-[#40f4d3]">design</span>
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#d7d7d7] w-full p-4">
            Crafting visually stunning and user-friendly web experiences.
          </h3>
        </div>
      </HeroHighlight>

      {/* Add avatar */}
    </section>
  );
};

export default HeroSection;
