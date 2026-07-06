const Button = ({ children, primary = false }) => {
  return (
    <button
      className={`px-7 py-3 rounded-xl font-semibold transition duration-300 ${
        primary
          ? "bg-cyan-500 hover:bg-cyan-600 text-white"
          : "border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;