"use server";

import { cacheTag, revalidateTag, updateTag } from "next/cache";

const tasks: string[] = [
  "Apprendre l\'async/await",
  "ecouter",
  "réparer la tv",
];
export async function getTasks() {
  "use cache"; // stop le résultat pour pas calcul a nouveau
  cacheTag("tasks"); //des que je revalide c'est ca a reactualiser
  return tasks;
}

export async function createTask(form: FormData) {
  const task = form.get("tâches")?.toString();
  if (task) {
    tasks.push(task);
  }
  updateTag("tasks");
}
