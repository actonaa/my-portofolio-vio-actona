"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null); // Referensi untuk menu

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActiveLink = (path: string) => pathname === path;

  if (!isMounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/70 shadow-md backdrop-blur-lg" : "bg-white"
      }`}
    >
      <div className="flex justify-between max-w-6xl mx-auto py-4 px-8 komputer:max-w-7xl tablet:max-w-4xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold self-center text-darkgreen tablet:text-lg hp:text-xl"
        >
          Vio Actona Putra
        </Link>

        {/* Menu untuk HP */}
        <div className="hp:block hidden">
          <button
            className="text-darkgreen text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          {isMenuOpen && (
            <ul
              ref={menuRef}
              className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4"
            >
              <li className="text-center">
                <Link
                  href="/"
                  className={`navbar-link w-full text-darkgreen ${
                    isActiveLink("/") ? "text-orange font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="/skill"
                  className={`navbar-link w-full text-darkgreen ${
                    isActiveLink("/skill") ? "text-orange font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="/project"
                  className={`navbar-link w-full text-darkgreen ${
                    isActiveLink("/project") ? "text-orange font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="text-center">
                <Link
                  href="/resume"
                  className={`navbar-link w-full text-darkgreen ${
                    isActiveLink("/resume") ? "text-orange font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/actonaa"
                  className="flex items-center justify-center gap-2 py-2 px-4 text-black bg-yellow rounded-full hover:opacity-80 w-1/2 mx-auto"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bx bx-git-branch"></i>{" "}
                  <i className="bx bxl-github"></i>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Menu untuk tablet dan komputer */}
        <ul className="flex gap-8 items-center text-darkgreen tablet:gap-6 hp:hidden">
          <li className="relative">
            <Link
              href="/"
              className={`navbar-link text-darkgreen ${
                isActiveLink("/") ? "text-orange font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/skill"
              className={`navbar-link text-darkgreen ${
                isActiveLink("/skill") ? "text-orange font-semibold" : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/project"
              className={`navbar-link text-darkgreen ${
                isActiveLink("/project") ? "text-orange font-semibold" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/resume"
              className={`navbar-link text-darkgreen ${
                isActiveLink("/resume") ? "text-orange font-semibold" : ""
              }`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/actonaa"
              className="flex items-center justify-center gap-2 py-2 px-4 text-black bg-yellow rounded-full hover:opacity-80"
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
