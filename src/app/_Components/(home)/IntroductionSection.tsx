const IntroductionSection = () => {
  return (
    <div className="tablet:mx-auto tablet:flex tablet:flex-col tablet:items-center tablet:justify-center hp:mx-auto hp:flex hp:flex-col hp:items-center hp:justify-center hp:mt-10">
      <h3 className="text-4xl font-bold text-yellow hp:text-3xl hp:text-center mb-4">
        Let Me Introduce Myself
      </h3>
      <p className="mt-4 text-justify text-white">
        I am a student at Universitas Negeri Surabaya majoring in Informatics
        Engineering. I am passionate about programming and fullstack web
        development. I have experience in web development with various projects.
        I am also interested in machine learning.
      </p>
      <p className="mt-4 text-justify text-white">
        I can use programming languages like{" "}
        <span className="text-yellow">
          C++, PHP, Java, Javascript, and Python
        </span>
        .
      </p>
      <p className="mt-4 text-justify text-white">
        My field of interest includes building new Web Technologies and Products
        with <span className="text-yellow">Node.js</span> and{" "}
        <span className="text-yellow">
          Modern Javascript Libraries and Frameworks
        </span>{" "}
        like <span className="text-yellow">React.js and Next.js</span>.
      </p>
      <p className="mt-4 text-justify text-white">
        Whenever possible, I also apply my passion for developing products using
        PHP Frameworks like <span className="text-yellow">Laravel</span>.
      </p>
    </div>
  );
};

export default IntroductionSection;
