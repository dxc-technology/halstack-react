import { DxcFlex } from "@dxc-technology/halstack-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeInputWidgetProps from "./common/types";
import { MouseEvent, ChangeEvent } from "react";

const ImageConfig = ({ propertyName, propertyValue, onChangeCustomTheme }: ThemeInputWidgetProps): JSX.Element => {
  const [logoImage, setLogoImage] = useState(propertyValue);

  const clickToUpload = (event: MouseEvent<HTMLButtonElement>) => {
    const input = event.currentTarget.previousSibling as HTMLInputElement;
    input.click();
  };
  const upload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    const url = URL.createObjectURL(files[0]!);
    onChangeCustomTheme(propertyName, url);
    setLogoImage(url);
  };

  useEffect(() => {
    setLogoImage(propertyValue);
  }, [propertyValue]);

  return (
    <DxcFlex gap="0.25rem">
      <LogoImage src={logoImage} />
      <HiddenInputFile type="file" name="file" accept="image/*" onChange={upload} />
      <UploadButton onClick={clickToUpload}>Select a file</UploadButton>
    </DxcFlex>
  );
};

const LogoImage = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
  background-color: #d9d9d9;
`;

const HiddenInputFile = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  flex-grow: 1;
  font: normal 12px/17px Open Sans;
  height: 23px;

  &:focus {
    border-color: transparent;
    border-radius: 2px;
    outline: 2px solid #0095ff;
  }
`;

export default ImageConfig;
