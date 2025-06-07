"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const hardSkills = [
  "Node.js",
  "Nest.js",
  "Express.js",
  "Next.js",
  "React e React Native",
  "Expo",
  "Javascript e Typescript",
  "Java",
  "Python",
  "Scikit-learn",
  "Pandas",
  "TensorFlow c/ Keras",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

const splitSkills = (skills, itemsPerCol = 6) => {
  const cols = [];
  for (let i = 0; i < skills.length; i += itemsPerCol) {
    cols.push(skills.slice(i, i + itemsPerCol));
  }
  return cols;
};

const TAB_DATA = [
  {
    title: " Hard Skills",
    id: "skills",
    content: (
      <div className="flex gap-8">
        {splitSkills(hardSkills).map((col, idx) => (
          <ul key={idx} className="list-disc pl-2">
            {col.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    ),
  },
  {
    title: "Formação Acadêmica",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Desenvolvimento de Software Multiplataforma</b><br/>Faculdade de Tecnologia do Estado de São Paulo (FATEC)</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1559489836/multiple-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY&treasuryMediaId=1723841376735"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Desenvolvedor Front-end | Fatec
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719439297725/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Análise de Dados com Python | Alura
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719439696358/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Google Firebase integrado a Mapas
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719440320723/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Hardware e Rede de Computadores | Cisco Networking Academy
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719439093795/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Fundamentos de TI: Hardware e Software | Fundação Bradesco
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719440040850/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Prototipação Figma | Cursae
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonfagundes/details/certifications/1719440690626/single-media-viewer/?profileId=ACoAAE_gqfUBgRUiNl80xC6GE9hwZmV54PBHUIY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Computação Gráfica e Design Digital | SAGA
          </a>
        </li>
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
        <Image src="/images/avatar-sobre.png" width={400} height={400} className="rounded-xl"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
           <div className="text-base lg:text-lg space-y-4">
            <p>
              Sou Leon Fagundes, estudante de Desenvolvimento de 
              Software e Multiplataforma na Fatec Votorantim.
            </p>
            <p>
              Tenho uma trajetória diversa que me 
              proporcionou uma visão ampla e adaptabilidade. Meu foco é no desenvolvimento Backend 
              e Machine Learning, com habilidades em diversos frameworks JavaScript, Java, Python, Tensorflow 
              com Keras e Redes Neurais. Apesar de também possuir conhecimentos em design e frontend.
            </p>
            <p>
              Meu objetivo é crescer profissionalmente e criar soluções inovadoras e 
              eficientes utilizando IA para automatizar processos, seja na empresa ou 
              para o cliente.
            </p>
          </div>
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
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
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