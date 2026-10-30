import type { ReactNode } from "react";

type CVEntryProps = {
  titre: string;
  employeur: string;
  durée: string;
  children?: ReactNode;
};

export default function CVEntry(props: CVEntryProps) {
  return (
    <article className="rounded-lg border border-slate-300 bg-slate-100 p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      <h2 className="text-xl font-bold">{props.titre}</h2>
      <p>
        {props.employeur} - {props.durée}
      </p>
      {props.children}
    </article>
  );
}
