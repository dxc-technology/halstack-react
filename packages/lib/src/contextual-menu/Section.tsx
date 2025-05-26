import styled from "styled-components";
import { DxcInset } from "..";
import DxcDivider from "../divider/Divider";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import { SectionProps } from "./types";
import { useId } from "react";

const SectionContainer = styled.section`
  display: grid;
  gap: var(--spacing-gap-xs);
`;

const Title = styled.h2`
  all: unset;
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-semibold);
  padding: var(--spacing-padding-xxs);
`;

export default function Section({ index, length, section }: SectionProps) {
  const id = `section-${useId()}`;

  return (
    <SectionContainer aria-label={section.title ?? id} aria-labelledby={id}>
      {section.title && <Title id={id}>{section.title}</Title>}
      <SubMenu>
        {section.items.map((item, index) => (
          <MenuItem item={item} key={`${item.label}-${index}`} />
        ))}
      </SubMenu>
      {index !== length - 1 && (
        <DxcInset top="var(--spacing-padding-xxs)" bottom="var(--spacing-padding-xxs)">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </SectionContainer>
  );
}
