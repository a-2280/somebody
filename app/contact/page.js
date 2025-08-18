import Link from "next/link";

export default function Contact() {
  return (
    <ul>
      <li>
        <Link href="/form">Message</Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/somebody.online/">Instagram</Link>
      </li>
    </ul>
  );
}
