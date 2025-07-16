import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticles, getArticleBySlug } from '@/lib/articles'
import { formatDate } from '@/lib/utils'
import MDXRenderer from '@/components/mdx-renderer'
import MediaDisplay from '@/components/media-display'
import NewsletterForm from '@/components/newsletter-form'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map(article => ({ slug: article.slug }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const { content, ...metadata } = article
  const { title, author, image, video, publishedAt } = metadata

  return (
    <section className="min-h-screen bg-black text-white pb-24 pt-32">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/articles"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Articles</span>
        </Link>

        <MediaDisplay image={image} video={video} title={title} className="mb-8 w-full" />

        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{title}</h1>
        <p className="text-sm text-gray-400 mb-8">
          {author} / {publishedAt ? formatDate(publishedAt) : ''}
        </p>

        <article className="prose prose-invert max-w-none mb-16">
          <MDXRenderer source={content} />
        </article>

        <NewsletterForm />
      </div>
    </section>
  )
}
