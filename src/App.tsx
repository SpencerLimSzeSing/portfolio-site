
import React, { useState } from 'react';
import { PROJECTS, SKILL_GROUPS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import profileImg from './DSC02818.jpg'; 

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
    <div className="relative w-full overflow-x-hidden bg-[#0D1117] text-[#F0F6FC]">
      {/* AMBIENT BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-aurora-1 animate-float blur-[140px] opacity-60"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-aurora-2 animate-float blur-[140px] [animation-delay:5s] opacity-50"></div>
        <div className="absolute top-[20%] right-[5%] w-[45%] h-[45%] bg-aurora-3 animate-float blur-[120px] [animation-delay:10s] opacity-40"></div>
      </div>

      {/* FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#0D1117]/40 backdrop-blur-2xl border-b border-white/5 px-6 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#06B6D4] via-[#8B5CF6] to-[#EC4899] rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <i className="fas fa-cube"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-white">
              SPENCER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">| PORTFOLIO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-[12px] font-black uppercase tracking-[0.25em] text-gray-400">
            <a href="#" className="hover:text-white hover:scale-110 transition-all">Home</a>
            <a href="#about" className="hover:text-white hover:scale-110 transition-all">About Me</a>
            <a href="#portfolio" className="hover:text-white hover:scale-110 transition-all">Portfolio</a>
          </div>
          <a 
            href="#contact" 
            className="bg-white text-[#0D1117] px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all text-center inline-block shadow-xl shadow-white/5"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] pt-24 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 z-10 flex flex-col md:flex-row items-center gap-20 py-20">
          <div className="flex-1 relative animate-reveal [animation-delay:300ms] flex justify-center order-2 md:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[85%] bg-gradient-to-r from-[#06B6D4]/15 via-[#8B5CF6]/15 to-[#EC4899]/15 rounded-[5rem] -rotate-6 blur-3xl z-0"></div>
            <div className="relative z-10 p-5 bg-white/5 backdrop-blur-md rounded-[5rem] shadow-2xl border border-white/10 max-w-sm hover:rotate-3 transition-transform duration-700">
              <img 
                src={profileImg}
                className="rounded-[4.5rem] grayscale-[0.1] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="flex-1 space-y-10 animate-reveal order-1 md:order-2">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <span className="w-3 h-3 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_15px_#06B6D4]"></span>
              <span className="text-[12px] font-black text-gray-200 uppercase tracking-[0.3em]">Open to Work</span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-extrabold text-white leading-[0.9] tracking-tighter">
              Spencer <br /> 
              <span className="text-gradient">Lim Sze Sing</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-2xl max-w-2xl leading-relaxed font-medium">
              Bridging the gap between scientific domain expertise and scalable data-driven solutions.
            </p>
            <div className="flex flex-wrap gap-6 pt-6">
              <a href="#contact" className="bg-gradient-to-r from-[#06B6D4] via-[#8B5CF6] to-[#EC4899] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-purple-500/40 hover:translate-y-[-6px] hover:shadow-purple-500/60 transition-all">
                Let's Collaborate
              </a>
              <a href="#portfolio" className="border border-white/15 bg-white/5 backdrop-blur-xl text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 hover:translate-y-[-4px] transition-all">
                Explore Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="relative z-10 bg-[#050608]/90 backdrop-blur-3xl py-40 px-10 lg:px-12 border-y border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-28 space-y-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#EC4899] text-[12px] font-black uppercase tracking-[0.6em]">ABOUT ME</span>
            <h2 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tight">
              Data is the bridge to clarity
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[45%] bg-[#0D1117] rounded-[5rem] border border-white/10 p-14 lg:p-20 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#06B6D4]/10 blur-[100px] group-hover:bg-[#8B5CF6]/15 transition-colors duration-1000"></div>
              <div className="flex items-center gap-6 mb-14">
                <div className="w-16 h-16 bg-gradient-to-br from-[#06B6D4] via-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3 className="text-4xl font-extrabold text-white">Background</h3>
              </div>

              <div className="space-y-10">
                <p className="text-gray-300 text-lg lg:text-xl leading-[1.8] font-medium text-justify">
                  Master of Data Science graduate with a multidisciplinary background in R&D, microbiology, sales, and business operations. I specialize in turning complex laboratory and business problems into actionable insights through structured analytical workflows, data validation, and visualization.
                </p>
                <p className="text-gray-300 text-lg lg:text-xl leading-[1.8] font-medium text-justify">
                  With hands-on experience in Python, SQL, machine learning, and Tableau, I have delivered data-backed solutions that accelerated stakeholder decision-making, optimized workflows, and supported regulatory compliance. Fluent in English, Bahasa Malaysia, and Mandarin.
                </p>
              </div>

              <div className="pt-14 mt-14 border-t border-white/10">
                <p className="text-[12px] font-black text-gray-500 uppercase tracking-widest mb-4">Core Domain</p>
                <p className="text-[#06B6D4] text-xl font-bold tracking-tight">
                  Life Sciences & Analytical R&D
                </p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="glass-card rounded-[4rem] p-12 transition-all duration-700 group relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-6 mb-12 relative z-10">
                    <div className="text-[#06B6D4] text-3xl group-hover:text-[#EC4899] group-hover:scale-110 transition-all duration-500">
                      <i className={group.icon}></i>
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-[0.25em]">{group.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {group.skills.map(skill => (
                      <span key={skill} className="text-[11px] font-black bg-white/5 text-gray-300 border border-white/5 px-4 py-2.5 rounded-2xl uppercase tracking-widest hover:text-white hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all cursor-default">
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

      {/* SECTION 3: PORTFOLIO */}
      <section id="portfolio" className="relative py-40 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div className="space-y-6">
              <span className="text-[#EC4899] text-[12px] font-black uppercase tracking-[0.7em]">Case Studies</span>
              <h2 className="text-6xl lg:text-7xl font-extrabold text-white tracking-tight">Projects</h2>
              <p className="text-gray-400 text-xl font-medium">A selection of my recent work in Data Science.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['ALL', 'DATA VISUALIZATION', 'MACHINE LEARNING', 'DEEP LEARNING', 'DATA ENGINEERING'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-gradient-to-r from-[#06B6D4] via-[#8B5CF6] to-[#EC4899] text-white border-transparent shadow-lg shadow-purple-500/20' 
                      : 'bg-white/5 text-gray-500 border border-white/5 hover:border-white/20 hover:text-white'
                   }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative bg-[#050608] py-40 border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-7xl font-extrabold text-white tracking-tighter">Let's Connect.</h2>
            <p className="text-gray-400 text-2xl font-medium">:)</p>
          </div>
          <div className="flex justify-center gap-10">
            <div className="relative group">
              <button 
                onClick={handleCopyEmail}
                className="w-20 h-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white text-3xl hover:bg-[#06B6D4]/20 hover:border-[#06B6D4]/50 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all duration-500"
                title="Copy Email"
              >
                <i className="fas fa-envelope"></i>
              </button>
              {copied && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#06B6D4] text-white text-[12px] font-bold px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap animate-bounce">
                  Email Copied!
                </div>
              )}
            </div>
            <a 
              href="https://www.linkedin.com/in/lim-sze-sing/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-20 h-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white text-3xl hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)] transition-all duration-500"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/SpencerLimSzeSing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-20 h-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white text-3xl hover:bg-[#EC4899]/20 hover:border-[#EC4899]/50 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)] transition-all duration-500"
            >              
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="text-[12px] text-gray-600 font-bold uppercase tracking-[0.5em] pt-16">
            © 2026 Spencer Lim Sze Sing — All Rights Reserved
          </p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#050608]/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0D1117] border border-white/10 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-96">
              <img src={selectedProject.image} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-12 space-y-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gradient text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Case Study</span>
                  <h3 className="text-5xl font-extrabold text-white tracking-tight">{selectedProject.title}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/10">
                <div className="md:col-span-2 space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-lg font-extrabold text-white flex items-center gap-3">
                      <i className="fas fa-file-alt text-[#06B6D4]"></i> Abstract
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-extrabold text-white flex items-center gap-3">
                      <i className="fas fa-lightbulb text-[#EC4899]"></i> Key Takeaway
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">{selectedProject.detailedInsights}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Stack & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold bg-white/5 text-gray-300 border border-white/10 px-3 py-1.5 rounded-xl uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] text-white py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-purple-500/40 transition-all hover:scale-105 text-center block">
                    View Repository
                  </a>                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RESUME MODAL */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#050608]/95 backdrop-blur-xl animate-in fade-in duration-500 overflow-y-auto" onClick={() => setIsResumeOpen(false)}>
          <div className="bg-[#0D1117] border border-white/10 rounded-[3rem] w-full max-w-7xl my-auto shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <div className="lg:w-1/3 bg-white/5 p-12 border-r border-white/10">
              <h3 className="text-2xl font-black text-white mb-12">Spencer Lim Sze Sing</h3>
              <div>
                <h4 className="text-[10px] font-black text-[#06B6D4] uppercase tracking-widest mb-6">Education</h4>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="mb-8">
                    <p className="text-sm font-extrabold text-white">{edu.degree}</p>
                    <p className="text-xs text-gray-400 font-bold">{edu.school}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>

               <div>
                  <h4 className="text-[10px] font-black text-[#06B6D4] uppercase tracking-widest mb-6">Certifications</h4>
                  <ul className="space-y-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <li key={idx} className="text-xs text-white-400 font-bold">
                        <span className="text-[#06B6D4]">•</span> {cert}
                      </li>
                    ))}
                  </ul>
                </div>

            </div>
            <div className="flex-1 p-12 relative overflow-y-auto">
              <button onClick={() => setIsResumeOpen(false)} className="absolute top-8 right-8 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><i className="fas fa-times"></i></button>
              <h3 className="text-4xl font-extrabold text-white mb-12">Professional Experience</h3>
              <div className="space-y-12">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-white/5 pb-2">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0D1117] border-4 border-[#8B5CF6]"></div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-[#06B6D4] text-sm font-extrabold">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{exp.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (<li key={i} className="text-gray-400 text-sm leading-relaxed">{item}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;