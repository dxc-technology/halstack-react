import { DxcButton, DxcFlex, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="1.5rem">
        <DxcButton icon="volunteer_activism" label="Donate" />
        <DxcButton icon="filled_volunteer_activism" mode="secondary" title="Donate" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
