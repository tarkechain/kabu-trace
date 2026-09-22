import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const disclosures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/disclosures" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    stockCode: z.string(),
    stockName: z.string(),
    summary: z.string().optional(),
  }),
});

const stocks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stocks" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    stockCode: z.string(),
    stockName: z.string(),
    summary: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { disclosures, stocks, blog };
