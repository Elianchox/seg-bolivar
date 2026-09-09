"use client";

const STEP = 1000;

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function AmountInput({ value, onChange }: AmountInputProps) {
  const digits = value.replace(/[^\d]/g, "");

  const format = (raw: string) => {
    const number = Number(raw);
    return raw ? `$ ${number.toLocaleString("es-CO")}` : "$ ";
  };

  const change = (next: string) => {
    onChange(format(next.replace(/[^\d]/g, "")));
  };

  const step = (direction: 1 | -1) => {
    const next = digits ? Number(digits) + direction * STEP : direction * STEP;
    change(String(Math.max(0, next)));
  };

  return (
    <div className="relative h-8 w-full rounded-[4px] border border-border bg-surface transition-colors duration-300 focus-within:border-brand hover:border-brand/60">
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => change(e.target.value)}
        aria-label="Valor aporte"
        className="h-full w-full bg-transparent pl-[13px] pr-[30px] text-[14px] text-text outline-none"
      />
      <div className="absolute right-0 top-0 flex h-full w-[22px] flex-col border-l border-border">
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Incrementar valor"
          className="flex h-1/2 cursor-pointer items-center justify-center text-[7px] text-text transition-colors hover:bg-surface-muted hover:text-brand"
        >
          ▲
        </button>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Decrementar valor"
          className="flex h-1/2 cursor-pointer items-center justify-center border-t border-border text-[7px] text-text transition-colors hover:bg-surface-muted hover:text-brand"
        >
          ▼
        </button>
      </div>
    </div>
  );
}