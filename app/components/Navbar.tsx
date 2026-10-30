import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex flex-col gap-4 md:flex-row">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        <li>
          <Link href="/my-first-page" className="hover:text-gray-400">
            My First Page
          </Link>
        </li>

        <li>
          <Link href="/cv" className="hover:text-gray-400">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
}
