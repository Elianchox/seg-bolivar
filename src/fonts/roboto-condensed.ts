import localFont from "next/font/local";

export const robotoCondensed = localFont({
  src: [
    { path: "./RobotoCondensed-Thin.woff2", weight: "100", style: "normal" },
    { path: "./RobotoCondensed-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./RobotoCondensed-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./RobotoCondensed-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./RobotoCondensed-Light.woff2", weight: "300", style: "normal" },
    { path: "./RobotoCondensed-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./RobotoCondensed-Regular.woff2", weight: "400", style: "normal" },
    { path: "./RobotoCondensed-Italic.woff2", weight: "400", style: "italic" },
    { path: "./RobotoCondensed-Medium.woff2", weight: "500", style: "normal" },
    { path: "./RobotoCondensed-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./RobotoCondensed-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./RobotoCondensed-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./RobotoCondensed-Bold.woff2", weight: "700", style: "normal" },
    { path: "./RobotoCondensed-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./RobotoCondensed-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./RobotoCondensed-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./RobotoCondensed-Black.woff2", weight: "900", style: "normal" },
    { path: "./RobotoCondensed-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});