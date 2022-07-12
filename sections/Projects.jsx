import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ProjectItem from "../components/ProjectItem"
import listProjects from "../components/listProjects";
import Filter from "../components/Filter";


const Projects = () => {

  const { t } = useTranslation("en", { useSuspense: false });
  
  const [allProjects, setAllProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeStack, setActiveStack] = useState("All");

  useEffect(() => {
    setAllProjects(listProjects);
  }, []);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-6 text-center"> {t("projects.title")}</h2>
        <Filter
          allProjects={allProjects}
          activeStack={activeStack}
          setActiveStack={setActiveStack}
          setFiltered={setFiltered}
        />
        <motion.div layout className="grid md:grid-cols-2 gap-8 ">
          {filtered.map(({ id, title, backgroundImg, url, stack }) => (
            <ProjectItem
              key={id}
              title={title}
              backgroundImg={backgroundImg}
              url={url}
              stack={stack}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
