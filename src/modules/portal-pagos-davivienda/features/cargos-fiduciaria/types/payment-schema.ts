import { z } from "zod";

const toAmount = (value: string) => Number(value.replace(/[^\d]/g, ""));

export const paymentSchema = z.object({
  ticketNumber: z.string().trim().min(1, "Debe ingresar su número de identificación"),
  productNumber: z.string().trim().min(1, "Debe ingresar el número de fondo de inversión"),
  amount: z.string().refine((value) => toAmount(value) > 0, "El valor debe ser mayor que cero"),
  termsAccepted: z.boolean().refine((value) => value, "Debe aceptar los términos y condiciones"),
});

export type PaymentFormValues = z.infer<typeof paymentSchema>;