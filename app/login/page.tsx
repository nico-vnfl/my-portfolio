import Field from "../components/Field";
import Button from "../components/Button";

export default function LoginPage() {
  return (
    <main className="mx-auto w-full max-w-md p-4">
      <h1 className="mb-6 text-3xl font-bold">Connexion</h1>

      <form className="flex flex-col gap-4">
        <Field label="Email" type="email" name="email" required></Field>
        <Field
          label="Mot de passe"
          type="password"
          name="password"
          required
        ></Field>
        <Button type="button">Se connecter</Button>
      </form>
    </main>
  );
}
