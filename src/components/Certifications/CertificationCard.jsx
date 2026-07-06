const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition duration-300">
      <h3 className="text-xl font-bold text-cyan-400">
        {cert.name}
      </h3>

      <p className="text-gray-300 mt-2">
        {cert.issuer}
      </p>

      <p className="text-gray-400">
        {cert.year}
      </p>

      <span
        className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
          cert.verified
            ? "bg-green-600 text-white"
            : "bg-yellow-600 text-white"
        }`}
      >
        {cert.verified ? "Verified" : "In Progress"}
      </span>
    </div>
  );
};

export default CertificationCard;