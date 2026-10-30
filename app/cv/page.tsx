import CVEntry from "../components/CVEntry";

export default function CVPage() {
  return (
    <main className="p-4">
      <h1 className="mb-4 text-3xl font-bold">CV de Nicolas Vannuffel</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      </div>
    </main>
  );
}
