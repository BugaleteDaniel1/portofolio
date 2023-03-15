import { skills } from "../../assets/data/skillsData";
import { SkillCard } from "./SkillCard";
import skillsCss from "../../styles/skills/skills.module.css";

export const Skills = () => {
  return (
    <>
      <h2 id="skills-landing" className="title">
        Skills
      </h2>
      <div className={skillsCss.wrapper}>
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
