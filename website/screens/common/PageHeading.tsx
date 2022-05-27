import React from "react";
import styled from "styled-components";

const PageHeading = ({ children }: { children: React.ReactNode }) => {
  return <PageHeadingContainer>{children}</PageHeadingContainer>;
};

const PageHeadingContainer = styled.div`
  max-width: 800px;
`;

export default PageHeading;
