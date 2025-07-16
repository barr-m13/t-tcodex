"use client";

import { useMemo, useState, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";

interface Article {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  // Add other metadata fields if needed
}

export default function ArticlesClient({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((a) => a.tags?.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesText =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTag = tag === "All" || a.tags?.includes(tag);
      return matchesText && matchesTag;
    });
  }, [search, tag, articles]);

  return (
    <main className="min-h-screen bg-black text-white pb-24 pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold mb-16 text-center">
          Articles
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))
          ) : (
            <p>No matching articles found.</p>
          )}
        </div>
      </div>
    </main>
  );
}

