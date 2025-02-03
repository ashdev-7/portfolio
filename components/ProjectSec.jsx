// "use client";

// import React from "react";
// import { EvervaultCard } from "./ui/evervault-card";

// const Projects = () => {
//   const projects = [
//     { text: "Weather App", subheading: "using OpenWeatherMapAPI", githubLink: "https://github.com/ashdev-7/weather-app" },
//     { text: "QGen", subheading: "Generates QR code for any link", githubLink: "https://github.com/ashdev-7/qgen" },
//     { text: "ToDo", subheading: "A simple to-do app to understand the dynamic behaviour of React", githubLink: "https://github.com/ashdev-7/todo" },
//   ];

//   return (
//     <section id="work" className="pt-28 pb-32 h-auto bg-gradient-to-b from-black to-gray-900 w-full">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold text-white text-center mb-16 tracking-tight">
//           My Works
//         </h2>
//         <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4">
//           {projects.map((project, index) => (
//             <div key={index} className="flex-1 min-w-[280px] max-w-[320px]">
//               <EvervaultCard 
//                 text={project.text} 
//                 subheading={project.subheading} 
//                 githubLink={project.githubLink}
//                 className="rounded-2xl" 
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


"use client";

import React from "react";
import { EvervaultCard } from "./ui/evervault-card";

const Projects = () => {
  const projects = [
    { text: "Weather App", subheading: "using OpenWeatherMapAPI", githubLink: "https://github.com/ashdev-7/weather-app" },
    { text: "QGen", subheading: "Generates QR code for any link", githubLink: "https://github.com/ashdev-7/qgen" },
    { text: "ToDo", subheading: "A simple to-do app to understand the dynamic behaviour of React", githubLink: "https://github.com/ashdev-7/todo" },
  ];

  return (
    <section id="work" className="pt-28 pb-16 h-auto bg-gradient-to-b from-black to-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-12 tracking-tight">
          My Works
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
          {projects.map((project, index) => (
            <div key={index} className="flex-1 min-w-[280px] max-w-[320px]">
              <EvervaultCard 
                text={project.text} 
                subheading={project.subheading} 
                githubLink={project.githubLink}
                className="rounded-2xl" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
