import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 flex flex-row-reverse justify-start items-center">
        <div className="w-fit m-4 flex flex-col gap-4">
          <div>
            <h1>Clavin Williams</h1>
            <h2>Web Developer</h2>
          </div>
          <ul className="flex gap-8">
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
        </div>
      </div>
      <div className="w-1/2 flex justify-start items-center">
        <div className="m-4">
          <div className="rectangle"></div>
        </div>
      </div>
    </div>
  );
}
