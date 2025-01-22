import { DxcButton, DxcInset, HalstackThemeProvider } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <HalstackThemeProvider value="theme-1">
        <DxcButton label="Button 1" />
      </HalstackThemeProvider>
      <HalstackThemeProvider value="theme-2">
        <DxcButton label="Button 2" margin={{ left: "small" }} />
      </HalstackThemeProvider>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
  HalstackThemeProvider
};

export default { code, scope };
