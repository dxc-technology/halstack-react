import styled from "styled-components";
import Image from "@/common/Image";
import halstackLogo from "@/common/images/halstack_logo.svg";
import StatusTag from "@/common/StatusTag";
import React from "react";
import { useRouter } from "next/router";
import pjson from "../../../package-lock.json";

type SidenavLogoProps = { subtitle?: string };

const SidenavLogo = ({
  subtitle = "Design System",
}: SidenavLogoProps): JSX.Element => {
  const { basePath } = useRouter();
  const pathVersion = basePath.split("/")[2];
  const isDev = process.env.NODE_ENV === "development";
  const siteVersion =
    pjson.dependencies["@dxc-technology/halstack-react"].version;

  return (
    <SidenavLogoContainer>
      <LogoContainer>
        <Header>
          <Image
            src={halstackLogo}
            alt="Halstack logo"
            width="24px"
            height="24px"
          />
          <Title>Halstack</Title>
        </Header>
        <Subtitle>{subtitle}</Subtitle>
      </LogoContainer>
      <StatusTag>
        {isDev
          ? "dev"
          : isNaN(parseInt(pathVersion))
          ? "next"
          : `v${siteVersion}`}
      </StatusTag>
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
