import profile from "../../assets/images/profile.png";
import Button from "../UI/Button";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-xl">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white mt-3">
            Shubham Jain
          </h1>

          <h2 className="text-3xl mt-5 text-cyan-400">

            <Typewriter
              words={[
                "Cloud Engineer",
                "DevOps Engineer",
                "AWS Specialist",
                "Terraform Engineer",
                "Kubernetes Engineer"
              ]}
              loop={0}
              cursor
            />

          </h2>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">

            Passionate Cloud & DevOps Engineer helping companies automate
            deployments, build scalable cloud infrastructure and implement
            secure CI/CD pipelines using AWS, Docker, Kubernetes,
            Terraform and GitHub Actions.

          </p>

          <div className="mt-10 flex gap-5">

            <Button primary>
              Hire Me
            </Button>

            <a href="/resume.pdf" download>
              <Button>Download Resume</Button>
            </a>
              
            <a
              href="mailto:shubhamjain9005@outlook.com"
              className="btn"
            >
              Email Me
            </a>

          </div>

          <div className="flex gap-6 mt-8 text-3xl text-cyan-400">

            <a
              href="https://github.com/shubhamjain-tech"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-jain-685520148/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src={profile}
            alt="Shubham Jain"
            className="w-96 h-96 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4] object-cover"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;