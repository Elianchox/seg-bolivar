interface StepsProps {
  current: number;
  items: string[];
}

export function Steps({ current, items }: StepsProps) {
  return (
    <ol className="flex w-full list-none">
      {items.map((title, index) => {
        const active = index === current;
        const isLast = index === items.length - 1;
        return (
          <li key={title} className={`relative ${isLast ? "flex-none" : "flex-1"}`}>
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-[10px] right-[10px] top-[16px] h-px bg-border"
              />
            )}
            <div className="relative z-10 flex flex-col items-center text-center">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[15px] leading-none [font-family:var(--font-roboto)] ${
                  active
                    ? "border-brand bg-brand text-surface"
                    : "border-text-disabled bg-transparent text-text-disabled"
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`mt-2 text-[15px] leading-8 ${
                  active ? "text-ink" : "text-text-muted"
                }`}
              >
                {title}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}