"use client";

import Link from "next/link";
import { useState } from "react";

function CorruptText({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  const scrambleText = (textInput) => {
    if (typeof textInput !== "string" && typeof textInput !== "number") {
      return textInput;
    }
    const text = String(textInput);

    if (!text) return "";

    const wordsAndSpaces = text.split(/(\s+)/);

    const scrambledParts = wordsAndSpaces.map((part) => {
      if (part.match(/^\s+$/)) {
        return part;
      }

      const originalCases = part
        .split("")
        .map((char) => char === char.toUpperCase());

      const characters = part.split("");

      for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }

      let scrambledWord = "";
      for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        if (originalCases[i]) {
          scrambledWord += char.toUpperCase();
        } else {
          scrambledWord += char.toLowerCase();
        }
      }
      return scrambledWord;
    });

    return scrambledParts.join("");
  };

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? scrambleText(children) : children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-1/4 w-screen p-4 flex justify-start items-end">
        <div className="flex flex-col gap-4">
          <div className="cursor-default">
            <h1>
              <CorruptText>Calvin Williams</CorruptText>
            </h1>
            <h2>Web Developer</h2>
          </div>
          <ul className="flex gap-8">
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
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
