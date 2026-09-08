import { Typography } from "@pagos/components/ui/typography";
import { footerColumns } from "@pagos/constants/footer";
import type { FooterBlock } from "@pagos/constants/footer";

function FooterColumnBlock({ block, isFirst }: { block: FooterBlock; isFirst: boolean }) {
  return (
    <>
      {!isFirst && (
        <>
          <div className="hidden py-[10px] md:block" />
          <div className="py-[15px] md:hidden" />
        </>
      )}
      <Typography as="h3" variant="overline" className="text-white">
        {block.title}
      </Typography>
      <div className="py-[5px]" />
      <span className="block h-[3px] w-6 bg-cream" />
      {isFirst && (
        <>
          <div className="hidden py-[10px] md:block" />
          <div className="py-[5px] md:hidden" />
        </>
      )}
      <ul className="m-0 list-none p-0">
        {block.links.map((link, idx) => (
          <li key={idx}>
            <Typography
              as="a"
              href={link.href}
              variant="body-sm"
              className="block py-[0.8rem] leading-[0.875rem]! tracking-[0.035px] text-white hover:underline"
            >
              {link.label}
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}

export function FooterLinkColumns() {
  return (
    <div className="bg-ink pb-8 pt-14 md:py-8">
      <div className="mx-auto px-4 md:px-0 md:max-w-[720px] lg:max-w-[960px]">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {footerColumns.map((blocks, columnIndex) => (
            <div key={columnIndex} className="px-3">
              {blocks.map((block, blockIndex) => (
                <FooterColumnBlock key={block.title} block={block} isFirst={blockIndex === 0} />
              ))}
              <div className="py-[15px] md:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}