import Card from "./Card";

export default function ProjectPage() {
  return (
    <div className="bg-darkgreen pt-44 pb-32">
      <div className="max-w-5xl mx-auto komputer:max-w-6xl text-white">
        <h1 className="flex justify-center items-center text-4xl mb-2">
          My Recent<span className="text-yellow ml-2">Work</span>
        </h1>
        <p className="text-center">
          Here are a few project I{"'"}ve worked on recently.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-16">
          <Card
            title="Catatan Belanja"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius rerum numquam mollitia inventore ipsum!"
            imageSrc="/catatan-belanja.png"
            githubLink="https://github.com/your-repo"
            demoLink="https://demo-link.com"
          />
          <Card
            title="Contact CLI NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi ex ratione, alias minima ipsam facilis, autem assumenda rerum incidunt aut dignissimos praesentium reprehenderit earum consequuntur laborum! Laudantium, fugiat! Porro!"
            imageSrc="/contact-nodejs.png"
            githubLink="https://github.com/another-repo"
            // Tidak ada demoLink
          />
          <Card
            title="Proyek Tanpa Demo"
            description="Ini adalah deskripsi proyek tanpa demo."
            imageSrc="/no-demo.png"
            githubLink="https://github.com/another-repo"
            // Tidak ada demoLink
          />
        </div>
      </div>
    </div>
  );
}
