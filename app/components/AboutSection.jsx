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
        <li>Next.js</li>
        <li>JavaScript </li>
        <li>TypeScript</li>
        <li>React, React Native</li>
        <li>Python</li>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>HTML/CSS, TailwindCSS</li>
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
          Responsive Web Design Certification
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
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a full stack web developer fluent in English, Italian and Spanish
            with a passion for creating
            interactive and responsive web applications. 
            A strong advocate in Test Driven Development and understanding the importance of this when writing code. 
            Comfortable working in Agile/Kanban environments
            and managing CI/CD pipelines for automated workflows.
            I have experience working with JavaScript, React, React Native, HTML/CSS, Git, Python, Node.js, PostgreSQL, Docker and
            MongoDB. I am a quick learner who likes challenges 
            always looking to expand my knowledge and skill set.
            Big time team player and
            I&apos;m excited to work with others to create amazing applications.
            I love fishing, camping, my cat, DIY, cooking and playing videogames.
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