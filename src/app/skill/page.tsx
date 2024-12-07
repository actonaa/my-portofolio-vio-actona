import CardSkill from "../_Components/CardSkill";

export default function AboutPage() {
  return (
    <div className="bg-darkgreen pt-44 pb-32">
      <div className="max-w-5xl mx-auto komputer:max-w-6xl text-white">
        <h1 className="flex justify-center items-center text-4xl mb-8">
          Professional <span className="text-yellow ml-2">Skillset</span>
        </h1>
        <div className="grid grid-cols-4 gap-4 hp:grid-cols-2 hp:px-4">
          <CardSkill
            icon="bxl-html5"
            iconColor="text-amber-700"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-css3"
            iconColor="text-blue-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-javascript"
            iconColor="text-yellow"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-php"
            iconColor="text-indigo-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-go-lang"
            iconColor="text-cyan-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-react"
            iconColor="text-sky-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-tailwind-css"
            iconColor="text-teal-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-nodejs"
            iconColor="text-green-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-typescript"
            iconColor="text-blue-400"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-graphql"
            iconColor="text-pink-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-postgresql"
            iconColor="text-blue-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-mongodb"
            iconColor="text-green-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
        </div>
        <h1 className="flex justify-center items-center text-4xl mb-8 mt-16">
          <span className="text-yellow mr-2">Tools</span> Work
        </h1>
        <div className="grid grid-cols-5 gap-4 hp:grid-cols-2 hp:px-4">
          <CardSkill
            icon="bxl-windows"
            iconColor="text-blue-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-visual-studio"
            iconColor="text-purple-500"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-git"
            iconColor="text-red-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-github"
            iconColor="text-black"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
          <CardSkill
            icon="bxl-firebase"
            iconColor="text-orange-600"
            bgColor="bg-darkgreen"
            borderColor="border-lightgreen"
          />
        </div>
      </div>
    </div>
  );
}
