import React from 'react';
import Image from "next/image";

// https://www.youtube.com/watch?v=Kb1f5bvF6f4 this is the tutorial I'm following

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello, I'm Simone
          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl'>
            Metterti le penne nel culo non farà di te una gallina
          </p>
        </div>
        <div className='col-span-5'>
          <div className='rounded-full bg-[#181818] w-[500] h-[400] relative'>
            <image 
              src="/images/Avatar.png"
              alt= "Avatar"
              className="absolute transform -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2"
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
