import Image from "next/image";
import { ArrowUpRight, Layers3 } from "lucide-react";

export const metadata = {
  title: "Selected Projects | Allan John Valiente",
  description: "Selected web application, booking, API integration, and client website work by Allan John Valiente.",
};

const projects = [
  {
    name: "MangoTours",
    label: "TRAVEL TECHNOLOGY · WEB APPLICATIONS",
    image: "/images/mango-logo.png",
    alt: "MangoTours logo",
    description: "Travel-focused web experiences, booking flows, and reusable widgets supporting tours, transfers, and customer-facing booking journeys.",
    contribution: "Worked across web application features and integrations, including reusable interface components and API-driven functionality.",
    stack: ["JavaScript", "REST APIs", "Responsive UI", "Booking workflows"],
  },
  {
    name: "Vaughan Drivers",
    label: "CLIENT PROJECT · PAYMENT INTEGRATION",
    image: "/images/vd.png",
    alt: "Vaughan Drivers branding",
    description: "A responsive driving-school website presenting services, learning resources, and useful information for prospective students.",
    contribution: "Built the site with Node.js, Express, Pug, and Bootstrap, and integrated Stripe payment functionality.",
    stack: ["Node.js", "Express.js", "Pug", "Bootstrap", "Stripe API"],
  },
  {
    name: "Blessed Cleaning Experts",
    label: "CLIENT PROJECT · BUSINESS WEBSITE",
    image: "/images/bce.png",
    alt: "Blessed Cleaning Experts logo",
    description: "A responsive service-business website designed to make cleaning services and business information easy to navigate.",
    contribution: "Created page layouts and reusable templates with a server-rendered Node.js and Pug stack.",
    stack: ["Node.js", "Express.js", "Pug", "Bootstrap"],
  },
  {
    name: "Kababayan Multicultural Centre",
    label: "COMMUNITY · WEB EXPERIENCE",
    image: "/images/kababayan.png",
    alt: "Kababayan Multicultural Centre logo",
    description: "Website enhancements supporting community programs, client registration, and clearer digital communication.",
    contribution: "Contributed to website updates, triggered email workflows, chatbot functionality, usability testing, and ongoing maintenance.",
    stack: ["JavaScript", "WordPress", "UI/UX", "Workflow automation"],
  },
  {
    name: "Wholeness Massage Therapy",
    label: "CLIENT PROJECT · SERVICE WEBSITE",
    image: "/images/wmt.jpg",
    alt: "Wholeness Massage Therapy branding",
    description: "Website refinements for a local wellness service, focused on clear navigation and a consistent experience across screen sizes.",
    contribution: "Customized layout and navigation in Wix and improved responsive presentation.",
    stack: ["Wix", "Responsive design", "UI/UX", "Content structure"],
  },
  {
    name: "Grace Through Faith",
    label: "COMMUNITY · WEBSITE ENHANCEMENTS",
    image: "/images/gtf.png",
    alt: "Grace Through Faith logo",
    description: "Website improvements that made pages and external resources easier to access for visitors.",
    contribution: "Implemented page layout changes and integrated external resources, including video and Bible application content.",
    stack: ["Node.js", "Express.js", "Pug", "JavaScript"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <div className="section-kicker">PORTFOLIO <span>— SELECTED PROJECTS</span></div>
        <h1>Work built around<br /><span>real-world needs.</span></h1>
        <p>These examples span professional development, client websites, and community projects. I focus on the problem being solved, the implementation choices, and the experience for the people using the product.</p>
      </header>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-detail" key={project.name}>
            <div className="project-detail-visual">
              <span className="project-number">0{index + 1} / SELECTED WORK</span>
              <div className="project-detail-logo"><Image src={project.image} alt={project.alt} width={190} height={115} /></div>
              <div className="project-detail-orb"><Layers3 size={24} /></div>
            </div>
            <div className="project-detail-copy">
              <div className="project-type">{project.label}</div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>
              <div className="tag-row">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="project-note"><span className="note-mark">↗</span><p>For more context on a project, I’m happy to discuss the requirements, my contribution, and technical trade-offs.</p><a className="text-link" href="mailto:allanjohn.valiente@gmail.com?subject=Project%20discussion">Let’s discuss a project <ArrowUpRight size={16} /></a></div>
    </main>
  );
}
