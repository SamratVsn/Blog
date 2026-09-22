---
title: "How I Built a Productivity App from Scratch"
description: "Insights from building something meaningful & productive"
date: "2026-07-11"
tags:
  - Side Project
  - Digital Detox
  - UX Design
  - Productivity
  - Software Development
category: "Projects"
mediumUrl: "https://medium.com/@samratvsn/how-i-built-a-productivity-app-from-scratch-9620eed54d57"
canonicalUrl: "https://medium.com/@samratvsn/how-i-built-a-productivity-app-from-scratch-9620eed54d57"
published: true
---

![](https://cdn-images-1.medium.com/max/1024/1*4hlT3BiQs6MJpCIKBSWDDw.png)
*Viram landing page*

I once got a LinkedIn message from a tech enthusiast who was at Grade 11 at that time, [Prince Timilsina](https://www.linkedin.com/in/princetimilsina/). He approached me about partnering up to showcase a tech project at the Sangam Club Exhibition 2026, organized by Runway Career Connect on May 16, 2026. While I was initially unsure, I decided to give it a go, and we began brainstorming.

We wanted to create a meaningful tech project, but we faced a major obstacle: our upcoming final exams. I was preparing for my Grade 12 Board Exams, and Prince was studying for his Grade 11 finals. After signing up for the event, we finalized our idea: we would build a productivity app designed to help users break their social media addiction. Because Prince’s exam dates directly clashed with the exhibition, I took on the bulk of the development work to bring our vision to life.

> **Platform:** [**Viram**](https://viraam.vercel.app/)

> _“Viram” is derived from the Sanskrit word_ “विराम,” _which means to pause or stop. The name itself represents a clear mission: helping users put a stop to their digital addiction._

### Platform Architecture for Viram

### 1\. UI Design

Our core goal was to fight digital addiction, so I chose a highly minimalist design. The way a platform is designed heavily dictates how we interact with it.Modern apps like Facebook, Instagram, and TikTok are engineered to hijack our attention. The best example of this is notification design, the moment we see that red (1) or (9+) **badge**, we feel an instant urge to click it.

Our plan for was the exact opposite: to create a platform that serves the user effectively without demanding their constant attention. Every UI element was kept clean, simple, and functional.

![](https://cdn-images-1.medium.com/max/1024/1*Y-o8pBVjl-EFSRusUyAo9Q.png)
*Dashboard Page for Viram*

The UI of the platform is split into 2 parts based on distinct user experince:

*   **Pre-Login:** Designed for first-time visitors, this section includes the Landing Page, About Us, Contact, and a Project Library. The landing page explains the platform’s core purpose, backed by user feedback and reference resources. This also has basic stuff like Aboud & Contacts of the developers.
*   **After-Login:** Once a user creates an account, they land on a comprehensive dashboard featuring a daily inspirational quote, a digital fast tracker, and a custom skill display area. This page also has features like Pomodoro, Confessions, My Triggers, Mind Library & much more.

### 2\. Thought Process & UX Design

To help users combat doomscrolling, we designed a smooth onboarding flow to understand their baseline habits. When a user logs in (either via standard registration or a quick “Continue with Google” button), they answer a few quick questions regarding their daily screen time, most-used apps, sleep duration, and past attempts at digital detoxing.

![](https://cdn-images-1.medium.com/max/665/1*JJfRRwCZVOELQgZeqbnZ1A.png)
*Onboarding section first step*

Once onboarding is complete, the app generates a personalized dashboard featuring a stylish stats display based on their answers.

![](https://cdn-images-1.medium.com/max/617/1*TFQIHb7ZZBuhLmNioIdBXg.png)
*Display after a user is setup*

Before accessing the main dashboard, users land on a **Commitment Page**. Here, they write down a major, long-term personal goal. This commitment serves as their anchor and reminds them why they opened the app in the first place. This also has default ideas to help customize his commitment better.

![](https://cdn-images-1.medium.com/max/722/1*AJ_50Fc9400RhP61_mTv5Q.png)
*User Commitment Section*

### Core Features Built into the MVP

*   **Pomodoro Timer:** A classic time-management tool that breaks work into focused intervals followed by short breaks to prevent burnout.
*   **Self Confessions:** A private, local space where users log/input what distracted them and identify the root cause. To respect user privacy, this data remains strictly on the user’s device and clears automatically if they wipe their browser cache. This also automatically clears & resets every 30 days.
*   **User Triggers Library:** A curated library highlighting the negative psychological impacts of social media. Reading this data is designed to make users pause and rethink their scrolling habits. Includes real-world data & facts.
*   **Mind Library:** A collection of interesting facts about human psychology and neuroscience, giving users something educational to read during their down-time. Mainly to make the user cope with reading.
*   **Curiosity Seed:** A feature that shares a random, expanding piece of trivia every time the platform opens to satisfy the user’s urge for quick information with healthy knowledge instead. Includes detailed info is user finds it intresting.

#### 3\. The Reward System (Gamification)

When the platform was finally ready, we had all the core features for a working MVP. But we felt it needed one more thing, a reason to make users want to come back. We wanted to make using the app a habit, but in a good way. That is when we thought about adding achievement cards, just like Duolingo does.

We changed the platform so it gives you XP and points every time you use a feature. Whenever you reach a new milestone, you get an achievement card that you can feel proud of. You can save it to your gallery or even share it with your friends. This does two great things: it rewards the user for doing something good, and it also helps share our platform with other people. For example, when you finish a 50-minute Pomodoro session, you get a card to show your friends that you stayed focused.

![](https://cdn-images-1.medium.com/max/498/1*al0MxPY03U9SSvgV9UulOQ.png)
*Achievement Card for completing a small pomodoro session*

Just like the card above, the user gets a small reward that makes them feel good about doing meaningful work. It is a simple system built to reward productive habits.

### Conclusion

To sum it up, Viram is designed to stop social media addiction by rewarding users for doing meaningful things. The goal is not to make you addicted to our platform itself, but to help you get hooked on learning new skills and reading books. We do not want to destroy your dopamine system; we just want it to reward you for productive things instead of doomscrolling.

The minimal design and simple UX make it very easy to use, and it is definitely something you should try at least once. Features like the Confessions page give you a private way to track your own habits so you can look back, learn from your distractions, and improve slowly over time.

> **Hello Readers!** I am a student sharing my experiences as I step into the tech world. If you enjoyed reading about my development journey, please consider giving this post a follow!

> This is a blog written with very simple words & without use of any AI. Please excuse me if you find any wrong info in this blog.

> You can also connect with me across my socials here:

> **Website:** [samratparajuli0.com.np](https://www.samratparajuli0.com.np/)

> **LinkedIn:** [samratvsn](https://linkedin.com/in/samratvsn)

> **GitHub:** [SamratVsn](https://github.com/SamratVsn)

> **X (Twitter):** [@SamratVsn](https://x.com/SamratVsn)

> **Instagram:** [@samratvsn](https://www.instagram.com/samratvsn/)
