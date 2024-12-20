import styled from "styled-components";
import { DxcInset } from "..";
import CoreTokens from "../common/coreTokens";
import DxcDivider from "../divider/Divider";
import { SubMenu } from "./ContextualMenu";
import MenuItem from "./MenuItem";
import { SectionProps } from "./types";
import { useId } from "react";

const Section = ({ section, index, length }: SectionProps) => {
  const id = `section-${useId()}`;

  return (
    <section aria-label={section.title ?? id} aria-labelledby={id}>
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
    </section>
  );
};

const Title = styled.h2`
  margin: 0 0 ${CoreTokens.spacing_4} 0;
  padding: ${CoreTokens.spacing_4};
  color: ${({ theme }) => theme.sectionTitleFontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.sectionTitleFontSize};
  font-style: ${({ theme }) => theme.sectionTitleFontStyle};
  font-weight: ${({ theme }) => theme.sectionTitleFontWeight};
  line-height: ${({ theme }) => theme.sectionTitleLineHeight};
`;

export default Section;
