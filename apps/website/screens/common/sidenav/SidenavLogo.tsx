import styled from "@emotion/styled";
import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";

const SidenavTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--typography-font-family);
  font-size: var(--typography-ttle-m);
  color: var(--color-fg-neutral-dark);
  font-weight: var(--typography-title-bold);
`;

const SidenavLogo = () => {
  const pathVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
      <SidenavTitle>Halstack Design System</SidenavTitle>
      <DxcBadge
        color="primary"
        label={isDev ? "dev" : pathVersion === "next" ? pathVersion : `v${pathVersion}`}
        size="small"
      />
    </DxcFlex>
  );
};

export default SidenavLogo;
