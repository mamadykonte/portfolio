import Link from 'next/link';
import React from 'react'
import { useTranslation } from "react-i18next";

const Welcome = () => {
   const { t } = useTranslation("en", { useSuspense: false });
  return (
    <section id="home" className="w-full h-screen">
      <div className="relative h-[90%] max-w-screen-xl m-auto text-center">
        <div className="circle-container bg-foreground dark:bg-foreground-dark w-9/12 h-9/12 sm:w-96 sm:h-96 border-2 border-main">
          <div id="circle">
            <svg
              id="round"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <defs>
                <path
                  id="circlePath"
                  d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath
                    className="rotrating-text fill-main"
                    xlinkHref="#circlePath"
                  >
                    {t("welcome.text")}
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <div className="round w-4/6 h-4/6 border-2 border-gray-400"></div>
        </div>

        <div className="container-info">
          <div className="info">
            <div className="box">
              <div className="title">
                <span className="block"></span>
                <h1 className="text-[1.3rem] sm:text-[2rem] text-secondary dark:text-secondary-dark">
                  Mamady Konte<span></span>
                </h1>
              </div>

              <div className="role">
                <div className="block"></div>
                <h2 className="text-[0.8rem] sm:text-[1rem] text-secondary dark:text-secondary-dark">
                  {t("welcome.dev")}
                </h2>
              </div>
            </div>
          </div>

          <div className="more-projet">
            <Link href="/#projects">
              <a className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-main rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full text-white bg-main group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="text-secondary dark:text-secondary-dark absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                  {t("welcome.link")}
                </span>
                <span className="relative invisible">{t("welcome.link")}</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome