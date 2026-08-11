function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        rounded-lg
        transition
      "
    >
      {children}
    </button>
  );
}

export default Button;