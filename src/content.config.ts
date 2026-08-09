import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const inquiryStatus = z.enum([
  'active investigation',
  'foundational reading',
  'speculative curiosity',
  'dormant rabbit hole',
]);

const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: inquiryStatus,
    domains: z.array(z.string()).min(1),
    started: z.date().optional(),
    archived: z.boolean().default(false),
    featuredOrder: z.number().int().positive(),
    relatedInvestigations: z.array(z.string()).default([]),
    relatedNotes: z.array(z.string()).default([]),
  }),
});

const investigations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/investigations' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'complete', 'continuing', 'paused']),
    startDate: z.date(),
    startDateLabel: z.string().optional(),
    lastUpdated: z.date(),
    endDate: z.date().optional(),
    endDateLabel: z.string().optional(),
    modes: z.array(z.string()).min(1),
    relatedQuestions: z.array(z.string()).default([]),
    evidence: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
    milestones: z.array(z.object({
      date: z.date(),
      dateLabel: z.string().optional(),
      label: z.string(),
      summary: z.string(),
    })).default([]),
    currentBelief: z.string().optional(),
    evidenceSummary: z.string().optional(),
    changedMind: z.string().optional(),
    openQuestions: z.array(z.string()).default([]),
    nextExperiment: z.string().optional(),
    lastRevisited: z.date().optional(),
    revisitReason: z.string().optional(),
    featuredOrder: z.number().int().positive(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string().optional(),
    kind: z.enum(['note', 'essay', 'field-report', 'reflection']).default('note'),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    relatedQuestions: z.array(z.string()).default([]),
    relatedInvestigations: z.array(z.string()).default([]),
    banner: z.object({
      avif: z.string().optional(),
      png: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const trail = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trail' }),
  schema: z.object({
    date: z.date(),
    dateLabel: z.string().optional(),
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['research', 'release', 'leadership', 'learning']),
    relatedQuestions: z.array(z.string()).default([]),
    relatedInvestigations: z.array(z.string()).default([]),
    relatedNotes: z.array(z.string()).default([]),
    url: z.string().optional(),
  }),
});

export const collections = { questions, investigations, notes, trail };
