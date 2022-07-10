import Link from "next/link";
import React, { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Theme from "./Theme";
import Logo from "./Logo";
import LanguageBtn from "./LanguageBtn";

const Navbar = () => {
  const { t } = useTranslation('en',{useSuspense:false});
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 10)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 px-2.5 sm:px-10 duration-300 ease-in ${
        pageScroll && "fixed bg-foreground dark:bg-foreground-dark"
      }`}
    >
      <div className="flex justify-between items-center content-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`${link == "home" ? "/" : "/#" + link}`}>
                <li className="ml-10 text-xl uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider font-[Cormorant] font-medium">
                  {t(`navbar.${link}`)}
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>

        <div className="hidden md:flex justify-between">
          <LanguageBtn />
          <Theme />
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-full xs:w-4/5 h-full bg-gradient-to-r from-background dark:from-background-dark to-foreground dark:to-foreground-dark p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <a>
                  <Logo />
                </a>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col h-fit gap-12">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer font-[Cormorant]"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-foreground dark:shadow-foreground-dark p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-foreground dark:shadow-foreground-dark p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Theme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
