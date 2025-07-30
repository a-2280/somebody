import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-1/4 w-screen p-4 flex justify-start items-end">
        <div className="flex flex-col gap-4">
          <div className="cursor-default">
            <h1>Calvin Williams</h1>
            <h2>Web Developer</h2>
          </div>
          <ul className="flex gap-8">
            <li className="text-blur">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="text-blur">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-blur">
              <Link href={"/Contact"}>Contact</Link>
            </li>
            <li className="text-blur">
              <Link href={"/Guests"}>Guests</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grow flex">
        <div className="min-w-max p-4">
          <ul>
            <li>
              <button>Humanmend — 2025</button>
            </li>
            <li>
              <button>Lily Ballif Portfolio — 2024</button>
            </li>
          </ul>
        </div>
        <div className="w-full p-4">
          <div className="rectangle"></div>
        </div>
      </div>
    </div>
  );
}
