import portfolioData from "../../data/portfolioData";
import {
  FaCloud,
  FaDocker,
  FaCogs,
  FaServer,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

const icons = [
  <FaCloud />,
  <FaCogs />,
  <FaDocker />,
  <FaServer />,
  <FaChartLine />,
  <FaTools />,
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Services
        </h2>

        <p className="text-center text-gray-400 mt-4">
          How I can help businesses build reliable cloud and DevOps solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {portfolioData.services.map((service, index) => (

            <div
              key={service.id}
              className="bg-slate-800 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;