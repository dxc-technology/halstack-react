import { DxcImage, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcImage 
        alt="Wooden dock on a lake" 
        caption="Wooden dock on a beautifully landscaped lake."
        width="100%"
        src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcImage,
  DxcInset,
};

export default { code, scope };
