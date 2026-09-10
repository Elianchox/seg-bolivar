interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  hasError?: boolean;
}

export function Checkbox({ id, checked = false, onChange, label, hasError = false }: CheckboxProps) {
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
        aria-invalid={hasError || undefined}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`relative flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border transition-colors duration-300 ${
          checked
            ? "border-brand bg-brand"
            : hasError
              ? "border-error bg-surface hover:border-brand"
              : "border-border bg-surface hover:border-brand"
        }`}
      >
        {checked && (
          <span className="absolute left-[22%] top-1/2 h-[9.142px] w-[5.714px] border-b-2 border-r-2 border-white [transform:rotate(45deg)_translate(-50%,-50%)]" />
        )}
      </span>
      <span className="ml-2">{label}</span>
    </label>
  );
}