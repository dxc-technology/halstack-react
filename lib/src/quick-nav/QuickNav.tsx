// @ts-nocheck
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import slugify from "slugify";
import useTheme from "../useTheme";
import QuickNavTypes from "./types";
import DxcHeading from "../heading/Heading";
import DxcStack from "../stack/Stack";
import DxcInset from "../inset/Inset";
import DxcText from "../text/Text";
import useTranslatedLabels from "../useTranslatedLabels";

const DxcQuickNav = ({ title, links }: QuickNavTypes): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.quickNav}>
      <QuickNavContainer>
        <DxcStack gutter="0.5rem">
          <DxcHeading level={4} text={title || translatedLabels.quickNav.contentTitle} />
          <ListColumn>
            <DxcStack gutter="0.5rem">
              {links.map((link) => (
                <ListRow key={link.label}>
                  <DxcInset space="0.25rem">
                    <DxcText>
                      <Link href={`#${slugify(link?.label, { lower: true })}`}>{link?.label}</Link>
                      {link.links?.map((sublink) => (
                        <ListRow key={sublink.label}>
                          <DxcInset horizontal="0.5rem">
                            <DxcText>
                              <Link href={`#${slugify(sublink?.label, { lower: true })}`}>{sublink?.label}</Link>
                            </DxcText>
                          </DxcInset>
                        </ListRow>
                      ))}
                    </DxcText>
                  </DxcInset>
                </ListRow>
              ))}
            </DxcStack>
          </ListColumn>
        </DxcStack>
      </QuickNavContainer>
    </ThemeProvider>
  );
};

const QuickNavContainer = styled.div`
  padding-top: ${(props) => props.theme.paddingTop};
  padding-bottom: ${(props) => props.theme.paddingBottom};
  padding-left: ${(props) => props.theme.paddingLeft};
  padding-right: ${(props) => props.theme.paddingRight};
  border-left: 2px solid ${(props) => props.theme.dividerBorderColor};
`;

const ListColumn = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListRow = styled.li``;

const Link = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.fontColor};

  &:hover {
    color: ${(props) => props.theme.hoverFontColor};
  }
  &:focus {
    outline-color: ${(props) => props.theme.focusBorderColor};
    outline-style: ${(props) => props.theme.focusBorderStyle};
    outline-width: ${(props) => props.theme.focusBorderThickness};
    border-radius: ${(props) => props.theme.focusBorderRadius};
  }
`;

export default DxcQuickNav;
