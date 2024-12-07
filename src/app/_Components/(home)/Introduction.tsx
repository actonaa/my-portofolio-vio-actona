import Link from "next/link";

const Introduction = () => {
  return (
    <div className="max-w-sm ml-4 tablet:mx-auto tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:mb-20 hp:mb-20 hp:mx-auto hp:flex hp:flex-col hp:items-center hp:justify-center">
      {/* Teks Utama */}
      <h1 className="text-8xl font-bold leading-tight text-black tablet:text-center hp:text-7xl hp:text-center">
        Hello, <span className="block">I{"'"}m Vio!</span>
      </h1>

      {/* Tautan LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/vio-actona-putra/"
        className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-full bg-orange text-center text-white mt-6 shadow-md shadow-darkgreen hover:opacity-80 hp:text-md"
      >
        <i className="bx bx-search"></i>
        linkedin.com/in/vio-actona-putra/
      </Link>
    </div>
  );
};

export default Introduction;
