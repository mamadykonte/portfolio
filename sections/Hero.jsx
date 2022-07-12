import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import twitter from "../public/assets/projects/twitter.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <section id="home" className="w-full mt-16 cursor-none">
      <motion.div
        className="fixed top-0 left-0 border border-main dark:border-main-dark rounded-full w-8 h-8"
        variants={variants}
        animate={cursorVariant}
      />
      <div className="flex justify-between text-center max-w-screen-xl mx-auto py-16">
        <div className=" py-16 w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={twitter}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className=" rounded-full cursor-pointer hidden md:block"
          />
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="font-bold text-7xl text-left"
          >
            Hello, I am{" "}
            <span className="text-main md:text-main-dark">Mamady</span>
          </h1>
          <p className="text-left font-normal font mb-5 flex-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aperiam placeat molestiae atque tempore perspiciatis laboriosam
            quasi pariatur, vitae sequi veritatis veniam rerum, quos consectetur
            commodi rem totam voluptatum? Hic!
          </p>
          <a
            href="#"
            className="font-semibold md:mt-10 mt-5 pt-5 bg-main dark:bg-main-dark rounded-md w-60 h-16 text-lg hover:bg-primary-dark"
          >
            See My Portfolio !
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
