import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            Hello, I'm Simone
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Metterti le penne nel culo non farà di te una gallina
          </p>
          <div className='flex'> {/* Create a flex container */}
            <button className='flex-1 px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
            <button className='flex-1 px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'>Download CV</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-4'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[340px] relative'>
            <Image
              src='/images/Avatar.png'
              alt='Avatar'
              className='absolute transform -translate-x-1/2 top-[-10] left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
