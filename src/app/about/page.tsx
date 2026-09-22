import { faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { TimelineItem } from "@/components/TimelineItem";
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
  },
  {
    period: "May 2026",
    title: "Sangam Club Exhibition",
    text: "Showcased Viram, a productivity platform for breaking social media addiction, built with Prince Timilsina for the Runway Career Connect exhibition.",
  },
  {
    period: "Jun 2026",
    title: "Localhost Kathmandu",
    text: "Attended the Microsoft Build local event organized by .Net Hub Kathmandu — sessions on AI agents, .NET security, and AI-native data applications.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl p-8 md:p-12">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left, sticky */}
        <div className="lg:sticky lg:top-12 lg:self-start">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/samrat.png"
              alt="Portrait of Samrat Parajuli"
              className="h-auto max-h-[800px] w-full object-cover grayscale"
            />
            <div className="absolute right-0 bottom-0 hidden bg-clinical-blue p-12 md:block">
              <p className="font-display text-2xl leading-tight font-black tracking-tight text-white">
                ANDROID
                <br />
                DEVELOPER
                <br />
                STUDENT.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-t border-zinc-300 pt-3">
              <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                Location
              </p>
              <p className="mt-2 text-[15px] font-bold text-ink">{site.author.location}</p>
            </div>
            <div className="border-t border-zinc-300 pt-3">
              <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                Current role
              </p>
              <p className="mt-2 text-[15px] font-bold text-ink">Android App Developer</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-20">
          <section>
            <Eyebrow>Introduction</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] font-black tracking-tight text-ink md:text-7xl">
              Building native apps, learning in public.
            </h1>
            <div className="mt-6 space-y-5 text-xl leading-relaxed text-zinc-600">
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
          </section>

          <section>
            <Eyebrow>Track Record</Eyebrow>
            <ul className="mt-8">
              {timeline.map((item) => (
                <TimelineItem key={item.title} period={item.period} title={item.title} text={item.text} />
              ))}
            </ul>
          </section>

          <section className="relative overflow-hidden bg-ink p-12">
            <p className="font-display text-xl font-black tracking-tight text-white">
              THE CORE PHILOSOPHY
            </p>
            <p className="mt-4 max-w-md font-[Georgia,serif] text-[19px] leading-relaxed text-zinc-300 italic">
              &ldquo;Learning Android isn&apos;t just about learning Android. It&apos;s about
              learning how to turn an idea into something that works.&rdquo;
            </p>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-4 bottom-0 font-display text-8xl font-black text-white opacity-10 select-none"
            >
              01
            </span>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight font-black tracking-tight text-ink sm:text-5xl">
              Let&apos;s build something lasting.
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`mailto:${site.email}`}
                className="border-b-4 border-clinical-blue pb-1 text-xl font-bold text-ink transition-colors hover:text-clinical-blue"
              >
                {site.email}
              </a>
              <span className="flex items-center gap-5 text-ink">
                <a href={site.githubUrl} target="_blank" rel="me noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-clinical-blue">
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
                <a href={site.linkedinUrl} target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-clinical-blue">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                </a>
                <a href={site.xUrl} target="_blank" rel="me noopener noreferrer" aria-label="X" className="transition-colors hover:text-clinical-blue">
                  <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                </a>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
