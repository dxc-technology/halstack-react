import styled from "@emotion/styled";
import { DxcBadge, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

// const AppTitleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: var(--spacing-padding-none) var(--spacing-padding-l);
// `;

const Title = styled.div`
  color: var(--color-fg-primary-strong);
  font-size: var(--typography-title-l);
  font-family: var(--typography-font-family);
`;

const Subtitle = styled.div`
  color: var(--color-fg-neutral-strongest);
  font-size: var(--typography-title-m);
  margin-left: var(--spacing-padding-s);
  font-family: var(--typography-font-family);
`;

const SidenavLogo = () => {
  const pathVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <DxcFlex alignItems="center">
      <DxcInset horizontal="var(--spacing-padding-l)">
        <Title>Halstack</Title>
        <Subtitle>Design System</Subtitle>
      </DxcInset>
      <DxcBadge
        color="primary"
        label={isDev ? "dev" : pathVersion === "next" ? pathVersion : `v${pathVersion}`}
        size="small"
      />
    </DxcFlex>
  );
};

export default SidenavLogo;
