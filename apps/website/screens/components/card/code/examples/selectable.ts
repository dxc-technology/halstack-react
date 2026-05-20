import { DxcInset, DxcCard, DxcParagraph, DxcContainer } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const image = {
    alt: "Example image",
    width: "445px",
    height: "100%",
    objectFit: "cover",
    src: "https://picsum.photos/id/11/1920/1080",
  };

  const [selected, setSelected] = useState(false);
  const onChange = (newValue) => {
    setSelected(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCard image={image} selectable selected={selected} onChange={(newValue) => onChange(newValue)}>
        <DxcContainer maxWidth="445px">
          <DxcParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at pretium mi. Sed ac mi purus. Donec
            mattis luctus nisi, vitae scelerisque metus. Praesent in justo vitae quam mollis sollicitudin. Cras at consequat
            libero.
          </DxcParagraph>
        </DxcContainer>
      </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcParagraph,
  DxcContainer,
  useState,
};

export default { code, scope };
