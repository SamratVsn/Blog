import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ExternalIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { formatDisplayDate, getAllMeta, getCategories } from "@/lib/articles";
import { site } from "@/lib/site";

function stamp(date: string) {
  return formatDisplayDate(date).toUpperCase();
}

function readTime(readingTime: string) {
  return readingTime.replace("min read", "MIN READ").toUpperCase();
}

export default function HomePage() {
  const articles = getAllMeta();
  const categories = getCategories();
  const [featured, ...rest] = articles;
  const second = rest[0];
  const third = rest[1];

  const quote = {
    text: "Learning Android isn't just about learning Android. It's about learning how to turn an idea into something that works.",
    source: "Building your first Android App",
    slug: "building-your-first-android-app",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex min-h-[420px] flex-col justify-between bg-[#111111] p-8 sm:p-10 lg:col-span-5">
          <Eyebrow>Blogs &amp; Essays</Eyebrow>
          <h1 className="text-[64px] leading-[0.95] font-black tracking-[-0.03em] text-white sm:text-[84px]">
            SAMRAT
            <br />
            VSN.
          </h1>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-[240px] text-[15px] leading-relaxed text-[#b5b5b5]">
              {site.description}
            </p>
            <a
              href={site.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open portfolio"
              className="shrink-0 text-[#1e90ff] transition-transform hover:scale-110"
            >
              <ExternalIcon className="h-9 w-9" />
            </a>
          </div>
        </div>

        {featured && (
          <Link
            href={`/essays/${featured.slug}`}
            className="group flex flex-col border border-[#e7e7e7] bg-white lg:col-span-7"
          >
            <div className="relative overflow-hidden">
              {featured.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
              <span className="absolute top-4 left-4 bg-[#1e90ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.18em] text-white uppercase">
                Featured
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <p className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
                {stamp(featured.date)} <span className="mx-2">•</span> {readTime(featured.readingTime)}
              </p>
              <h2 className="mt-3 max-w-xl text-2xl leading-tight font-black tracking-[-0.02em] text-[#111111] transition-colors group-hover:text-[#1e90ff] sm:text-[32px]">
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-2 max-w-xl text-[15px] leading-relaxed text-[#5a5a5a]">
                {featured.description}
              </p>
            </div>
          </Link>
        )}
      </div>

      {/* Row 2 */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col bg-[#1e90ff] p-7 lg:col-span-3">
          <h2 className="text-xl leading-tight font-black tracking-tight text-white">
            FOLLOW THE FEED
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/85">
            Every blog, straight to your reader. No account needed.
          </p>
          <div className="mt-6">
            <label htmlFor="rss-link" className="sr-only">
              RSS feed
            </label>
            <Link
              id="rss-link"
              href="/feed.xml"
              className="block bg-white py-3 text-center font-mono text-[12px] font-bold tracking-[0.22em] text-[#1e90ff] transition-colors hover:bg-[#f4f4f4]"
            >
              RSS FEED →
            </Link>
          </div>
        </div>

        <a
          href={site.githubUrl}
          target="_blank"
          rel="me noopener noreferrer"
          className="group flex flex-col justify-between border border-[#e7e7e7] bg-white p-7 transition-colors hover:border-[#1e90ff]/50 lg:col-span-3"
        >
          <GitHubIcon className="h-8 w-8 text-[#111111]" />
          <div className="mt-10">
            <p className="font-mono text-[11px] tracking-[0.22em] text-[#9a9a9a] uppercase">
              Open source
            </p>
            <p className="mt-2 text-xl font-black tracking-tight text-[#111111] group-hover:text-[#1e90ff]">
              @SamratVsn
            </p>
          </div>
        </a>

        {second && (
          <Link
            href={`/essays/${second.slug}`}
            className="group flex flex-col justify-between bg-[#e9e9e9] p-7 transition-colors hover:bg-[#e2e2e2] lg:col-span-3"
          >
            <p className="font-mono text-[11px] font-bold tracking-[0.22em] text-[#1e90ff] uppercase">
              {second.category}
            </p>
            <div className="mt-8">
              <h2 className="text-xl leading-snug font-black tracking-tight text-[#111111]">
                {second.title}
              </h2>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
                {stamp(second.date)}
              </p>
            </div>
          </Link>
        )}

        <Link
          href={`/essays/${quote.slug}`}
          className="group flex flex-col justify-between border border-dashed border-[#c9c9c9] bg-[#f4f4f4] p-7 lg:col-span-3"
        >
          <p className="text-[17px] leading-relaxed text-[#5a5a5a] italic">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="mt-6 text-center font-mono text-[10px] tracking-[0.18em] text-[#9a9a9a] uppercase">
            — From &ldquo;{quote.source}&rdquo;
          </p>
        </Link>
      </div>

      {/* Row 3 */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {third && (
          <Link
            href={`/essays/${third.slug}`}
            className="group flex flex-col border border-[#e7e7e7] bg-white sm:flex-row lg:col-span-5"
          >
            <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.22em] text-[#9a9a9a] uppercase">
                {third.category}
              </p>
              <h2 className="mt-3 text-[26px] leading-tight font-black tracking-[-0.02em] text-[#111111] group-hover:text-[#1e90ff]">
                {third.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-[#5a5a5a]">
                {third.description}
              </p>
            </div>
            {third.image && (
              <div className="overflow-hidden sm:w-44 sm:shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={third.image}
                  alt=""
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-full"
                />
              </div>
            )}
          </Link>
        )}

        <div className="flex flex-col justify-between bg-[#111111] p-7 sm:p-8 lg:col-span-4">
          <div className="flex gap-10">
            <div>
              <p className="text-[26px] leading-none font-black text-[#1e90ff]">
                {String(articles.length).padStart(2, "0")}
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase">
                Blogs written
              </p>
            </div>
            <div>
              <p className="text-[26px] leading-none font-black text-[#1e90ff]">
                {String(categories.length).padStart(2, "0")}
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase">
                Categories
              </p>
            </div>
          </div>
          <p className="mt-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Learning in public
          </p>
        </div>

        <nav aria-label="Site" className="flex flex-col justify-between border border-[#e7e7e7] bg-white p-7 sm:p-8 lg:col-span-3">
          <div className="flex flex-col gap-3">
            {[
              { href: "/", label: "Index" },
              { href: "/essays", label: "Essays" },
              { href: "/archive", label: "Archive" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-black tracking-tight text-[#111111] transition-colors hover:text-[#1e90ff]"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 text-[#9a9a9a]">
            <a href={site.githubUrl} target="_blank" rel="me noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-[#111111]">
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#111111]">
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={site.xUrl} target="_blank" rel="me noopener noreferrer" aria-label="X" className="transition-colors hover:text-[#111111]">
              <XIcon className="h-[16px] w-[16px]" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
