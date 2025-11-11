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
  const isHashRouter = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.location.href.includes("/#/");
  };

  return (
    <ThemeProvider theme={colorsTheme.quickNav}>
      <QuickNavContainer>
        <DxcFlex direction="column" gap="0.5rem">
          <DxcHeading level={4} text={title || translatedLabels.quickNav.contentTitle} />
          <ListColumn>
            {links.map((link) => (
              <li key={link.label}>
                <DxcInset space="0.25rem">
                  <DxcTypography>
                    <Link
                      href={`#${slugify(link.label, { lower: true })}`}
                      onClick={
                        isHashRouter()
                          ? (e) => {
                              e.preventDefault();
                              const id = slugify(link.label, { lower: true });
                              document.getElementById(id)?.scrollIntoView();
                            }
                          : undefined
                      }
                    >
                      <span>{link.label}</span>
                    </Link>
                    <ListSecondColumn>
                      {link.links?.map((sublink) => (
                        <li key={sublink.label}>
                          <DxcInset horizontal="0.5rem">
                            <DxcTypography>
                              <Link
                                href={`#${slugify(link?.label, { lower: true })}-${slugify(sublink?.label, {
                                  lower: true,
                                })}`}
                                onClick={
                                  isHashRouter()
                                    ? (e) => {
                                        e.preventDefault();
                                        const id = `${slugify(link.label, { lower: true })}-${slugify(sublink.label, { lower: true })}`;
                                        document.getElementById(id)?.scrollIntoView();
                                      }
                                    : undefined
                                }
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
