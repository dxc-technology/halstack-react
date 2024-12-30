// import { createContext, ReactNode, useMemo } from "react";
// import Color from "color";

// type BackgroundColors = "dark" | "light";
// const BackgroundColorContext = createContext<BackgroundColors | null>(null);

// const getColorType = (hexColor: string): BackgroundColors => {
//   try {
//     if (hexColor) {
//       const hslColor = Color(hexColor).hsl();
//       const lightnessColor = hslColor.lightness();
//       return lightnessColor <= 30 ? "dark" : "light";
//     } else {
//       return "light";
//     }
//   } catch (e) {
//     return "light";
//   }
// };

// type BackgroundColorProviderPropsType = {
//   color: string;
//   children: ReactNode;
// };
// const BackgroundColorProvider = ({ color, children }: BackgroundColorProviderPropsType): JSX.Element => {
//   const colorType = useMemo(() => getColorType(color), [color]);
//   return <BackgroundColorContext.Provider value={colorType}>{children}</BackgroundColorContext.Provider>;
// };
