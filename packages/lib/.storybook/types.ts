import { Preview } from "@storybook/react";

export interface ViewportStyles {
  height: number;
  width: number;
}
type Styles = ViewportStyles | ((s: ViewportStyles | undefined) => ViewportStyles) | null;
interface Viewport {
  name: string;
  styles: Styles;
  type: "desktop" | "mobile" | "tablet" | "other";
}
interface ViewportMap {
  [key: string]: Viewport;
}
interface ViewportParameters {
  viewports: ViewportMap;
  defaultViewport: string;
}

interface A11yRule {
  id: string;
  enabled: boolean;
}

interface A11yParameters {
  disable?: boolean;
  config: {
    rules: A11yRule[];
  };
  options?: Record<string, unknown>;
}

export interface StorybookParameters {
  controls: {
    matchers: {
      color: RegExp;
      date: RegExp;
    };
  };
  a11y: A11yParameters;
  viewport?: ViewportParameters;
}

export interface PreviewExtended extends Omit<Preview, "parameters"> {
  parameters: StorybookParameters;
}
