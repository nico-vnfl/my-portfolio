"use server";

import { cacheTag, revalidateTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export type Article = {
  titre: string;
  contenu: string;
};
const articles_publiés: Article[] = [
  { titre: "Titre", contenu: "Contenu de l'article" },
];

export async function getArticles() {
  "use cache"; // stop le résultat pour pas calcul a nouveau
  cacheTag("articles_publiés"); //des que je revalide c'est ca a reactualiser
  return articles_publiés;
}

export async function createArticle(form: FormData) {

  const titre = form.get("titre")?.toString();
  const contenu = form.get("contenu")?.toString();
  if (!titre || !contenu) return;

  articles_publiés.push({ titre, contenu });

  updateTag("articles_publiés");
  redirect("/blog");
}

export async function getArticle(id: number) {
  return articles_publiés[id];
}

export async function deleteArticle(id: number) {
  articles_publiés.splice(id, 1);

  updateTag("articles_publiés");
  redirect("/blog");
}

export async function editArticle(form: FormData) {
  const id = Number(form.get("id"));
  const titre = form.get("titre")?.toString();
  const contenu = form.get("contenu")?.toString();

  if (!Number.isInteger(id) || !articles_publiés[id]) return;
  if (!titre || !contenu) return;

  articles_publiés[id] = { titre, contenu };

  updateTag("articles_publiés");
  redirect("/blog/" + id);
}