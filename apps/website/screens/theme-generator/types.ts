import { CssColor } from "@adobe/leonardo-contrast-colors";
import { ReactNode } from "react";

export type Tokens = Record<string, string>;
export type BaseColors = Record<string, CssColor>;

export type Step = 0 | 1 | 2;

export type Colors = {
  primary: CssColor;
  secondary: CssColor;
  tertiary: CssColor;
  neutral: CssColor;
  info: CssColor;
  success: CssColor;
  error: CssColor;
  warning: CssColor;
};

export type ColorGroups = {
  primary: string[];
  secondary: string[];
  tertiary: string[];
  semantic01: string[];
  semantic02: string[];
  semantic03: string[];
  semantic04: string[];
  neutral: string[];
  alpha: string[];
};

export type FileData = {
  error?: string;
  file: File;
  preview?: string;
};

export type Logos = {
  mainLogo: FileData[];
  footerLogo: FileData[];
  footerReducedLogo: FileData[];
  favicon: FileData[];
};

export type Field = {
  id: string;
  label: string;
  helperText: string;
};

export type BrandingDetailsSection = {
  id: string;
  title: string;
  icon: ReactNode;
  fields: Field[];
};
