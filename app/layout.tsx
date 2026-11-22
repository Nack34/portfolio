import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PROFILE } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.summary,
  openGraph: { title: `${PROFILE.name} — ${PROFILE.role}`, description: PROFILE.summary, type: "profile" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
