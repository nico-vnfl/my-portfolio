import CVEntry from "../components/CVEntry";

export default function CVPage() {
  return (
    <main>
      <h1>CV de Nicolas Vannuffel</h1>
      <CVEntry
        titre="étudiant en ingénierie industrielle (électronique)"
        employeur="ECAM"
        durée="2024-..."
      >
        <p>Veuillez remplir avec les compétences et expériences...</p>
      </CVEntry>
      <CVEntry
        titre="Projet personnel de développement web"
        employeur="Projet individuel"
        durée="2026"
      />
    </main>
  );
}
