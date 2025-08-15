export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  text: string;
  date: string;
  tags: string[];
  author: string;
  image: string;
  readTime: string;
  url?: string;
}

export const BlogPosts: BlogPost[] = [
  {
    id: "post-001",
    slug: "my-journey-to-finding-my-love-for-coding",
    title: "My Journey to Finding My Love for Coding",
    text: `
I started my Computer Engineering degree in September 2022.
Like most students in my program, the first language they taught us was C++.
But honestly… I didn’t like it at all. It just didn’t click with me.

Around that time, social media was full of people saying, "Python is the best language to start with!"
So, I decided to give it a try. I jumped from one Python course to another — four different courses in a single year — hoping to finally connect with it.
Eventually, I thought, "Alright, maybe Django is the next step."
But I hated it. I mean… really hated it.

I was completely lost. I didn’t know what direction to take anymore.
I couldn’t write code without relying on AI to basically do it for me.
By July 2023, I decided to quit Python altogether.

I reached out to several “successful” programmers for advice.
But instead of guiding me selflessly, most of them tried to push me toward their own paths, their own languages, or even their own work projects.
That wasn’t what I wanted.
I wasn’t looking for someone else’s dream — I wanted to find my dream.
I wanted to discover a programming language I could truly fall in love with.

After a month away from coding, I told myself:
"Come on, Nastaran… at least learn HTML. It’s better than nothing. No matter which language you end up using, HTML will be useful."

So, I opened YouTube, found the Bro Code HTML course, and started.
To my surprise… I found it incredibly interesting!
Naturally, the next step was styling.
I told myself:
"It’s just a 6-hour CSS course, Nastaran. Don’t be lazy. You can do this."

I finished the CSS course in a single day.
And I loved every second of it.

Then I started doing small HTML + CSS projects I found on YouTube.
But many of them needed a bit of JavaScript for buttons or animations.
In the videos, the creators would say:
"Don’t worry about learning this part — just copy the <script></script> code."

But I didn’t want to just copy it.
I wanted to understand it.

That’s when I found a 90-hour JavaScript course on an Iranian platform called SabzLearn.
It was divided into three parts: Beginner, Intermediate, and Advanced.
The beginner section was only 10 hours, so I thought:
"Perfect. This should cover all the basics I need for those small projects."

But by the end of that week… I was already halfway through the intermediate section.
I had fallen completely in love with JavaScript.

I loved everything about it — the logic, the creativity, the possibilities.
Sure, I still struggled with CSS (probably because I didn’t learn it from a great source), but HTML I had learned well.

Now, I’ve moved on to learning everything else in the JavaScript family: React, TypeScript, Tailwind CSS, and more.
And my love for JavaScript?
It’s only getting stronger — no matter what my colleagues or friends say.
They tell me:
"JavaScript is too hard. None of us could even finish learning it. How could you?"

But the truth is…
When you love something, the challenge doesnt scare you — it inspires you.
  `,
    date: "2025-08-15",
    tags: ["Story", "JavaScript", "Frontend"],
    author: "Nastaran Farjami",
    image: "/images/1.jpg",
    readTime: "12 min",
  },

  {
    id: "post-002",
    slug: "learning-ts",
    title: "learning ts",
    text: "Why TypeScript changed my coding style and productivity...",
    date: "2025-08-09",
    tags: ["TypeScript", "JavaScript"],
    author: "Nastaran Farjami",
    image: "/images/2.png",
    readTime: "5 min",
  },
  {
    id: "post-003",
    slug: "some-points-about-clean-coding",
    title: "some points about clean coding",
    text: "i will add the text later",
    date: "2025-08-10",
    tags: ["cleancode", "React", "Javascript"],
    author: "Nastaran Farjami",
    image: "/images/3.png",
    readTime: "7 min",
  },
];
