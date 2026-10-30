type ProfileCardProps = {
  // prop est une info donnée au comopsant
  prenom: string;
  domaine: string;
};

export default function ProfileCard(props: ProfileCardProps) {
  //ajouter les props pour l'use
  return (
    <article>
      <h2>{props.prenom}</h2>
      <p>Etudiant.e en {props.domaine}</p>
    </article>
  );
}
