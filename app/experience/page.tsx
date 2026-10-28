import Image from "next/image";
import { professionalExperience, volunteerEntry } from "@/constant/experienceData";

export const metadata = {
  title: "Experience | Allan John Valiente",
  description: "Professional software development and client project experience of Allan John Valiente.",
};

function ExperienceSection({ title, entries }: { title: string; entries: typeof professionalExperience }) {
  return (
    <section className="experience-section">
      <div className="experience-section-heading"><h2>{title}</h2><span>{String(entries.length).padStart(2, "0")} ROLES</span></div>
      <div className="experience-list">
        {entries.map((job, index) => (
          <article className="experience-item" key={`${job.company}-${index}`}>
            <div className="experience-logo-wrap"><Image src={job.image} alt={`${job.company} logo`} width={180} height={100} className="experience-logo" /></div>
            <div className="experience-content">
              <div className="experience-date">{job.dates}</div>
              <h2>{job.role}</h2>
              <div className="experience-company">{job.company} <span>·</span> {job.location}</div>
              <ul>{job.details.map((detail, detailIndex) => <li key={detailIndex}>{detail}</li>)}</ul>
              <div className="tag-row">{job.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <div className="section-kicker">BACKGROUND <span>— EXPERIENCE</span></div>
        <h1>Experience that shapes<br /><span>how I build.</span></h1>
        <p>My path includes software development in professional teams, client websites, API and booking integrations, and community-focused digital work. Across each setting, I value clear communication, practical solutions, and continuous improvement.</p>
      </header>
      <ExperienceSection title="Professional experience" entries={professionalExperience} />
      <ExperienceSection title="Client & community projects" entries={volunteerEntry} />
      <section className="education-section">
        <div className="experience-section-heading"><h2>Education</h2><span>FOUNDATION</span></div>
        <div className="education-grid">
          <article className="education-card"><div className="education-icon">01</div><div><h3>Advanced Diploma, Computer Programming & Analysis</h3><p>George Brown College · Toronto, Canada</p><span>Software development · Application design · Programming fundamentals</span></div></article>
          <article className="education-card"><div className="education-icon">02</div><div><h3>Bachelor’s Degree, Computer Engineering</h3><p>Philippines</p><span>Computing systems · Engineering fundamentals · Technical problem-solving</span></div></article>
        </div>
      </section>
    </main>
  );
}
