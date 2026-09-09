import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    { path: "./helvetica-neue-lt-std-light.woff", weight: "300", style: "normal" },
    { path: "./helvetica-neue-lt-std-regular.woff", weight: "400", style: "normal" },
    { path: "./helvetica-neue-lt-std-regular-italic.woff", weight: "400", style: "italic" },
    { path: "./helvetica-neue-lt-std-medium.woff", weight: "500", style: "normal" },
    { path: "./helvetica-neue-lt-pro-bold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});