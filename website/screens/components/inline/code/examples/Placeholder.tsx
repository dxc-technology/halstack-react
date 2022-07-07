import styled from "styled-components";

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

export default Placeholder;
