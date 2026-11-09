import type { ReactNode } from "react";

type ArticleEntryProps = {
  titre: string;
  children?: ReactNode;
};

export default function ArticleEntry(props: ArticleEntryProps) {
  return (
    <article className="rounded-lg border border-slate-300 bg-slate-100 p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      <h2 className="text-xl font-bold">{props.titre}</h2>
      
      {props.children}
    </article>
  );
}