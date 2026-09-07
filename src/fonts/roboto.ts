import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    { path: "./Roboto-Thin.woff2", weight: "100", style: "normal" },
    { path: "./Roboto-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./Roboto-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./Roboto-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./Roboto-Light.woff2", weight: "300", style: "normal" },
    { path: "./Roboto-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./Roboto-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Roboto-Italic.woff2", weight: "400", style: "italic" },
    { path: "./Roboto-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Roboto-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./Roboto-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./Roboto-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./Roboto-Bold.woff2", weight: "700", style: "normal" },
    { path: "./Roboto-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./Roboto-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./Roboto-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./Roboto-Black.woff2", weight: "900", style: "normal" },
    { path: "./Roboto-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});