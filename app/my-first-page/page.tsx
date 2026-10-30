import ProfileCard from "../components/ProfileCard";

export default function MyFisrtPage() {
  // export pour accessible end ehors, default car export principal du fichier, MyFirstPage=fonction
  const prenom = "Nicolas"; // on déclare des constantes réutilisables
  const formation = "Technologies web";
  return (
    <main>
      <h1>Bonjour {prenom}</h1>
      <p>Je bosse sur le cours de {formation}</p>
      <ProfileCard prenom="Nicolas" domaine="ingénieur industriel" />
      <ProfileCard prenom="Yaël" domaine="marketing" />
    </main>
  );
}
