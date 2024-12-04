import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white pt-16 pb-12">
      <div className=" max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center komputer:max-w-6xl">
        <div className="max-w-sm">
          <h1 className="text-8xl font-bold leading-tight text-black">
            Hello, <span className="block">I{"'"}m Vio !</span>
          </h1>
          <p className="mt-2 text-justify text-abu">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, officiis dolor. Veritatis corporis unde optio
            reiciendis nisi, expedita velit quae consectetur necessitatibus quam
            eaque laudantium dolores possimus eum amet ratione.
          </p>
          <Link
            href="https://linkedin.com/in/actona-putra-002a76255/"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-full bg-orange text-center text-white mt-6"
          >
            <i className="bx bx-search "></i>
            linkedin.com/in/actona-putra-002a76255/
          </Link>
        </div>
        <div className="relative items-center">
          <Image
            src="/vio2.png"
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
            <div className="bg-darkgreen w-3/4 h-[290px]"></div>
            <div className="bg-black w-3/4">
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
  );
}
