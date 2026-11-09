import ArticleEntry from "@/app/components/ArticleEntry";
import { getArticles } from "@/app/lib/blog";


export default async function () {
  const articles = await getArticles();
  return (
    <section>
      <h1 className="text-2xl text-blue-900">Articles publiés</h1>
      <ul className="list-disc list-inside">
        {articles.map((articles, i) => (
          <li key={i}>{articles.titre}</li>
        ))}
      </ul>
    </section>);
}