import React from "react";
import SkillItem from "../components/skillItem";
import {
  FaReact,
  FaNode,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaSymfony,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiMaterialui } from "react-icons/si";
import { useTranslation } from "react-i18next";




const Skills = () => {
    const { t } = useTranslation("en", { useSuspense: false });
    
    const skill = [
      {
        name: "Javascript",
        icon: <DiJavascript1 size={80} color="#e6e600" />,
      },
      {
        name: "React",
        icon: <FaReact size={80} color="#61DBFB" />,
      },
      {
        name: "Vuejs",
        icon: <FaVuejs size={80} color="#42b883" />,
      },
      {
        name: "Node",
        icon: <FaNode size={80} color="#215732" />,
      },
      {
        name: "Express",
        icon: <SiExpress size={80} color="#040416" />,
      },
      {
        name: "Php",
        icon: <FaPhp size={80} color="#6f74ba" />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel size={80} color="#fb503b" />,
      },
      {
        name: "Symfony",
        icon: <FaSymfony size={80} color="black" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt size={80} color="#264de4" />,
      },
      {
        name: "SASS",
        icon: <FaSass size={80} color="#cd6799" />,
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss size={80} color="#2BB3BA" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap size={80} color="#563d7c" />,
      },
      {
        name: "Material-Ui",
        icon: <SiMaterialui size={80} color="#1581C6" />,
      },
      {
        name: "Github",
        icon: <FaGithub size={80} color="#171515" />,
      },
    ];

  return (
    <section className="w-full" id="skills">
      <h2 className="text-center">{t("skills.title")}</h2>
      <div className="max-w-screen-xl m-auto my-4 flex flex-wrap justify-center items-center content-center gap-8">
        {skill.map(({ name, icon }, idx) => (
          <SkillItem key={idx} name={name} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
