import { DxcLink, DxcInset, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";

const LinkPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Link" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex gap="var(--spacing-padding-xl)" direction="column">
          <DxcParagraph>
            This is a text with a{" "}
            <DxcLink href="#" newWindow>
              Link
            </DxcLink>{" "}
            to another page.
          </DxcParagraph>
          <DxcParagraph>
            This is a text with a{" "}
            <DxcLink href="#" newWindow inheritColor>
              Link
            </DxcLink>{" "}
            to another page.
          </DxcParagraph>
          <DxcParagraph>
            This is a text with an{" "}
            <DxcLink iconPosition="after" icon="filled_favorite" href="#" newWindow>
              Icon after
            </DxcLink>{" "}
            the link.
          </DxcParagraph>
        </DxcFlex>
      </DxcInset>
    </DxcFlex>
  );
};

export default LinkPreview;
