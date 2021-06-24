import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LogoConfig = ({ propertyName, propertyValue, onChangeCustomTheme }) => {
  const [logoImage, setLogoImage] = useState(propertyValue || null);

  useEffect(() => {
    setLogoImage(propertyValue || null);
  }, [propertyValue]);

  return (
    <UploadContainer>
      <LogoImage src={logoImage} />
      <CustomUpload
        type="file"
        id="logo"
        name="img"
        accept="image/*"
        onChange={(event) => {
          const url = URL.createObjectURL(event.target.files[0]);
          onChangeCustomTheme(propertyName, url);
          setLogoImage(url);
        }}
      ></CustomUpload>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const LogoImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  background-color: #d9d9d9;
`;

const CustomUpload = styled.input`
  margin-left: 10px;
  font: normal 12px/17px Open Sans;
  color: #00000099;
`;

export default LogoConfig;
