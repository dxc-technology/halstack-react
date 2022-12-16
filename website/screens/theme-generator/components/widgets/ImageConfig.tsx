import { DxcFlex } from "@dxc-technology/halstack-react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./types";

const ImageConfig = ({
  propertyName,
  propertyValue,
  onChangeCustomTheme,
}: ThemeInputWidgetProps): JSX.Element => {
  const [logoImage, setLogoImage] = useState(propertyValue);

  const clickToUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    const input = event.currentTarget.previousSibling as HTMLInputElement;
    input.click();
  };
  const upload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    const url = URL.createObjectURL(files[0]);
    onChangeCustomTheme(propertyName, url);
    setLogoImage(url);
  };

  useEffect(() => {
    setLogoImage(propertyValue);
  }, [propertyValue]);

  return (
    <DxcFlex alignItems="center">
      <LogoImage src={logoImage} />
      <UploadInputFile
        type="file"
        name="file"
        accept="image/*"
        onChange={upload}
      ></UploadInputFile>
      <UploadButton onClick={clickToUpload}>Choose a file</UploadButton>
    </DxcFlex>
  );
};

const LogoImage = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
  background-color: #d9d9d9;
`;

const UploadInputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

const UploadButton = styled.button`
  margin-left: 10px;
  font: normal 12px/17px Open Sans;
  height: 23px;
  width: 140px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default ImageConfig;
