import Link from "next/link";
import React from "react";
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
            className="dark:img-dark"
            src={mamady}
            alt="photo de la personne mamady konte Développeur"
          />
          <div className="my-4 mx-auto flex justify-center">
            <Link href="/assets/CV_konte_mamady.pdf">
              <a
                target="_blank"
                className="relative px-5 py-3 overflow-hidden font-medium text-main bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-main group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-main group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-main group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 ray-600bg-g group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-main opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  {t("about.cv")}
                </span>
              </a>
            </Link>
          </div>
        </article>

        <article className="about_container_bloc w-full md:w-3/5">
          <AboutItem
            title={t("about.who.title")}
            pra={t("about.who.text")}
            content={true}
          />
          <AboutItem
            title={t("about.formation.title")}
            pra={t("about.formation.text")}
          />
          <AboutItem
            title={t("about.degree.title")}
            pra={t("about.degree.text")}
          />
          <AboutItem
            title={t("about.professional.title")}
            pra={t("about.professional.text")}
          />
          {/* <AboutItem
            title={t("about.hobbies.title")}
            pra={t("about.hobbies.text")}
          />
          <AboutItem
            title={t("about.interests.title")}
            pra={t("about.interests.text")}
          />
          <AboutItem
            title={t("about.languages.title")}
            pra={t("about.languages.text")}
          /> */}
        </article>
      </div>
    </section>
  );
};

export default About;
