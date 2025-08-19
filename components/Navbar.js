import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex flex-col gap-3">
        <Link href="/" className="flex flex-col">
          <span className="hover:blur-[1px]">Calvin Williams</span>
          <span className="text-grey hover:blur-[1px]">Web Developer</span>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
