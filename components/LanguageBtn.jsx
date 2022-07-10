import React, { useState, useEffect } from "react";
import { TbWorld } from "react-icons/tb";
import i18next from "i18next";

const LanguageBtn = () => {
  const [mounted, setMounted] = useState(false);
  const [lng, setLng] = useState( i18next.language || window.localStorage.i18nextLng);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="flex justify-between p-2 rounded-md hover:ring-2 hover:ring-gray-300 font-light"
      role="button"
      aria-label="Toggle Language"
      onClick={() => {
        lng == "fr" ? setLng("en") : setLng("fr");
        i18next.changeLanguage(lng);
      }}
    >
      <TbWorld size={25} className="font-light" />
      <span className="pl-1 text-lg font-light uppercase">{lng}</span>
    </button>
  );
};

export default LanguageBtn