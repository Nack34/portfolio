import { expect, test } from "@playwright/test";

test("hero, contact links and featured projects", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Nicolás Ricciardi" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Contact" }).getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/Nack34");
  const featured = page.locator("section", { has: page.getByRole("heading", { name: "Featured" }) }).locator("article");
  await expect(featured).toHaveCount(4);
});

test("filter by area and search by technology", async ({ page }) => {
  await page.goto("/");
  const all = page.locator("section", { has: page.getByRole("heading", { name: "All projects" }) });
  const count = all.locator(".count");
  await expect(count).toHaveText("17 of 17 projects");

  await all.getByRole("button", { name: "AI / LLM" }).click();
  await expect(all.getByRole("button", { name: "AI / LLM" })).toHaveAttribute("aria-pressed", "true");
  await expect(all.getByRole("heading", { name: "AI grading with rubrics" })).toBeVisible();
  await expect(all.getByRole("heading", { name: "URL shortener" })).toHaveCount(0);

  await all.getByRole("button", { name: "All" }).click();
  await all.getByLabel("Search projects").fill("rabbitmq");
  await expect(count).toHaveText("1 of 17 projects");
  await expect(all.locator("article h3")).toHaveText(["Microservices with RabbitMQ + observability"]);

  await all.getByLabel("Search projects").fill("cobol");
  await expect(all.getByText("Nothing matches")).toBeVisible();
});

test("every project links to its repository", async ({ page }) => {
  await page.goto("/");
  const links = await page.locator("section").filter({ has: page.getByRole("heading", { name: "All projects" }) }).getByRole("link", { name: "Code →" }).evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
  expect(links).toHaveLength(17);
  for (const href of links) expect(href).toMatch(/^https:\/\/github\.com\/Nack34\/[a-z0-9-]+$/);
});

test("nothing overflows horizontally (mobile included)", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
