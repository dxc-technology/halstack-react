import styled from "styled-components";

const TableCode = styled.code`
  background-color: #f2eafa;
  color: #5f249f;
  font-size: 0.75rem;
  padding: 2px 4px;
  border-radius: 0.25rem;
`;

export const ExtendedTableCode = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ExtendedCodeContainer>
    <StyledExtendedCode>{children}</StyledExtendedCode>
  </ExtendedCodeContainer>
);

const ExtendedCodeContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  padding: 2px 4px;
  background-color: #f2eafa;
  border-radius: 0.25rem;
  margin: 0;
`;

const StyledExtendedCode = styled.code`
  color: #5f249f;
  font-size: 0.75rem;
`;

export default TableCode;
