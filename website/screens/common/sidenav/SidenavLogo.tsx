import styled from "styled-components";
import Image from "../Image";
import halstackLogo from "../images/halstack_logo.svg";

const SidenavLogo = () => {
  return (
    <SidenavLogoContainer>
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
    </SidenavLogoContainer>
  );
};

const SidenavLogoContainer = styled.div`
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
