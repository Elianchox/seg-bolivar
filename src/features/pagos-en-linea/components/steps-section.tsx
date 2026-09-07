import { Typography } from "@/components/ui/typography";
import {
  StepIcon1,
  StepIcon2,
  StepIcon3,
  StepIcon4,
  StepIcon5,
} from "@/features/pagos-en-linea/components/step-icons";

const steps = [
  {
    icon: StepIcon1,
    text: "Asegúrate de usar un computador o dispositivo en el que confíes.",
  },
  {
    icon: StepIcon2,
    text: "Contar con una cuenta de ahorros o corriente en una entidad financiera afiliada a la red ACH (PSE).",
  },
  {
    icon: StepIcon3,
    text: "Pedir en tu entidad financiera la clave para hacer transacciones en línea.",
  },
  {
    icon: StepIcon4,
    text: "Acepta los términos y condiciones y busca el nombre de tu vivienda.",
  },
  {
    icon: StepIcon5,
    text: "¡Y listo! Podrás realizar tus pagos de forma fácil, rápida y segura.",
  },
];

export function StepsSection() {
  return (
    <section className="mx-auto px-4 md:px-0 md:max-w-[720px] lg:max-w-[960px]" aria-label="Pasos para realizar pagos en línea">
      <div className="py-[25px]" aria-hidden="true" />
      <div className="mx-auto w-full px-6 py-4 md:max-w-[1320px] md:px-3 md:py-0">
        <div className="-mx-3 flex flex-wrap items-center justify-between">
          <div className="w-full px-3 text-center">
            <Typography as="h2" variant="steps-title" className="mb-2">
              Para realizar tus pagos debes tener en cuenta lo siguiente:
            </Typography>
            <div className="p-[10px]" aria-hidden="true" />
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap items-center justify-between">
          {steps.map(({ icon: Icon, text }) => (
            <div key={text} className="w-full px-3 md:w-[16.6667%]">
              <div className="mb-6 flex items-center md:mb-0 md:flex md:flex-col md:text-center">
                <Icon />
                <div className="p-[5px]" aria-hidden="true" />
                <Typography
                  as="p"
                  className="text-left text-text leading-[22px]! md:text-center md:leading-[19.2px]!"
                >
                  {text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[25px]" aria-hidden="true" />
    </section>
  );
}