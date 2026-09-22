import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <p className="font-mono text-[11px] font-bold tracking-[0.24em] text-[#1e90ff] uppercase">
        Error 404
      </p>
      <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-[#111111]">
        ~/page-not-found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#5a5a5a]">
        The page you&apos;re looking for was moved, renamed, or never existed. The blogs are all
        intact — let&apos;s get you back to them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-[#111111] px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-black"
        >
          Index
        </Link>
        <Link
          href="/essays"
          className="border border-[#dcdcdc] bg-white px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-[#111111] uppercase transition-colors hover:border-[#111111]"
        >
          All essays
        </Link>
      </div>
    </div>
  );
}
