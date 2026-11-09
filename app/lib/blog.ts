"use server";

import { cacheTag, revalidateTag, updateTag } from "next/cache";

export type Article = {
    titre: string;
    contenu : string;
}
const articles: Article [] = [
    {titre: "Titre", contenu:"n'importe quoi"}
];

export async function getArticles() {
  "use cache"; // stop le résultat pour pas calcul a nouveau
  cacheTag("articles"); //des que je revalide c'est ca a reactualiser
  return articles;
}

export async function createArticle(form: FormData) {
  const titre = form.get("titre")?.toString();
  const contenu = form.get("contenu")?.toString();
  if (!titre || !contenu) return;
    
  articles.push({ titre, contenu });
  
  updateTag("articles");
}
