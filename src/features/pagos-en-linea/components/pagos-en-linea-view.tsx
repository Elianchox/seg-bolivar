import { PageBanner } from "@/features/pagos-en-linea/components/page-banner";
import { PaymentSection } from "@/features/pagos-en-linea/components/payment-section";
import { StepsSection } from "@/features/pagos-en-linea/components/steps-section";

export function PagosEnLineaView() {
  return (
    <>
      <PageBanner />
      <StepsSection />
      <PaymentSection />
    </>
  );
}