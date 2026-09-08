import { PageBanner } from "@pagos/features/pagos-en-linea/components/page-banner";
import { PaymentSection } from "@pagos/features/pagos-en-linea/components/payment-section";
import { StepsSection } from "@pagos/features/pagos-en-linea/components/steps-section";

export function PagosEnLineaView() {
  return (
    <>
      <PageBanner />
      <StepsSection />
      <PaymentSection />
    </>
  );
}