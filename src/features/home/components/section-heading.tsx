import { Typography } from "@/components/ui/typography";

interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <Typography
        as="h2"
        variant="steps-title"
        className="text-[32px]! leading-[32px]! tracking-[-0.16px]!"
      >
        {title}
      </Typography>
    </div>
  );
}
