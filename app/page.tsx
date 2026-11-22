import { ProjectCard } from "@/components/project-card";
import { ProjectExplorer } from "@/components/project-explorer";
import { PROFILE } from "@/lib/profile";
import { allTechnologies, PROJECTS } from "@/lib/projects";

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured);
  const tech = allTechnologies(PROJECTS).slice(0, 18);
  const { links } = PROFILE;
  return (
    <>
      <header className="hero">
        <p className="eyebrow">{PROFILE.location}</p>
        <h1>{PROFILE.name}</h1>
        <p className="role">{PROFILE.role}</p>
        <p className="summary">{PROFILE.summary}</p>
        <nav className="links" aria-label="Contact">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {links.email && <a href={`mailto:${links.email}`}>Email</a>}
          {links.cv && <a href={links.cv}>CV (PDF)</a>}
        </nav>
      </header>
      <main>
        <section aria-labelledby="featured">
          <h2 id="featured">Featured</h2>
          <div className="grid">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </section>
        <section aria-labelledby="all">
          <h2 id="all">All projects</h2>
          <ProjectExplorer />
        </section>
        <section aria-labelledby="skills">
          <h2 id="skills">What I use</h2>
          <ul className="tech">
            {tech.map((t) => <li key={t.name}>{t.name} <span>{t.count}</span></li>)}
          </ul>
          <p className="note">Every project ships with tests, CI on GitHub Actions and a Dockerfile.</p>
        </section>
        <section aria-labelledby="education">
          <h2 id="education">Education</h2>
          {PROFILE.education.map((e) => <p key={e.place}>{e.place}{e.detail && ` — ${e.detail}`}</p>)}
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {PROFILE.name} · <a href={`${links.github}/portfolio`}>source of this site</a></footer>
    </>
  );
}
