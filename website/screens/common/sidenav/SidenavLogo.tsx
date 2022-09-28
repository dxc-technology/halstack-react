import styled from "styled-components";
import Image from "@/common/Image";
import halstackLogo from "@/common/images/halstack_logo.svg";
import StatusTag from "@/common/StatusTag";
import React from "react";
import { useRouter } from "next/router";

const SidenavLogo = () => {
  const router = useRouter();
  const siteVersion = router.basePath.split("/")[2];

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
        <Subtitle>Design system</Subtitle>
      </LogoContainer>
      <StatusTag>
        {router.basePath
          ? isNaN(parseInt(siteVersion))
            ? siteVersion
            : `v${siteVersion}.0.0`
          : "dev"}
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
