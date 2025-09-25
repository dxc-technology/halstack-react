import { DxcLink, DxcInset, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-l)" direction="column">
        <DxcParagraph>
          This is a text with a <DxcLink href="#" icon={icon}>Link</DxcLink> with icon.
        </DxcParagraph>
        <DxcParagraph>
          This is a text with a <DxcLink href="#" icon="filled_favorite">Link</DxcLink> with icon.
        </DxcParagraph>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcLink,
  DxcParagraph,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
