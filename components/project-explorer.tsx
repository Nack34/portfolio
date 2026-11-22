"use client";

import { useMemo, useState } from "react";
import { type Area, AREA_LABELS, filterProjects, PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./project-card";

const AREAS: (Area | "all")[] = ["all", "backend", "frontend", "ai", "devops", "data", "library"];

export function ProjectExplorer() {
  const [area, setArea] = useState<Area | "all">("all");
  const [query, setQuery] = useState("");
  const shown = useMemo(() => filterProjects(PROJECTS, area, query), [area, query]);

  return (
    <>
      <div className="filters">
        <div role="group" aria-label="Filter by area" className="chips">
          {AREAS.map((a) => (
            <button key={a} type="button" aria-pressed={area === a} onClick={() => setArea(a)}>
              {a === "all" ? "All" : AREA_LABELS[a]}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search a technology, e.g. PostgreSQL"
          aria-label="Search projects"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p className="count" aria-live="polite">{shown.length} of {PROJECTS.length} projects</p>
      <div className="grid">
        {shown.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      {shown.length === 0 && <p className="empty">Nothing matches — try another technology.</p>}
    </>
  );
}
