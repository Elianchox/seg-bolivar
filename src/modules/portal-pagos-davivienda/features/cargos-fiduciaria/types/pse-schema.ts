import { z } from "zod";

export const pseSchema = z.object({
  bank: z.string().min(1, "Debe seleccionar un banco"),
  personType: z.string().min(1, "Debe seleccionar el tipo de persona"),
  docType: z.string().min(1, "Debe seleccionar el tipo de documento"),
  docNumber: z.string().trim().min(1, "Debe ingresar el número de documento"),
  name: z.string().trim().min(1, "Debe ingresar su nombre o razón social"),
  email: z
    .string()
    .trim()
    .min(1, "Debe ingresar su correo electrónico")
    .email("El correo electrónico no es válido"),
  phone: z.string().trim().min(1, "Debe ingresar su teléfono de contacto"),
  termsAccepted: z
    .boolean()
    .refine(
      (value) => value,
      "Para continuar con la transacción usted debe Aceptar los Términos y Condiciones. Le invitamos a leerlos detalladamente.",
    ),
});

export type PseFormValues = z.infer<typeof pseSchema>;

export const DEFAULT_PSE_VALUES: PseFormValues = {
  bank: "",
  personType: "",
  docType: "",
  docNumber: "",
  name: "JHONATAN YECID VILLALOBO PEREZ",
  email: "",
  phone: "",
  termsAccepted: false,
};

export const BANK_OPTIONS = [
  { value: "banco-bogota", label: "Banco de Bogotá" },
  { value: "bancolombia", label: "Bancolombia" },
  { value: "banco-av-villas", label: "Banco AV Villas" },
  { value: "banco-occidente", label: "Banco de Occidente" },
  { value: "banco-popular", label: "Banco Popular" },
  { value: "davivienda", label: "Banco Davivienda" },
] as const;

export const PERSON_TYPE_OPTIONS = [
  { value: "natural", label: "Persona natural" },
  { value: "juridica", label: "Persona jurídica" },
] as const;

export const DOC_TYPE_OPTIONS = [
  { value: "cc", label: "CC" },
  { value: "ce", label: "CE" },
  { value: "ti", label: "TI" },
  { value: "nit", label: "NIT" },
  { value: "pasaporte", label: "Pasaporte" },
] as const;

export const TERMS_URL =
  "https://o1p-pasarelapagbucket-p01.s3.amazonaws.com/images/TerminosYCondicionesPortal.pdf";