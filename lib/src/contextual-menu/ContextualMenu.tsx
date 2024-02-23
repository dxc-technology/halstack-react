import { useState } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import MenuPropsType, { Item, Section as SectionType, BadgeProps as BadgePropsType } from "./types";
import DxcBadge from "../badge/Badge";
import MenuItem from "./MenuItem";

const DxcContextualMenu = ({ items }: MenuPropsType) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);

  const renderSingleItem = (item: Item, index: number) => (
    <Li key={`option-${index}`} role="none">
      <MenuItem
        {...item}
        selected={item.selected ?? selectedItemIndex === index}
        onSelect={item.onSelect ?? (() => setSelectedItemIndex(index))}
      />
    </Li>
  );

  let acc = 0;
  const renderSection = (section: SectionType, index: number, items: SectionType[]) => {
    const globalIndex = acc;
    acc += section.items.length;
    return (
      <Li key={`option-${index}`}>
        {section.title != null && (
          <Title role="heading" aria-level={2}>
            {section.title}
          </Title>
        )}
        <Section role="group">
          {section.items.map((item, index) => renderSingleItem(item, globalIndex + index))}
          {index !== items.length - 1 && <Divider aria-hidden />}
        </Section>
      </Li>
    );
  };

  return (
    <Menu role="menu">
      {items.map((item: Item | SectionType, index: number, items: MenuPropsType["items"]) =>
        "items" in item ? renderSection(item, index, items as SectionType[]) : renderSingleItem(item, index)
      )}
    </Menu>
  );
};

const Menu = styled.ul`
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${CoreTokens.color_grey_200};
  border-radius: 0.25rem;
  padding: ${CoreTokens.spacing_16} ${CoreTokens.spacing_8};

  display: grid;
  gap: ${CoreTokens.spacing_4};
  min-width: 248px;
  max-height: 100%;
  background-color: ${CoreTokens.color_white};

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${CoreTokens.color_grey_700};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${CoreTokens.color_grey_300};
    border-radius: 0.25rem;
  }
`;

const Li = styled.li`
  display: grid;
`;

const Section = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${CoreTokens.spacing_4};
`;

const Title = styled.span`
  margin-bottom: ${CoreTokens.spacing_4};
  padding: ${CoreTokens.spacing_4};
  color: ${CoreTokens.color_grey_900};
  font-family: ${CoreTokens.type_sans};
  font-size: ${CoreTokens.type_scale_03};
  font-weight: ${CoreTokens.type_semibold};
  line-height: 24px;

  & + ul > li > button {
    padding-left: ${CoreTokens.spacing_12} !important;
  }
`;

const Divider = styled.hr`
  margin: ${CoreTokens.spacing_4} 0;
  border: none;
  height: 1px;
  background: ${CoreTokens.color_grey_200};
`;

DxcContextualMenu.Badge = (props: BadgePropsType) => <DxcBadge {...props} size="small" />;

export default DxcContextualMenu;
