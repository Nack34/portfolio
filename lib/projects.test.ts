import { describe, expect, it } from "vitest";
import { allTechnologies, filterProjects, PROJECTS, repoUrl } from "./projects";

describe("project data", () => {
  it("has unique slugs that are valid repository names", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
    expect(repoUrl("mini-shop")).toBe("https://github.com/Nack34/mini-shop");
  });

  it("every project is complete", () => {
    for (const p of PROJECTS) {
      expect(p.summary.length, p.slug).toBeGreaterThan(30);
      expect(p.stack.length, p.slug).toBeGreaterThan(0);
      expect(p.areas.length, p.slug).toBeGreaterThan(0);
    }
    expect(PROJECTS.filter((p) => p.featured).length).toBeGreaterThanOrEqual(3);
  });
});

describe("filtering", () => {
  it("by area", () => {
    const ai = filterProjects(PROJECTS, "ai", "");
    expect(ai.length).toBeGreaterThan(2);
    expect(ai.every((p) => p.areas.includes("ai"))).toBe(true);
  });

  it("by text, matching title, summary or technology, case-insensitive", () => {
    expect(filterProjects(PROJECTS, "all", "stripe").map((p) => p.slug)).toEqual(["mini-shop"]);
    expect(filterProjects(PROJECTS, "all", "  RABBITMQ ").map((p) => p.slug)).toEqual(["microshop"]);
    expect(filterProjects(PROJECTS, "frontend", "spring").map((p) => p.slug)).toEqual(["expense-tracker"]);
    expect(filterProjects(PROJECTS, "all", "cobol")).toEqual([]);
  });

  it("counts technologies across projects", () => {
    const tech = allTechnologies(PROJECTS);
    expect(tech[0].count).toBeGreaterThanOrEqual(tech.at(-1)!.count);
    expect(tech.find((t) => t.name === "PostgreSQL")!.count).toBeGreaterThanOrEqual(5);
  });
});
