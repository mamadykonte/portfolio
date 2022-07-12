import React from "react";

const SkillItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col">
      <h3>{name}</h3>
      {icon}
    </div>
  );
};

export default SkillItem;
