"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Ubah 50 sesuai kebutuhan Anda
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/70 shadow-md backdrop-blur-lg" : "bg-white"
      }`}
    >
      <div className="flex justify-between max-w-6xl mx-auto py-4 komputer:max-w-7xl">
        <Link
          href="https://linkedin.com/in/actona-putra-002a76255/"
          className="text-2xl font-bold self-center"
        >
          <i className="bx bxs-star mr-5 text-xl text-orange"></i>Vio Actona
          Putra
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/skill">Skills</Link>
          </li>
          <li>
            <Link href="/project">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link
              href="https://github.com/actonaa"
              className="flex items-center justify-center gap-2 py-2 px-4 bg-yellow rounded-full hover:opacity-80"
            >
              <i className="bx bx-git-branch"></i>{" "}
              <i className="bx bxl-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
