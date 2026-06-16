import { DxcCard, DxcContainer, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import { ReactEventHandler } from "react";

interface ImagePropsType {
  alt: string;
  caption?: string;
  height?: string;
  lazyLoading?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  sizes?: string;
  src: string;
  srcSet?: string;
  width?: string;
}

const image: ImagePropsType = {
  alt: "Example image",
  width: "100%",
  height: "250px",
  objectFit: "cover",
  src: "https://picsum.photos/id/11/1920/1080",
};

const paragraphContent = (
  <DxcContainer maxWidth="500px">
    <DxcParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet nisi a neque scelerisque ultrices vitae
      pellentesque nunc.
    </DxcParagraph>
  </DxcContainer>
);

const CardPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcCard onClick={() => {}} image={image} selectable onSelectionChange={() => {}}>
        {paragraphContent}
      </DxcCard>
      <DxcCard onClick={() => {}} image={image} direction="row" selectable selected>
        {paragraphContent}
      </DxcCard>
      <DxcCard onClick={() => {}} mode="outlined" image={image}>
        {paragraphContent}
      </DxcCard>
    </DxcFlex>
  );
};

export default CardPreview;
