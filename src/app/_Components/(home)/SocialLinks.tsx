import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-col tablet:mx-auto tablet:items-center tablet:justify-center hp:mx-auto hp:items-center hp:justify-center">
      {/* Gambar Profil */}
      <Image
        src="/vio2.jpeg"
        alt="profile"
        className="w-[300px] h-[300px] rounded-full"
        width={700}
        height={700}
      />

      {/* Informasi dan Tautan Sosial */}
      <div className="ml-14 tablet:ml-0 hp:ml-0">
        <h2 className="text-4xl text-yellow font-bold mt-4">Find Me On</h2>
        <p className="mt-4 text-white">Feel free to connect with me</p>

        <div className="flex gap-6 mt-4">
          {/* GitHub */}
          <Link
            href="https://github.com/actonaa"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:opacity-80"
            aria-label="GitHub"
          >
            <i className="bx bxl-github text-2xl"></i>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/act_putraa/"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:opacity-80"
            aria-label="Instagram"
          >
            <i className="bx bxl-instagram text-2xl"></i>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/vio-actona-putra/"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:opacity-80"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
