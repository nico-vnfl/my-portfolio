import Button from "../components/Button";
import Field from "../components/Field";
import { getTasks } from "../lib/tasks";
import { createTask } from "../lib/tasks";

export default async function () {
  const tasks = await getTasks();
  return (
    <section>
      <h1 className="text-2xl text-green-500">Mes tâches</h1>
      <ul className="list-disc list-inside">
        {tasks.map((tasks, i) => (
          <li key={i}>{tasks}</li>
        ))}
      </ul>

      <form action={createTask}>
        <Field label="Tâches:" type="text" name="tâches" required />
        <Button type="submit">Ajouter</Button>
      </form>
    </section>
  );
}
