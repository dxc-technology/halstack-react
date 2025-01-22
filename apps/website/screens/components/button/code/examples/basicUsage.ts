import { DxcButton, DxcInset, HalstackThemeContextProvider } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <HalstackThemeContextProvider value="theme-1">
        <DxcButton label="Button 1" />
      </HalstackThemeContextProvider>
      <HalstackThemeContextProvider value="theme-2">
        <DxcButton label="Button 2" margin={{ left: "small" }} />
      </HalstackThemeContextProvider>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
  HalstackThemeContextProvider
};

export default { code, scope };
