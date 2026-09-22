import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BentoCard } from "@/components/BentoCard";
import { Eyebrow } from "@/components/Eyebrow";
import { formatDisplayDate, getAllMeta, getCategories } from "@/lib/articles";
import { site } from "@/lib/site";

function stamp(date: string) {
  return formatDisplayDate(date).toUpperCase();
}

function readTime(readingTime: string) {
  return readingTime.replace("min read", "MIN READ").toUpperCase();
}

const quote = {
  text: "Learning Android isn't just about learning Android. It's about learning how to turn an idea into something that works.",
  source: "Building your first Android App",
  slug: "building-your-first-android-app",
};

export default function HomePage() {
  const articles = getAllMeta();
  const categories = getCategories();
  const [featured, second, third, ...rest] = articles;
  void rest;

  return (
    <div className="bg-paper p-6 md:p-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 min-[640px]:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(240px,auto)]">
        {/* Branding / bio */}
        <BentoCard dark className="relative col-span-full flex min-h-[480px] flex-col justify-between overflow-hidden p-8 min-[640px]:col-span-2 lg:row-span-2">
          <span
            aria-hidden="true"
            className="absolute top-6 right-6 h-16 w-16 border-t-2 border-r-2 border-white opacity-10"
          />
          <Eyebrow>Portfolio &amp; Essays</Eyebrow>
          <h1 className="font-display text-6xl leading-[0.95] font-black tracking-tight text-white md:text-8xl">
            SAMRAT
            <br />
            VSN.
          </h1>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-[280px] text-[15px] leading-relaxed text-zinc-400">
              {site.description}
            </p>
            <a
              href={site.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open portfolio"
              className="shrink-0 text-clinical-blue transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-3xl" />
            </a>
          </div>
        </BentoCard>

        {/* Featured post */}
        {featured && (
          <BentoCard
            href={`/blog/${featured.slug}`}
            label={`Read featured post: ${featured.title}`}
            className="col-span-full min-[640px]:col-span-2 lg:row-span-2 lg:p-2"
          >
            <div className="relative overflow-hidden">
              {featured.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
              <span className="absolute top-4 left-4 bg-clinical-blue px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                Featured
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
                {stamp(featured.date)} <span className="mx-2">•</span> {readTime(featured.readingTime)}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight font-black tracking-tight text-ink transition-colors group-hover:text-clinical-blue sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-zinc-500">
                {featured.description}
              </p>
            </div>
          </BentoCard>
        )}

        {/* RSS (honest stand-in for newsletter: no backend, real feed) */}
        <BentoCard className="flex flex-col bg-clinical-blue p-7">
          <h2 className="font-display text-xl leading-tight font-black tracking-tight text-white">
            Stay Synchronized
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/85">
            Every blog, straight to your reader via RSS. No inbox needed.
          </p>
          <Link
            href="/feed.xml"
            className="mt-auto block bg-white pt-0 text-center font-display text-[13px] font-bold tracking-[0.2em] text-clinical-blue uppercase transition-colors hover:bg-ink hover:text-white"
          >
            <span className="block py-3.5">RSS Feed</span>
          </Link>
        </BentoCard>

        {/* GitHub */}
        <a
          href={site.githubUrl}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="GitHub profile"
          className="brutal brutal-dark group relative flex min-h-[240px] flex-col justify-between bg-zinc-100 p-7 transition-all hover:bg-zinc-900"
        >
          <div className="flex items-start justify-between">
            <FontAwesomeIcon icon={faGithub} className="text-3xl text-ink transition-colors group-hover:text-white" />
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-lg text-clinical-blue opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase transition-colors group-hover:text-zinc-400">
              Open Source
            </p>
            <p className="mt-1 font-display text-xl font-black tracking-tight text-ink transition-colors group-hover:text-white">
              @SamratVsn
            </p>
          </div>
        </a>

        {/* Secondary teaser */}
        {second && (
          <BentoCard href={`/blog/${second.slug}`} label={`Read: ${second.title}`} className="flex min-h-[240px] flex-col justify-between bg-surface p-7">
            <p className="text-xs font-bold tracking-[0.2em] text-clinical-blue uppercase">
              {(second.category ?? "Blog").toUpperCase()}
            </p>
            <div>
              <h2 className="font-display text-xl leading-snug font-black tracking-tight text-ink group-hover:underline">
                {second.title}
              </h2>
              <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
                {stamp(second.date)}
              </p>
            </div>
          </BentoCard>
        )}

        {/* Quote card (real words, real attribution) */}
        <Link
          href={`/blog/${quote.slug}`}
          className="brutal flex min-h-[240px] flex-col items-center justify-center border-2 border-dashed border-zinc-300 bg-paper p-7 text-center"
          aria-label={`Read the essay this quote is from: ${quote.source}`}
        >
          <p className="font-[Georgia,serif] text-[17px] leading-relaxed text-zinc-600 italic">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
            — From &ldquo;{quote.source}&rdquo;
          </p>
        </Link>

        {/* Third teaser, wide */}
        {third && (
          <BentoCard
            href={`/blog/${third.slug}`}
            label={`Read: ${third.title}`}
            className="col-span-full flex flex-col border-l-8 border-l-clinical-blue bg-white sm:flex-row min-[640px]:col-span-2 lg:col-span-2"
          >
            <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-clinical-blue uppercase">
                {(third.category ?? "Blog").toUpperCase()}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight font-black tracking-tight text-ink sm:text-[28px]">
                {third.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-[14.5px] leading-relaxed text-zinc-500">
                {third.description}
              </p>
            </div>
            {third.image && (
              <div className="overflow-hidden sm:w-56 sm:shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={third.image}
                  alt=""
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-full"
                />
              </div>
            )}
          </BentoCard>
        )}

        {/* Stats (real counts only) */}
        <div className="brutal brutal-dark flex min-h-[240px] flex-col justify-between bg-ink p-7 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-display text-4xl font-black text-clinical-blue">
                {String(articles.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-zinc-400 uppercase">
                Blogs Written
              </p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-clinical-blue">
                {String(categories.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-zinc-400 uppercase">
                Categories
              </p>
            </div>
          </div>
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-zinc-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </p>
        </div>

        {/* Nav card */}
        <nav aria-label="Site" className="brutal flex min-h-[240px] flex-col justify-between bg-white p-7">
          <div className="flex flex-col gap-2.5">
            {[
              { href: "/", label: "Index" },
              { href: "/essays", label: "Essays" },
              { href: "/archive", label: "Archive" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-lg font-black tracking-tight text-ink uppercase transition-colors hover:text-clinical-blue"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-5 text-zinc-500">
            <a href={site.githubUrl} target="_blank" rel="me noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-clinical-blue">
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-clinical-blue">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
            </a>
            <a href={site.xUrl} target="_blank" rel="me noopener noreferrer" aria-label="X" className="transition-colors hover:text-clinical-blue">
              <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-clinical-blue">
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
