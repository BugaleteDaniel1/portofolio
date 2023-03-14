import { skills } from "../../assets/data/skillsData";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <>
      <h2 className="title">Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {skills.map((skill) => (
          <SkillCard skillName={skill.name} skillIcon={skill.icon} />
        ))}
      </div>
    </>
  );
};
