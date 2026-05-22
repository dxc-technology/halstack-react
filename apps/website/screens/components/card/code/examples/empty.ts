import { DxcInset, DxcCard, DxcParagraph, DxcContainer } from "@dxc-technology/halstack-react";

const code = `() => {
  const image = {
    alt: "Example image",
    width: "445px",
    height: "100%",
    objectFit: "cover",
    src: "https://picsum.photos/id/11/1920/1080",
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCard image={image} isEmpty emptySize={{ width: "460px", height: "350px" }}>
      </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcContainer,
  DxcParagraph,
};

export default { code, scope };
