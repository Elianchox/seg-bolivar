import { IconSearch } from "@pagos/components/ui/icons/icon-search";
import { Typography } from "@pagos/components/ui/typography";

interface SearchBarProps {
  action?: string;
  className?: string;
}

export function SearchBar({ action, className = "" }: SearchBarProps) {
  const content = (
    <>
      <div className="h-11 flex items-center overflow-hidden rounded-[12px] border border-surface-muted bg-surface">
        <input
          type="text"
          name={action ? "q" : undefined}
          autoComplete="off"
          placeholder="Encuentra lo que necesitas"
          aria-label="Encuentra lo que necesitas"
          className="h-full w-full flex-1 px-3 text-sm text-text outline-none placeholder:text-text-muted placeholder:text-[16px] font-semibold"
        />
        <button
          type={action ? "submit" : "button"}
          aria-label="Buscar"
          className="flex h-full items-center border-l border-surface-muted px-[15px] text-brand"
        >
          <IconSearch size={24} />
        </button>
      </div>
      <div className="absolute left-[0.8rem] right-[0.8rem] top-[68px] z-[99] hidden overflow-hidden rounded-[12px] border border-surface-muted bg-surface shadow-[0_6px_12px_rgba(108,117,125,0.20)]">
        <Typography
          as="h3"
          variant="caption"
          className="mb-0 px-4 pt-[1.1rem] text-[10px] font-normal"
        >
          RESULTADOS SUGERIDOS
        </Typography>
        <div className="py-[5px]" />
        <ul />
      </div>
      <div className="absolute left-[0.8rem] right-[0.8rem] top-[68px] z-[99] hidden overflow-hidden rounded-[12px] border border-surface-muted bg-surface shadow-[0_6px_12px_rgba(108,117,125,0.20)]">
        <Typography
          as="h3"
          variant="caption"
          className="mb-0 px-4 pt-[1.1rem] text-[10px] font-normal"
        >
          BÚSQUEDAS RECIENTES
        </Typography>
        <div className="py-[5px]" />
        <ul />
      </div>
    </>
  );

  if (action) {
    return (
      <form action={action} method="GET" className={`relative w-full ${className}`}>
        {content}
      </form>
    );
  }

  return <div className={`relative w-full ${className}`}>{content}</div>;
}