"use client";

interface AmountInputProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export function AmountInput({ id, value, onChange }: AmountInputProps) {
  const format = (raw: string) => {
    const number = Number(raw);
    return raw ? `$ ${number.toLocaleString("es-CO")}` : "$ ";
  };

  const change = (next: string) => {
    onChange(format(next.replace(/[^\d]/g, "")));
  };

  return (
    <input
      id={id}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e) => change(e.target.value)}
      aria-label="Valor aporte"
      className="h-8 w-full rounded-[4px] border border-border bg-surface px-[11px] text-[14px] leading-8 text-text outline-none transition-colors duration-300 hover:border-[#8f9ba6] focus:border-[#a8aeb3] focus:shadow-[0_0_0_2px_rgba(143,155,166,0.2)]"
    />
  );
}