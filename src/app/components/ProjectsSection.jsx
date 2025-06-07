"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cadastro de Professores Web",
    description: "Gerenciador de professores e Cursos da Fatec",
    image: "/images/projects/PISSWeb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/proj-cadastro/projeto-cadastro-web",
    previewUrl: "https://frontend-api-git-main-ericksts-projects.vercel.app/tela-inicio",
  },
  {
    id: 2,
    title: "Cadastro de Professores App",
    description: "Gerenciador de professores e Cursos da Fatec",
    image: "/images/projects/PISSApp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/proj-cadastro/projeto-cadastro-app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Predição de Depressão em Estudantes",
    description: "Projeto de predição de depressão em estudantes utilizando Machine Learning",
    image: "/images/projects/pred.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/leonfagundes27/student_depression_prediction",
    previewUrl: "/",
    reportUrl: "/report.pdf",
  },
  {
    id: 4,
    title: "Carrinho controlado por App via Bluetooth",
    description: "Carrinho controlado via Bluetooth por App com gráfico de trajetória utilizando arduino",
    image: "/images/projects/carro.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/leonfagundes/CarroBluetooth-API",
    previewUrl: "https://github.com/leonfagundes/CarroBluetooth-API",
  },
  {
    id: 5,
    title: "App Cifra de César",
    description: "Projeto de encriptação de mensagens com React Native com integração do Whatsapp",
    image: "/images/projects/crypto-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/leonfagundes/encryption-api",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "App CRUD Template",
    description: "App genérico com CRUD completo",
    image: "/images/projects/apps.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/leonfagundes27/APIRESTful-DevWeb",
    previewUrl: "https://www.youtube.com/shorts/aoYoO1a_NrE",
  },
  {
    id: 7,
    title: "API Template",
    description: "Projeto de criação de uma API utilizando Nest.js, Prisma e MySQL",
    image: "/images/projects/api.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/leonfagundes/api-template-nest-prisma-mysql",
    previewUrl: "/",
  },
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
        Meus Projetos
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
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
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
              reportUrl={project.reportUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
