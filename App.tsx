
import React, { useState } from 'react';
import { PROJECTS, SKILL_GROUPS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from './constants';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [filter, setFilter] = useState('ALL')
  const [copied, setCopied] = useState(false);

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);
    
    const handleCopyEmail = () => {
    const email = "szesinglim@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#FBF9F7]">
      {/* FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#FBF9F7]/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5A57FF] rounded-lg flex items-center justify-center text-white font-bold">
              <i className="fas fa-cube"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-[#1a1a1a]">
              SPENCER <span className="text-[#5A57FF]">| PORTFOLIO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-[15px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-[#5A57FF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#5A57FF] transition-colors">About Me</a>
            <a href="#portfolio" className="hover:text-[#5A57FF] transition-colors">Portfolio</a>
          </div>
          <a 
            href="#contact" 
            className="bg-[#0D1117] text-white px-8 py-3 rounded-full text-[13px] font-black uppercase tracking-widest hover:scale-105 transition-all text-center inline-block"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO (LIGHT) */}
      <section className="min-h-[85vh] pt-24 bg-[#FBF9F7] flex flex-col items-center">
        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex-1 flex flex-col md:flex-row items-center gap-20 py-20">
                    <div className="flex-1 relative animate-reveal [animation-delay:200ms] flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[70%] bg-[#5A57FF]/5 rounded-[3rem] -rotate-6 z-0"></div>
            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-2xl border border-gray-100 max-w-sm">
              <img 
                src={`${import.meta.env.BASE_URL}DSC02818.jpg`}
                alt="Spencer Profile" 
                className="w-full aspect-[4/5] object-cover rounded-[3.8rem]"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8 animate-reveal">
            <div className="inline-flex items-center gap-3 bg-white/50 border border-gray-200 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#5A57FF] animate-pulse"></span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Open to Work</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tighter">
              Spencer <br /> 
              <span className="text-gradient">Lim Sze Sing</span>
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl max-w-2xl leading-relaxed font-medium">
              From Science to Data: Turning Complexity into Clear, Data-Driven Decisions
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="bg-[#5A57FF] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-200 hover:translate-y-[-2px] transition-all">
                Get in Touch
              </a>
              <a href="#portfolio" className="border border-gray-200 bg-white/50 text-[#1a1a1a] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BACKGROUND & SKILLS (DARK) */}
      <section id="about" className="bg-[#050608] py-32 px-10 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[#5A57FF] text-[10px] font-black uppercase tracking-[0.4em]">About Me</span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Transforming Data into Actionable Insights
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[40%] bg-[#0D1117] rounded-[3rem] border border-gray-800 p-12 lg:p-16 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-[#5A57FF] rounded-2xl flex items-center justify-center text-white text-2xl">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3 className="text-3xl font-extrabold text-white">Background</h3>
              </div>

              <p className="text-gray-400 text-base leading-[1.8] mb-8 font-medium text-justify hyphens-auto">
                Master of Data Science graduate with a multidisciplinary background in R&D, microbiology, sales, and business operations. I specialize in turning complex laboratory and business problems into actionable insights through structured analytical workflows, data validation, and visualization.
              </p>
              
              <p className="text-gray-400 text-base leading-[1.8] mb-8 font-medium text-justify hyphens-auto">
                With hands-on experience in Python, SQL, machine learning, and Tableau, I have delivered data-backed solutions that accelerated stakeholder decision-making, optimized workflows, and supported regulatory compliance. Fluent in English, Bahasa Malaysia, and Mandarin.
              </p>
              
              <p className="text-gray-400 text-base leading-[1.8] mb-8 font-medium text-justify">
                I bridge scientific domain knowledge and data insights to generate measurable impact.
              </p>

              <div className="pt-8 border-t border-gray-800 flex justify-between">
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Domain Expertise</p>
                  <p className="text-white text-sm leading-relaxed">
                    Life Sciences, R&D, Laboratory Data Analysis, Root Cause Investigation
                  </p>
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
                      <span key={skill} className="text-[12px] font-black bg-[#161b22] text-gray-400 border border-gray-800 px-3 py-1.5 rounded-lg uppercase tracking-widest group-hover:border-gray-700 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button 
              onClick={() => setIsResumeOpen(true)}
               className="bg-[#FBF9F7] text-[#0D1117] px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3"
            >
              Learn More About Me <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO (LIGHT GRAY) */}
      <section id="portfolio" className="bg-[#F2EEEB] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-[#5A57FF] text-[10px] font-black uppercase tracking-[0.4em]">Portfolio</span>
              <h2 className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">Projects</h2>
              <p className="text-gray-400 font-medium">A selection of my recent work in Data Science.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['ALL', 'DATA VISUALIZATION', 'MACHINE LEARNING', 'DEEP LEARNING', 'DATA ENGINEERING'].map(cat => (
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

          {/* 4x1 Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#FBF9F7] py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-extrabold text-[#1a1a1a]">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <div className="relative group/email">
              <button 
                onClick={handleCopyEmail}
                className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                title="Copy Email Address"
              >
                <i className="fas fa-envelope"></i>
              </button>
              {copied && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg animate-bounce">
                  Successfully Copied Email Address!
                </div>
              )}
            </div>
            <a 
              href="https://www.linkedin.com/in/lim-sze-sing/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
              title="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/SpencerLimSzeSing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-[#0D1117] rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
              title="GitHub Profile"
            >              
            <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] pt-12">
            © 2026 Spencer Lim Sze Sing / All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* RESUME MODAL */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0D1117]/95 backdrop-blur-xl animate-in fade-in duration-500 overflow-y-auto" onClick={() => setIsResumeOpen(false)}>
           <div className="bg-[#FBF9F7] rounded-[3rem] w-full max-w-7xl my-auto shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            {/* Sidebar info */}
            <div className="lg:w-1/3 bg-white/50 p-12 border-r border-gray-200">
               <div className="mb-12">
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-1">Spencer Lim Sze Sing</h3>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black text-[#5A57FF] uppercase tracking-widest mb-4">Education</h4>
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="mb-6">
                      <p className="text-sm font-extrabold text-[#1a1a1a]">{edu.degree}</p>
                      <p className="text-xs text-gray-500 font-bold">{edu.school}</p>
                      <p className="text-[10px] text-gray-400 mt-1">{edu.year}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-[#5A57FF] uppercase tracking-widest mb-4">Certifications</h4>
                  <ul className="space-y-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <li key={idx} className="text-xs text-gray-600 font-medium flex gap-2">
                        <span className="text-[#5A57FF]">•</span> {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-12 relative">
              <button 
                onClick={() => setIsResumeOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#1a1a1a] shadow-lg hover:scale-110 transition-all z-10"
              >
                <i className="fas fa-times"></i>
              </button>

              <h3 className="text-4xl font-extrabold text-[#1a1a1a] mb-12 tracking-tight">Professional Experience</h3>
              
              <div className="space-y-12">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-100 pb-2">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#5A57FF]"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-[#1a1a1a]">{exp.role}</h4>
                        <p className="text-[#5A57FF] text-sm font-extrabold">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-500 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0D1117]/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
                  <h4 className="text-lg font-extrabold text-[#1a1a1a]">Abstract</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{selectedProject.description}</p>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h5 className="text-[10px] font-black text-[#5A57FF] uppercase tracking-widest mb-4">Key takeaways</h5>
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
                  <a 
                    href={selectedProject.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#5A57FF] text-white py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 transition-all hover:scale-105 active:scale-95 text-center block"
                  >
                    View Repository
                  </a>
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
