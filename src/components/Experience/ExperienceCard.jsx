const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition duration-300">

      <h3 className="text-3xl font-bold text-white">
        {experience.company}
      </h3>

      <p className="text-cyan-400 text-xl mt-2">
        {experience.role}
      </p>

      <p className="text-gray-400 mt-2">
        {experience.duration}
      </p>

      <p className="text-gray-500">
        {experience.location}
      </p>

      <p className="mt-6 text-gray-300 leading-8">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        {experience.technologies.map((tech) => (

          <span
            key={tech}
            className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
          >
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
};

export default ExperienceCard;