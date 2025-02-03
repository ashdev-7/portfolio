import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="relative w-full mx-auto py-16 px-6 bg-gradient-to-t from-black to-gray-900">
      <div className="p-12 pt-8 border border-white/40 rounded-3xl w-full shadow-inner shadow-white">
        <div className="flex items-center justify-center space-x-4">
          {/* <div className="h-1 w-20 bg-indigo-500"></div> */}
          <h2 className="text-3xl p-12 font-bold tracking-tight text-white">About Me</h2>
        </div>
        
        <div className='flex flex-col items-center justify-content gap-8 p-12 pt-8'>
        <p className="text-lg leading-relaxed text-gray-600">
          I'm a passionate creator at the intersection of design and technology. With a keen eye for detail
          and a love for elegant solutions, I transform complex challenges into seamless experiences.
          Whether I'm crafting code or designing interfaces, I bring both creativity and technical precision
          to every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-500">Design</h3>
            <p className="text-gray-600">Crafting beautiful, intuitive interfaces that delight users.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-500">Develop</h3>
            <p className="text-gray-600">Building robust, scalable solutions with modern technologies.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-indigo-500">Deploy</h3>
            <p className="text-gray-600">Delivering high-performance applications that make an impact.</p>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;