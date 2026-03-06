import { ReactNode } from "react";
import { Colors, Field, FileData, Logos } from "../../types";

export type BrandingColorGridProps = {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
  colors: Colors;
  onColorChange: (colorType: string) => (newColor: string) => void;
};

export type BrandingLogoGridProps = {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
  logos: Logos;
  onLogoChange: (logoType: string, files: FileData[]) => void;
};
