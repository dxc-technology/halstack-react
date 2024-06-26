import { DxcAlert, DxcInset, DxcFlex } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcAlert
          type="confirm"
          size="fillParent"
          mode="inline"
          size="medium"
          inlineText="Inline text."
        >
          <DxcInset space="0.125rem">Custom content.</DxcInset>
        </DxcAlert>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
