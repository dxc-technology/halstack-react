import styled, { ThemeProvider } from "styled-components";
import { ReactNode, useContext } from "react";
import ImagePropsType from "./types";
import HalstackContext from "../HalstackContext";

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  margin: 0;
  padding: 0;
`;

const CaptionContainer = styled.figcaption`
  color: ${(props) => props.theme.captionFontColor};
  font-family: ${(props) => props.theme.captionFontFamily};
  font-size: ${(props) => props.theme.captionFontSize};
  font-style: ${(props) => props.theme.captionFontStyle};
  font-weight: ${(props) => props.theme.captionFontWeight};
  line-height: ${(props) => props.theme.captionLineHeight};
`;

const CaptionWrapper = ({ caption, children }: { caption: ImagePropsType["caption"]; children: ReactNode }) =>
  caption != null ? (
    <Figure>
      {children}
      <CaptionContainer>{caption}</CaptionContainer>
    </Figure>
  ) : (
    children
  );

export default function DxcImage({
  alt,
  caption,
  lazyLoading = false,
  src,
  srcSet,
  sizes,
  width,
  height,
  objectFit,
  objectPosition,
  onLoad,
  onError,
}: ImagePropsType) {
  const colorsTheme = useContext(HalstackContext);

  return (
    <ThemeProvider theme={colorsTheme.image}>
      <CaptionWrapper caption={caption}>
        <img
          alt={alt}
          loading={lazyLoading ? "lazy" : undefined}
          onLoad={onLoad}
          onError={onError}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          style={{
            objectFit,
            objectPosition,
            width,
            height,
          }}
        />
      </CaptionWrapper>
    </ThemeProvider>
  );
}
