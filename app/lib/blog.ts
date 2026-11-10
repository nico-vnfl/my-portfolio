"use server";

import { db } from "@/db";
import { articlesTable } from "@/db/schema";
import { cacheTag, revalidateTag, updateTag } from "next/cache";
import { Content } from "next/font/google";
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
  const results = await db.select().from(articlesTable);
  return results;
}

export async function createArticle(form: FormData) {
  const title = form.get("titre")?.toString();
  const content = form.get("contenu")?.toString();
  if (!title || !content) return;
  await db.insert(articlesTable).values({ title, content });

  updateTag("articles_publiés");
  redirect("/blog");
}

export async function getArticle(id: number) {
  const results = await db.select().from(articlesTable);
  return results[id];
 // return articles_publiés[id];
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
