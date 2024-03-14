type Styles = ViewportStyles | ((s: ViewportStyles | undefined) => ViewportStyles) | null;
interface Viewport {
  name: string;
  styles: Styles;
  type: "desktop" | "mobile" | "tablet" | "other";
}
export interface ViewportStyles {
  height: number;
  width: number;
}
interface ViewportMap {
  [key: string]: Viewport;
}
export interface ViewportParameters {
    viewports: ViewportMap;
    defaultViewport: string;
}