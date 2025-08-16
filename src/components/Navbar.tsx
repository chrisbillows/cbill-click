"use client"; // optional if interactive, like hamburger menus etc.

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex space-x-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/experiments/about" className="hover:underline">
        About
      </Link>
      <Link href="/experiments/button" className="hover:underline">
        Button
      </Link>
      <Link href="/experiments/js" className="hover:underline">
        JavaScript
      </Link>
      <Link href="/experiments/timeline_vert" className="hover:underline">
        Timeline Vert
      </Link>
      <Link href="/experiments/timeline_horoz" className="hover:underline">
        Timeline Horizontal
      </Link>
      <Link href="/experiments/tl_icons" className="hover:underline">
        Timeline with Emojis
      </Link>
      <Link href="/experiments/counter" className="hover:underline">
        Counter
      </Link>
      <Link href="/experiments/timer" className="hover:underline">
        Timer
      </Link>
    </nav>
  );
}
