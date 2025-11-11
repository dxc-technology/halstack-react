import { useRef, MouseEvent } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { ItemPropsType } from "./types";

const Item = ({ isCurrentPage = false, href, label, onClick }: ItemPropsType) => {
  const currentItemRef = useRef<HTMLSpanElement | null>(null);

  const handleOnMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const labelContainer = event.currentTarget;
    const optionElement = currentItemRef.current;
    if (optionElement?.title === "" && labelContainer.scrollWidth > labelContainer.clientWidth) {
      optionElement.title = label;
    }
  };

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof onClick !== "function") return;
    event.preventDefault();
    if (href) onClick(href);
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

const ListItem = styled.li<{ isCurrentPage?: ItemPropsType["isCurrentPage"] }>`
  display: flex;
  align-items: center;
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_02};
  color: ${CoreTokens.color_black};
  ${({ isCurrentPage }) => isCurrentPage && "overflow: hidden;"}
`;

const CurrentPage = styled.span`
  font-weight: ${CoreTokens.type_semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
`;

const Link = styled.a`
  border-radius: ${CoreTokens.border_radius_small};
  padding: ${CoreTokens.spacing_0} ${CoreTokens.spacing_2};
  display: inline-flex;
  align-items: center;
  height: 24px;
  color: ${CoreTokens.color_black};
  text-decoration: ${CoreTokens.type_no_line};
  cursor: pointer;

  &:focus {
    outline: ${CoreTokens.border_width_2} solid ${CoreTokens.color_blue_600};
  }
`;

const Text = styled.span`
  border: ${CoreTokens.border_width_1} solid ${CoreTokens.color_transparent};
  &:hover {
    border-bottom-color: ${CoreTokens.color_black};
  }
`;

export default Item;
