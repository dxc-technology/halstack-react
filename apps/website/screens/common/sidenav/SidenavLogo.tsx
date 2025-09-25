import styled from "@emotion/styled";
import Image from "@/common/Image";
import halstackLogo from "@/common/images/halstack_logo.svg";
import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--spacing-padding-none) var(--spacing-padding-l);
`;

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

const SidenavLogo = ({ subtitle = "Design System" }: { subtitle?: string }) => {
  const pathVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <DxcFlex alignItems="center">
      <LogoContainer>
        <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
          <Image alt="Halstack logo" height={24} src={halstackLogo} width={24} />
          <Title>Halstack</Title>
        </DxcFlex>
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <DxcBadge
        color="purple"
        label={isDev ? "dev" : pathVersion === "next" ? pathVersion : `v${pathVersion}`}
        size="small"
      />
    </DxcFlex>
  );
};

export default SidenavLogo;
