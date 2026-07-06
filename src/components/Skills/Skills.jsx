import portfolioData from "../../data/portfolioData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-cyan-400">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Technologies I work with
        </p>

        <div className="mt-16 space-y-8">

          {portfolioData.skills.map((skill) => (

            <div key={skill.name}>

              <div className="flex justify-between mb-2">

                <span className="text-white font-medium">

                  {skill.name}

                </span>

                <span className="text-cyan-400">

                  {skill.level}%

                </span>

              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full">

                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;