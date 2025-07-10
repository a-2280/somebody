import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="square"></div>
      <div>
        <h1>Clavin</h1>
        <h2>Web Developer</h2>
      </div>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/Contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/Guests"}>Guests</Link>
        </li>
      </ul>
      <ul>
        <li>
          <button>Humanmend — 2025</button>
        </li>
        <li>
          <button>Lily Ballif Portfolio — 2024</button>
        </li>
      </ul>
    </>
  );
}
