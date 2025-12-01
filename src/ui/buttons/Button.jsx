const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = true,
  disabled = false,
  loading = false,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2.5 rounded-xl font-medium text-sm md:text-base transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400",
    secondary: "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400",
    outline: "border border-slate-300 text-slate-900 hover:bg-slate-50 disabled:opacity-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`cursor-pointer ${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {loading && (
        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin "></span>
      )}

      {children}
    </button>
  );
};

export default Button;
