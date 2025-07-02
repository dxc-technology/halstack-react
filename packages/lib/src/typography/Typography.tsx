import { useContext, useMemo } from "react";
import styled from "@emotion/styled";
import TypographyPropsTypes from "./types";
import TypographyContext from "./TypographyContext";

const Typography = styled.span<TypographyPropsTypes>`
  margin: 0px;
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace, textOverflow }) =>
    whiteSpace !== "normal" ? whiteSpace : textOverflow !== "unset" ? "nowrap" : "normal"};
  overflow: ${({ textOverflow }) => (textOverflow !== "unset" ? "hidden" : "visible")};
`;

export default function DxcTypography({ children, ...props }: TypographyPropsTypes) {
  const componentContext = useContext(TypographyContext);

  const contextValue = useMemo(
    () => ({
      ...componentContext,
      ...props,
    }),
    [componentContext, props]
  );

  return (
    <TypographyContext.Provider value={contextValue}>
      <Typography {...contextValue}>{children}</Typography>
    </TypographyContext.Provider>
  );
}
