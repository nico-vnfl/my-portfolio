import type { ReactNode } from "react";

type ProfileCardProps = {
  // prop est une info donnée au comopsant
  prenom: string;
  domaine: string;
  children?: ReactNode;
};

export default function ProfileCard(props: ProfileCardProps) {
  //ajouter les props pour l'use
  return (
    <article>
      <h2>{props.prenom}</h2>
      <p>Etudiant.e en {props.domaine} </p>
      {props.children}
    </article> // juste pour définir ou placer le children
  );
}
