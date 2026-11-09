import Field from "../../components/Field";
import Button from "../../components/Button";
import { createArticle } from "@/app/lib/blog";

export default function NewPostPage() {
  return (
    <main className="mx-auto w-full max-w-md p-4">
      <h1 className="mb-6 text-3xl font-bold list-disc list-inside">Nouvel article</h1>
      <form action={createArticle} className="flex flex-col gap-4">
        <Field label="Titre" type="text" name="titre" required></Field>

        <label className="flex flex-col gap-2">
          <span>Contenu de l'article</span>
          <textarea
            className="w-full min-w-0 rounded border border-slate-400 bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            name="contenu"
            rows={6}
            required
          />
        </label>

        <Button type="submit">Publier</Button>
      </form>
    </main>

    
  );
}
