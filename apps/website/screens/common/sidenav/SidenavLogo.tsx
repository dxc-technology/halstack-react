import styled from "styled-components";
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
`;

const Subtitle = styled.div`
  color: var(--color-fg-neutral-strongest);
  font-size: var(--typography-title-m);
  margin-left: var(--spacing-padding-s);
`;

export default function SidenavLogo({ subtitle = "Design System" }: { subtitle?: string }) {
  const pathVersion = process.env.NEXT_PUBLIC_SITE_VERSION;
  const isDev = process.env.NODE_ENV === "development";

  return (
    <DxcFlex alignItems="center">
      <LogoContainer>
        <DxcFlex alignItems="center" gap="0.5rem">
          <Image src={halstackLogo} alt="Halstack logo" width={24} height={24} />
          <Title>Halstack</Title>
        </DxcFlex>
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <DxcBadge
        label={isDev ? "dev" : pathVersion === "next" ? pathVersion : `v${pathVersion}`}
        color="purple"
        size="small"
      />
    </DxcFlex>
  );
}
