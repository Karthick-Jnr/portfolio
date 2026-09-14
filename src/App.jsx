import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { data } from '../data.js';
import { projectDetailsData } from './projectDetailsData.js';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Terminal } from './components/Terminal';
import { ResumeModal } from './components/ResumeModal';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const [lastMessage, setLastMessage] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();
  const location = useLocation();

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };



  const currentView = location.pathname.startsWith('/projects/') ? 'detail' : 'home';

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    setLastMessage({ name, email, message });
    setFormStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${data.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const jsonRes = await res.json();
      if (res.ok || jsonRes.success === 'true' || jsonRes.success === true) {
        setFormStatus({
          state: 'success',
          message: 'Submitted'
        });
        form.reset();
      } else {
        throw new Error(jsonRes.message || 'Form submission failed');
      }
    } catch {
      setFormStatus({
        state: 'error',
        message: 'Could not submit automatically. Please click below to send via your email app:'
      });
    }
  };

  // Handle fake navigation state passed to Navbar component
  const handleNavbarSetView = (viewObj) => {
    if (viewObj.type === 'home') {
      navigate('/');
    }
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        toggleTerminal={() => setTerminalOpen(!terminalOpen)}
        currentView={currentView}
        setView={handleNavbarSetView}
        githubUrl={data.contact.github}
        linkedinUrl={data.contact.linkedin}
        instagramUrl={data.contact.instagram}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main className="min-h-[calc(100vh-4.5rem-12rem)]">
        <Routes>
          <Route path="/" element={
            <>
              <section id="hero" className="bg-bg-primary">
                <Hero
                  role={data.role}
                  name={data.name}
                  about={data.about}
                  githubUrl={data.contact.github}
                  linkedinUrl={data.contact.linkedin}
                  instagramUrl={data.contact.instagram}
                  data={data}
                  onOpenResume={() => setResumeModalOpen(true)}
                />
              </section>

              <section id="about" className="py-24 border-t border-border-color bg-bg-secondary">
                <About
                  aboutText={data.about}
                  profileImg={data.images.profile}
                  projectsCount={data.projects.length}
                />
              </section>

              <section id="projects" className="relative py-24 border-t border-border-color bg-bg-tertiary overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-primary/22 dark:bg-primary/18 blur-[85px] pointer-events-none" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
                  <Projects
                    projects={data.projects}
                    onSelectProject={(projectId) => navigate(`/projects/${projectId}`)}
                  />
                </div>
              </section>

              <section id="education" className="py-24 border-t border-border-color bg-bg-secondary">
                <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
                  <Timeline
                    title="Education"
                    subtitle="My academic history and parameters."
                    items={data.education}
                  />
                </div>
              </section>

              <section id="experience" className="py-24 border-t border-border-color bg-bg-tertiary">
                <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
                  <Timeline
                    title="Experience"
                    subtitle="My extracurricular design and hardware simulation tasks."
                    items={data.experience}
                  />
                </div>
              </section>

              {data.certificates && data.certificates.length > 0 && (
                <section id="certificates" className="py-24 border-t border-border-color bg-bg-secondary">
                  <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
                    <Certificates certificates={data.certificates} />
                  </div>
                </section>
              )}

              <section id="skills" className="py-24 border-t border-border-color bg-bg-tertiary">
                <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
                  <Skills skills={data.skills} />
                </div>
              </section>

              <section id="contact" className="relative py-24 border-t border-border-color bg-bg-secondary overflow-hidden">
                <div className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-primary/22 dark:bg-primary/18 blur-[85px] pointer-events-none" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-6 text-left">
                      <h2 className="text-5xl font-extrabold tracking-tight leading-none text-text-primary">Let's work together.</h2>
                      <p className="text-lg text-text-secondary">
                        I'm always open to discussing ideas and opportunities in intelligent automation, where sensing, decision-making, and machine movement come together to solve real-world problems.
                      </p>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-5">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0"><Mail size={18} /></span>
                          <a href={`mailto:${data.contact.email}`} className="text-lg font-medium text-text-primary hover:text-primary transition-colors">{data.contact.email}</a>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0"><Phone size={18} /></span>
                          <a href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-medium text-text-primary hover:text-primary transition-colors">{data.contact.phone}</a>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0"><MapPin size={18} /></span>
                          <span className="text-lg font-medium text-text-primary">{data.contact.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-bg-secondary border border-border-color p-10 rounded-3xl shadow-xl">
                      <form onSubmit={handleContactSubmit} className="space-y-5 text-left">
                        {formStatus.state === 'success' && (
                          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                            <CheckCircle size={20} className="flex-shrink-0" />
                            <p className="font-semibold">{formStatus.message}</p>
                          </div>
                        )}

                        {formStatus.state === 'error' && (
                          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <AlertCircle size={20} className="flex-shrink-0" />
                              <p className="font-semibold">{formStatus.message}</p>
                            </div>
                            <a
                              href={`mailto:${data.contact.email}?subject=${encodeURIComponent(`Portfolio Message from ${lastMessage.name || 'Visitor'}`)}&body=${encodeURIComponent(`From: ${lastMessage.name} (${lastMessage.email})\n\n${lastMessage.message}`)}`}
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-1 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors w-fit text-xs"
                            >
                              <Mail size={14} /> Open in Email App
                            </a>
                          </div>
                        )}

                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-sm font-semibold text-text-secondary">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 rounded-lg border border-border-color bg-bg-secondary text-text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-semibold text-text-secondary">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 rounded-lg border border-border-color bg-bg-secondary text-text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="message" className="text-sm font-semibold text-text-secondary">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full p-3 rounded-lg border border-border-color bg-bg-secondary text-text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                            rows="4"
                            placeholder="Tell me about your project or opportunity..."
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          disabled={formStatus.state === 'loading'}
                          className="w-full mt-2 inline-flex items-center justify-center gap-2 p-3.5 rounded-full font-semibold text-sm cursor-pointer transition-all border-none outline-none bg-primary text-bg-secondary hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {formStatus.state === 'loading' ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/projects/:projectId" element={<ProjectDetailWrapper />} />
        </Routes>
      </main>

      <footer className="border-t border-border-color py-12 bg-bg-secondary text-text-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-16 w-full flex flex-col items-center gap-4 text-center">
          <div className="flex gap-4">
            {data.contact.github && (
              <a href={data.contact.github} target="_blank" rel="noreferrer" title="GitHub" className="text-text-muted hover:text-primary transition-colors">
                <GithubIcon size={20} />
              </a>
            )}
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-text-muted hover:text-primary transition-colors">
                <LinkedinIcon size={20} />
              </a>
            )}
            {data.contact.instagram && (
              <a href={data.contact.instagram.startsWith('http') ? data.contact.instagram : `https://instagram.com/${data.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" title="Instagram" className="text-text-muted hover:text-primary transition-colors">
                <InstagramIcon size={20} />
              </a>
            )}
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p className="text-xs opacity-70">Designed with React, Vite, TailwindCSS v4 & pnpm.</p>
        </div>
      </footer>

      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        data={data}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        data={data}
      />
    </>
  );
}

// Wrapper component to feed URL parameters into the ProjectDetail component
function ProjectDetailWrapper() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const currentProject = data.projects.find(p => p.detailsLink && p.detailsLink.includes(projectId));
  const currentProjectDetails = projectDetailsData[projectId];

  if (!currentProject || !currentProjectDetails) {
    return (
      <div className="py-32 text-center text-text-primary text-xl">
        <p className="mb-4">Project not found.</p>
        <button onClick={() => navigate('/')} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all border-none bg-primary text-bg-secondary hover:bg-primary-hover">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <ProjectDetail
      project={currentProject}
      details={currentProjectDetails}
      onBack={() => navigate('/')}
    />
  );
}
