import abedulesImage from "@pagos/assets/home/projects/abedules.webp";
import bosquesImage from "@pagos/assets/home/projects/bosques-las-victorias.webp";
import claroBrisaImage from "@pagos/assets/home/projects/claro-brisa.webp";
import claroHorizonteImage from "@pagos/assets/home/projects/claro-horizonte.webp";
import leVertImage from "@pagos/assets/home/projects/le-vert-127.webp";
import shalomImage from "@pagos/assets/home/projects/shalom.webp";

export interface HomeProject {
  id: string;
  label: string;
  title: string;
  city: string;
  department: string;
  classification: string;
  image: string;
  href: string;
  external: boolean;
  area: string;
  bedrooms: string;
  bathrooms: string;
  hasSalaComedor: boolean;
  price: string;
  description: string;
  contactUuid?: string;
}

export const homeProjects: HomeProject[] = [
  {
    id: "le-vert-127",
    label: "Lanzamiento",
    title: "Le Vert 127",
    city: "Cali y sus alrededores",
    department: "Valle del Cauca",
    classification: "VIS",
    image: leVertImage.src,
    href: "#",
    external: false,
    area: "35m2",
    bedrooms: "1",
    bathrooms: "",
    hasSalaComedor: true,
    price: "$310.000.000 COP",
    description:
      "Descubre LeVert 127 en Pance, la mejor inversión en el sur de Cali! Disfruta de un exclusivo proyecto con 18 amenidades premium",
    contactUuid: "9bdb5c25-5d7e-420f-95b5-ba5d1b80ff24",
  },
  {
    id: "shalom",
    label: "Lanzamiento",
    title: "Shalom",
    city: "Cali y sus alrededores",
    department: "Valle del Cauca",
    classification: "No VIS",
    image: shalomImage.src,
    href: "#",
    external: true,
    area: "374m2",
    bedrooms: "4",
    bathrooms: "4",
    hasSalaComedor: true,
    price: "$3.897.690.000 COP",
    description:
      "Descubre Shalom en Pance, Cali. Un proyecto de lujo con cabañas y suites tipo resort, rodeado de naturaleza y exclusividad. Vive la experiencia Constructora Bolívar.",
  },
  {
    id: "claro-brisa",
    label: "Lanzamiento",
    title: "Claro Brisa - Parque Claro",
    city: "Cali y sus alrededores",
    department: "Valle del Cauca",
    classification: "VIP",
    image: claroBrisaImage.src,
    href: "#",
    external: false,
    area: "45m2",
    bedrooms: "3",
    bathrooms: "1",
    hasSalaComedor: true,
    price: "$204.021.000 COP",
    description:
      "¿Buscas un lugar donde la tranquilidad de la naturaleza se encuentre con la comodidad de la vida moderna? Claro Brisa llega a Jamundí para ofrecerte el equilibrio perfecto.",
    contactUuid: "14f50c13-4d9d-4481-bb52-5d7b3b14db63",
  },
  {
    id: "claro-horizonte",
    label: "Lanzamiento",
    title: "Claro Horizonte - Parque Claro",
    city: "Cali y sus alrededores",
    department: "Valle del Cauca",
    classification: "VIS",
    image: claroHorizonteImage.src,
    href: "#",
    external: false,
    area: "64m2",
    bedrooms: "2",
    bathrooms: "1",
    hasSalaComedor: true,
    price: "$277.536.600 COP",
    description:
      "Disfruta de la libertad y el confort de estrenar casa de 2 pisos en el urbanismo Parque Claro, en Jamundí. Diseñado como urbanismo abierto y en un sector estrato 3 de excelente proyección, Claro Horizonte es la mejor opción para el futuro de tu familia.",
    contactUuid: "24a3ab97-cc80-421d-a888-88c069e06b83",
  },
  {
    id: "bosques-de-las-victorias",
    label: "Lanzamiento",
    title: "Bosques de Las Victorias",
    city: "Ibagué",
    department: "Tolima",
    classification: "VIS",
    image: bosquesImage.src,
    href: "#",
    external: false,
    area: "52m2",
    bedrooms: "2 alcobas",
    bathrooms: "1 baño",
    hasSalaComedor: true,
    price: "$300.000.000 COP",
    description:
      "Bosques de las Victorias es un conjunto cerrado de casas de dos pisos ubicado en Arboleda Campestre, rodeado de naturaleza y zonas boscosas que resaltan la fauna y flora de Ibagué.",
    contactUuid: "18bc2463-405f-4730-8133-54984be84ab3",
  },
  {
    id: "abedules",
    label: "Lanzamiento",
    title: "Abedules - Ciudad del Valle",
    city: "Cali y sus alrededores",
    department: "Valle del Cauca",
    classification: "VIS",
    image: abedulesImage.src,
    href: "#",
    external: false,
    area: "50m2",
    bedrooms: "2 alcobas",
    bathrooms: "1 baño",
    hasSalaComedor: true,
    price: "$256.960.000 COP",
    description:
      "Abedules destaca por su diseño arquitectónico funcional y una infraestructura pensada para que tú y tu familia disfruten al máximo su día a día.",
    contactUuid: "e3fa900a-554d-448f-8529-ea268b2d6e69",
  },
];