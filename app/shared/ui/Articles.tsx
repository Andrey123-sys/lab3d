import Link from "next/link";
import { ArticleCard } from "./ArticleCard";
import { articles } from "../data/mockArticles";

export const Articles = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Статьи</h2>
        <Link
          href="#"
          className="text-orange-500 hover:text-orange-600 font-medium flex items-center space-x-1 transition-colors"
        >
          <span>Все статьи</span>
          <span aria-hidden className="text-orange-500">
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            {...article}
            readMoreHref={`#article-${article.id}`}
          />
        ))}
      </div>
    </section>
  );
};
