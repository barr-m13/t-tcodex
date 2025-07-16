import { getArticles } from "@/lib/articles";
import ArticlesClient from "@/components/articles-client";

export default async function ArticlesPage() {
  const articles = await getArticles();
  return <ArticlesClient articles={articles} />;
}
