import skillCardCss from "../../styles/skills/skills.module.css";

export const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <div className={skillCardCss.card}>
      {skillIcon}
      <p>{skillName}</p>
    </div>
  );
};
