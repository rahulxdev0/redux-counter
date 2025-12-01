const CheckboxField = ({ name, label, checked, onChange, error }) => {
  return (
    <div className="flex flex-col items-start gap-1 pt-1">
      <div className="flex gap-2 items-center">
        <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`mt-1 h-4 w-4 rounded 
          ${
            error
              ? "border-red-500 ring-red-500"
              : "border-slate-300 ring-slate-900"
          }
        `}
      />

      <label htmlFor={name} className="text-xs md:text-sm text-slate-600">
        {label}
      </label>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CheckboxField;
