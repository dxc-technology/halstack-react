import { DxcInset, DxcCard, DxcParagraph, DxcContainer, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import resultsetImage from "../images/resultsetTable.png";

const code = `() => {
  const resultset = {
    alt: "Resultset Table image",
    width: "300px",
    height: "100%",
    objectFit: "cover",
    src: resultsetImage.src,
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCard image={resultset}>
        <DxcContainer maxWidth="300px">
          <DxcFlex direction="column" gap="var(--spacing-s)">
            <DxcHeading text="Resultset Table" level={4} />
            <DxcParagraph>
              A data-rich component designed for displaying large sets of information with built-in features like 
              sorting, pagination, and scroll behavior to support efficient exploration and comparison.
            </DxcParagraph>
          </DxcFlex>
        </DxcContainer>
      </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcContainer,
  DxcParagraph,
  DxcHeading,
  DxcFlex,
  resultsetImage,
};

export default { code, scope };
