import { useRef, MouseEvent } from "react";
import styled from "@emotion/styled";
import { ItemPropsType } from "./types";

const ListItem = styled.li<{ isCurrentPage?: ItemPropsType["isCurrentPage"] }>`
  display: flex;
  align-items: center;
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  ${({ isCurrentPage }) => isCurrentPage && "overflow: hidden;"}
`;

const CurrentPage = styled.span`
  padding: var(--spacing-padding-none) var(--spacing-padding-xxs);
  font-weight: var(--typography-label-semibold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Link = styled.a`
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-none) var(--spacing-padding-xxs);
  display: inline-flex;
  align-items: center;
  height: var(--height-s);
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
`;

const Text = styled.span`
  border: var(--border-width-s) var(--border-style-default) transparent;

  &:hover {
    border-bottom-color: var(--color-fg-neutral-dark);
  }
`;

const Item = ({ isCurrentPage = false, href, label, onClick }: ItemPropsType) => {
  const currentItemRef = useRef<HTMLSpanElement | null>(null);

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (href) onClick?.(href);
  };

  const handleOnMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const labelContainer = event.currentTarget;
    const optionElement = currentItemRef.current;
    if (optionElement?.title === "" && labelContainer.scrollWidth > labelContainer.clientWidth)
      optionElement.title = label;
  };

  return (
    <ListItem aria-current={isCurrentPage ? "page" : undefined} isCurrentPage={isCurrentPage}>
      {isCurrentPage ? (
        <CurrentPage ref={currentItemRef} onMouseEnter={handleOnMouseEnter}>
          {label}
        </CurrentPage>
      ) : (
        <Link href={href} onClick={handleOnClick}>
          <Text>{label}</Text>
        </Link>
      )}
    </ListItem>
  );
};

export default Item;
