import { getArticle } from "@/app/lib/blog";
import ArticleEntry from "@/app/components/ArticleEntry";
import Link from "next/link";

type ArticlePageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage(props: ArticlePageProps) {
  const params = await props.params;
  const id = Number(params.id);
  const article = await getArticle(id);

  if (!article) {
    console.log("Article introuvable :", params.id, "converti en", id);
    return <p>Article introuvable.</p>;
  }

  return (
    <section className="mx-auto w-full max-w-4xl p-4">
      <h1 className="mb-4 text-3xl font-bold">
        Article en cours de lecture
      </h1>

      <ArticleEntry title={article.title}>
        <p className="mt-3 whitespace-pre-wrap">{article.content}</p>
      </ArticleEntry>
      <Link
        href={"/blog/edit/" + id}
        className="mt-4 inline-block rounded border bg-blue-900 px-4 py-2 text-white hover:bg-gray-800"
      >
        Modifier cet article
      </Link>
    </section>
  );
}
export const instant = false;
