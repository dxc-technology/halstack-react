import styled from "styled-components";
import { DxcInset } from "..";
import DxcDivider from "../divider/Divider";
import { SubMenu } from "./ContextualMenu";
import MenuItem from "./MenuItem";
import { SectionProps } from "./types";
import { useId } from "react";

const Title = styled.h2`
  all: unset;
  color: var(--color-grey-900);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-style: normal;
  font-weight: var(--typography-label-semibold);
  padding: var(--spacing-padding-xxs);
`;

const Sect = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-gap-xs);
`;

const Section = ({ section, index, length }: SectionProps) => {
  const id = `section-${useId()}`;

  return (
    <Sect aria-label={section.title ?? id} aria-labelledby={id}>
      {section.title && <Title id={id}>{section.title}</Title>}
      <SubMenu>
        {section.items.map((item, index) => (
          <MenuItem item={item} key={`${item.label}-${index}`} />
        ))}
      </SubMenu>
      {index !== length - 1 && (
        <DxcInset top="0.25rem" bottom="0.25rem">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </Sect>
  );
};

export default Section;
