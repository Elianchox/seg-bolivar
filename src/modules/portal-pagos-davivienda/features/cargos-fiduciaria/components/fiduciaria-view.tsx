import { Steps } from "@davivienda-pagos/components/ui/steps";
import { PAYMENT_STEPS } from "@davivienda-pagos/constants/steps";
import { CommerceCard } from "./commerce-card";
import { PaymentForm } from "./payment-form";

export function FiduciariaView() {
  return (
    <main className="mx-auto w-full flex-1 px-[15px] pt-6 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <div className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <CommerceCard />
      </div>
      <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <div className="w-full md:w-3/4">
          <Steps current={0} items={PAYMENT_STEPS} />
        </div>
      </section>
      <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <div className="w-full md:w-3/4">
          <PaymentForm />
        </div>
      </section>
    </main>
  );
}