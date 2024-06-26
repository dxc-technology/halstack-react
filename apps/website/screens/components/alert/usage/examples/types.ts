import { DxcAlert, DxcInset, DxcFlex } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcAlert
          type="info"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="confirm"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="warning"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="error"
          size="fillParent"
          inlineText="Inline text."
        />
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
