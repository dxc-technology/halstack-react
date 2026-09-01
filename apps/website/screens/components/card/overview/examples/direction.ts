import {
  DxcInset,
  DxcCard,
  DxcParagraph,
  DxcFlex,
  DxcHeading,
  DxcGrid,
  DxcContainer,
} from "@dxc-technology/halstack-react";
import resultsetImage from "../../code/images/resultsetTable.png";

const code = `() => {
  const image = {
 alt: "Resultset Table image",
    width: "100%",
    height: "150px",
    objectFit: "cover",
    src: resultsetImage.src,
  };

  const content = (
    <DxcFlex gap="var(--spacing-gap-m)" direction="column">
      <DxcHeading level={3} text="Title" />
      <DxcParagraph>
        The image component serves as a versatile tool for efficiently loading and displaying visual content across
        diverse contexts within your application.
      </DxcParagraph>
    </DxcFlex>
  );

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcGrid gap="var(--spacing-gap-m)" templateColumns={["repeat(2, 1fr)"]}>
        <DxcCard image={image} direction="row">
          <DxcContainer maxWidth="50%">
            {content}
          </DxcContainer>
        </DxcCard>
        <DxcCard image={image} >
          <DxcContainer maxWidth="100%">
            {content}
          </DxcContainer>
        </DxcCard>
      </DxcGrid>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcContainer,
  DxcFlex,
  DxcGrid,
  DxcHeading,
  DxcInset,
  DxcParagraph,
  resultsetImage,
};

export default { code, scope };
