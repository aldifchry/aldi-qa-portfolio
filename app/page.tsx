const skills = [
  "Manual Testing", "API Testing", "Automation Testing", "SQL",
  "Postman", "Katalon Studio", "Cypress", "Jira", "DBeaver", "K6"
];

const projects = [
    {
    title: "Bank Jatim — Internet Bank for Business",
    tag: "Internet Banking",
    period: "September 2023 — April 2025",
    desc: "Internet Bank for Business project involving manual, API, SIT, UAT, and regression automation using Katalon.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "Regression Automation — Katalon",
      "UAT Support",
    ],
  },
  {
    title: "Bank Jatim — Internet Banking",
    tag: "Internet Banking",
    period: "September 2023 — February 2024",
    desc: "Internet Banking project involving manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Bank Victoria — Internet Bank for Business",
    tag: "Internet Banking",
    period: "August 2024 — October 2024",
    desc: "Internet Bank for Business project covering manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Bank CIMB Niaga — Internet Banking",
    tag: "Internet Banking",
    period: "April 2025 — September 2025",
    desc: "Internet Banking project covering manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Bank CIMB Niaga — Mobile Banking",
    tag: "Mobile Banking",
    period: "April 2025 — February 2026",
    desc: "Mobile Banking project covering manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Bank Hibank — Mobile Banking",
    tag: "Mobile Banking",
    period: "July 2025 — November 2025",
    desc: "Mobile Banking project covering manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Pegadaian — Tring!",
    tag: "Mobile Application",
    period: "February 2026 — July 2026",
    desc: "Digital application project involving manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
  {
    title: "Bank Nobu — Internet Bank for Business",
    tag: "Internet Banking",
    period: "August 2026 — Present",
    desc: "Current Internet Bank for Business project involving manual and API testing, SIT, and UAT support.",
    details: [
      "Manual Testing",
      "API Testing",
      "SIT",
      "UAT Support",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">ALDI FACHRY<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">IT QUALITY ASSURANCE</p>
          <h1>Hi, I&apos;m <span>Aldi Fachry.</span></h1>
          <h2>I make software safer to release.</h2>
          <p className="lead">
            IT Quality Assurance with around 3 years of experience in manual testing,
            API testing, SQL validation, and test automation across banking
            and financial services projects.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
        </div>
  <div className="hero-card profile-card">
  <img src="/aldi.jpg" alt="Aldi Fachry" />
  <div className="profile-info">
    <h3>Aldi Fachry</h3>
    <p>IT Quality Assurance</p>
    <span>Manual · API · Automation</span>
  </div>
</div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2>QA is more than finding bugs.</h2>
        </div>
        <div className="about-grid">
          <p>
            I&apos;m Aldi, a Quality Assurance Engineer currently working at
            PT Infosys Solusi Terpadu. My work has involved enterprise
            banking and financial services clients.
          </p>
          <p>
            My usual QA flow is simple: understand the requirement, create
            test scenarios and cases, execute testing, report defects, and
            support the team until the feature is ready.
          </p>
        </div>
      </section>

      <section id="skills" className="section soft">
        <div className="section-heading">
          <p className="eyebrow">02 — SKILLS</p>
          <h2>Tools I work with.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">03 — PROJECTS</p>
          <h2>Selected QA projects.</h2>
<p className="subtext">
  Professional QA experience across banking, financial services, and digital applications.
</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <p className="tag">{project.tag}</p>
             <h3>{project.title}</h3>
<p className="project-period">{project.period}</p>
<p>{project.desc}</p>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section soft">
        <div className="section-heading">
          <p className="eyebrow">04 — EXPERIENCE</p>
          <h2>Professional experience.</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span>September 2023 - Now</span>
            <div>
              <h3>IT Quality Assurance</h3>
              <h4>PT Infosys Solusi Terpadu</h4>
              <p>
                Manual and automation testing for enterprise banking and
                financial services projects. Worked with requirements,
                test scenarios, functional and regression testing, API
                validation, database checks, defect reporting, and UAT support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <p className="quote">“Find problems before our users do.”</p>
        <p className="subtext">My simple approach to quality.</p>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">05 — CONTACT</p>
          <h2>Let&apos;s connect.</h2>
          <p className="subtext">Open to QA opportunities and conversations about software quality.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:aalamsyah442@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/aldifachry/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/aldifchry" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer>© 2026 Aldi Fachry · IT Quality Assurance Portfolio</footer>
    </main>
  );
}