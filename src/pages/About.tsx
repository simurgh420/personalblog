import { skills } from "@/data/skill";
import SkillCard from "@/components/styled-components/Skill-card";
import AboutMe from "@/components/styled-components/About-me";
import Cube from "@/components/styled-components/Cube";

export const About  = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-[#0a0a0a] py-20">
      {/* Cube تزئینی */}
      <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
        <Cube />
      </div>

      <div className="relative container mx-auto px-6 text-white">
        <div className="flex justify-center mb-10">
          <AboutMe />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((s) => (
            <SkillCard
              key={s.title}
              title={s.title}
              description={s.description}
              icon={s.icon}
              link={s.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
