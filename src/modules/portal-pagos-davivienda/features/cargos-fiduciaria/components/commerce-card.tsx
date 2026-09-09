import Image from "next/image";
import { Typography } from "@davivienda-pagos/components/ui/typography";
import { COMMERCE_INFO } from "@davivienda-pagos/constants/commerce";
import commerce from "@davivienda-pagos/assets/commerce.jpg";

export function CommerceCard() {
  return (
    <div className="flex border-y border-border-light py-6">
      <div className="w-[100px]">
        <Image
          src={commerce}
          alt="commerce"
          width={1200}
          height={1200}
          className="h-auto w-full rounded-[8px]"
        />
      </div>
      <div className="flex flex-col justify-center pl-5">
        <Typography as="h3" variant="title" className="m-0">
          {COMMERCE_INFO.title}
        </Typography>
        <Typography variant="description" className="m-0">
          {COMMERCE_INFO.address}
        </Typography>
        <Typography variant="description" className="m-0">
          {COMMERCE_INFO.phone}
        </Typography>
        <Typography variant="description" className="m-0">
          {COMMERCE_INFO.city}
        </Typography>
        <Typography variant="description" className="m-0">
          {COMMERCE_INFO.description}
        </Typography>
      </div>
    </div>
  );
}