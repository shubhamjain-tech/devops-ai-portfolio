import portfolioData from "../../data/portfolioData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-cyan-400">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Technologies I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {portfolioData.skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-cyan-400 mb-5">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">

                {skill.items.map((item, i) => (

                  <span
                    key={i}
                    className="bg-slate-700 text-gray-200 px-3 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;