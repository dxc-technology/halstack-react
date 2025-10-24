import { useContext, useId } from "react";
import styled from "@emotion/styled";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import { SectionProps } from "./types";
import BaseMenuContext from "./BaseMenuContext";
import DxcInset from "../inset/Inset";
import DxcDivider from "../divider/Divider";

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
  const { responsiveView } = useContext(BaseMenuContext) ?? {};
  return !responsiveView ? (
    <SectionContainer aria-label={section.title ?? id} aria-labelledby={id}>
      {section.title && <Title id={id}>{section.title}</Title>}
      <SubMenu depthLevel={-1}>
        {section.items.map((item, i) => (
          <MenuItem item={item} key={`${item.label}-${i}`} />
        ))}
      </SubMenu>
      {index !== length - 1 && (
        <DxcInset top="var(--spacing-padding-xxs)" bottom="var(--spacing-padding-xxs)">
          <DxcDivider color="lightGrey" />
        </DxcInset>
      )}
    </SectionContainer>
  ) : (
    <SubMenu depthLevel={-1}>
      {section.items.map((item, i) => (
        <MenuItem item={item} key={`${item.label}-${i}`} />
      ))}
    </SubMenu>
  );
}
