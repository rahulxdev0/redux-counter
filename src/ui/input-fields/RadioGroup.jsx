const RadioGroup = ({ label, name, options, value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>

      {error && <p className="mb-1 text-xs text-red-500">{error}</p>}

      <div className="flex items-center gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className={`h-4 w-4
                ${
                  error
                    ? "text-red-500 ring-red-500"
                    : "text-slate-900 ring-slate-900"
                }
              `}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
