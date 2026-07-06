import portfolioData from "../../data/portfolioData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-4">
            My professional journey in Cloud, DevOps & Automation
          </p>

        </div>

        <div className="space-y-8">

          {portfolioData.experience.map((item) => (

            <ExperienceCard
              key={item.id}
              experience={item}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;