import portfolioData from "../../data/portfolioData";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-white">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mt-6">
          I'm always open to discussing DevOps, Cloud Engineering,
          freelance projects, and full-time opportunities.
        </p>

        <div className="mt-12 space-y-5 text-lg">

          <p className="text-white">
            📧 {personal.email}
          </p>

          <p className="text-white">
            📱 {personal.phone}
          </p>

          <p className="text-white">
            📍 {personal.location}
          </p>

        </div>

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={personal.medium}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaMedium />
          </a>

        </div>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition"
        >
          <FaEnvelope />
          Send Email
        </a>

      </div>
    </section>
  );
};

export default Contact;