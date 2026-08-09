import { getCollection, type CollectionEntry } from 'astro:content';

export type AtlasContent = {
  questions: CollectionEntry<'questions'>[];
  investigations: CollectionEntry<'investigations'>[];
  notes: CollectionEntry<'notes'>[];
  trail: CollectionEntry<'trail'>[];
};

export function entrySlug(entry: { id: string; data: { slug?: string } }): string {
  return entry.data.slug ?? entry.id.replace(/\.md$/, '');
}

export function topicSlug(topic: string): string {
  return topic.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function formatDate(date: Date, style: 'short' | 'long' = 'long'): string {
  return new Intl.DateTimeFormat('en-US', style === 'long'
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short' }).format(date);
}

export function readingTime(body = ''): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export async function getAtlasContent(): Promise<AtlasContent> {
  const [allQuestions, investigations, allNotes, trail] = await Promise.all([
    getCollection('questions'), getCollection('investigations'), getCollection('notes'), getCollection('trail'),
  ]);
  const questions = allQuestions.filter((question) => !question.data.archived);
  const notes = allNotes.filter((note) => !note.data.draft);
  const questionIds = new Set(questions.map((entry) => entry.id));
  const investigationIds = new Set(investigations.map((entry) => entry.id));
  const noteIds = new Set(notes.map((entry) => entrySlug(entry)));
  const assertReferences = (owner: string, values: string[], valid: Set<string>, type: string) => {
    for (const value of values) if (!valid.has(value)) throw new Error(`${owner} references missing ${type} "${value}".`);
  };
  for (const question of questions) {
    assertReferences(`Question ${question.id}`, question.data.relatedInvestigations, investigationIds, 'investigation');
    assertReferences(`Question ${question.id}`, question.data.relatedNotes, noteIds, 'note');
  }
  for (const investigation of investigations) {
    assertReferences(`Investigation ${investigation.id}`, investigation.data.relatedQuestions, questionIds, 'question');
  }
  for (const note of notes) {
    assertReferences(`Note ${entrySlug(note)}`, note.data.relatedQuestions, questionIds, 'question');
    assertReferences(`Note ${entrySlug(note)}`, note.data.relatedInvestigations, investigationIds, 'investigation');
  }
  for (const entry of trail) {
    assertReferences(`Trail entry ${entry.id}`, entry.data.relatedQuestions, questionIds, 'question');
    assertReferences(`Trail entry ${entry.id}`, entry.data.relatedInvestigations, investigationIds, 'investigation');
    assertReferences(`Trail entry ${entry.id}`, entry.data.relatedNotes, noteIds, 'note');
  }
  return {
    questions: questions.sort((a, b) => a.data.featuredOrder - b.data.featuredOrder),
    investigations: investigations.sort((a, b) => a.data.featuredOrder - b.data.featuredOrder),
    notes: notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()),
    trail: trail.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()),
  };
}
