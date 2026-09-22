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
  author: {
    name: "Samrat Parajuli",
    bio: "I'm Samrat, a student and Android developer from Nepal. I build native Android applications with Kotlin and Jetpack Compose and document what I learn along the way.",
    location: "Nepal",
  },
  currentlyLearning: [
    "Kotlin coroutines & Flow",
    "Jetpack Compose internals",
    "Clean Architecture on Android",
  ],
} as const;

export type Topic = {
  slug: string;
  label: string;
  description: string;
};

/** Curated topics. Easy to expand — just add an entry. Articles match by tag (case-insensitive). */
export const topics: Topic[] = [
  {
    slug: "android",
    label: "Android",
    description: "Native Android development: Jetpack Compose, architecture, and hands-on blogs.",
  },
  {
    slug: "kotlin",
    label: "Kotlin",
    description: "The language I build with — coroutines, Flow, and idiomatic Kotlin.",
  },
  {
    slug: "development",
    label: "Development",
    description: "Craft, tooling, workflows, and how I learn to build software.",
  },
  {
    slug: "projects",
    label: "Projects",
    description: "Things I'm building — decisions, trade-offs, and build logs.",
  },
  {
    slug: "events",
    label: "Events",
    description: "Hackathons, meetups, workshops, and community blogs.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
] as const;
