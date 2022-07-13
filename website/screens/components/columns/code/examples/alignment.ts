import { DxcColumns } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const code = `() => {
  return (
    <Container>
      <DxcColumns gutter="0.125rem" alignX="end" alignY="center">
        <DxcColumns.Column>
          <Placeholder width="small" height="medium" />
          <Placeholder width="medium" height="large" />
          <Placeholder width="large" height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder width="large" height="medium" />
          <Placeholder width="medium" height="large" />
        </DxcColumns.Column>
        <Placeholder width="large" height="large" />
      </DxcColumns>
    </Container>
  );
}`;

const Container = styled.div`
  display: flex;
  background: #f2eafa;
  height: 200px;
`;

type PlaceholderProps = {
  width: "large" | "medium" | "small" | "auto";
  height?: "large" | "medium" | "small" | "auto";
};

const Placeholder = styled.div<PlaceholderProps>`
  width: ${({ width }) =>
    width === "large"
      ? "150px"
      : width === "medium"
      ? "120px"
      : width === "small"
      ? "100px"
      : "100%"};
  ${({ height }) =>
    height
      ? `height: ${
          height === "large"
            ? "50px"
            : height === "medium"
            ? "20px"
            : height === "small"
            ? "10px"
            : "100%"
        };`
      : ""};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

const scope = { Container, DxcColumns, Placeholder };

export default { code, scope };
