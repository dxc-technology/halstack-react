import { DxcRows } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const code = `() => {
  return (
    <Container>
      <DxcRows gutter="0.125rem" alignX="end" alignY="center">
        <DxcRows.Row>
          <Placeholder width="large" height="large" />
          <Placeholder width="medium" height="medium" />
          <Placeholder width="small" height="small" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="medium" />
          <Placeholder width="medium" height="large" />
          <Placeholder width="large" height="small" />
        </DxcRows.Row>
        <Placeholder width="large" height="large" />
      </DxcRows>
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

const scope = { Container, DxcRows, Placeholder };

export default { code, scope };
