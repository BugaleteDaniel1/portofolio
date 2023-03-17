import { skills } from "../../assets/data/skillsData";
import { SkillCard } from "./SkillCard";
import SkillsCss from "../../styles/skills/skills.module.css";

export const Skills = () => {
  return (
    <>
      <h2 id="skills-landing" className="title">
        Skills
      </h2>
      <div className={SkillsCss.wrapper}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skillName={skill.name}
            skillIcon={skill.icon}
          />
        ))}
      </div>
    </>
  );
};
