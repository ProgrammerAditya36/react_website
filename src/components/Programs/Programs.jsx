import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <Program img_src={program_1} icon_src={program_icon_1} icon_text={"Graduation degree"}/>
      <Program img_src={program_2} icon_src={program_icon_2} icon_text={"Masters degree"}/>
      <Program img_src={program_3} icon_src={program_icon_3} icon_text={"Post Graduation"}/>

    </div>
  );
};
const Program = ({ img_src, icon_src, icon_text }) => {
  return (
    <div className="program">
      <img src={img_src} alt="" />
      <div className="caption">
        <img src={icon_src} alt="" />
        <p>{icon_text}</p>
      </div>
    </div>
  );
};
export default Programs;
