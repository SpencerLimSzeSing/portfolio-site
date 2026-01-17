
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
      className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#5A57FF] text-[9px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-gray-100">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#5A57FF] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-gray-50 text-gray-400 border border-gray-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <button className="text-[#5A57FF] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
          Full Case Study <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
