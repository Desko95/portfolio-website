"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bank App",
    description:
      "All components are placeholders, this Fully responsive modern website design could be used as blueprint for your website",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/bank_app",
    previewUrl: "https://bank-app-2rsy.onrender.com/",
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    description:
      "Summarize articles with OpenAI GPT-4 API, just copy and paste your article link in the searchbar and summarize it!",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/ai_summarizer",
    previewUrl: "https://ai-summarizer-dd2n.onrender.com/",
  },
  {
    id: 3,
    title: "FoodOrdering app",
    description:
      "Responsive React Native Food Delivery app with auth, admin/user side, nested navigation, cart, infinite scrolling and more [NOT DEPLOYED YET]",
    image: "/images/projects/FoodOrdering.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/FoodORdering",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Responsive Portfolio Website",
    description:
      "Fully responsive personal online portfolio with customizable components",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/portfolio-website",
    previewUrl: "https://simonesathyadesco.com/",
  },
  {
    id: 5,
    title: "Business Website",
    description: "Modern business website created using WordPress",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://billsplaice.com",
  },

  {
    id: 6,
    title: "Weather app",
    description: "API project weather app, literally what it says",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/weather-app2",
    previewUrl: "https://weather-app-vua5.onrender.com/",
  },
  {
    id: 7,
    title: "GamerFinder",
    description:
      "An app to connect gamers and find players in the same server/game/speaking same language to play with online. [NOT DEPLOYED YET] ",
    image: "/images/projects/player2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/GamerFinder",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "Car Hub App",
    description:
      "API project Car booking app, search your favourite car and check the specs and pictures from different angles",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Desko95/car_showcase",
    previewUrl: "https://car-showcase-pi-bice.vercel.app",
  },
  //   {
  //     id: 9,
  //     title: "Photography Portfolio Website",
  //     description: "work in progress! this is a placeholder",
  //     image: "/images/projects/3X.png",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
