// coder la dedans après la modif du schema pour faire les tables

"use server"; //tourne sur le serveur 

import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { cacheTag, revalidateTag, updateTag } from "next/cache";

//const tasks: string[] = [
  //"Apprendre l\'async/await",
  //"ecouter",
  //"réparer la tv",            plus beosin de local (DB)
//];
export async function getTasks() {
  "use cache"; // stop le résultat pour pas calcul a nouveau
  cacheTag("tasks"); //des que je revalide c'est ca a reactualiser
  const results = await db.select().from(tasksTable); //                  pour la table de la DB !!!
  return results
}

export async function createTask(form: FormData) {
  const task = form.get("tâches")?.toString();
  if (task) {
    // tasks.push(task);
    await db.insert(tasksTable).values({title: task}); //rajouté await sinon update se fait avant que l'insertion ait eu le temps de se finir (donc pas inséré) ou refresh manuel
  }
  updateTag("tasks");
}
