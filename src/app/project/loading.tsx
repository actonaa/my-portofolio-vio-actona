export default function Loading() {
  return (
    <div className="bg-darkgreen pt-44 pb-32">
      <div className="max-w-5xl mx-auto komputer:max-w-6xl text-white">
        <h1 className="flex justify-center items-center text-4xl mb-2">
          My Recent<span className="text-yellow ml-2">Work</span>
        </h1>
        <p className="text-center">
          Here are a few projects I{"'"}ve worked on recently.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-16">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 animate-pulse h-48 w-full rounded-lg"
            >
              <div className="h-24 bg-gray-400 mb-4 rounded-t-lg"></div>
              <div className="h-4 w-3/4 bg-gray-500 mb-2 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-500 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
