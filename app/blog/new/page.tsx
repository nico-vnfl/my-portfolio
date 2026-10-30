import Field from "../../components/Field";
import Button from "../../components/Button";

export default function NewPostPage() {
  return (
    <main className="mx-auto w-full max-w-md p-4">
      <h1 className="mb-6 text-3xl font-bold">Nouvel article</h1>
      <form className="flex flex-col gap-4">
        <Field label="Titre" type="text" name="title" required></Field>

        <label className="flex flex-col gap-2">
          <span>Contenu de l'article</span>
          <textarea
            className="rounded border border-slate-400 bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            name="content"
            rows={6}
            required
          />
        </label>

        <Button type="button">Publier</Button>
      </form>
    </main>
  );
}
