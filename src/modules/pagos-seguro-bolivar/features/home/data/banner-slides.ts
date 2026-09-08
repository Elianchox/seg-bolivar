import bannerLeVert from "@pagos/assets/home/banners/banner-le-vert.webp";
import bannerShalom from "@pagos/assets/home/banners/banner-shalom.webp";
import bannerToyStory from "@pagos/assets/home/banners/banner-toy-story.webp";

export interface BannerSlide {
  id: string;
  title: string;
  description: string;
  href: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: "toy-story",
    title: "Experiencia Toy Story en Constructora Bolívar",
    description:
      "Ven a vivir la experiencia en nuestras salas de ventas de Cali, Bogotá y Barranquilla.",
    href: "#",
    imageDesktop: bannerToyStory.src,
    imageMobile: bannerToyStory.src,
    imageAlt: "Banner Toy Story 5",
  },
  {
    id: "shalom",
    title: "Bienestar, naturaleza y exclusividad",
    description: "Conoce Shalom en el lugar más privilegiado de Pance.",
    href: "#",
    imageDesktop: bannerShalom.src,
    imageMobile: bannerShalom.src,
    imageAlt: "Bienestar, naturaleza y exclusividad",
  },
  {
    id: "le-vert-127",
    title: "Gran lanzamiento Le Vert 127",
    description:
      "Descubre el nuevo proyecto que llegó a robarse toda la atención de Pance.",
    href: "#",
    imageDesktop: bannerLeVert.src,
    imageMobile: bannerLeVert.src,
    imageAlt: "Gran lanzamiento Le Vert 127",
  },
];
