export const site = {
  name: "Samrat Parajuli",
  handle: "SamratVsn",
  role: "Android Developer · Student · Builder",
  tagline: "Blogs from the journey of building software.",
  description:
    "I write about Android development, Kotlin, software architecture, things I'm learning, and the lessons that come from actually building.",
  url: "https://blog.samratparajuli0.com.np",
  portfolioUrl: "https://www.samratparajuli0.com.np/",
  githubUrl: "https://github.com/SamratVsn",
  linkedinUrl: "https://linkedin.com/in/samratvsn/",
  xUrl: "https://x.com/SamratVsn",
  email: "samratvsn@gmail.com",
  author: {
    name: "Samrat Parajuli",
    bio: "I'm Samrat, a student and Android developer from Nepal. I build native Android applications with Kotlin and Jetpack Compose and document what I learn along the way.",
    location: "Kathmandu, Nepal",
  },
} as const;

export const nav = [
  { href: "/", label: "Index" },
  { href: "/essays", label: "Essays" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
] as const;
