import { DxcChip, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      fill="currentColor"
    >
      <g id="Bounding_Box">
        <rect fill="none" width="24" height="24" />
      </g>
      <g id="Master">
        <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
      </g>
    </svg>
  );

  return (
    <DxcInset space="2rem">
      <DxcChip label="Home" prefixIcon={icon}/>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
};

export default { code, scope };
