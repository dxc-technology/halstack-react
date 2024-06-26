import styled from "styled-components";
import Image from "@/common/Image";
import halstackLogo from "@/common/images/halstack_logo.svg";
import React from "react";
import { DxcBadge, DxcFlex } from "@repo/ui";
import { useRouter } from "next/router";

type SidenavLogoProps = { subtitle?: string };

const SidenavLogo = ({ subtitle = "Design System" }: SidenavLogoProps): JSX.Element => {
  const { basePath } = useRouter();
  const pathVersion = basePath.split("/")[2];
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
        label={isDev ? "dev" : isNaN(parseInt(pathVersion)) ? "next" : `v${pathVersion}`}
        color="purple"
        size="small"
      />
    </DxcFlex>
  );
};

const LogoContainer = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: #5f249f;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  color: #4d4d4d;
  margin-left: 0.8rem;
`;

export default SidenavLogo;
