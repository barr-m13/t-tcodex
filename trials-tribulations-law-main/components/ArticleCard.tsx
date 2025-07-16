import Link from "next/link";
import MediaDisplay from "./media-display";
import type { ArticleMetadata } from "@/lib/articles";

export default function ArticleCard({
  title,
  summary,
  slug,
  image,
  video,
  publishedAt,
  tags,
}: ArticleMetadata) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="block bg-neutral-900 rounded-xl hover:shadow-lg transition p-6"
    >
      <div className="mb-4 h-48 w-full">
        <MediaDisplay
          image={image}
          video={video}
          title={title}
          isPreview={true}
          className="h-full"
        />
      </div>

      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-400 mb-2">{publishedAt}</p>
      <p className="text-gray-300 mb-3">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-full">
            {typeof tag === 'string' ? tag : tag.name}
          </span>
        ))}
      </div>
    </Link>
  );
}

