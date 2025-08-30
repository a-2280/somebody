import Link from "next/link";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex flex-col gap-3">
        <Link href="/" className="flex flex-col">
          <span className="hover:blur-[1px]">Calvin Williams</span>
          <span className="text-grey hover:blur-[1px]">Web Developer</span>
        </Link>
        <NavbarLinks />
      </nav>
    </header>
  );
}
