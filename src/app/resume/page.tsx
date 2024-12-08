import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vio Actona | Resume",
  description: "Resume of Vio Actona Putra",
  authors: [
    {
      name: "Vio Actona Putra",
      url: "https://linkedin.com/in/vio-actona-putra",
    },
  ],
  icons: "/myicon.ico",
};

export default function ResumePage() {
  return (
    <div className="bg-darkgreen pt-36 pb-32">
      <div className="max-w-5xl flex flex-col items-center justify-center mx-auto komputer:max-w-6xl text-white">
        <a
          href="/CV-Vio-Actona-Putra.pdf"
          download="CV-Vio-Actona-Putra.pdf"
          className="flex w-1/4 justify-center items-center text-lg mb-2 py-2 px-6 bg-orange rounded-full hover:opacity-80  tablet:w-1/2 tablet:mb-4 hp:w-3/4"
        >
          Download My Resume
        </a>
        <iframe
          src="/CV-Vio-Actona-Putra.pdf"
          className="w-full h-[500px] border-0 mt-12 tablet:w-3/4 tablet:h-[500px] hp:w-full hp:h-[500px]"
          title="CV-Vio-Actona-Putra"
        ></iframe>
      </div>
    </div>
  );
}
