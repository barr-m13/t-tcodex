import { getArticles } from "@/lib/articles";
import ArticlesClient from "./articles-client";

export const metadata = {
  title: "Articles",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-black text-white pb-24 pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold mb-16 text-center">
          Articles
        </h1>

        <ArticlesClient articles={articles} />
      </div>
    </main>
  );
}
