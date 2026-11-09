import ProfileCard from "../components/ProfileCard";
import CVEntry from "../components/CVEntry";
import Field from "../components/Field";
import Button from "../components/Button";

export default function MyFisrtPage() {
  // export pour accessible end ehors, default car export principal du fichier, MyFirstPage=fonction
  const prenom = "Nicolas"; // on déclare des constantes réutilisables
  const formation = "Technologies web";
  return (
    <main className="mx-auto w-full max-w-4xl space-y-4 p-4">
      <h1>Bonjour {prenom}</h1>
      <p>Je bosse sur le cours de {formation}</p>
      <ProfileCard prenom="Nicolas" domaine="ingénieur industriel">
        {" "}
        <p>Je découvre React et children</p>
      </ProfileCard>
      <ProfileCard prenom="Yaël" domaine="marketing" />

      <CVEntry
        titre="étudiant en ingénierie industrielle (électronique)"
        employeur="ECAM"
        durée="2024-..."
      >
        <p>Veuillez remplir avec les compétences et expériences...</p>
      </CVEntry>

      <Field
        label="Adresse e-mail"
        type="email"
        placeholder="nom@exemple.be"
        required
      />
      <Field label="Mot de passe" type="password" name="password" />

      <Button type="button">Se connecter</Button>
    </main> // un children est présent pour Nicolas
  );
}
