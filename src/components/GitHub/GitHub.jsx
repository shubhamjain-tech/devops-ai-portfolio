import { GitHubCalendar } from "react-github-calendar";
import GitHubStats from "./GitHubStats";

const GitHub = () => {
  return (
    <section
      id="github"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          GitHub Contributions
        </h2>

        <p className="text-center text-gray-400 mt-4">
          My open-source activity and coding consistency
        </p>

        <div className="mt-16 flex justify-center">

          <GitHubCalendar
            username="shubhamjain-tech"
            colorScheme="dark"
            fontSize={14}           
          />
          
         
        </div>
        
        <GitHubStats />

      </div>
    </section>
  );
};

export default GitHub;