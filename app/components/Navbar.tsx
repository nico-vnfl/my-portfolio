import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        <li>
          <Link href="/my-first-page" className="hover:text-gray-400">
            My First Page (page de test)
          </Link>
        </li>

        <li>
          <Link href="/cv" className="hover:text-gray-400">
            CV
          </Link>
        </li>

        <li>
          <Link href="/login" className="hover:text-gray-400">
            Connexion
          </Link>
        </li>

        <li>
          <Link href="/blog/new" className="hover:text-gray-400">
            Nouvel article
          </Link>
        </li>

        <li>
          <Link href="/blog/0" className="hover:text-gray-400">
            Article en lecture
          </Link>
        </li>

        <li>
          <Link href="/blog" className="hover:text-gray-400">
            Articles publiés
          </Link>
        </li>
      </ul>
    </nav>
  );
}
