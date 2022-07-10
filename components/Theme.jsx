import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;
 const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="flex p-2 rounded-md hover:ring-2 hover:ring-gray-300"
      role="button"
      aria-label="Toggle dark/light"
      onClick={() => {
        currentTheme == "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {currentTheme == "dark" ? (
        <IoSunnyOutline size={25} />
      ) : (
        <IoMoonOutline size={25} />
      )}
    </button>
  );
};

export default Theme;
