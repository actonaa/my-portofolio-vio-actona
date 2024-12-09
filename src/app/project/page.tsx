import CardProject from "../_Components/CardProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vio Actona | Projects",
  description: "Projects of Vio Actona Putra",
  authors: [
    {
      name: "Vio Actona Putra",
      url: "https://linkedin.com/in/vio-actona-putra",
    },
  ],
  icons: "/myicon.ico",
};
export default function ProjectPage() {
  return (
    <div className="bg-darkgreen pt-44 pb-32">
      <div className="max-w-5xl mx-auto komputer:max-w-6xl text-white">
        <h1 className="flex justify-center items-center text-4xl mb-2">
          My Recent<span className="text-yellow ml-2">Work</span>
        </h1>
        <p className="text-center">
          Here are a few projects I{"'"}ve worked on recently.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-16 tablet:grid-cols-2 tablet:px-6 hp:grid-cols-1 hp:px-8 ">
          <CardProject
            title="Auth-template"
            description="Template Auth adalah template yang digunakan untuk mempermudah pembuatan halaman login dan register dalam proyek dengan sistem autentikasi.."
            imageSrc="/auth-template.png"
            githubLink="https://github.com/actonaa/auth-template"
            demoLink="https://auth-template-vio.vercel.app/"
          />
          <CardProject
            title="Catatan Belanja"
            description="Website aplikasi ini dibuat menggunakan React Native untuk menyusun laporan catatan belanja sederhana."
            imageSrc="/catatan-belanja.png"
            githubLink="https://github.com/actonaa/aplikasi-catatan-belanja"
            demoLink="https://aplikasi-catatan-belanja.vercel.app/"
          />
          <CardProject
            title="Contact CLI NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi ex ratione, alias minima ipsam facilis, autem assumenda rerum incidunt aut dignissimos praesentium reprehenderit earum consequuntur laborum! Laudantium, fugiat! Porro!"
            imageSrc="/contact-nodejs.png"
            githubLink="https://github.com/actonaa/aplikasi-contact-cli"
            // No demoLink
          />
          <CardProject
            title="Website Weeboo"
            description="Ini adalah deskripsi proyek tanpa demo."
            imageSrc="/weeboo.png"
            githubLink="https://github.com/another-repo"
            // No demoLink
          />
        </div>
      </div>
    </div>
  );
}
