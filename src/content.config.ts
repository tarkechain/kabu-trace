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
    // 以下はデータシート用。値が確定していない場合は空欄のままでよい。
    stockPrice: z.string().optional(),
    marketCap: z.string().optional(),
    per: z.string().optional(),
    equityRatio: z.string().optional(),
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

// 株主優待マップ用。1ファイル=1会社。対象会社が今後増える前提の汎用スキーマ
// (docs/requirements-tools.md 第5章)。rate_labelは表示用文字列として必須、
// %として扱える場合のみrate_percentを追加で持たせる。会社固有フィールドは
// オプショナルとして吸収する。
const yutaiStoreSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  lat: z.number(),
  lng: z.number(),
  checked: z.coerce.date(),
  rateLabel: z.string(),
  ratePercent: z.number().optional(),
  brand: z.string().optional(),
  ward: z.string().optional(),
  company: z.string().optional(),
  tel: z.string().optional(),
  placeId: z.string().optional(),
  notes: z.string().optional(),
});

const yutaiCompanies = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/yutai-companies" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    ticker: z.string().optional(),
    scope: z.string(),
    rateSource: z.string(),
    generatedAt: z.coerce.date(),
    notes: z.array(z.string()).optional(),
    stores: z.array(yutaiStoreSchema),
  }),
});

export const collections = { disclosures, stocks, blog, yutaiCompanies };
