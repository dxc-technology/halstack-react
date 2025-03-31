import { useContext } from "react";
import slugify from "slugify";
import styled, { ThemeProvider } from "styled-components";
import DxcFlex from "../flex/Flex";
import DxcHeading from "../heading/Heading";
import DxcInset from "../inset/Inset";
import DxcTypography from "../typography/Typography";
import HalstackContext, { HalstackLanguageContext } from "../HalstackContext";
import QuickNavTypes from "./types";

const DxcQuickNav = ({ title, links }: QuickNavTypes): JSX.Element => {
  const translatedLabels = useContext(HalstackLanguageContext);
  const colorsTheme = useContext(HalstackContext);

  return (
    <ThemeProvider theme={colorsTheme.quickNav}>
      <QuickNavContainer>
        <DxcFlex direction="column" gap="var(--spacing-padding-xs)">
          <DxcHeading level={4} text={title || translatedLabels.quickNav.contentTitle} />
          <ListColumn>
            {links.map((link) => (
              <li key={link.label}>
                <DxcInset space="var(--spacing-padding-xxs)">
                  <DxcTypography>
                    <Link href={`#${slugify(link.label, { lower: true })}`}>{link.label}</Link>
                    <ListSecondColumn>
                      {link.links?.map((sublink) => (
                        <li key={sublink.label}>
                          <DxcInset horizontal="var(--spacing-padding-xs)">
                            <DxcTypography>
                              <Link
                                href={`#${slugify(link?.label, { lower: true })}-${slugify(sublink?.label, {
                                  lower: true,
                                })}`}
                              >
                                {sublink.label}
                              </Link>
                            </DxcTypography>
                          </DxcInset>
                        </li>
                      ))}
                    </ListSecondColumn>
                  </DxcTypography>
                </DxcInset>
              </li>
            ))}
          </ListColumn>
        </DxcFlex>
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListSecondColumn = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: ${(props) => props.theme.fontWeight};
  color: ${(props) => props.theme.fontColor};
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  max-width: 100%;

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
