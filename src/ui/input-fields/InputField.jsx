const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-xl border px-3 py-2.5 text-sm md:text-base outline-none bg-slate-50/60
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200 focus:border-slate-900 focus:ring-slate-900/10"
          }
        `}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
