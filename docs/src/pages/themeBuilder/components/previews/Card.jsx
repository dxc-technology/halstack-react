import React from "react";
import styled from "styled-components";
import { DxcCard } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import iceCreamImagePath from "../../images/ice-cream.jpg";

const Card = () => {
  return (
    <CardContainer>
      <Mode text="Default">
        <DxcCard
          imageSrc={iceCreamImagePath}
          imageCover={true}
          margin="small"
          contentPadding="xsmall"
        >
          Lorem Ipsum
        </DxcCard>
      </Mode>
    </CardContainer>
  );
};

const CardContainer = styled.div``;

export default Card;
