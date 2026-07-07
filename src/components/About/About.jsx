import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaRobot,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiGitlab,
  SiGithubactions,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          About Me
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Cloud & DevOps Engineer
            </h3>

            <p className="text-gray-300 leading-8">
              I am a Cloud & DevOps Engineer with 4+ years of experience in
              designing cloud infrastructure, building CI/CD pipelines,
              containerizing applications, and automating deployments using
              AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions,
              and GitLab.

              <br /><br />

              I specialize in Infrastructure as Code (Terraform),
              container orchestration with Kubernetes, CI/CD automation,
              cloud migration, monitoring, and production deployments on AWS.

              <br /><br />

              I enjoy solving infrastructure challenges, improving deployment
              speed, reducing operational effort, and building scalable,
              secure, and highly available cloud solutions.

              <br /><br />

              Currently, I am expanding my expertise in AI-powered DevOps,
              GitHub Copilot, ChatGPT, Claude AI, Amazon Q, and intelligent
              automation to build faster and smarter software delivery
              pipelines.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <FaAws className="text-5xl mx-auto text-orange-400" />
              <h3 className="mt-4 font-semibold">AWS</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <FaDocker className="text-5xl mx-auto text-blue-400" />
              <h3 className="mt-4 font-semibold">Docker</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <SiKubernetes className="text-5xl mx-auto text-cyan-400" />
              <h3 className="mt-4 font-semibold">Kubernetes</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <SiTerraform className="text-5xl mx-auto text-purple-400" />
              <h3 className="mt-4 font-semibold">Terraform</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <FaJenkins className="text-5xl mx-auto text-red-400" />
              <h3 className="mt-4 font-semibold">Jenkins</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <FaGithub className="text-5xl mx-auto text-white" />
              <h3 className="mt-4 font-semibold">Git & GitHub</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <SiGitlab className="text-5xl mx-auto text-orange-500" />
              <h3 className="mt-4 font-semibold">GitLab</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <SiGithubactions className="text-5xl mx-auto text-blue-500" />
              <h3 className="mt-4 font-semibold">GitHub Actions</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300">
              <FaRobot className="text-5xl mx-auto text-cyan-300" />
              <h3 className="mt-4 font-semibold">AI Tools</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;