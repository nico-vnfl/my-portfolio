import Button from "../components/Button";
import Field from "../components/Field";
import { getTasks } from "../lib/tasks";
import { createTask } from "../lib/tasks";

export default async function () {
  const tasks = await getTasks();
  return (
    <section className="mx-auto w-full max-w-4xl p-4">
      <h1 className="text-2xl text-green-500">Mes tâches</h1>
      <ul className="list-disc list-inside">
        {tasks.map((tasks, i) => (
          <li key={i}>{tasks}</li>
        ))}
      </ul>

      <form action={createTask}>
        <Field className="mt-4 flex flex-col gap-4" label="Tâches:" type="text" name="tâches" required />
        <Button type="submit">Ajouter</Button>
      </form>
    </section>
  );
}
