"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "My Stack",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>JavaScript </li>
        <li>React, React Native</li>
        <li>HTML/CSS, TailwindCSS</li>
        <li>TypeScript</li>
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
            Front-End Developer with Back-End Experience looking to transition into a permanent position after doing freelance for so long. With
            hands-on experience dealing with clients, I understand the
            importance of excellent customer service—it’s been a key part of my
            freelance journey. Currently studying cybersecurity, I’m eager to
            join a company that can help me grow while making the most of my
            skills. I’m not afraid to take on responsibilities, learn new
            programming languages, or put in the extra effort/hours to deliver great
            results. Outside of coding, I enjoy fishing, camping, spending time
            with my cats, tackling DIY projects (I have a YouTube channel),
            cooking, and gaming. If this sounds like someone you’d like on your
            team, feel free to reach out at simonedescode@gmail.com.
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
