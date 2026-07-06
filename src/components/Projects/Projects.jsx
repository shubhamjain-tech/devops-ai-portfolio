import portfolioData from "../../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Some of my DevOps & Cloud projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {portfolioData.projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
            >

              <div className="h-48 bg-slate-700 flex items-center justify-center">

                <span className="text-gray-400">
                  Project Screenshot
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;