import React from "react";
import { DxcCard } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "../PreviewContainer";

const Card = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcCard
        imageSrc="https://picsum.photos/id/1022/200/300"
        imageCover={true}
        margin="small"
        contentPadding="xsmall"
      >
        Lorem Ipsum
      </DxcCard>
    </Mode>
  </PreviewContainer>
);

export default Card;
