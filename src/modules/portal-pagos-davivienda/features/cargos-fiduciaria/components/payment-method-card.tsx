import Image from "next/image";
import pse from "@davivienda-pagos/assets/pse.png";

export function PaymentMethodCard() {
  return (
    <div className="flex min-h-[70px] cursor-pointer items-center rounded-[14px] border border-brand bg-surface p-[10px] shadow-[0_4px_15px_rgba(172,180,188,0.15)] transition-all duration-300">
      <div className="my-auto w-[50px] shrink-0 pl-[10px] pr-[15px]">
        <Image
          src={pse}
          alt="payment method"
          width={153}
          height={150}
          className="h-auto w-full"
        />
      </div>
      <div className="my-auto text-[18px] font-normal leading-[21.6px] text-heading">PSE</div>
    </div>
  );
}