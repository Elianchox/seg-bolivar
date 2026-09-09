import Image from "next/image";
import { IconMapPin } from "@pagos/components/ui/icons/icon-map-pin";
import type { OnlinePayment } from "@pagos/features/listado-pagos-en-linea/types/online-payment";
import { toInternalPaymentRoute } from "@pagos/features/listado-pagos-en-linea/utils/payment-route";

export function PayOnlineCard({ payment }: { payment: OnlinePayment }) {
  const href = toInternalPaymentRoute(payment.url) ?? "#";

  return (
    <a
      href={href}
      className="mb-8 block rounded-[12px] border border-[#e9eef2] bg-white p-4 hover:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
    >
      <h3 className="mb-0 line-clamp-2 h-[54px] text-[1.5rem] leading-[27px] font-semibold text-ink">
        {payment.title}
      </h3>
      <div className="p-[5px]" aria-hidden="true" />
      <div className="relative h-[150px] w-full overflow-hidden rounded-[12px] bg-[#efecec] text-center">
        <Image
          src={payment.image}
          alt={payment.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain p-6"
        />
      </div>
      <div className="p-[10px]" aria-hidden="true" />
      <div className="flex items-center gap-1 text-[0.7rem] font-normal text-text-muted">
        <IconMapPin size={22} className="inline-block align-middle" />
        {payment.city}
      </div>
      <div className="p-[5px]" aria-hidden="true" />
    </a>
  );
}
