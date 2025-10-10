<<<<<<< HEAD
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
=======
import { Card, CardContent } from "@/components/ui/card.tsx";
import { FaReact, } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFirebase } from "react-icons/si";
import type {JSX} from "react";



export const About  = () => {

    return (

        <section className="min-h-screen  bg-gradient-to-b from-background to-[#0a0a0a] py-20">
            <div className='container mx-auto px-6 text-white'>
                <h2 className="text-4xl font-bold font-vazir text-center mb-8">
                    درباره من
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-center text-gray-300 font-vazir leading-relaxed mb-16">
                    من یک توسعه‌دهنده وب هستم که عاشق ساخت رابط‌های کاربری زیبا و تجربه کاربری روانه.
                    تخصص من روی React، TypeScript و Tailwind هست و همیشه دنبال یادگیری تکنولوژی‌های
                    جدید برای بهبود کارهام هستم.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <SkillCard icon={<FaReact className="text-[#61DAFB] text-5xl" />} title="React" />
                    <SkillCard icon={<SiTypescript className="text-[#3178C6] text-5xl" />} title="TypeScript" />
                    <SkillCard icon={<SiTailwindcss className="text-[#38BDF8] text-5xl" />} title="Tailwind CSS" />
                    <SkillCard icon={<SiFirebase className="text-[#FFCA28] text-5xl" />} title="Firebase" />
                </div>
            </div>
        </section>
    );
};
const SkillCard = ({ icon, title }: { icon: JSX.Element; title: string }) => (
    <Card className="bg-white/10 border-none text-center text-white hover:scale-105 transition">
        <CardContent className="flex flex-col items-center p-6">
            {icon}
            <span className="mt-4 font-vazir text-lg">{title}</span>
        </CardContent>
    </Card>
);
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
