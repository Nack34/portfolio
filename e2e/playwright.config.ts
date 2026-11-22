import { defineConfig, devices } from "@playwright/test";

/** Serves the static export (out/) and checks the page like a visitor would. */
export default defineConfig({
  testDir: "./tests",
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: { baseURL: "http://localhost:4173" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions: process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {} } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions: process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {} } },
  ],
  webServer: {
    command: "npx next build && npx serve out -l 4173",
    cwd: "..",
    env: { NEXT_TELEMETRY_DISABLED: "1" },
    url: "http://localhost:4173",
    timeout: 240_000,
  },
});
