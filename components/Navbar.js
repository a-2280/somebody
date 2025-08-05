"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/guests", label: "Guests", hoverText: "Coming soon" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="cursor-default">
        <h1>Calvin Williams</h1>
        <h2>Web Developer</h2>
      </div>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li 
            key={item.href}
            className="text-blur"
            onMouseEnter={() => setHoveredItem(item.href)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.hoverText ? (
              <span className="cursor-default">
                {hoveredItem === item.href ? (
                  <span className="blur-[1px] transition-all duration-200">
                    {item.hoverText}
                  </span>
                ) : (
                  item.label
                )}
              </span>
            ) : (
              <Link href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
