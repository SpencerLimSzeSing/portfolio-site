
import React, { useState, useMemo } from 'react';
import { PROJECTS } from './constants';
import { Project } from './types';
import SkillsSection from './components/SkillsSection';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { 'All': PROJECTS.length };
    PROJECTS.forEach(p => {
      stats[p.category] = (stats[p.category] || 0) + 1;
    });
    return stats;
  }, []);

  const categories = useMemo(() => Object.keys(categoryStats), [categoryStats]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
      const tagMatch = !selectedTag || p.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [selectedCategory, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg shadow-sm">
              <i className="fas fa-database"></i>
            </div>
            <span className="font-bold text-xl tracking-tight">ALEX<span className="text-indigo-600">.DS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          </div>
          <a 
            href="mailto:alex@example.com" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-indigo-100"
          >
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Home / Hero Section */}
      <section id="home" className="relative pt-20 pb-24 overflow-hidden bg-slate-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              MS Data Science Graduate
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
              Transforming <span className="text-indigo-600">Data</span> into Decision Intelligence.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Building scalable predictive systems and interactive analytics that turn raw information into competitive advantages. Specializing in Deep Learning and Urban Informatics.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 hover:-translate-y-1">
                Explore Projects <i className="fas fa-arrow-right"></i>
              </a>
              
              <div className="flex items-center gap-4 md:border-l md:border-slate-200 md:pl-6">
                <a href="mailto:alex@example.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-500 transition-all shadow-sm group" title="Gmail">
                  <i className="fas fa-envelope text-lg transition-transform group-hover:scale-110"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0a66c2] hover:border-[#0a66c2] transition-all shadow-sm group" title="LinkedIn">
                  <i className="fab fa-linkedin-in text-lg transition-transform group-hover:scale-110"></i>
                </a>
                <a href="https://github.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-black hover:border-black transition-all shadow-sm group" title="GitHub">
                  <i className="fab fa-github text-lg transition-transform group-hover:scale-110"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 scale-105 opacity-5"></div>
              <img 
                src="https://picsum.photos/600/600?random=10" 
                alt="Profile" 
                className="rounded-3xl shadow-2xl border-4 border-white relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce [animation-duration:3s] z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">1.2M+</div>
                    <div className="text-xs text-slate-500 font-medium tracking-tight">Data Points Processed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold tracking-wide uppercase">
                  My Journey
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                  Bridging the gap between <span className="text-indigo-600">raw data</span> and human impact.
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-indigo-600 font-bold text-lg mb-1">Education</div>
                    <p className="text-sm text-slate-700 font-semibold leading-tight">M.S. in Data Science</p>
                    <p className="text-xs text-slate-500 mt-1 italic">Top-tier Research University</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-indigo-600 font-bold text-lg mb-1">Focus</div>
                    <p className="text-sm text-slate-700 font-semibold leading-tight">AI & Visual Analytics</p>
                    <p className="text-xs text-slate-500 mt-1 italic">Scaleable ML Pipelines</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-100">
                  <blockquote className="italic text-lg font-medium leading-relaxed">
                    "Alex doesn't just build models; he builds narratives that help organizations see their future through the lens of data."
                  </blockquote>
                  <div className="mt-4 text-sm font-bold text-indigo-100 uppercase tracking-widest">— MS Faculty Advisor</div>
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  I am a Data Scientist driven by the challenge of making sense of the messy, unstructured world. My expertise lies at the intersection of statistical rigor and creative problem-solving.
                </p>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Fresh out of my Master's program, I've spent thousands of hours mastering the modern data stack—from the intricacies of deep neural networks to the engineering challenges of big data pipelines. My academic research focused on **Urban Informatics**, where I used geospatial modeling to optimize public transit efficiency.
                  </p>
                  <p>
                    I believe that the best data solutions are those that are invisible to the end user—systems that work silently in the background to make decisions more accurate and operations smoother. Whether it's predicting customer churn with 90%+ accuracy or visualizing complex genomics data, my goal is always clarity and impact.
                  </p>
                  <p>
                    When I'm not writing Python or tuning hyperparameters, I'm likely exploring new cities with a camera, contributing to open-source libraries like D3.js, or mentoring undergraduates in introductory statistics.
                  </p>
                </div>
                <div className="pt-6 flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">4.0</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Major GPA</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">20+</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">GitHub Repos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">3</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Portfolio</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                A technical showcase of machine learning systems, statistical research, and interactive data visualizations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 p-1 bg-white rounded-2xl border border-slate-200 shadow-sm">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  {cat}
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                    selectedCategory === cat ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {categoryStats[cat]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedTag || selectedCategory !== 'All') && (
            <div className="flex flex-wrap items-center gap-3 mb-10 animate-in fade-in slide-in-from-left-4 duration-300">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Applied Filters:</span>
              
              {selectedCategory !== 'All' && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold border border-indigo-200">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="hover:text-indigo-900">
                    <i className="fas fa-times-circle"></i>
                  </button>
                </div>
              )}

              {selectedTag && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-200">
                  #{selectedTag}
                  <button onClick={() => setSelectedTag(null)} className="hover:text-emerald-900">
                    <i className="fas fa-times-circle"></i>
                  </button>
                </div>
              )}

              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTag(null);
                }}
                className="text-xs font-semibold text-slate-400 hover:text-indigo-600 underline underline-offset-4"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-200 transition-all hover:shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(project.category);
                        }}
                        className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-600 shadow-sm border border-slate-100 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        {project.category}
                      </button>
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors text-slate-800">{project.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {project.tags.map(tag => (
                        <button 
                          key={tag} 
                          onClick={() => handleTagClick(tag)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold mono transition-all border ${
                            selectedTag === tag 
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                              : 'bg-indigo-50/50 text-indigo-700 border-transparent hover:border-indigo-200 hover:bg-indigo-100'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-all text-sm group"
                      >
                        <i className="fab fa-github group-hover:rotate-12 transition-transform"></i> Repository
                      </a>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 py-4 rounded-xl font-bold transition-all text-sm group"
                        >
                          <i className="fas fa-external-link-alt group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"></i> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
                <div className="text-slate-300 text-6xl mb-4">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-700">No matching projects found</h3>
                <p className="text-slate-500 mt-2">Adjust your filters to see more of my work.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTag(null);
                  }}
                  className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-extrabold tracking-tight">95%</div>
              <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Model Accuracy Avg</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold tracking-tight">12k+</div>
              <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Lines of Python</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold tracking-tight">5+</div>
              <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Cloud Tech Stack</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold tracking-tight">2.5k</div>
              <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Research Citations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-8 text-slate-900">Let's Build Something Smarter.</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              I'm always open to discussing data-driven projects, research collaborations, or high-impact data engineering roles.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:alex@example.com" className="group flex items-center gap-4 px-8 py-5 bg-slate-50 hover:bg-indigo-50 rounded-2xl transition-all border border-slate-100 hover:border-indigo-200">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider text-center md:text-left">Email Inquiry</div>
                  <div className="font-bold text-slate-800 text-lg">alex@example.com</div>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" className="group flex items-center gap-4 px-8 py-5 bg-slate-50 hover:bg-indigo-50 rounded-2xl transition-all border border-slate-100 hover:border-indigo-200">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0a66c2] group-hover:bg-[#0a66c2] group-hover:text-white transition-all">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Professional Network</div>
                  <div className="font-bold text-slate-800 text-lg">LinkedIn Profile</div>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 text-white p-2 rounded-lg text-sm shadow-lg shadow-slate-200">
                <i className="fas fa-database"></i>
              </div>
              <div>
                <span className="font-bold text-slate-900 uppercase tracking-tighter">Alex Data</span>
                <span className="block text-slate-400 text-xs font-medium">© 2024 Research Portfolio.</span>
              </div>
            </div>
            <div className="flex gap-10 text-slate-400 font-medium">
              <a href="https://github.com" target="_blank" className="hover:text-black transition-colors flex items-center gap-2">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-[#0a66c2] transition-colors flex items-center gap-2">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2">
                <i className="fas fa-envelope"></i> Gmail
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
