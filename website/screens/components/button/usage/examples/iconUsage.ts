import {
  DxcButton,
  DxcStack,
  DxcRow,
  DxcInset,
  DxcText,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
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
      <DxcStack gutter="1.5rem">
        <DxcRow justify="spaceEvenly">
          <DxcButton label="Primary" size="large" icon={icon} />
          <DxcButton
            label="Primary"
            size="large"
            iconPosition="after"
            icon={icon}
          />
          <DxcButton icon={icon} />
        </DxcRow>
        <DxcRow justify="spaceEvenly">
          <DxcButton
            size="large"
            mode="secondary"
            label="Secondary"
            icon={icon}
          />
          <DxcButton
            size="large"
            mode="secondary"
            label="Secondary"
            iconPosition="after"
            icon={icon}
          />
          <DxcButton mode="secondary" icon={icon} />
        </DxcRow>
        <DxcRow justify="spaceEvenly">
          <DxcButton label="Text" mode="text" size="large" icon={icon} />
          <DxcButton
            label="Text"
            mode="text"
            size="large"
            iconPosition="after"
            icon={icon}
          />
          <DxcButton mode="text" icon={icon} />
        </DxcRow>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcRow,
  DxcStack,
  DxcInset,
  DxcText,
};

export default { code, scope };
