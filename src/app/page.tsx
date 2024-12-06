import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-white pt-44 pb-32">
        <div className=" max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center komputer:max-w-6xl">
          <div className="max-w-sm">
            <h1 className="text-8xl font-bold leading-tight text-black">
              Hello, <span className="block">I{"'"}m Vio !</span>
            </h1>
            <Link
              href="https://www.linkedin.com/in/vio-actona-putra-002a76255/"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-full bg-orange text-center text-white mt-6 shadow-md shadow-darkgreen hover:opacity-80"
            >
              <i className="bx bx-search "></i>
              linkedin.com/in/vio-actona-putra-002a76255/
            </Link>
          </div>
          <div className="relative items-center">
            <Image
              src="/vio.png"
              alt="profile"
              width={700}
              height={700}
              className="w-[1000px] h-[500px] absolute z-[3] -bottom-[154px] left-[10px]"
            />
            {/* Lingkaran Kuning */}
            <div className="py-2 w-[200px] text-center rounded-full bg-yellow z-[4] absolute bottom-[10px] left-[10px]">
              7th Nov 2003
            </div>
            <div className="py-2 w-[200px] text-center rounded-full bg-yellow z-[4] absolute -bottom-[80px] right-4">
              Indonesian
            </div>
            {/* Lingkaran Putih */}
            <div className="w-[275px] h-[275px] bg-white rounded-full absolute z-[2] -bottom-[150px] left-[100px] komputer:left-[130px]"></div>
            {/* Kotak */}
            <div className="w-full absolute -bottom-[340px] left-[60px]">
              <div className="bg-darkgreen w-3/4 h-[290px] shadow-xl shadow-darkgreen"></div>
              <div className="bg-black w-3/4 shadow-lg shadow-darkgreen">
                <div className="text-white w-[200px] mx-auto text-center py-4 text-sm">
                  <h2 className="text-4xl font-bold mb-2">Contact</h2>
                  <p className="py-1 flex items-center text-center">
                    <i className="bx bx-map text-lg mr-2"></i> East Java,
                    Indonesia
                  </p>
                  <p className="py-1 flex items-center text-center">
                    <i className="bx bx-envelope text-lg mr-2"></i>{" "}
                    actonaputra@gmail.com
                  </p>
                  <p className="py-1 flex items-center text-center">
                    <i className="bx bx-phone text-lg mr-2"></i> 0822-3215-5420
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkgreen pt-16 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 items-center komputer:max-w-6xl">
          <div>
            <Image
              src="/vio2.jpeg"
              alt="profile"
              className="w-[300px] h-[300px] rounded-full"
              width={700}
              height={700}
            />
            <div className="ml-14">
              <h2 className="text-4xl text-yellow font-bold mt-4">
                Find Me On
              </h2>
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
                  href="https://www.linkedin.com/in/vio-actona-putra-002a76255/"
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white shadow-lg hover:opacity-80"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow">
              Let Me Introduce Myself
            </h3>
            <p className="mt-4 text-justify text-white">
              I am a student at Universitas Negeri Surabaya majoring in
              Informatics Engineering. I am passionate about programming and
              fullstack web development. I have experience in web development
              with any projects. I am also interested in machine learning.
            </p>
            <p className="mt-4 text-justify text-white">
              I can use programming languages like{" "}
              <span className="text-yellow">
                C++, PHP, Java, Javascript and Python
              </span>
              .
            </p>
            <p className="mt-4 text-justify text-white">
              My field of Interest{"'"}s are building new Web Technologies and
              Products with <span className="text-yellow">Node.js</span> and
              <span className="text-yellow">
                {""} Modern Javascript Library and Frameworks
              </span>{" "}
              like <span className="text-yellow">React.js and Next.js</span>
            </p>
            <p className="mt-4 text-justify text-white">
              Whenever possible, I also apply my passion for developing products
              using PHP Frameworks like{" "}
              <span className="text-yellow">Laravel</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
