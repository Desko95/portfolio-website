"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript </li>
        <li>React, React Native</li>
        <li>HTML/CSS, TailwindCSS</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>WordPress</li>
        <li>Python</li>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Harvard CS50</li>
        <li>The Complete Python Pro Bootcamp</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.freecodecamp.org/certification/Desko95/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeCodeCamp Responsive Web Design Certification
          </a>
        </li>
        <li>JavaScript Algorithms and Data Structures (ongoing)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           React developer with commercial experience, proficient in frameworks like Next.js and design libraries such as Tailwind CSS. 
           I have a solid foundation in object-oriented programming and a keen understanding of web development technologies, including HTML and CSS.
           Proficient in version control systems like Git, I thrive in collaborative environments that value teamwork, 
           continuous learning, and mutual respect among team members. As a quick learner who enjoys challenges, 
           I’m always seeking to expand my knowledge and skill set.
            Outside of coding, I love fishing, camping, spending time with my cats, DIY projects, cooking, and playing video games.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
