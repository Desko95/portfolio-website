"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Simone",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* "In the realm of algorithms and data, I navigate the vast sea of code to architect the future." */}
            &quot;Per aspera ad astra, scientia vincere tenebras. Ex cathedra,
            codificatio artis quaerendi. In omnia scientiam, virtutem et
            technologiam.&quot;
          </p>
          <div className="flex">
            {" "}
            {/* Create a flex container */}
            <button className="flex-1 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple500 to-green-500 hover:bg-slate-400 text-white">
              Hire Me
            </button>
            <a href="/SimoneSathyaDescoCV2024.pdf" download>
              <button className="flex-1 px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-blue-500 via-purple500 to-green-500 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-4">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[340px] relative">
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              className="absolute transform -translate-x-1/2 top-[-10] left-1/2"
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
