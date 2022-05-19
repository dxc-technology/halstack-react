import { useRouter } from "next/router";
import {
  DxcText,
  DxcLink,
  DxcStack,
  DxcRow,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import { getNavigationLinks } from "./pagesList";

const DocFooter = ({ githubLink }: { githubLink: string }) => {
  const { pathname } = useRouter();
  const { previousLink, nextLink } = getNavigationLinks(pathname);

  return (
    <DxcStack divider gutter="xxlarge">
      <DxcLink icon={githubIcon} href={githubLink} newWindow>
        Edit this page on GitHub
      </DxcLink>
      <DxcRow justify="spaceBetween">
        <DxcStack gutter="small">
          {previousLink && (
            <>
              <DxcText>Previous</DxcText>
              <DxcLink icon={arrowBack}>
                <Link href={previousLink.path}>
                  <a>{previousLink.label}</a>
                </Link>
              </DxcLink>
            </>
          )}
        </DxcStack>
        <DxcStack align="end" gutter="small">
          {nextLink && (
            <>
              <DxcText>Next</DxcText>
              <DxcLink icon={arrowForward} iconPosition="after">
                <Link href={nextLink.path}>
                  <a>{nextLink.label}</a>
                </Link>
              </DxcLink>
            </>
          )}
        </DxcStack>
      </DxcRow>
    </DxcStack>
  );
};

const arrowForward = (
  <svg
    id="arrow_forward_black_24dp"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path id="Path_2989" data-name="Path 2989" d="M0,0H16V16H0Z" fill="none" />
    <path
      id="Path_2990"
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
    <g id="arrow_forward_black_24dp" transform="translate(16 16) rotate(180)">
      <path
        id="Path_2989"
        data-name="Path 2989"
        d="M0,0H16V16H0Z"
        fill="none"
      />
      <path
        id="Path_2990"
        data-name="Path 2990"
        d="M9.333,4l-.94.94,3.72,3.727H4V10h8.113l-3.72,3.727.94.94,5.333-5.333Z"
        transform="translate(-1.333 -1.333)"
      />
    </g>
  </svg>
);

const githubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <g
      id="Group_4275"
      data-name="Group 4275"
      transform="translate(-670.003 -820.294)"
    >
      <g id="Group_4276" data-name="Group 4276">
        <rect
          id="Rectangle_2690"
          data-name="Rectangle 2690"
          width="24"
          height="24"
          transform="translate(670.003 820.294)"
          fill="none"
        />
        <path
          id="Octicons-mark-github"
          d="M10,0A10,10,0,0,0,6.837,19.487c.5.087.688-.213.688-.475,0-.237-.012-1.025-.012-1.863C5,17.612,4.35,16.537,4.15,15.975a3.636,3.636,0,0,0-1.025-1.412c-.35-.187-.85-.65-.012-.662A2,2,0,0,1,4.65,14.925a2.137,2.137,0,0,0,2.912.825A2.1,2.1,0,0,1,8.2,14.412c-2.225-.25-4.55-1.112-4.55-4.937A3.892,3.892,0,0,1,4.675,6.787a3.593,3.593,0,0,1,.1-2.65s.837-.262,2.75,1.025a9.428,9.428,0,0,1,5,0c1.913-1.3,2.75-1.025,2.75-1.025a3.593,3.593,0,0,1,.1,2.65A3.869,3.869,0,0,1,16.4,9.475c0,3.837-2.337,4.688-4.562,4.937a2.368,2.368,0,0,1,.675,1.85c0,1.337-.013,2.412-.013,2.75,0,.262.188.575.688.475A10.005,10.005,0,0,0,10,0Z"
          transform="translate(672.003 822.541)"
        />
      </g>
    </g>
  </svg>
);

export default DocFooter;
