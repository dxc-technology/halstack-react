import { useCallback } from "react";
import styled from "styled-components";
import BreadcrumbsProps from "./types";
import DxcDropdown from "../dropdown/Dropdown";
import { HalstackProvider } from "../HalstackContext";
import dropdownTheme from "./dropdownTheme";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";
import Item from "./Item";
import DxcFlex from "../flex/Flex";
import { Option } from "../dropdown/types";

const DxcBreadcrumbs = ({
  ariaLabel = "Breadcrumbs",
  items,
  itemsBeforeCollapse = 4,
  onItemClick,
  showRoot = true,
}: BreadcrumbsProps) => {
  const handleOnSelectOption = useCallback(
    (href: string) => {
      if (onItemClick) {
        onItemClick(href);
      } else {
        window.location.href = href;
      }
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
              <HalstackProvider advancedTheme={dropdownTheme}>
                <DxcDropdown
                  caretHidden
                  icon={<DxcIcon icon="more_horiz" />}
                  margin={showRoot ? { left: "small" } : undefined}
                  onSelectOption={handleOnSelectOption}
                  options={items
                    .slice(showRoot ? 1 : 0, -1)
                    // TODO: Remove type assertion
                    .map(({ label, href }) => ({ label, value: href }) as Option)}
                />
              </HalstackProvider>
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

const OrderedList = styled.ol`
  margin: ${CoreTokens.spacing_0};
  padding-left: ${CoreTokens.spacing_0};
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_12};
  list-style-type: none;

  > li:not(:first-child) {
    > a,
    > span {
      margin-left: ${CoreTokens.spacing_12};
    }
    &::before {
      margin: ${CoreTokens.spacing_0} ${CoreTokens.spacing_2};
      transform: rotate(15deg);
      border-right: ${CoreTokens.border_width_1} solid ${CoreTokens.color_grey_500};
      height: 1rem;
      content: "";
    }
  }
`;

export default DxcBreadcrumbs;
