import { DxcInset, DxcCard, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const image = {
    alt: "Example image",
    width: "100%",
    height: "250px",
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
          <DxcParagraph>Personal information</DxcParagraph>
        </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcParagraph,
  useState,
};

export default { code, scope };
