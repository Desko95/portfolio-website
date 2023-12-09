"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bank App",
    description: "Fully responsive modern bank website design",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/bank_app",
    previewUrl: "https://bank-app-2rsy.onrender.com/",
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    description: "Summarize articles with OpenAI GPT-4 API",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/ai_summarizer",
    previewUrl: "https://ai-summarizer-dd2n.onrender.com/",
  },
  {
    id: 3,
    title: "Weather app",
    description: "API project weather app",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/weather-app2",
    previewUrl: "https://weather-app-vua5.onrender.com/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Fully responsive personal online portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Desko95/portfolio-website",
    previewUrl: "https://simonesathyadesco.com/",
  },
  // {
  //   id: 5,
  //   title: "Car Hub App",
  //   description: "Car booking App",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Desko95/car_showcase",
  //   previewUrl: "https://car-showcase-qlqa.onrender.com/",
  // },
  // {
  //   id: 6,
  //   title: "Weybnb app",
  //   description: "Airbnb copy Front End + Back End",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "https://github.com/Desko95/weybnb",
  //   previewUrl: "/",
  // },
  // {
  //   id: 7,
  //   title: "Job search App",
  //   description: "work in progress! this is a placeholder",
  //   image: "/images/projects/x.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 8,
  //   title: "MERN",
  //   description: "work in progress! this is a placeholder",
  //   image: "/images/projects/x5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //  },
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
    <section id="projects" >
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
            transition={{ duration: 0.3, delay: index * 0.4}}
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