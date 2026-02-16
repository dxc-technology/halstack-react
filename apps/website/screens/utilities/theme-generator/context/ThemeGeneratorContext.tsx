import { createContext, useContext, useState, ReactNode } from "react";
import { FileData } from "../../../../../../packages/lib/src/file-input/types";

export type Color = {
  name: string;
  value: string;
};

export type Colors = Color[];

export type Logo = {
  name: string;
  value: FileData[];
};

type ThemeGeneratorContextType = {
  // Theme settings state
  currentStep: 0 | 1 | 2;
  setCurrentStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;

  // Colors state
  colors: Colors;
  setColors: React.Dispatch<React.SetStateAction<Colors>>;
  updateColor: (colorName: string, newValue: string) => void;

  // Logos state
  logos: Logo[];
  setLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
  getLogoValue: (logoName: string) => FileData[];
  updateLogoValue: (logoName: string, newValue: FileData[]) => void;
  getLogoUrl: (logoName: string) => string;

  // Active components for preview
  activeComponents: { name: string; preview: ReactNode }[];
  setActiveComponents: React.Dispatch<React.SetStateAction<{ name: string; preview: ReactNode }[]>>;
};

const ThemeGeneratorContext = createContext<ThemeGeneratorContextType | undefined>(undefined);

export const ThemeGeneratorProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);
  const [activeComponents, setActiveComponents] = useState<{ name: string; preview: ReactNode }[]>([]);

  const [colors, setColors] = useState<Colors>([
    { name: "primary", value: "#5f249f" },
    { name: "secondary", value: "#0067b3" },
    { name: "tertiary", value: "#c2c2c2" },
    { name: "info", value: "#0067b3" },
    { name: "success", value: "#24a148" },
    { name: "error", value: "#d0011b" },
    { name: "neutral", value: "#000000" },
  ]);

  const [logos, setLogos] = useState<Logo[]>([]);

  // Helper functions for colors
  const updateColor = (colorName: string, newValue: string) => {
    setColors((prev) => prev.map((color) => (color.name === colorName ? { ...color, value: newValue } : color)));
  };

  // Helper functions for logos
  const getLogoValue = (logoName: string): FileData[] => {
    const logo = logos.find((l) => l.name === logoName);
    return logo ? logo.value : [];
  };

  const updateLogoValue = (logoName: string, newValue: FileData[]) => {
    const existingLogoIndex = logos.findIndex((l) => l.name === logoName);

    if (existingLogoIndex >= 0) {
      // Update existing logo
      setLogos((prev) =>
        prev.map((logo, index) => (index === existingLogoIndex ? { ...logo, value: newValue } : logo))
      );
    } else {
      // Add new logo
      setLogos((prev) => [...prev, { name: logoName, value: newValue }]);
    }
  };

  const getLogoUrl = (logoName: string): string => {
    const logo = logos.find((l) => l.name === logoName);
    if (logo && logo.value.length > 0) {
      const fileData = logo.value[0];
      if (fileData) {
        // Use preview URL if available, otherwise create one from the File object
        return fileData.preview || URL.createObjectURL(fileData.file);
      }
    }
    return "";
  };

  const value: ThemeGeneratorContextType = {
    currentStep,
    setCurrentStep,
    colors,
    setColors,
    updateColor,
    logos,
    setLogos,
    getLogoValue,
    updateLogoValue,
    getLogoUrl,
    activeComponents,
    setActiveComponents,
  };

  return <ThemeGeneratorContext.Provider value={value}>{children}</ThemeGeneratorContext.Provider>;
};

export const useThemeGenerator = () => {
  const context = useContext(ThemeGeneratorContext);
  if (!context) {
    throw new Error("useThemeGenerator must be used within a ThemeGeneratorProvider");
  }
  return context;
};
