import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import BaseTypography from "../utils/BaseTypography";
import ImagePropsType, { CaptionWrapperProps } from "./types";

const CaptionWrapper = ({ condition, wrapper, children }: CaptionWrapperProps): JSX.Element => (
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

  return (
    <ThemeProvider theme={colorsTheme.image}>
      <CaptionWrapper
        condition={caption != undefined}
        wrapper={(children: React.ReactNode) => (
          <Figure>
            {children}
            <BaseTypography
              as="figcaption"
              color={colorsTheme.image.captionFontColor}
              fontFamily={colorsTheme.image.captionFontFamily}
              fontSize={colorsTheme.image.captionFontSize}
              fontStyle={colorsTheme.image.captionFontStyle}
              fontWeight={colorsTheme.image.captionFontWeight}
              lineHeight={colorsTheme.image.captionLineHeight}
            >
              {caption}
            </BaseTypography>
          </Figure>
        )}
      >
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

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  margin: 0;
  padding: 0;
`;

export default DxcImage;
