import React from "react";

const AboutItem = ({ title, pra,content=false }) => {

    const handleClick = (e) => {
      const allBlocs = document.querySelectorAll(".about_bloc");
    e.target.classList.add("content");

    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("content");
      }
    }
  };
  return (
    <div
      className={`about_bloc ${
        content ? "content" : ""
      } about_bg dark:about_bg-dark`}
      onClick={handleClick}
    >
      <div className="about_bloc_hidden">
        <h4>{title}</h4>
        <i></i>
      </div>
      <div className="about_bloc_show">
        <p>{pra}</p>
      </div>
    </div>
  );
};

export default AboutItem;
