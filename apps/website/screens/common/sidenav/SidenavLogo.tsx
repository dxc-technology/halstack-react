import styled from "@emotion/styled";
import Image from "@/common/Image";
import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import halstackLogo from "@/common/images/halstack_logo.svg";

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

const SidenavLogo = ({ subtitle = "Design System", expanded }: { subtitle?: string; expanded: boolean }) => {
  const pathVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
  const isDev = process.env.NODE_ENV === "development";

  return expanded ? (
    <DxcFlex alignItems="center">
      <LogoContainer>
        <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
          <Image
            alt="Halstack logo"
            height={24}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={halstackLogo}
            width={24}
          />
          <Title>Halstack</Title>
        </DxcFlex>
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <DxcBadge
        color="primary"
        label={isDev ? "dev" : pathVersion === "next" ? pathVersion : `v${pathVersion}`}
        size="small"
      />
    </DxcFlex>
  ) : (
    <Image
      alt="Halstack logo"
      height={32}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      src={halstackLogo}
      width={32}
    />
  );
};

export default SidenavLogo;
