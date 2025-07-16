import Link from "next/link";
import VideoPlayer from "./video-player";

export default function ArticleCard({
  title,
  summary,
  slug,
  image,
  video,
  publishedAt,
  tags,
}: {
  title: string;
  summary: string;
  slug: string;
  image?: string;
  video?: string;
  publishedAt: string;
  tags?: string[];
}) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="block bg-neutral-900 rounded-xl hover:shadow-lg transition p-6"
    >
      {video ? (
        <VideoPlayer
          src={video}
          poster={image}
          autoPlay
          loop
        />
      ) : (
        <img
          src={image}
          alt={title}
          className="rounded-md w-full h-48 object-cover mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-400 mb-2">{publishedAt}</p>
      <p className="text-gray-300 mb-3">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="text-xs bg-gray-700 px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
