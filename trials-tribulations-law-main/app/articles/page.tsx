"use client";

import { useState, useMemo, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");

  useEffect(() => {
    async function load() {
      const loaded = await getArticles();
      setArticles(loaded);
    }
    load();
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((a) => a.tags?.forEach((t: string) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesText =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary?.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTag = tag === "All" || a.tags?.includes(tag);
      return matchesText && matchesTag;
    });
  }, [articles, search, tag]);

  return (
    <main className="min-h-screen bg-black text-white pb-24 pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold mb-16 text-center">Articles</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full md:w-1/2 px-4 py-2 rounded-md text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-1/3 px-4 py-2 rounded-md text-black"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((article: any) => (
              <ArticleCard key={article.slug} article={article} />
            ))
          ) : (
            <p className="text-center text-gray-400">No matching articles found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
