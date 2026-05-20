import { forwardRef, Ref, useContext } from "react";
import styled from "@emotion/styled";
import CardPropsType from "./types";
import DxcImage from "../image/Image";
import { getCardStyles, handleKeyDown, emptyIconSizes } from "./utils";
import DxcFlex from "../flex/Flex";
import DxcIcon from "../icon/Icon";
import DxcTypography from "../typography/Typography";
import { HalstackLanguageContext } from "../HalstackContext";

const Card = styled.div<{
  mode: CardPropsType["mode"];
  direction?: CardPropsType["direction"];
  imagePosition?: CardPropsType["imagePosition"];
  interactive?: boolean;
  size?: CardPropsType["size"];
  selected?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction, imagePosition }) =>
    imagePosition === "before" ? direction : `${direction}-reverse`};
  gap: var(--spacing-gap-s);
  box-sizing: border-box;
  padding: var(--spacing-padding-xs);
  border-radius: var(--border-radius-l);
  ${({ mode, interactive, selected, size }) => getCardStyles(mode, interactive ?? false, selected, size)}
  background: var(--color-bg-neutral-lightest);
  overflow: hidden;
`;

const EmptyCard = styled(Card)<{ emptySize?: CardPropsType["emptySize"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ emptySize, size }) => emptySize?.width || (size?.width === "fillParent" ? "100%" : "fit-content")};
  height: ${({ emptySize, size }) => emptySize?.height || (size?.height === "fillParent" ? "100%" : "fit-content")};
  background: var(--color-bg-neutral-lighter);
`;

const LoadingCard = styled(Card)<{ loadingSize?: CardPropsType["loadingSize"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ loadingSize, size }) => loadingSize?.width || (size?.width === "fillParent" ? "100%" : "fit-content")};
  height: ${({ loadingSize, size }) => loadingSize?.height || (size?.height === "fillParent" ? "100%" : "fit-content")};
  background: var(--color-bg-neutral-lighter);
`;

const CardLink = styled(Card.withComponent("a"))`
  text-decoration: none;
`;

const ImageContainer = styled.div<{ image: CardPropsType["image"]; isLoading?: CardPropsType["isLoading"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-m);
  overflow: hidden;
  width: ${({ image, isLoading }) => (isLoading ? image?.width || "auto" : "auto")};
  height: ${({ image, isLoading }) => (isLoading ? image?.height || "auto" : "auto")};
`;

const LoadingImageContainer = styled(ImageContainer)`
  background: var(--color-bg-neutral-light);
`;

const LoadingContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--spacing-gap-m);
  justify-content: space-between;
  align-items: center;
`;

const LoadingContentRow = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-neutral-light);
  border-radius: var(--border-radius-m);
  width: 100%;
  padding-top: var(--height-s);
`;

const DxcCard = forwardRef(
  (
    {
      children,
      direction = "column",
      emptySize,
      href,
      imagePosition = "before",
      image,
      isEmpty = false,
      isLoading = false,
      loadingSize,
      mode = "elevated",
      newWindow = false,
      onChange,
      onClick,
      selectable = false,
      selected = false,
      size = { width: "fitContent", height: "fitContent" },
      tabIndex = 0,
    }: CardPropsType,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const isInteractive = !!(onClick || onChange) || selectable;
    const translatedLabels = useContext(HalstackLanguageContext);

    if (isEmpty) {
      return (
        <EmptyCard mode={mode} emptySize={emptySize} size={size}>
          <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xs)">
            <DxcTypography
              color="var(--color-fg-neutral-strong)"
              fontSize={emptyIconSizes[emptySize?.iconSize || "medium"]}
            >
              <DxcIcon icon="text_snippet" />
            </DxcTypography>
            <DxcTypography color="var(--color-fg-neutral-strong)" fontSize="var(--typography-label-s)">
              {translatedLabels?.card?.noContent || "No content"}
            </DxcTypography>
          </DxcFlex>
        </EmptyCard>
      );
    } else if (isLoading) {
      return (
        <LoadingCard
          direction={direction}
          imagePosition={imagePosition}
          mode={mode}
          loadingSize={loadingSize}
          size={size}
        >
          {image && <LoadingImageContainer image={image} isLoading={isLoading} />}
          <LoadingContent>
            <LoadingContentRow />
            <LoadingContentRow />
            <LoadingContentRow />
          </LoadingContent>
        </LoadingCard>
      );
    } else if (href) {
      return (
        <CardLink
          direction={direction}
          size={size}
          imagePosition={imagePosition}
          mode={mode}
          interactive={true}
          tabIndex={tabIndex}
          {...(href && {
            href,
            target: newWindow ? "_blank" : "_self",
          })}
          role="link"
          onClick={(event) => {
            if (typeof onClick === "function") {
              onClick(event);
            }
          }}
          ref={ref}
          onKeyDown={(event) => {
            handleKeyDown(event, onClick);
          }}
        >
          {image && (
            <ImageContainer image={image}>
              <DxcImage {...image} />
            </ImageContainer>
          )}
          {children}
        </CardLink>
      );
    } else {
      return (
        <Card
          direction={direction}
          size={size}
          imagePosition={imagePosition}
          mode={mode}
          interactive={isInteractive}
          selected={selectable && selected}
          tabIndex={isInteractive ? tabIndex : undefined}
          role={selectable ? "checkbox" : isInteractive ? "button" : undefined}
          onClick={(event) => {
            if (typeof onClick === "function") {
              onClick(event);
            }
            if (selectable && typeof onChange === "function") {
              onChange(!selected);
            }
          }}
          onKeyDown={(event) => {
            handleKeyDown(event, onClick, onChange, selected, selectable);
          }}
          aria-checked={selectable ? selected : undefined}
        >
          {image && (
            <ImageContainer image={image}>
              <DxcImage {...image} />
            </ImageContainer>
          )}
          {children && <>{children}</>}
        </Card>
      );
    }
  }
);

export default DxcCard;
