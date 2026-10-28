import { LANGUAGES, FRAMEWORKS_AND_LIBRARIES, DATABASES, TOOLS_AND_PLATFORMS, type TechItem } from "@/constant/techStack";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Toolkit | Allan John Valiente",
  description: "Languages, frameworks, databases, and tools Allan John Valiente has worked with.",
};

function ToolGroup({ title, items }: { title: string; items: TechItem[] }) {
  return (
    <section className="tool-category">
      <h2>{title}</h2>
      <div className="tools-grid">
        {items.map(({ name, category, Icon, color }) => (
          <article className="tool-item" key={name}>
            <div className={`tool-icon ${color ?? ""}`}><Icon size={19} /></div>
            <div><h3>{name}</h3><p>{category}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ToolsPage() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <div className="section-kicker">CAPABILITIES <span>— TOOLKIT</span></div>
        <h1>A flexible toolkit.<br /><span>A problem-first approach.</span></h1>
        <p>Technologies I’ve used across professional development, client work, and learning projects. This list reflects exposure and experience, not a claim that every tool is used at the same depth.</p>
        <a className="text-link" href="mailto:allanjohn.valiente@gmail.com?subject=Technical%20conversation">Ask about my experience <ArrowUpRight size={16} /></a>
      </header>
      <ToolGroup title="Languages & fundamentals" items={LANGUAGES} />
      <ToolGroup title="Frameworks & libraries" items={FRAMEWORKS_AND_LIBRARIES} />
      <ToolGroup title="Databases" items={DATABASES} />
      <ToolGroup title="Tools & platforms" items={TOOLS_AND_PLATFORMS} />
    </main>
  );
}
