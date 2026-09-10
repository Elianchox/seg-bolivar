import { z } from "zod";

export const pseSchema = z
  .object({
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
    phone: z
      .string()
      .trim()
      .min(1, "Debe ingresar su teléfono de contacto")
      .refine((value) => /^\d{10}$/.test(value), "El número de teléfono no es válido"),
    termsAccepted: z
      .boolean()
      .refine(
        (value) => value,
        "Para continuar con la transacción usted debe Aceptar los Términos y Condiciones. Le invitamos a leerlos detalladamente.",
      ),
  })
  .superRefine((data, ctx) => {
    if (data.docNumber.length > 0 && data.docNumber.length <= 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["docNumber"],
        message: "El número de documento no es válido",
      });
    }
    if (data.docType && data.docType !== "PA" && !/^\d+$/.test(data.docNumber)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["docNumber"],
        message: "El número de documento debe contener solo números",
      });
    }
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
  { value: "CC", label: "CC Cedula de Ciudadanía" },
  { value: "TI", label: "TI Tarjeta de Identidad" },
  { value: "Rut", label: "Rut Registro Unico Tributario" },
  { value: "Nit", label: "Nit Numero de Identificación Tributaria" },
  { value: "CE", label: "CE Cédula de Extranjería" },
  { value: "PA", label: "PA Pasaporte" },
  { value: "RC", label: "RC Registro Civil" },
] as const;

export const TERMS_URL =
  "https://o1p-pasarelapagbucket-p01.s3.amazonaws.com/images/TerminosYCondicionesPortal.pdf";