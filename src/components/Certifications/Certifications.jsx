import portfolioData from "../../data/portfolioData";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Certifications and professional learning journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {portfolioData.certifications.map((cert) => (

            <div
              key={cert.id}
              className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition duration-300 border border-slate-700"
            >

              <div className="text-5xl">
                {cert.badge}
              </div>

              <h3 className="text-xl text-white font-bold mt-4">
                {cert.title}
              </h3>

              <p className="text-sky-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-gray-400 mt-2">
                {cert.year}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;