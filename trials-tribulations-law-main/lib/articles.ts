// lib/articles.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content', 'articles')

export interface ArticleMetadata {
  title?: string
  summary?: string
  image?: string
  video?: string
  author?: string
  publishedAt?: string
  slug: string
  [key: string]: any
}

export interface Article {
  metadata: ArticleMetadata
  content: string
}

function getArticleDir(slug: string) {
  return path.join(articlesDirectory, slug)
}

export async function getArticles(): Promise<ArticleMetadata[]> {
  const slugs = fs.readdirSync(articlesDirectory)
  const articles = slugs.map((slug) => {
    const filePath = path.join(getArticleDir(slug), 'index.mdx')
    if (!fs.existsSync(filePath)) return null
    const file = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(file)
    return { ...(data as ArticleMetadata), slug }
  }).filter(Boolean) as ArticleMetadata[]

  return articles.sort((a, b) => {
    if (!a.publishedAt || !b.publishedAt) return 0
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(getArticleDir(slug), 'index.mdx')
  if (!fs.existsSync(filePath)) return null
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  return {
    metadata: { ...(data as ArticleMetadata), slug },
    content
  }
}

