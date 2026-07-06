const GitHubStats = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <img
        className="w-full rounded-xl"
        src="https://github-readme-stats-one-bice.vercel.app/api?username=shubhamjain-tech&show_icons=true&theme=tokyonight"
        alt="GitHub Stats"
      />

      <img
        className="w-full rounded-xl"
        src="https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=shubhamjain-tech&layout=compact&theme=tokyonight"
        alt="Top Languages"
      />

    </div>
  );
};

export default GitHubStats;