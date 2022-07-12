import React from "react";

const SkillItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col">
      {icon}
      <h3>{name}</h3>
    </div>
  );
};

export default SkillItem;
