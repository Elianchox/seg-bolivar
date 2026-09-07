import news1 from "@/assets/home/news/news-1.webp";
import news2 from "@/assets/home/news/news-2.webp";
import news3 from "@/assets/home/news/news-3.webp";
import news4 from "@/assets/home/news/news-4.webp";
import news5 from "@/assets/home/news/news-5.webp";
import news6 from "@/assets/home/news/news-6.webp";

export interface HomeNewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
}

export const homeNews: HomeNewsItem[] = [
  {
    id: "news-1",
    category: "Estilo de vida",
    date: "Julio 29, 2026",
    title:
      "4 Claves para comprar vivienda en Cali, Armenia y la Costa Caribe en temporada vacacional: Amenidades, valorización y mudanza inteligente",
    excerpt:
      "Comprar vivienda nueva durante el receso escolar ofrece ventajas estratégicas únicas: permite evaluar proyectos con amenidades tipo club o resort, planificar la mudanza sin interferencia académica y asegurar activos de alta rentabilidad en destinos clave como Cali (Zenda), el Eje Cafetero (Eje Real) y el Caribe colombiano (Ísola Praia, Ísola Solé en Cartagena y Marawa Vista Mare en Santa Marta).",
    href: "#",
    image: news1.src,
  },
  {
    id: "news-2",
    category: "Finca raíz",
    date: "Julio 14, 2024",
    title:
      "Cómo convertir tu prima de servicios en la cuota inicial de tu vivienda en Colombia",
    excerpt:
      "El cierre del primer semestre del año no solo trae la oportunidad de evaluar nuestros propósitos personales, sino también una de las inyecciones de liquidez más esperadas por los trabajadores dependientes en Colombia: la prima de servicios.",
    href: "#",
    image: news2.src,
  },
  {
    id: "news-3",
    category: "Finca raíz",
    date: "Junio 25, 2026",
    title:
      "Invertir en locales comerciales en Bogotá, te contamos 5 razones para elegir.",
    excerpt:
      "Imagina tener un activo que trabaje para ti los 365 días del año en uno de los puntos neurálgicos de mayor transformación en la capital. Invertir en finca raíz siempre ha sido un refugio seguro, pero encontrar el local comercial perfecto en Bogotá requiere visión.",
    href: "#",
    image: news3.src,
  },
  {
    id: "news-4",
    category: "Estilo de vida",
    date: "Junio 19, 2026",
    title:
      "Vivir y trabajar: Tendencias de diseño multifuncional para tu nuevo apartamento",
    excerpt:
      "La forma en que habitamos el hogar ha dado un giro definitivo. En 2026, la tendencia de los espacios híbridos se mantiene firme como el estándar para quienes buscan comprar vivienda en Colombia",
    href: "#",
    image: news4.src,
  },
  {
    id: "news-5",
    category: "Finca raíz",
    date: "Junio 09, 2026",
    title:
      "Inversión desde el Exterior: El momento de comprar casa en Colombia es ahora",
    excerpt:
      "Descubre por qué 2026 es el momento ideal para invertir en vivienda en Colombia desde el exterior con procesos 100% digitales y alta valorización.",
    href: "#",
    image: news5.src,
  },
  {
    id: "news-6",
    category: "Hogar",
    date: "Abril 29, 2026",
    title:
      "Prevención y cuidado: Mantenimiento de su apartamento nuevo durante la temporada de lluvias en Cali",
    excerpt:
      "Adquirir una vivienda en Cali es un hito de vida. Sin embargo, el clima tropical de nuestra región, caracterizado por periodos de lluvias intensas, exige que los propietarios adopten un rol activo en la preservación de su inmueble",
    href: "#",
    image: news6.src,
  },
];
