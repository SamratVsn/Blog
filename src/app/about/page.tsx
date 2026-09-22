import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samrat Parajuli (SamratVsn) — a student and Android developer from Nepal building native apps with Kotlin and Jetpack Compose.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    period: "2024 — Present",
    title: "Learning Android development",
    text: "Self-taught native Android development with Kotlin and Jetpack Compose — learning by building, and writing down everything along the way.",
    current: true,
  },
  {
    period: "May 2026",
    title: "Sangam Club Exhibition",
    text: "Showcased Viram, a productivity platform for breaking social media addiction, built with Prince Timilsina for the Runway Career Connect exhibition.",
    current: false,
  },
  {
    period: "Jun 2026",
    title: "Localhost Kathmandu",
    text: "Attended the Microsoft Build local event organized by .Net Hub Kathmandu — sessions on AI agents, .NET security, and AI-native data applications.",
    current: false,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      <div className="grid grid-cols-1 gap-10 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: statement block + facts */}
        <div>
          <div className="flex min-h-[280px] flex-col justify-end bg-[#1e90ff] p-8 sm:min-h-[420px] sm:p-10">
            <p className="text-3xl leading-[1.05] font-black tracking-tight text-white sm:text-4xl">
              ANDROID
              <br />
              DEVELOPER
              <br />
              STUDENT.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-t border-[#dcdcdc] pt-3">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#9a9a9a] uppercase">
                Location
              </p>
              <p className="mt-2 text-[15px] font-bold text-[#111111]">{site.author.location}</p>
            </div>
            <div className="border-t border-[#dcdcdc] pt-3">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#9a9a9a] uppercase">
                Current role
              </p>
              <p className="mt-2 text-[15px] font-bold text-[#111111]">Android App Developer</p>
            </div>
          </div>
        </div>

        {/* Right: introduction + track record */}
        <div>
          <Eyebrow>Introduction</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[1.02] font-black tracking-[-0.03em] text-[#111111] sm:text-6xl">
            Building native apps, learning in public.
          </h1>
          <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-[#5a5a5a]">
            <p>
              I&apos;m Samrat, a student and self-taught Android app developer from Nepal. My
              primary focus is native Android development with Kotlin and Jetpack Compose — the
              stack I build with every day.
            </p>
            <p>
              I&apos;m interested in software architecture, developer tools, and the craft of
              learning itself. I keep my work open-source oriented, and I write here to document
              what I learn, build, break, and understand.
            </p>
          </div>

          <div className="mt-12">
            <Eyebrow>Track record</Eyebrow>
            <ul className="mt-8 space-y-10">
              {timeline.map((item) => (
                <li key={item.title} className="flex gap-5">
                  <div className="flex flex-col items-center" aria-hidden="true">
                    <span className={`h-3 w-3 shrink-0 ${item.current ? "bg-[#111111]" : "bg-[#d4d4d4]"}`} />
                    <span className="w-px flex-1 bg-[#e4e4e4]" />
                  </div>
                  <div className="pb-1">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
                      {item.period}
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111111]">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-[#5a5a5a]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-12 overflow-hidden bg-[#111111] p-8 sm:p-10">
            <p className="text-xl font-black tracking-tight text-white">THE CORE PHILOSOPHY</p>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#c9c9c9] italic">
              &ldquo;Learning Android isn&apos;t just about learning Android. It&apos;s about
              learning how to turn an idea into something that works.&rdquo;
            </p>
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 -bottom-8 text-[120px] leading-none font-black text-white/[0.07] select-none">
              01
            </span>
          </div>

          <h2 className="mt-12 text-3xl font-black tracking-[-0.02em] text-[#111111] sm:text-4xl">
            Let&apos;s build something lasting.
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${site.email}`}
              className="border-b-2 border-[#1e90ff] pb-0.5 text-[17px] font-bold text-[#111111] transition-colors hover:text-[#1e90ff]"
            >
              {site.email}
            </a>
            <span className="flex items-center gap-5 text-[#111111]">
              <a href={site.githubUrl} target="_blank" rel="me noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-[#1e90ff]">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href={site.linkedinUrl} target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#1e90ff]">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href={site.xUrl} target="_blank" rel="me noopener noreferrer" aria-label="X" className="transition-colors hover:text-[#1e90ff]">
                <XIcon className="h-[18px] w-[18px]" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
