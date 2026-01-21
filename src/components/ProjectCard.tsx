import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="bg-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] hover:border-[#8B5CF6]/50 hover:-translate-y-4 transition-all duration-700 cursor-pointer group flex flex-col h-full"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-6 left-6">
          <span className="bg-[#06B6D4]/20 backdrop-blur-md text-[#06B6D4] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg border border-[#06B6D4]/30 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-500">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#06B6D4] group-hover:to-[#EC4899] transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-8 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-white/5 text-gray-500 border border-white/5 px-3 py-1.5 rounded-xl font-black uppercase tracking-wider group-hover:text-gray-300 group-hover:border-white/20 transition-all">
              {tag}
            </span>
          ))}
        </div>

        <button className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-3 group-hover:gap-5 transition-all">
          Full Case Study <i className="fas fa-arrow-right text-[#8B5CF6]"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;