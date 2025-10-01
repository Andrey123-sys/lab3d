import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readMoreText?: string;
  readMoreHref?: string;
}

export const ArticleCard = ({
  id,
  title,
  excerpt,
  date,
  image,
  readMoreText = "Подробнее",
  readMoreHref = "#",
}: ArticleCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="text-sm text-gray-500 mb-3">{date}</div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{excerpt}</p>

        <Link
          href={readMoreHref}
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
        >
          {readMoreText}
        </Link>
      </div>
    </article>
  );
};
