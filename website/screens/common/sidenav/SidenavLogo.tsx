import styled from "styled-components";
import Image from "@/common/Image";
import halstackLogo from "@/common/images/halstack_logo.svg";
import React from "react";
import { useRouter } from "next/router";
import pjson from "../../../package-lock.json";
import { DxcBadge } from "@dxc-technology/halstack-react";

type SidenavLogoProps = { subtitle?: string };

const SidenavLogo = ({
  subtitle = "Design System",
}: SidenavLogoProps): JSX.Element => {
  const { basePath } = useRouter();
  const pathVersion = basePath.split("/")[2];
  const isDev = process.env.NODE_ENV === "development";
  const halstackVersion =
    pjson.packages["node_modules/@dxc-technology/halstack-react"].version;

  return (
    <SidenavLogoContainer>
      <LogoContainer>
        <Header>
          <Image
            src={halstackLogo}
            alt="Halstack logo"
            width={24}
            height={24}
          />
          <Title>Halstack</Title>
        </Header>
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <DxcBadge
        label={
          isDev
            ? "dev"
            : isNaN(parseInt(pathVersion))
            ? "next"
            : `v${halstackVersion}`
        }
        color="purple"
        size="small"
      />
    </SidenavLogoContainer>
  );
};

const SidenavLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  gap: 0.5rem;
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
