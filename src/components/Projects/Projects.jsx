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
              className="bg-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-300"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white py-2 rounded-lg font-medium transition"
                    >
                      Live Demo
                    </a>
                  )}

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