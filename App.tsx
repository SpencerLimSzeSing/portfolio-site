
import React, { useState } from 'react';
import { PROJECTS, SKILL_GROUPS, EXPERIENCES } from './constants';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* SECTION 1: HERO (LIGHT) */}
      <section className="min-h-screen bg-white flex flex-col items-center">
        <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5A57FF] rounded-lg flex items-center justify-center text-white font-bold">
              <i className="fas fa-cube"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-[#1a1a1a]">
              SPENCER <span className="text-[#5A57FF]">| PORTFOLIO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-[#5A57FF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#5A57FF] transition-colors">About Me</a>
            <a href="#portfolio" className="hover:text-[#5A57FF] transition-colors">Portfolio</a>
          </div>
          <button className="bg-[#0D1117] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
            Contact
          </button>
        </nav>

        <div className="max-w-7xl w-full mx-auto px-6 flex-1 flex flex-col md:flex-row items-center gap-20 py-20">
          <div className="flex-1 space-y-8 animate-reveal">
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#5A57FF] animate-pulse"></span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Master in Data Science</span>
            </div>
            <h1 className="text-7xl font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tighter">
              Spencer <br /> 
              <span className="text-gradient">Lim Sze Sing</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg leading-relaxed font-medium">
              From Science to Data: Data Science | Analytics | Domain Expertise (Life Sciences & Manufacturing)
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#5A57FF] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-200 hover:translate-y-[-2px] transition-all">
                Get in Touch
              </button>
              <button className="border border-gray-200 text-[#1a1a1a] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
                View Projects
              </button>
            </div>
          </div>

          <div className="flex-1 relative animate-reveal [animation-delay:200ms]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#5A57FF]/5 rounded-[3rem] -rotate-6 z-0"></div>
            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                alt="Spencer Profile" 
                className="w-full aspect-[4/5] object-cover rounded-[3.5rem] grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BACKGROUND & SKILLS (DARK) */}
      <section id="about" className="bg-[#050608] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#5A57FF] text-[10px] font-black uppercase tracking-[0.4em]">About Me</span>
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              Crafting AI Solutions & <br /> Cloud Architecture
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-medium">
              Senior Data Scientist and AWS Solutions Architect specializing in AI/ML innovations and scalable cloud architecture.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[40%] bg-[#0D1117] rounded-[2.5rem] border border-gray-800 p-12 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#5A57FF] rounded-xl flex items-center justify-center text-white text-xl">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3 className="text-2xl font-extrabold text-white">Background</h3>
              </div>
              <p className="text-gray-400 text-sm leading-[1.8] mb-8 font-medium">
                I am a Master of Data Science with a core focus on developing scalable AI/ML solutions. My expertise spans cloud architecture, deep learning, and translating complex mathematical theory into high-impact industrial applications.
              </p>
              <p className="text-gray-400 text-sm leading-[1.8] mb-12 font-medium">
                With a background in Biotechnology and a specialization in Geospatial Data Science, I bridge the gap between scientific domain knowledge and advanced data engineering.
              </p>
              <div className="pt-8 border-t border-gray-800 flex justify-between">
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Academic</p>
                  <p className="text-white text-xs font-bold">M.S. Data Science</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Specialization</p>
                  <p className="text-white text-xs font-bold">GIS & ML Ops</p>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="bg-[#0D1117] rounded-[2.5rem] border border-gray-800 p-10 hover:border-[#5A57FF]/30 transition-colors group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-gray-500 text-lg group-hover:text-[#5A57FF] transition-colors">
                      <i className={group.icon}></i>
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">{group.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="text-[9px] font-black bg-[#161b22] text-gray-400 border border-gray-800 px-3 py-1.5 rounded-lg uppercase tracking-widest group-hover:border-gray-700 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button className="bg-white text-[#0D1117] px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3">
              Learn More About Me <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO (LIGHT GRAY) */}
      <section id="portfolio" className="bg-[#F8F9FF] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-[#5A57FF] text-[10px] font-black uppercase tracking-[0.4em]">Portfolio</span>
              <h2 className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">Technical Explorations</h2>
              <p className="text-gray-400 font-medium">Deep technical case studies and high-fidelity project implementations.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['ALL', 'MACHINE LEARNING', 'DEEP LEARNING', 'DATA VISUALIZATION'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                    filter === cat 
                      ? 'bg-[#5A57FF] text-white border-[#5A57FF] shadow-lg shadow-indigo-100' 
                      : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-extrabold text-[#1a1a1a]">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] pt-12">
            © 2024 Spencer Lim Sze Sing / All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0D1117]/90 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-96">
              <img src={selectedProject.image} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl hover:scale-110 transition-all"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-12 space-y-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[#5A57FF] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Case Study</span>
                  <h3 className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">{selectedProject.title}</h3>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#1a1a1a]">{selectedProject.stars}</p>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Stars</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#1a1a1a]">{selectedProject.forks}</p>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Forks</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-gray-100">
                <div className="md:col-span-2 space-y-6">
                  <h4 className="text-lg font-extrabold text-[#1a1a1a]">Abstract & Methodology</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{selectedProject.description}</p>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h5 className="text-[10px] font-black text-[#5A57FF] uppercase tracking-widest mb-4">Technical Breakdown</h5>
                    <p className="text-sm text-gray-600 leading-relaxed italic">{selectedProject.detailedInsights}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Core Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(t => (
                        <span key={t} className="bg-white border border-gray-200 text-[#1a1a1a] px-4 py-2 rounded-xl text-xs font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-[#5A57FF] text-white py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 transition-all hover:scale-105 active:scale-95">
                    View Live Repository
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
