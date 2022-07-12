import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ title, backgroundImg, url, stack }) => {
  return (
    <motion.div
      layout
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-main to-[#3ea2f4]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Voir Plus
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
