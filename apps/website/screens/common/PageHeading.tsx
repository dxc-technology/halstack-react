import { ReactNode } from "react";
import styled from "styled-components";

const PageHeading = ({ children }: { children: ReactNode }) => {
  return <PageHeadingContainer>{children}</PageHeadingContainer>;
};

const PageHeadingContainer = styled.div`
  max-width: 800px;
`;

export default PageHeading;
