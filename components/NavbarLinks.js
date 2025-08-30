"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 text-grey">
      <li className={pathname === "/" ? "active" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={pathname === "/about/" ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>
      <li className={pathname === "/contact/" ? "active" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
