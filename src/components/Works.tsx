import { projects } from '@/data/projects';
import ProjectCard from './styled-components/ProjectCard';
import Cube from './styled-components/Cube';

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
};
