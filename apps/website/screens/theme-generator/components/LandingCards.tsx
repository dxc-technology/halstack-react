import { DxcContainer, DxcFlex, DxcTypography, DxcAvatar } from "@dxc-technology/halstack-react";

const LandingCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <DxcContainer width="345px" padding="var(--spacing-padding-m)" boxShadow="var(--shadow-100)">
      <DxcFlex direction="column" gap="var(--spacing-gap-ml)" justifyContent="center">
        <DxcFlex>
          <DxcAvatar icon={icon} color="primary" size="large" shape="square" />
        </DxcFlex>
        <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
          <DxcTypography fontWeight="var(--typography-title-bold)">{title}</DxcTypography>
          <DxcTypography fontSize="var(--typography-body-s)">{description}</DxcTypography>
        </DxcFlex>
      </DxcFlex>
    </DxcContainer>
  );
};

const LandingCards = ({ cards }: { cards: { icon: string; title: string; description: string }[] }) => {
  return (
    <DxcFlex gap="var(--spacing-gap-l)" wrap="wrap">
      {cards.map((card, index) => (
        <LandingCard key={index} {...card} />
      ))}
    </DxcFlex>
  );
};

export default LandingCards;
