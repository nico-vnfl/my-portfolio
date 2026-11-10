import ArticleEntry from "@/app/components/ArticleEntry";
import { getArticles, deleteArticle } from "@/app/lib/blog";
import Link from "next/link";
import Button from "../components/Button";

export default async function () {
  const articles_publiés = await getArticles();
  return (
    <section className="mx-auto w-full max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Articles publiés</h1>
      <ul className="flex list-none flex-col gap-4">
        {articles_publiés.map((article, i) => (
          <li key={i}>
            <Link
              href={"/blog/" + i}
              className="block rounded-lg border border-slate-300 bg-slate-100 p-4 text-xl font-bold text-slate-900 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              {article.title}
            </Link>
            <form action={deleteArticle.bind(null, i)} className="mt-2">
              <Button type="submit">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
