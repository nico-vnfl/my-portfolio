import type { ReactNode } from "react";

type CVEntryProps = {
  titre: string;
  employeur: string;
  durée: string;
  children?: ReactNode;
};

export default function CVEntry(props: CVEntryProps) {
  return (
    <article>
      <h2>{props.titre}</h2>
      <p>
        {props.employeur} - {props.durée}
      </p>
      {props.children}
    </article>
  );
}
