import { Typography } from "@pagos/components/ui/typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <ol className="mb-0 flex list-none flex-wrap">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.label} className="flex items-center text-xs">
            {index > 0 && (
              <Typography as="span" variant="body-sm" className="mx-2 text-xs leading-[1.2]! text-text-muted">
                /
              </Typography>
            )}
            {item.href && !isLast ? (
              <Typography as="a" href={item.href} variant="body-sm" className="text-xs leading-[1.2]! text-white">
                {item.label}
              </Typography>
            ) : (
              <Typography
                as="span"
                variant="body-sm"
                className="text-xs leading-[1.2]! font-bold text-white"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </Typography>
            )}
          </li>
        );
      })}
    </ol>
  );
}