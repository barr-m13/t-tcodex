// lib/articles.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  summary: string;
  slug: string;
  image?: string;
  video?: string;
  author?: string;
  publishedAt: string;
  [key: string]: any;
}

export interface Article extends ArticleMetadata {
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export function getArticles(): ArticleMetadata[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const { slug: _ignored, ...rest } = data as ArticleMetadata;

    return {
      slug,
      ...(rest as Omit<ArticleMetadata, 'slug'>)
    } as ArticleMetadata;
  });
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const { slug: _ignored, ...rest } = data as ArticleMetadata;

  return {
    slug,
    content,
    ...(rest as Omit<ArticleMetadata, 'slug'>)
  } as Article;
}
