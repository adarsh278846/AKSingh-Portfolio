import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Github, Linkedin, Mail, ExternalLink, Code2,
  Database, BrainCircuit, Terminal, Sparkles, Download, Menu, X
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'Student Management System',
    type: 'Java Application',
    description: 'A practical Java project for managing student records and common student-management operations through a structured application.',
    tech: ['Java', 'OOP', 'Collections'],
    icon: <Database size={22} />,
  },
  {
    title: 'Python Games',
    type: 'Game Development',
    description: 'A collection of interactive games built with Python and Pygame, focused on game logic, mechanics, input handling and user interaction.',
    tech: ['Python', 'Pygame', 'Game Logic'],
    icon: <Terminal size={22} />,
  }
];

const skills = [
  { name: 'C', level: 'Basics', icon: <Code2 /> },
  { name: 'C++', level: 'Basics', icon: <Code2 /> },
  { name: 'Java', level: 'Basics', icon: <Code2 /> },
  { name: 'Python', level: 'Basics', icon: <Code2 /> },
  { name: 'Data Analytics', level: 'Exploring', icon: <Database /> },
  { name: 'AI Tools', level: 'Practical Use', icon: <BrainCircuit /> },
  { name: 'Git & GitHub', level: 'Workflow', icon: <Github /> },
  { name: 'Pygame', level: 'Projects', icon: <Sparkles /> },
];

function App() {
  const [open, setOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="site">
      <div className="grid-bg" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="nav">
        <button className="brand" onClick={() => go('home')}>
          <span className="brand-mark">AK</span>
          <span>A.K.Singh<span className="accent">.dev</span></span>
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {['home','about','skills','projects','contact'].map(item =>
            <button key={item} onClick={() => go(item)}>{item}</button>
          )}
        </nav>

        <a className="nav-cta" href="mailto:adarsh278846@gmail.com">Let's connect <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
            <h1>Building my path<br/>in <span>technology.</span></h1>
            <p className="hero-text">
              I'm <strong>Adarsh Kumar Singh</strong>, a B.Tech CSE student focused on Java,
              Python, practical software projects and exploring data analytics with modern AI tools.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go('projects')}>Explore projects <ArrowUpRight size={18}/></button>
              <a className="secondary" href="https://github.com/adarsh278846" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            </div>
            <div className="mini-stats">
              <div><b>8.38</b><span>CGPA</span></div>
              <div><b>2025–29</b><span>B.Tech CSE</span></div>
              <div><b>3rd</b><span>Semester</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="scanline" />
            <div className="profile-card">
              <div className="card-top"><span>PROFILE.EXE</span><span>01 / 01</span></div>
              <div className="photo-wrap">
                <img src="/profile.png" alt="A.K. Singh profile" />
                <div className="corner c1"/><div className="corner c2"/><div className="corner c3"/><div className="corner c4"/>
              </div>
              <div className="profile-meta">
                <div><small>IDENTITY</small><b>A.K.Singh</b></div>
                <div><small>ROLE</small><b>CS STUDENT</b></div>
              </div>
            </div>
            <div className="float-tag tag-one">JAVA <span>01</span></div>
            <div className="float-tag tag-two">PYTHON <span>02</span></div>
            <div className="code-decoration">01001<br/>11010<br/>00101</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-heading">
            <h2>Curious by nature.<br/><span>Builder by practice.</span></h2>
            <p>
              I'm currently pursuing B.Tech in Computer Science & Engineering at
              Babu Banarasi Das University. I enjoy turning concepts into small,
              working projects and steadily building a strong foundation in software development.
            </p>
          </div>
          <div className="about-grid">
            <div className="terminal-card">
              <div className="terminal-head"><span/><span/><span/><label>~/about/adk</label></div>
              <pre>{`$ whoami
A.K.Singh

$ focus
Java • Python • Problem Solving

$ exploring
Data Analytics • AI Tools

$ mindset
Learn → Build → Improve`}</pre>
            </div>
            <div className="journey">
              <div className="journey-item"><span>2025</span><div><b>Started B.Tech CSE</b><p>Began the journey in Computer Science & Engineering.</p></div></div>
              <div className="journey-item"><span>2026</span><div><b>Building projects</b><p>Created Java applications and Python/Pygame projects while learning GitHub workflows.</p></div></div>
              <div className="journey-item"><span>NOW</span><div><b>Exploring data & AI</b><p>Strengthening programming fundamentals and moving toward Python-based data analytics.</p></div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / SKILLS</div>
          <div className="section-heading compact">
            <h2>Tools I use to<br/><span>build & learn.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => <div className="skill" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div><b>{s.name}</b><span>{s.level}</span></div>
              <em>0{i+1}</em>
            </div>)}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / PROJECTS</div>
          <div className="section-heading">
            <h2>Small projects.<br/><span>Real practice.</span></h2>
            <p>Selected work from my learning journey. More projects will be added as I keep building.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => <article className="project-card" key={p.title}>
              <div className="project-number">0{i+1}</div>
              <div className="project-icon">{p.icon}</div>
              <span className="project-type">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="techs">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              <a href="https://github.com/adarsh278846" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16}/></a>
            </article>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div className="section-label">04 / CONTACT</div>
            <h2>Let's build something<br/><span>interesting.</span></h2>
            <p>I'm always open to learning, collaborating on projects and connecting with fellow developers.</p>
            <a className="email" href="mailto:adarsh278846@gmail.com"><Mail size={20}/> adarsh278846@gmail.com <ArrowUpRight size={18}/></a>
            <div className="socials">
              <a href="https://github.com/adarsh278846" target="_blank" rel="noreferrer"><Github/> GitHub</a>
              <a href="https://www.linkedin.com/in/adarsh-maurya-803954380/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
              <a href="https://x.com/AKSingh_8846" target="_blank" rel="noreferrer">𝕏 X</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 A.K.Singh.dev</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
