const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 bg-main dark:bg-main-dark ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
