import { useRouter } from "next/router";
import {
  DxcTypography,
  DxcLink,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import { getNavigationLinks } from "./pagesList";
import styled from "styled-components";

const arrowForward = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path data-name="Path 2989" d="M0,0H16V16H0Z" fill="none" />
    <path
      data-name="Path 2990"
      d="M9.333,4l-.94.94,3.72,3.727H4V10h8.113l-3.72,3.727.94.94,5.333-5.333Z"
      transform="translate(-1.333 -1.333)"
    />
  </svg>
);

const arrowBack = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <g transform="translate(16 16) rotate(180)">
      <path
        data-name="Path 2989"
        d="M0,0H16V16H0Z"
        fill="none"
      />
      <path
        data-name="Path 2990"
        d="M9.333,4l-.94.94,3.72,3.727H4V10h8.113l-3.72,3.727.94.94,5.333-5.333Z"
        transform="translate(-1.333 -1.333)"
      />
    </g>
  </svg>
);

const reportIssueIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
  >
    <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
    fill="currentColor"
  >
    <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
  </svg>
);

const DocFooter = ({ githubLink }: { githubLink: string }) => {
  const { pathname } = useRouter();
  const { previousLink, nextLink } = getNavigationLinks(pathname);

  return (
    <DocFooterContainer>
      <DxcFlex direction="column" gap="2rem">
        <DxcFlex gap="2rem">
          <DxcLink icon={editIcon} href={githubLink} newWindow>
            Edit this page on GitHub
          </DxcLink>
          <DxcLink
            icon={reportIssueIcon}
            href="https://github.com/dxc-technology/halstack-react/issues/new/choose"
            newWindow
          >
            Report an issue on GitHub
          </DxcLink>
        </DxcFlex>
        <Separator />
        <DxcFlex justifyContent="space-between">
          <DxcFlex direction="column" gap="1rem">
            {previousLink && (
              <>
                <DxcTypography>Previous</DxcTypography>
                <Link href={previousLink.path} passHref legacyBehavior>
                  <DxcLink icon={arrowBack}>{previousLink.label}</DxcLink>
                </Link>
              </>
            )}
          </DxcFlex>
          <DxcFlex direction="column" alignItems="flex-end" gap="1rem">
            {nextLink && (
              <>
                <DxcTypography>Next</DxcTypography>
                <Link href={nextLink.path} passHref legacyBehavior>
                  <DxcLink icon={arrowForward} iconPosition="after">
                    {nextLink.label}
                  </DxcLink>
                </Link>
              </>
            )}
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </DocFooterContainer>
  );
};

const DocFooterContainer = styled.div`
  max-width: 800px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #999999;
`;

export default DocFooter;
