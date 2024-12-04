import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-white">
      <div className="flex justify-between max-w-7xl mx-auto py-8">
        <h1 className="text-2xl font-bold self-center">
          <i className="bx bxs-star mr-5 text-xl text-orange"></i>Vio Actona
          Putra
        </h1>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">About Me</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Resume</Link>
          </li>
          <li>
            <Link
              href=""
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
