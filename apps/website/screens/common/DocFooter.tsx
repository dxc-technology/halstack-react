import { useRouter } from "next/router";
import { DxcTypography, DxcLink, DxcFlex, DxcDivider } from "@dxc-technology/halstack-react";
import Link from "next/link";
import { getNavigationLinks } from "./pagesList";

export default function DocFooter({ githubLink }: { githubLink: string }) {
  const { pathname } = useRouter();
  const { nextLink, previousLink } = getNavigationLinks(pathname);

  return (
    <div style={{ maxWidth: "800px" }}>
      <DxcFlex direction="column" gap="2rem">
        <DxcFlex gap="2rem">
          <DxcLink href={githubLink} icon="edit" newWindow>
            Edit this page on GitHub
          </DxcLink>
          <DxcLink href="https://github.com/dxc-technology/halstack-react/issues/new/choose" icon="error" newWindow>
            Report an issue on GitHub
          </DxcLink>
        </DxcFlex>
        <DxcDivider color="darkGrey" />
        <DxcFlex justifyContent="space-between">
          <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
            {previousLink && (
              <>
                <DxcTypography>Previous</DxcTypography>
                <Link href={previousLink.path} passHref legacyBehavior>
                  <DxcLink icon="arrow_back">{previousLink.label}</DxcLink>
                </Link>
              </>
            )}
          </DxcFlex>
          <DxcFlex direction="column" alignItems="flex-end" gap="var(--spacing-gap-ml)">
            {nextLink && (
              <>
                <DxcTypography>Next</DxcTypography>
                <Link href={nextLink.path} passHref legacyBehavior>
                  <DxcLink icon="arrow_forward" iconPosition="after">
                    {nextLink.label}
                  </DxcLink>
                </Link>
              </>
            )}
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </div>
  );
}
