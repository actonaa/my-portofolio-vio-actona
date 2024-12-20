import Link from "next/link";

export default function Puuter() {
  return (
    <footer className="bg-black relative bottom-0 left-0 right-0">
      <div className="flex px-6 justify-between items-center text-white max-w-6xl mx-auto py-4 komputer:max-w-7xl tablet:max-w-2xl hp:flex-col hp:items-center">
        <h4 className="tablet:text-sm hp:mb-4">Develop by Vio Actona</h4>
        <p className="tablet:text-sm hp:mb-4">Copyright © 2024 Vio Actona</p>
        <div className="flex gap-4">
          {/* GitHub */}
          <Link
            href="https://github.com/actonaa"
            className="flex justify-center items-center w-10 h-10 ml-16 rounded-full bg-yellow text-black hover:opacity-80 hp:ml-0"
            aria-label="GitHub"
          >
            <i className="bx bxl-github text-2xl"></i>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/act_putraa/"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow text-black hover:opacity-80"
            aria-label="Instagram"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/vio-actona-putra/"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow text-black hover:opacity-80"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
