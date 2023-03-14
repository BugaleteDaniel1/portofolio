import skillCardCss from "../../styles/skills/skills.module.css";

export const SkillCard = ({ skillName, skillIcon }) => {
  console.log(skillName, skillIcon);
  return (
    <div className={skillCardCss.card} key={skillIcon}>
      {skillIcon}
      <p>{skillName}</p>
    </div>
  );
};
