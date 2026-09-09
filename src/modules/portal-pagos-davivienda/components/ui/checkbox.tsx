interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
}

export function Checkbox({ id, checked = false, onChange, label }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="inline-flex w-full cursor-pointer items-center text-[14px] leading-[40px] text-text"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-300 ${
          checked ? "border-brand bg-brand" : "border-border bg-surface"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 8 8" className="h-2 w-2" fill="none" aria-hidden="true">
            <path
              d="M1 4l2 2 4-5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="ml-2">{label}</span>
    </label>
  );
}