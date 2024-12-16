import styled, { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import useTheme from "../useTheme";
import ImagePropsType, { CaptionWrapperProps } from "./types";

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

const CaptionWrapper = ({ condition, wrapper, children }: CaptionWrapperProps) => (
  <>{condition ? wrapper(children) : children}</>
);

const DxcImage = ({
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
}: ImagePropsType) => {
  const colorsTheme = useTheme();

  const wrapperFunction = (children: ReactNode) => (
    <Figure>
      {children}
      <CaptionContainer>{caption}</CaptionContainer>
    </Figure>
  );

  return (
    <ThemeProvider theme={colorsTheme?.image}>
      <CaptionWrapper condition={caption !== undefined} wrapper={wrapperFunction}>
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
};

export default DxcImage;
