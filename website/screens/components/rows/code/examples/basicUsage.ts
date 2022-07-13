import { DxcRows } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const code = `() => {
  return (
    <Container>
      <DxcRows gutter="0.5rem" divider>
        <DxcRows.Row>
          <Placeholder width="small" height="small" />
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="small" />
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row height="4">
          <Placeholder width="medium" height="medium" />
          <Placeholder width="medium" />
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row height="1">
          <Placeholder width="small" height="small" />
          <Placeholder width="large" height="medium" />
        </DxcRows.Row>
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

const scope = {
  DxcRows,
  Placeholder,
  Container
};

export default { code, scope };
