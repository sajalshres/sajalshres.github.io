import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const profile = defineCollection({
  loader: file("src/content/profile.json"),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    title: z.string(),
    location: z.string(),
    description: z.string(),
    email: z.email(),
    siteUrl: z.url(),
    mediumFeed: z.url(),
    social: z.array(z.object({ name: z.string(), url: z.url() })),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.json"),
  schema: z.object({ name: z.string(), icon: z.string() }),
});

const projects = defineCollection({
  loader: glob({ base: "./content/index/projects", pattern: "*/index.mdx" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    emoji: z.string(),
    screenshot: z.string(),
    github: z.string(),
    external: z.string().optional(),
    tags: z.array(z.string()),
    visible: z.boolean().default(true),
    position: z.number(),
  }),
});

const about = defineCollection({
  loader: glob({ base: "./content/index/about", pattern: "about.mdx" }),
  schema: z.object({ title: z.string(), image: z.string() }),
});

const contact = defineCollection({
  loader: glob({ base: "./content/index/contact", pattern: "contact.mdx" }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    email: z.email(),
    profileImage: z.string(),
  }),
});

export const collections = { profile, skills, projects, about, contact };
