import { FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

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
              AWS, Docker, Kubernetes, Terraform, and Jenkins.

              <br /><br />

              I enjoy solving infrastructure challenges, improving deployment
              speed, and building reliable cloud solutions. My goal is to help
              organizations deliver applications faster, more securely, and
              with greater reliability.

              <br /><br />

              Currently, I am expanding my expertise in AI-powered DevOps
              workflows and cloud automation.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <FaAws className="text-5xl mx-auto text-orange-400" />
              <h3 className="mt-4 font-semibold">AWS</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <FaDocker className="text-5xl mx-auto text-blue-400" />
              <h3 className="mt-4 font-semibold">Docker</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <SiKubernetes className="text-5xl mx-auto text-cyan-400" />
              <h3 className="mt-4 font-semibold">Kubernetes</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <SiTerraform className="text-5xl mx-auto text-purple-400" />
              <h3 className="mt-4 font-semibold">Terraform</h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center col-span-2">
              <FaJenkins className="text-5xl mx-auto text-red-400" />
              <h3 className="mt-4 font-semibold">Jenkins & CI/CD</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;