import { getArticle, editArticle } from "@/app/lib/blog";
import Field from "@/app/components/Field";
import Button from "@/app/components/Button";

type EditArticlePageProps = {
  params: Promise<{ id: string }>;
};

export const instant = false;

export default async function EditArticlePage(
  props: EditArticlePageProps
) {
  const id = Number((await props.params).id);
  const article = await getArticle(id);

  if (!article) {
    return <p>Article introuvable.</p>;
  }

  return (
    <main className="mx-auto w-full max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Modifier l’article
      </h1>

      <form action={editArticle} className="flex flex-col gap-4">
        <input type="hidden" name="id" value={id} />

        <Field
          label="Titre"
          name="titre"
          defaultValue={article.titre}
          required
        />

        <label className="flex flex-col gap-2">
          <span>Contenu</span>

          <textarea
            name="contenu"
            defaultValue={article.contenu}
            rows={8}
            required
            className="w-full rounded border border-slate-400 bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
        </label>

        <Button type="submit">
          Enregistrer les modifications
        </Button>
      </form>
    </main>
  );
}