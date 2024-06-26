import React from "react";
import { DxcCard, DxcInset, DxcParagraph } from "@repo/ui";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Card = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imageCover={true}>
        <DxcInset space="1rem">
          <DxcParagraph>Lorem Ipsum</DxcParagraph>
        </DxcInset>
      </DxcCard>
    </Mode>
  </PreviewContainer>
);

export default Card;
