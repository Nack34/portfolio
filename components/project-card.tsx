import { type Project, repoUrl } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project ${project.featured ? "featured" : ""}`} aria-labelledby={`p-${project.slug}`}>
      <h3 id={`p-${project.slug}`}>
        <a href={repoUrl(project.slug)} target="_blank" rel="noreferrer">{project.title}</a>
      </h3>
      <p>{project.summary}</p>
      <ul className="highlights">
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <ul className="stack" aria-label="Technologies">
        {project.stack.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="meta">
        <span>{project.tests} tests</span>
        <a href={repoUrl(project.slug)} target="_blank" rel="noreferrer">Code →</a>
      </p>
    </article>
  );
}
