interface StepsProps {
  current: number;
  items: string[];
}

export function Steps({ current, items }: StepsProps) {
  return (
    <ol className="flex w-full">
      {items.map((title, index) => {
        const active = index === current;
        const isLast = index === items.length - 1;
        return (
          <li key={title} className={`relative ${isLast ? "flex-none" : "flex-1"}`}>
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-[58px] top-[12px] w-full px-6 pt-[3.5px]"
              >
                <span className="block h-px w-full bg-border" />
              </span>
            )}
            <span
              className={`ml-[42px] inline-flex h-8 w-8 items-center justify-center rounded-full border text-[15px] [font-family:var(--font-roboto)] ${
                active
                  ? "border-brand bg-brand text-surface"
                  : "border-text-disabled bg-transparent text-text-disabled"
              }`}
            >
              <span className="relative -top-[1px]">{index + 1}</span>
            </span>
            <div
              className={`mt-2 w-[116px] text-center text-[15px] leading-8 ${
                active ? "text-ink" : "text-text-muted"
              }`}
            >
              {title}
            </div>
          </li>
        );
      })}
    </ol>
  );
}