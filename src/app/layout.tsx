import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.fullName} | Engineering & Computing`,
  description: `Portfolio of ${portfolioData.personalInfo.fullName}, Le Quy Don High School for the Gifted (Class of 2027) from Da Nang, Vietnam.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#090b0e] text-slate-100 min-h-screen selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
