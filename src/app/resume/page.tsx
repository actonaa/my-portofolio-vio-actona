export default function ResumePage() {
  return (
    <div className="bg-darkgreen pt-36 pb-32">
      <div className="max-w-5xl flex flex-col items-center justify-center mx-auto komputer:max-w-6xl text-white">
        <a
          href="/CV-Vio-Actona-Putra.pdf"
          download="CV-Vio-Actona-Putra.pdf"
          className="flex w-1/4 justify-center items-center text-lg mb-2 py-2 px-6 bg-orange rounded-full hover:opacity-80"
        >
          Download My Resume
        </a>
        <iframe
          src="/CV-Vio-Actona-Putra.pdf"
          className="w-full h-[500px] border-0 mt-12"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
}
