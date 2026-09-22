---
title: "Building your first Android App"
description: "Learning to Code vs. Learning to Build: Reflections on My First Android App"
date: "2026-09-22"
tags:
  - Learning
  - Kotlin Beginners
  - Android
  - Software Development
  - Android App Development
category: "Android"
mediumUrl: "https://medium.com/@samratvsn/building-your-first-android-app-d622721bd6be"
canonicalUrl: "https://medium.com/@samratvsn/building-your-first-android-app-d622721bd6be"
image: "https://miro.medium.com/v2/resize:fill:640:360/1*y3POYHp5_6dRkvnQABFEog.png"
published: true
---

Android has one of the largest and most diverse user bases in the world. For many of us getting into **Mobile App Development**, it is also a natural place to start. **Tooling** is accessible, **ecosystem** is very large & you don’t need extensive **hardware** to build & test Android Apps.

![](https://cdn-images-1.medium.com/max/1024/1*y3POYHp5_6dRkvnQABFEog.png)

But there is a difference between **learning to write code** & **learning to build an Application**.

#### Learning

When you are learning a **programming language**, much of the focus is on syntax, rules, Functions, Data Structures & Algorithms. An application introduces entirely different sets of questions.

*   What should the user see?
*   How should the interface behave?
*   Where should the data come from?
*   How should it be stored?
*   How should different parts of the app communicate with each other?
*   And, perhaps most importantly, how do all of these pieces come together to solve an actual problem?

#### Building

Building an app is not simply about writing more code. It is about understanding the **context** around the code , the UI/UX, the state, the data, the architecture & the decisions that connect them

This was one of the biggest differences I noticed when building my first Android Application with Kotlin & Jetpack Compose. Building for **Native Android** is much more approachable once you understand the fundamentals. Starting a new Project in **Android Studio** for the first time is also very confusing, You don’t know what to do & how to do .

![](https://cdn-images-1.medium.com/max/1024/0*SxMZNlwZbZIBziaL)
*Photo by [Hossain Khan](https://unsplash.com/@hkphotographyca?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

#### Decisions

After i learnt enough to decide to finally build my first app, I had an idea that I had to build some screens first, i then had to use **ViewModels** to change **UI** in real time, use **NavHost** to connect the pages properly, make TopNavBar, BottomNavBar & so on. I decided to build a simple **ToDo App**, its a simple app following a standard template & with just **CRUD** Features. But building this alone taught me more than everything i learnt before combined.

Things stop being straightforward when you try to write every line of code yourself. Every small detail has to be considered, every screen has to be properly planned & every decision has to lead to a result. You can also ask an AI to generate an app like this in minutes. The code may work, but if you simply copy it without understanding the decisions behind it, you have mostly outsourced the learning process.

> “The speed of producing code is not the same as the speed of gaining understanding.”

For someone still learning, that distinction matters.

![](https://cdn-images-1.medium.com/max/1024/0*5nCSSb5uHZNDrmY3)
*Photo by [Aerps.com](https://unsplash.com/@almoya?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

A user opening a ToDo App doesn’t even think about how the application was built. They see a list of tasks, a button to add a new one, a setting screen , & all the features the app has. The users expect everything to simply work. But behind that simple interface are many decisions that the user will probably never notice.

We have to consider **where the data lives**, **what happens when something changes,** **where should the logic live, what happens when the app grows** and **much more.** These decisions are invisible to the person using the application. Users don’t care about the Tech Stack or the difficulties involved, **they just care that the app is working** & every functionality is fine. The technology are the means, not the product itself.

This was an important shift in my thinking.

![](https://cdn-images-1.medium.com/max/1024/0*5-L5GOfywe6Y7CZA)
*Photo by [Markus Winkler](https://unsplash.com/@markuswinkler?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

#### Understanding Tutorials

Tutorials mostly create a false sense of understanding about learning if you don’t **follow along**. I might have built this ToDo App by watching Tutorials, but that is just a **Visual Copy Paste** & nothing else. Nothing learned, you don’t even know what a certain line of code does. By following along, you feel a sense of accomplishment that the target is achieved but that isn’t even a product worth using. **Following a tutorial means copying a template**, not building an app. Tutorials teach us to write boilerplate code, not a product.

Talking about courses, Courses are very good at teaching you **how something works**. They can teach you Kotlin Syntax, Compose, State Management, Architecture, Database, Networking & countless other concepts.

#### Things course cannot reproduce

But there is something that a course cannot fully reproduce : **having to make the decision yourself**. When following a course, the path is already defined. You know **what you’re building**, know **which concept comes next**, have **an example to compare your implementation against**. When building your own app, **these guidance disappear.** You have to decide what **the application needs** before you decide how to implement it.

Building something yourself teach that There isn’t only **one correct way to build something**. There are several possible approaches to build the same app or the same feature. You have to decide **which one makes sense** for your application. The process is very odd at first. Development isn’t about knowing **the correct answer** to every problem beforehand. Its often about understanding the problem enough to make a reasonable decision.

#### My Suggestions

If I were starting my Android Development Journey again, I would do somethings differently.

> “For the things we have to learn before we can do them, we learn by doing them.” — Aristotle

**You don’t have to learn everything before building**. Android is a huge ecosystem. There will always be another library, another Kotlin update or Compose update. If you wait till you learn everything, you won’t build a single app in your life.

Courses **don’t tell your learning progress** because they have a clear beginning & an end. Building an app is very less predictable, you don’t know when or where an error might occur. You won’t even have an idea about these when you are learning. Doing something personally teaches you more than learning it .

You have to build **something small enough** to finish it. Your first project doesn’t have to be the next Google or the Next Meta. A small finished project can teach you more than a huge project that never gets completed.

Most importantly, You have to **build before you feel ready**. You won’t feel ready for anything in life. There will always be things you haven’t learnt yet. Thats normal.

![](https://cdn-images-1.medium.com/max/500/0*DS9dEe6tx4Vgy3CA.gif)

At some point, you have to move from:

> “I need to learn before i build”

to:

> “I’ll build, and learn what I need along the way”

That shift was one of the most important parts of my own journey into Android development.

**Learning Android isn’t just about learning Android. It’s about learning how to turn an idea into something that works.**

These are thing you really understand once you start building.
