export interface FilterOption {
  value: string;
  label: string;
}

export const projectTypeOptions: FilterOption[] = [
  { value: "proyectos", label: "Proyectos" },
  { value: "locales_comerciales", label: "Locales Comerciales" },
];

export const locationOptions: FilterOption[] = [
  { value: "all", label: "Ubicación" },
  { value: "62", label: "Armenia" },
  { value: "33", label: "Barranquilla" },
  { value: "20", label: "Bogotá y sus alrededores" },
  { value: "21", label: "Cali y sus alrededores" },
  { value: "59", label: "Cartagena" },
  { value: "60", label: "Ibagué" },
  { value: "61", label: "Ricaurte (CUND)" },
  { value: "55", label: "Rionegro" },
  { value: "57", label: "Santa Marta" },
  { value: "56", label: "Soledad – Atlántico" },
];

export const typeOptions: FilterOption[] = [
  { value: "all", label: "Tipo" },
  { value: "8", label: "Apartamentos" },
  { value: "9", label: "Casas" },
  { value: "10", label: "Mixto" },
  { value: "415", label: "Lote" },
];

export const classificationOptions: FilterOption[] = [
  { value: "all", label: "Clasificación" },
  { value: "320", label: "No VIS" },
  { value: "321", label: "VIP" },
  { value: "322", label: "VIP/VIS" },
  { value: "323", label: "VIS" },
];