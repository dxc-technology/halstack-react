// @ts-nocheck
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import slugify from "slugify";
import useTheme from "../useTheme";
import QuickNavTypes from "./types";
import DxcHeading from "../heading/Heading";
import DxcStack from "../stack/Stack";
import DxcInset from "../inset/Inset";
import DxcList from "../list/List";
import DxcText from "../text/Text";
import useTranslatedLabels from "../useTranslatedLabels";

const DxcQuickNav = ({ title, links }: QuickNavTypes): JSX.Element => {
  const translatedLabels = useTranslatedLabels();
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.quickNav}>
      <QuickNavContainer>
        <DxcStack gutter="xsmall">
          <DxcHeading level={4} text={title || translatedLabels.quickNav.contentTitle} />
          <DxcList>
            <DxcStack gutter="xsmall">
              {links.map((link) => (
                <DxcInset space="xxsmall">
                  <DxcText>
                    <Link
                      href={`#${slugify(link?.label, { lower: true })}`}
                      isSelected={location.href.includes(`#${slugify(link?.label, { lower: true })}`)}
                    >
                      {link?.label}
                    </Link>
                    {link.links?.map((sublink) => (
                      <DxcInset horizontal="xsmall">
                        <DxcText>
                          <Link
                            href={`#${slugify(sublink?.label, { lower: true })}`}
                            isSelected={location.href.includes(`#${slugify(sublink?.label, { lower: true })}`)}
                          >
                            {sublink?.label}
                          </Link>
                        </DxcText>
                      </DxcInset>
                    ))}
                  </DxcText>
                </DxcInset>
              ))}
            </DxcStack>
          </DxcList>
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
  li > div:first-child {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => (props.isSelected && props.theme.selectedFontColor) || props.theme.fontColor};

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
