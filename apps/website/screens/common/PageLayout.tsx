import styled from "@emotion/styled";
import { responsiveSizes } from "../common/variables";

const PageLayout = styled.div`
  max-width: var(--content-width);
  margin-left: var(--content-margin-left);
  margin-right: var(--content-margin-right);
  margin-top: var(--content-margin-top);
  margin-bottom: var(--content-margin-bottom);
  @media screen and (max-width: ${responsiveSizes.desktop}px) {
    margin-left: var(--content-mobile-margin-left);
    margin-right: var(--content-mobile-margin-right);
    margin-top: var(--content-mobile-margin-top);
    margin-bottom: var(--content-mobile-margin-bottom);
  }
`;

export default PageLayout;
