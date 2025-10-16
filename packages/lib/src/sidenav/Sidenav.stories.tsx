import { Meta, StoryObj } from "@storybook/react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcSidenav from "./Sidenav";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import DxcTypography from "../typography/Typography";
import DxcContainer from "../container/Container";
import DxcButton from "../button/Button";

export default {
  title: "Sidenav",
  component: DxcSidenav,
} as Meta<typeof DxcSidenav>;

const DetailedAvatar = () => {
  return (
    <DxcFlex justifyContent="space-between" alignItems="center">
      <DxcFlex gap="var(--spacing-gap-s)">
        {/* TODO: METER AVATAR */}
        <DxcContainer
          width="40px"
          height="40px"
          background={{ color: "var(--color-fg-primary-lighter)" }}
          borderRadius="125px"
        />
        <DxcFlex direction="column">
          <DxcTypography
            color="var(--color-fg-neutral-dark"
            fontFamily="var(--typography-font-family)"
            fontSize="var(--typography-label-l)"
            fontWeight="var(--typography-label-regular)"
          >
            Michael Ramirez
          </DxcTypography>
          <DxcTypography
            color="var(--color-fg-neutral-stronger"
            fontFamily="var(--typography-font-family)"
            fontSize="var(--typography-label-s)"
            fontWeight="var(--typography-label-regular)"
          >
            m.ramirez@insurance.com
          </DxcTypography>
        </DxcFlex>
      </DxcFlex>
      {/* TODO: DISCUSS WITH DESIGNERS ACTIONICON OR BUTTON? */}
      <DxcButton
        icon="keyboard_arrow_right"
        size={{ height: "medium", width: "small" }}
        mode="tertiary"
        title="Show details"
      />
    </DxcFlex>
  );
};

const SideNav = () => {
  const groupItems = [
    {
      title: "Section 1",
      items: [
        {
          label: "Grouped Item 1",
          icon: "favorite",
          items: [
            { label: "Item 1", icon: "person" },
            {
              label: "Grouped Item 2",
              items: [
                {
                  label: "Item 2",
                  icon: "bookmark",
                  badge: <DxcBadge color="primary" label="Experimental" />,
                },
                { label: "Selected Item 3", selectedByDefault: true },
              ],
            },
          ],
          badge: <DxcBadge color="success" label="New" />,
        },
        { label: "Item 4", icon: "key" },
      ],
    },
    {
      title: "Section 2",
      items: [
        { label: "Item 5", icon: "person" },
        { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
        { label: "Item 9" },
      ],
    },
  ];
  return (
    <>
      <ExampleContainer>
        <Title title="Default sidenav" theme="light" level={4} />
        <DxcSidenav
          items={groupItems}
          title="Application Name"
          logo={{
            src: "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
            alt: "TEST",
          }}
        >
          <DetailedAvatar />
          <DxcFlex direction="column" gap="var(--spacing-gap-m)">
            <DxcButton
              icon="group"
              iconPosition="after"
              title="Manage clients"
              label="Manage clients"
              mode="secondary"
              size={{ height: "medium", width: "fillParent" }}
            />
            <DxcButton
              icon="note_add"
              iconPosition="after"
              title="Start new application"
              label="Start new application"
              size={{ height: "medium", width: "fillParent" }}
            />
          </DxcFlex>
        </DxcSidenav>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcSidenav>;

export const Chromatic: Story = {
  render: SideNav,
};
