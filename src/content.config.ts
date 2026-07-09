import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    banner: z.object({
      avif: z.string().optional(),
      png: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = { posts };
