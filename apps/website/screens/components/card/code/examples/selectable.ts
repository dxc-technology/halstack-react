import { DxcInset, DxcCard, DxcParagraph, DxcContainer, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
import resultsetImage from "../images/resultsetTable.png";
import accordionImage from "../images/accordion.png";
import { useState } from "react";

const code = `() => {
  const resultset = {
    alt: "Resultset Table image",
    width: "300px",
    height: "100%",
    objectFit: "cover",
    src: resultsetImage.src,
  };
  const accordion = {
    alt: "Accordion image",
    width: "300px",
    height: "100%",
    objectFit: "cover",
    src: accordionImage.src,
  };

  const [selectedCard, setSelectedCard] = useState<string>("accordion");

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcCard image={resultset} selectable selected={selectedCard === "resultset"} onClick={() => setSelectedCard("resultset")}>
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
        <DxcCard image={accordion} selectable selected={selectedCard === "accordion"} onClick={() => setSelectedCard("accordion")}>
          <DxcContainer maxWidth="300px">
            <DxcFlex direction="column" gap="var(--spacing-s)">
              <DxcHeading text="Accordion" level={4} />
              <DxcParagraph>
                A component designed to present large amounts of content in a small space by leveraging progressive disclosure.
              </DxcParagraph>
            </DxcFlex>
          </DxcContainer>
        </DxcCard>
      </DxcFlex>
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
  accordionImage,
  useState,
};

export default { code, scope };
