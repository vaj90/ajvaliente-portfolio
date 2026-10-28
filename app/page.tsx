import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  SquareTerminal,
  Terminal,
  Trophy,
} from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    name: "MangoTours",
    type: "TRAVEL TECHNOLOGY · WEB APPLICATIONS",
    description:
      "Travel-focused web experiences, booking flows, and reusable widgets designed to help people discover and book tours and transfers.",
    image: "/images/mango-logo.png",
    imageAlt: "MangoTours logo",
    tags: ["JavaScript", "REST APIs", "Booking flows", "Responsive UI"],
    tone: "project-mango",
  },
  {
    number: "02",
    name: "Vaughan Drivers",
    type: "CLIENT PROJECT · PAYMENTS",
    description:
      "A responsive driving-school website with clear service information, learning resources, and Stripe payment integration.",
    image: "/images/vd.png",
    imageAlt: "Vaughan Drivers branding",
    tags: ["Node.js", "Express", "Pug", "Stripe API"],
    tone: "project-vaughan",
  },
  {
    number: "03",
    name: "Community & Service Websites",
    type: "WEB DEVELOPMENT · USER EXPERIENCE",
    description:
      "Website improvements for community and service organizations, with attention to accessible navigation, useful content, and responsive layouts.",
    image: "/images/kababayan.png",
    imageAlt: "Kababayan Multicultural Centre logo",
    tags: ["JavaScript", "WordPress", "UI/UX", "Maintenance"],
    tone: "project-community",
  },
];

const capabilities = [
  { icon: Code2, title: "Frontend engineering", copy: "Responsive interfaces, reusable components, and thoughtful interaction design." },
  { icon: Database, title: "APIs & integrations", copy: "Practical API integration, authentication, booking workflows, and payments." },
  { icon: Layers3, title: "Full-stack delivery", copy: "From understanding requirements to implementation, testing, and ongoing support." },
];

const stack = ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Node.js", "C# / ASP.NET", "REST APIs", "SQL / MongoDB", "Swift / iOS", "Tailwind CSS", "Git"];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span> TORONTO, CANADA</div>
          <h1>I build useful software <span>from idea to launch.</span></h1>
          <p className="hero-intro">
            I’m Allan John Valiente — a developer with experience across web applications, APIs, booking experiences, and mobile development. I enjoy turning real-world requirements into software that feels clear, reliable, and easy to use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="mailto:allanjohn.valiente@gmail.com">Send Email <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Toronto, Ontario</span>
            <span><BriefcaseBusiness size={15} /> Web · API · Mobile</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Developer workspace illustration">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>building.ts</span><span className="window-status">● live thinking</span></div>
            <div className="code-content">
              <div className="code-line"><span className="line-no">01</span><span><b className="code-purple">const</b> developer = &#123;</span></div>
              <div className="code-line indent"><span className="line-no">02</span><span>name: <b className="code-green">&quot;Allan John Valiente&quot;</b>,</span></div>
              <div className="code-line indent"><span className="line-no">03</span><span>position: <b className="code-green">&quot;Full-Stack Developer&quot;</b>,</span></div>
              <div className="code-line indent"><span className="line-no">04</span><span>yearsOfExperience: <b className="code-green">&quot;10+ years&quot;</b>,</span></div>
              <div className="code-line"><span className="line-no">05</span><span>&#125;;</span></div>
              <div className="code-line code-gap"><span className="line-no">06</span><span><b className="code-purple">function</b> <b className="code-blue">makeItMatter</b>() &#123;</span></div>
              <div className="code-line indent"><span className="line-no">07</span><span><b className="code-purple">return</b> ideas.<b className="code-blue">ship</b>();</span></div>
              <div className="code-line"><span className="line-no">08</span><span>&#125;</span></div>
              <div className="code-cursor"><span /> Ready to build something better.</div>
            </div>
          </div>
          <div className="floating-chip chip-api"><Globe2 size={16} /> API integrations</div>
          <div className="floating-chip chip-mobile"><Smartphone size={16} /> Web + mobile</div>
          <div className="hero-art-caption"><Sparkles size={14} /> Thoughtful engineering. Real-world impact.</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="intro-strip section-wrap" id="about">
        <div className="section-kicker">01 <span>— A LITTLE ABOUT ME</span></div>
        <div className="intro-grid">
          <h2>Technical range.<br /><span>Practical mindset.</span></h2>
          <div className="intro-text">
            <p>My background spans professional software teams, client projects, and community-focused websites. That mix taught me to think beyond code: understand the person using the product, keep the implementation maintainable, and communicate clearly when solving problems.</p>
            <Link className="text-link" href="/experience">See my experience <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div><div className="section-kicker">02 <span>— SELECTED WORK</span></div><h2>Projects with a <span>purpose.</span></h2></div>
          <p>A selection of application, integration, and web work. Some projects were delivered as part of a team; others were built for clients and community organizations.</p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-visual">
                <span className="project-number">{project.number} / FEATURED</span>
                <div className="project-logo-wrap"><Image src={project.image} alt={project.imageAlt} width={150} height={90} className="project-logo" /></div>
                <div className="visual-grid-lines" />
                <ArrowUpRight className="project-arrow" size={20} />
              </div>
              <div className="project-body">
                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-note"><span className="note-mark">↗</span><p>Want to know more about a specific contribution, technical decision, or implementation?</p><a className="text-link" href="mailto:allanjohn.valiente@gmail.com?subject=Portfolio%20project%20question">Ask me about my work <ArrowRight size={16} /></a></div>
      </section>

      <section className="capabilities-section section-wrap" id="capabilities">
        <div className="section-kicker">03 <span>— HOW I CAN CONTRIBUTE</span></div>
        <div className="capabilities-header"><h2>More than making<br /><span>things compile.</span></h2><p>I bring a product-minded approach to engineering: understand the need, build with care, and keep improving after the first release.</p></div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, copy }, index) => <article className="capability-card" key={title}><div className="capability-icon"><Icon size={21} /></div><span className="capability-index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="stack-section section-wrap" id="stack">
        <div className="stack-copy"><div className="section-kicker">04 <span>— TOOLKIT</span></div><h2>The right tool<br /><span>for the problem.</span></h2><p>I’ve worked across frontend, backend, databases, integrations, and mobile. I’m comfortable learning what a project needs rather than forcing every problem into one stack.</p><Link className="text-link" href="/tools">Explore my toolkit <ArrowUpRight size={16} /></Link></div>
        <div className="stack-panel"><div className="stack-panel-top"><Terminal size={16} /><span>TECH I’VE WORKED WITH</span><span className="stack-panel-dots">•••</span></div><div className="stack-tags">{stack.map((item) => <span key={item}>{item}</span>)}</div><div className="stack-foot"><CheckCircle2 size={15} /> Always learning. Always refining.</div></div>
      </section>

     <section className="community-section section-wrap" id="community">
        <div className="section-heading community-heading">
          <div><div className="section-kicker">05 <span>— COMMUNITY & CODE</span></div><h2>Learning in public.<br /><span>Sharing what I know.</span></h2></div>
          <p>Professional growth is more than job titles. I value solving practical problems, learning from other developers, and sharing knowledge with the wider engineering community.</p>
        </div>
        <div className="community-grid">
          <article className="community-card stackoverflow-card">
            <div className="community-card-top"><div className="community-icon so-icon"><Code2 size={25} /></div><span className="community-label">DEVELOPER COMMUNITY</span></div>
            <h3>Stack Overflow</h3>
            <p>A place to learn, troubleshoot, and contribute to practical programming discussions.</p>
            <div className="community-stat"><strong>1,931</strong><span>reputation<br />profile snapshot</span></div>
            <div className="community-card-bottom"><span>Developer Q&A · Problem solving</span><a href="https://stackoverflow.com/users/2398275/vaj90" target="_blank" rel="noreferrer" className="community-link">View profile <ArrowUpRight size={15} /></a></div>
          </article>
          <article className="community-card github-card">
            <div className="community-card-top"><div className="community-icon github-icon"><Layers3 size={25} /></div><span className="community-label">CODE & PROJECTS</span></div>
            <h3>GitHub</h3>
            <p>Project repositories, experiments, and code samples that show how ideas become working software.</p>
            <div className="github-language-row"><span>TypeScript</span><span>JavaScript</span><span>React</span><span>Node.js</span></div>
            <div className="community-card-bottom"><span>Portfolio repositories coming next</span><a href="https://github.com/vaj90" target="_blank" rel="noreferrer" className="community-link">View profile <ArrowUpRight size={15} /></a></div>
          </article>
          <article className="community-card ieeextreme-card">
            <div className="community-card-top"><div className="community-icon so-icon"><SquareTerminal size={25} /></div><span className="community-label">PROGRAMMING COMPETITION</span></div>
            <h3>IEEEXTREME 14</h3>
            <p>Competitive programming challenge that tests algorithmic thinking and coding skills.</p>
            <div className="community-stat">
              <strong>DeltaGBC</strong><span>participation<br />competitions</span>
            </div>
            <div className="community-card-bottom"><span>Algorithmic problem solving</span><a href="https://ieeextreme.org/ieeextreme-14-0-ranking/" target="_blank" rel="noreferrer" className="community-link">Learn more <ArrowUpRight size={15} /></a></div>
          </article>
        </div>
        <p className="community-note"><Trophy size={15} /> I prefer verified numbers over inflated claims. GitHub repository counts and language stats can be added once the correct profile is connected.</p>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card"><div className="contact-glow" /><div className="section-kicker">05 <span>— NEXT UP</span></div><h2>Have a problem<br />worth <span>solving?</span></h2><p>I’m open to conversations about software development, application support, and opportunities where thoughtful problem-solving makes a difference.</p><div className="contact-actions"><a className="button button-primary" href="mailto:allanjohn.valiente@gmail.com">Start a conversation <Mail size={17} /></a><a className="button button-outline" href="https://stackoverflow.com/users/2398275/vaj90" target="_blank" rel="noreferrer">Stack Overflow <ArrowUpRight size={16} /></a></div><div className="contact-email">allanjohn.valiente@gmail.com</div></div>
      </section>

      <footer className="site-footer section-wrap"><Link className="footer-brand" href="/">AJ<span>.</span></Link><p>Designed with intention. Built with curiosity.</p><span>© {new Date().getFullYear()} Allan John Valiente</span></footer>
    </main>
  );
}
