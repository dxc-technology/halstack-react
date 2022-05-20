import styled from "styled-components";

type QuickNavContainerLayoutProps = {
  children: React.ReactNode;
};

const QuickNavContainerLayout = ({
  children,
}: QuickNavContainerLayoutProps) => {
  return <QuickNavContainer>{children}</QuickNavContainer>;
};

const QuickNavContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export default QuickNavContainerLayout;
