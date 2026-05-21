import { DxcInset, DxcCard, DxcParagraph, DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const image = {
    alt: "Example image",
    width: "300px",
    height: "100%",
    objectFit: "cover",
    src: "https://picsum.photos/id/11/1920/1080",
  };

  const content = (
    <DxcContainer maxWidth="300px">
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at pretium mi. Sed ac mi purus. Donec
        mattis luctus nisi, vitae scelerisque metus. Praesent in justo vitae quam mollis sollicitudin. Cras at consequat
        libero.
      </DxcParagraph>
    </DxcContainer>
  );

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex wrap="wrap" gap="2rem">
        <DxcCard image={image}>
          {content}
        </DxcCard>
        <DxcCard image={image} mode="outlined">
          {content}
        </DxcCard>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcFlex,
  DxcContainer,
  DxcParagraph,
};

export default { code, scope };
