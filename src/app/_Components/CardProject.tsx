import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  demoLink?: string;
};

const CardProject = ({
  title,
  description,
  imageSrc,
  githubLink,
  demoLink,
}: Props) => {
  return (
    <div className="p-6 shadow-md shadow-lightgreen rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lightgreen">
      <Image src={imageSrc} alt={title} width={700} height={700} />
      <h4 className="py-6 text-center font-semibold text-lg">{title}</h4>
      <p className="text-justify">{description}</p>
      <div className="flex flex-wrap gap-4 mt-6 justify-center items-center mx-auto">
        <Link
          href={githubLink}
          className="py-2 px-4 flex items-center gap-2 rounded-md bg-orange text-center hover:opacity-80"
        >
          <i className="bx bxl-github text-xl"></i>
          Github
        </Link>
        {demoLink && (
          <Link
            href={demoLink}
            className="py-2 px-4 flex items-center gap-2 rounded-md bg-orange text-center hover:opacity-80"
          >
            <i className="bx bxs-news text-xl"></i>
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardProject;
