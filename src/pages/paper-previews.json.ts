import type { APIRoute } from 'astro';
import { getAtlasContent } from '../lib/atlas';

type PaperPreview = {
  kind: string;
  title: string;
  summary: string;
  byline: string;
};

function decodeXml(value = '') {
  const entities: Record<string, string> = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    quot: '"',
  };
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&(amp|apos|gt|lt|quot);/g, (_, entity) => entities[entity])
    .replace(/\s+/g, ' ')
    .trim();
}

function element(xml: string, name: string) {
  return decodeXml(xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`))?.[1]);
}

function arxivId(urlValue: string) {
  try {
    const url = new URL(urlValue);
    if (url.hostname !== 'arxiv.org') return;
    const match = url.pathname.match(/^\/(?:abs|pdf)\/(.+)$/);
    return match?.[1].replace(/\.pdf$/, '').replace(/v\d+$/, '');
  } catch {
    return;
  }
}

export const GET: APIRoute = async () => {
  const content = await getAtlasContent();
  const entries = [
    ...content.questions,
    ...content.investigations,
    ...content.notes,
    ...content.trail,
  ];
  const ids = new Set<string>();

  for (const entry of entries) {
    const source = `${entry.body}\n${JSON.stringify(entry.data)}`;
    for (const match of source.matchAll(/https?:\/\/arxiv\.org\/(?:abs|pdf)\/[^\s)"'<>]+/g)) {
      const id = arxivId(match[0]);
      if (id) ids.add(id);
    }
  }

  const previews: Record<string, PaperPreview> = {};
  if (ids.size > 0) {
    try {
      const endpoint = new URL('https://export.arxiv.org/api/query');
      endpoint.searchParams.set('id_list', [...ids].join(','));
      const response = await fetch(endpoint, {
        headers: { 'User-Agent': 'aadityarshah.github.io link previews' },
        signal: AbortSignal.timeout(15_000),
      });
      if (response.ok) {
        const xml = await response.text();
        for (const entry of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
          const value = entry[1];
          const id = element(value, 'id').split('/abs/')[1]?.replace(/v\d+$/, '');
          if (!id) continue;
          const authors = [...value.matchAll(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/g)]
            .map((author) => decodeXml(author[1]));
          const shownAuthors = authors.slice(0, 3).join(', ');
          const authorLine = shownAuthors + (authors.length > 3 ? ` + ${authors.length - 3} more` : '');
          const year = element(value, 'published').slice(0, 4);
          previews[`ARXIV:${id}`] = {
            kind: 'Research paper',
            title: element(value, 'title'),
            summary: element(value, 'summary'),
            byline: [authorLine, 'arXiv', year].filter(Boolean).join(' · '),
          };
        }
      }
    } catch {
      // Keep the site build usable when arXiv is temporarily unavailable.
    }
  }

  return new Response(JSON.stringify(previews), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
