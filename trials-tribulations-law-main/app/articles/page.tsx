"use client";

import { useState, useMemo } from "react";
import articles from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((a) => a.tags?.forEach((t: string) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesText =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTag = tag === "All" || a.tags?.includes(tag);
      return matchesText && matchesTag;
    });
  }, [search, tag]);

  return (
    <main className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
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

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))
        ) : (
          <p>No matching articles found.</p>
        )}
      </section>
    </main>
  );
}
