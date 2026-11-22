/** Everything personal lives here: edit this file, not the components. */
export const PROFILE = {
  name: "Nicolás Ricciardi",
  role: "Full-stack developer",
  location: "La Plata, Argentina · open to remote",
  summary:
    "I build web backends and the apps on top of them — Python, TypeScript, Java and .NET — with tests, CI and Docker from day one. " +
    "Lately: LLM features that are measured and guarded, not just demos.",
  links: {
    github: "https://github.com/Nack34",
    linkedin: "https://www.linkedin.com/in/ricciardi-n",
    email: "", // TODO: add a contact email (or leave empty to hide the button)
    cv: "", // TODO: link to a PDF of the CV (e.g. /cv.pdf in public/)
  },
  education: [{ place: "Universidad Nacional de La Plata (UNLP)", detail: "" }], // TODO: degree and years
} as const;
