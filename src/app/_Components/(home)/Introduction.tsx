import Link from "next/link";

const Introduction = () => {
  return (
    <div className="max-w-sm">
      {/* Teks Utama */}
      <h1 className="text-8xl font-bold leading-tight text-black">
        Hello, <span className="block">I{"'"}m Vio!</span>
      </h1>

      {/* Tautan LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/vio-actona-putra-002a76255/"
        className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-full bg-orange text-center text-white mt-6 shadow-md shadow-darkgreen hover:opacity-80"
      >
        <i className="bx bx-search"></i>
        linkedin.com/in/vio-actona-putra-002a76255/
      </Link>
    </div>
  );
};

export default Introduction;
