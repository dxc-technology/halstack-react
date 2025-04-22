import { useCallback } from "react";
import styled from "styled-components";
import BreadcrumbsProps from "./types";
import DxcDropdown from "../dropdown/Dropdown";
import DxcIcon from "../icon/Icon";
import Item from "./Item";
import { Option } from "../dropdown/types";
import DxcFlex from "../flex/Flex";

const OrderedList = styled.ol`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-m);
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li:not(:first-child) {
    > a,
    > span {
      margin-left: var(--spacing-gap-m);
    }
    &::before {
      border-right: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-strong);
      content: "";
      height: var(--height-xxs);
      margin: var(--spacing-padding-none) var(--spacing-padding-xxs);
      transform: rotate(15deg);
    }
  }
`;

const DxcBreadcrumbs = ({
  ariaLabel = "Breadcrumbs",
  items,
  itemsBeforeCollapse = 4,
  onItemClick,
  showRoot = true,
}: BreadcrumbsProps) => {
  const handleOnSelectOption = useCallback(
    (href: string) => {
      if (onItemClick) onItemClick(href);
      else window.location.href = href;
    },
    [items]
  );

  return (
    <nav aria-label={ariaLabel}>
      <OrderedList>
        {items && items.length > Math.max(itemsBeforeCollapse, 2) ? (
          <>
            {showRoot && <Item href={items[0]?.href} key={0} label={items[0]?.label ?? ""} />}
            <DxcFlex alignItems="center" as="li" key={1}>
              <DxcDropdown
                caretHidden
                icon={<DxcIcon icon="more_horiz" />}
                margin={showRoot ? { left: "small" } : undefined}
                onSelectOption={handleOnSelectOption}
                options={items.slice(showRoot ? 1 : 0, -1).map(({ label, href }) => ({ label, value: href }) as Option)}
                title="More options"
              />
            </DxcFlex>
            <Item isCurrentPage key={2} label={items[items.length - 1]?.label ?? ""} />
          </>
        ) : (
          items.map((item, index, { length }) => (
            <Item
              href={item.href}
              isCurrentPage={index === length - 1}
              key={index}
              label={item.label}
              onClick={onItemClick}
            />
          ))
        )}
      </OrderedList>
    </nav>
  );
};

export default DxcBreadcrumbs;
