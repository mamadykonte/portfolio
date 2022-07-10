import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import AboutItem from "../components/AboutItem";
import mamady from "../public/assets/mamady.jpg";

const About = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  return (
    <section id="about" className="about w-full">
      <h2>{t("about.title")}</h2>
      <div className="max-w-screen-xl m-auto flex justify-between items-center flex-wrap">
        <article className="mamady w-full md:w-2/5">
          <Image
            src={mamady}
            alt="photo de la personne mamady konte Développeur"
          />
        </article>

        <article className="about_container_bloc w-full md:w-3/5">
          <AboutItem
            title={t("about.who.title")}
            pra={t("about.who.first")}
            content={true}
          />
          <AboutItem
            title={t("about.formation.title")}
            pra={t("about.formation.first")}
          />
          <AboutItem title={t("about.who.title")} pra={t("about.who.first")} />
        </article>
      </div>
    </section>
  );
};

export default About;
