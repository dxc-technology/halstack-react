import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import QuickNavTypes from "./types";
import DxcHeading from "../heading/Heading";
import DxcStack from "../stack/Stack";
import DxcInset from "../inset/Inset";
import DxcList from "../list/List";
import DxcText from "../text/Text";

const DxcQuickNav = ({ title = "Contents", links }: QuickNavTypes): JSX.Element => {
  return (
    <QuickNavContainer>
      <DxcStack gutter="xsmall">
        <DxcHeading level={4} text={title} />
        <DxcList>
          <DxcStack gutter="xsmall">
            {links.map((link) => (
              <DxcInset space="xxsmall">
                <DxcText>
                  <Link href={`#${slugify(link?.label, { lower: true })}`}>{link?.label}</Link>
                  {link.links?.map((sublink) => (
                    <DxcInset horizontal="xsmall">
                      <DxcText>
                        <Link href={`#${slugify(sublink?.label, { lower: true })}`}>{sublink?.label}</Link>
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
  );
};

const QuickNavContainer = styled.div`
  padding: 5px 15px;
  border-left: 2px solid #bfbfbf;
  li > div:first-child {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #666666;
  &:hover {
    color: #ab63cf;
  }
  &:focus {
    border-radius: 2px;
    border-color: #0095ff;
  }
`;

export default DxcQuickNav;
