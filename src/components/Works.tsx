<<<<<<< HEAD
import { projects } from "@/data/projects";
import ProjectCard from "./styled-components/ProjectCard";
import Cube from "./styled-components/Cube";

export const Works = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-[#0a0a0a]">
      {/* Cube تزئینی */}
      <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
        <Cube />
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center container mx-auto px-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            demo={p.demo}
            source={p.source}
            icon={p.icon}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import p1 from '@/assets/project/pro1.png'
import p2 from '@/assets/project/p2.png'
import p3 from '@/assets/project/p3.webp'
import {Link} from "react-router";

const projects = [
    {
        title: "پروژه 1",
        description: "توضیح کوتاه درباره پروژه",
        image: p1,
        link: "#",
    },
    {
        title: "پروژه 2",
        description: "توضیح کوتاه درباره پروژه",
        image: p2,
        link: "#",
    },
    {
        title: "پروژه 3",
        description: "توضیح کوتاه درباره پروژه",
        image: p3,
        link: "#",
    },

];

export const Works = () => {
    return (
        <section className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2 font-vazir">نمونه کارها</h2>
                <p className="text-muted-foreground font-vazir">
                    برخی از پروژه‌هایی که تا به حال انجام داده‌ام
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition text-center it">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-48 object-cover rounded-full mx-auto shadow-[0_0_40px_-5px] shadow-primary transition-all duration-500 hover:shadow-[0_0_50px_5px] hover:shadow-purple-950 hover:border-pink-900"
                        />
                        <CardHeader>
                            <CardTitle className="font-vazir">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground font-vazir">
                                {project.description}
                            </p>

                        <Button asChild className="px-6 py-3 border border-primary text-black rounded-xl hover:bg-primary hover:text-secondary-foreground transition ">
                            <Link to={project.link} target="_blank" rel="noopener noreferrer">
                                مشاهده پروژه
                            </Link>
                        </Button>
                    </CardContent>
                    </Card>
                    ))}
            </div>
        </section>
    );
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
};
