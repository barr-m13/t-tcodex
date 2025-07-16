'use client'

import { useState, useMemo, useEffect } from 'react'
import type { ArticleMetadata } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export default function ArticlesClient({ articles }: { articles: ArticleMetadata[] }) {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState<ArticleMetadata[]>(articles)

  // Update filtered articles when articles change
  useEffect(() => {
    setFilteredArticles(articles)
  }, [articles])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    articles.forEach(a => a.tags?.forEach(t => tags.add(t)))
    return ['All', ...Array.from(tags)]
  }, [articles])

  const filtered = useMemo(() => {
    return filteredArticles.filter(a => {
      const matchesText =
        a.title?.toLowerCase().includes(search.toLowerCase()) ||
        a.summary?.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchesTag = tag === 'All' || a.tags?.includes(tag)
      return matchesText && matchesTag
    })
  }, [search, tag, filteredArticles])

  return (
    <>
      <div className='flex flex-col md:flex-row gap-4 mb-12'>
        <input
          type='text'
          placeholder='Search articles...'
          className='w-full md:w-1/2 px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className='w-full md:w-1/3 px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          value={tag}
          onChange={e => setTag(e.target.value)}
        >
          {allTags.map(t => (
            <option key={t} value={t} className="text-black">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {filtered.length > 0 ? (
          filtered.map(article => <ArticleCard key={article.slug} {...article} />)
        ) : (
          <p>No matching articles found.</p>
        )}
      </div>
    </>
  )
}
