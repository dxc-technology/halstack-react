import React from "react";
import styled from "styled-components";

const PageHeading = ({ children }: { children: React.ReactNode }) => {
  return <PageHeadingContainer>{children}</PageHeadingContainer>;
};

const PageHeadingContainer = styled.div`
  max-width: 960px;
  margin-left: 200px;
  margin-top: 80px;
`;

export default PageHeading;
