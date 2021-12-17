import React from "react";
import styled from "styled-components";
import { V3DxcUpload } from "@dxc-technology/halstack-react";

const Upload = () => {
  const callbackFunc = async (file) => {
    console.log(file);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <UploadContainer>
      <Title>Default</Title>
      <UploadPreview>
        <V3DxcUpload margin={{ top: "small" }} callbackUpload={callbackFunc} />
      </UploadPreview>
    </UploadContainer>
  );
};

const UploadContainer = styled.div``;

const Title = styled.div`
  font: Bold 12px/17px Open Sans;
  letter-spacing: 1.88px;
  color: ${(props) => (props.mode === "dark" ? "#FFFFFF" : "#000000")};
  text-transform: uppercase;
  padding: 20px 0 10px 10px;
`;

const UploadPreview = styled.div`
  padding-left: 10px;
`;

export default Upload;
