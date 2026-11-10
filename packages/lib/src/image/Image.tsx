import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ImageProps } from "./types";

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-s);
  width: fit-content;
  margin: 0;
  padding: var(--spacing-padding-none);
`;

const CaptionContainer = styled.figcaption`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-s);
  font-weight: var(--typography-label-regular);
`;

const CaptionWrapper = ({ caption, children }: { caption: ImageProps["caption"]; children: ReactNode }) =>
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
  height,
  lazyLoading = false,
  objectFit,
  objectPosition,
  onError,
  onLoad,
  sizes,
  src,
  srcSet,
  width,
}: ImageProps) {
  return (
    <CaptionWrapper caption={caption}>
      <img
        alt={alt}
        loading={lazyLoading ? "lazy" : undefined}
        onError={onError}
        onLoad={onLoad}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
        style={{
          objectFit,
          objectPosition,
          width,
          height,
        }}
      />
    </CaptionWrapper>
  );
}
