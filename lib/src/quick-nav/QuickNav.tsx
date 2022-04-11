import React from "react";
import styled from "styled-components";
import QuickNavTypes from "./types";
import DxcHeading from "../heading/Heading";
import DxcStack from "../stack/Stack";
import DxcInset from "../inset/Inset";

const DxcQuickNav = ({ title, links }: QuickNavTypes): JSX.Element => {
  return (
    <QuickNavContainer>
      <DxcStack gutter="small">
        <DxcHeading level={4} text={title} />
        <DxcStack gutter="xsmall">
          {links.map((link) => (
            <DxcInset space="xxsmall">
              <DxcStack gutter="xsmall">
                <Link href={`#${link?.id}`}>{link?.label}</Link>
                {link.links?.map((sublink) => (
                  <DxcInset horizontal="xsmall">
                    <DxcStack gutter="xsmall">
                      <Link href={`#${sublink?.id}`}>{sublink?.label}</Link>
                    </DxcStack>
                  </DxcInset>
                ))}
              </DxcStack>
            </DxcInset>
          ))}
        </DxcStack>
      </DxcStack>
    </QuickNavContainer>
  );
};

const QuickNavContainer = styled.div`
  padding: 5px 15px;
  border-left: 2px solid #bfbfbf;
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
