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
    <section>
      <h1 className="text-2xl text-blue-900">Article en cours de lecture</h1>

      <ArticleEntry titre={article.titre}>
        <p>{article.contenu}</p>
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
