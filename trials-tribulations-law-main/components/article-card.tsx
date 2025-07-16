import Link from 'next/link'
import MediaDisplay from './media-display'
import { ArticleMetadata } from '@/lib/articles'
import { formatDate } from '@/lib/utils'

export default function ArticleCard({ article }: { article: ArticleMetadata }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group bg-zinc-900/50 overflow-hidden border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30"
    >
      <div className="h-48 w-full relative">
        <MediaDisplay
          image={article.image}
          video={article.video}
          title={article.title}
          isPreview={true}
          className="h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 text-sm text-gray-400">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {article.publishedAt ? formatDate(article.publishedAt) : 'No date'}
        </div>
        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-white/90 transition-colors">
          {article.title || 'Untitled'}
        </h2>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.summary || 'No summary available'}</p>
      </div>
    </Link>
  )
}
