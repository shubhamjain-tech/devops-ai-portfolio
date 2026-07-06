const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-5xl font-bold text-center text-cyan-400">
        {title}
      </h2>

      <p className="text-center text-gray-400 mt-4">
        {subtitle}
      </p>
    </>
  );
};

export default SectionTitle;