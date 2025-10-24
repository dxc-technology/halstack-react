import { Meta, StoryObj } from "@storybook/react-vite";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcSidenav from "./Sidenav";
import DxcBadge from "../badge/Badge";
import DxcFlex from "../flex/Flex";
import DxcTypography from "../typography/Typography";
import DxcButton from "../button/Button";
import DxcAvatar from "../avatar/Avatar";
import { userEvent, within } from "storybook/internal/test";
import disabledRules from "../../test/accessibility/rules/specific/sidenav/disabledRules";
import preview from "../../.storybook/preview";

export default {
  title: "Sidenav",
  component: DxcSidenav,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...(preview?.parameters?.a11y?.config?.rules || []),
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcSidenav>;

const DetailedAvatar = () => {
  return (
    <DxcFlex justifyContent="space-between" alignItems="center">
      <DxcFlex gap="var(--spacing-gap-s)">
        <DxcAvatar color="primary" status={{ mode: "error", position: "bottom" }} title="Michael Ramirez" />
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
      <DxcButton
        icon="keyboard_arrow_right"
        size={{ height: "medium", width: "small" }}
        mode="tertiary"
        title="Show details"
      />
    </DxcFlex>
  );
};

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
              { label: "Selected Item 3" },
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

const selectedGroupItems = [
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
              { label: "Selected Item 3", selected: true },
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

const SideNav = () => (
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
    <ExampleContainer>
      <Title title="Sidenav with group lines" theme="light" level={4} />
      <DxcSidenav
        items={groupItems}
        title="Application Name"
        logo={{
          src: "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
          alt: "TEST",
        }}
        displayGroupLines
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

const Collapsed = () => (
  <>
    <ExampleContainer>
      <Title title="Collapsed sidenav" theme="light" level={4} />
      <DxcSidenav items={groupItems} title="App Name">
        {(expanded: boolean) =>
          expanded ? (
            <>
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
            </>
          ) : (
            <>
              <DxcAvatar color="primary" status={{ mode: "error", position: "bottom" }} title="Michael Ramirez" />
              <DxcFlex direction="column" gap="var(--spacing-gap-m)">
                <DxcButton
                  icon="group"
                  iconPosition="after"
                  title="Manage clients"
                  mode="secondary"
                  size={{ height: "medium", width: "fillParent" }}
                />
                <DxcButton
                  icon="note_add"
                  title="Start new application"
                  size={{ height: "medium", width: "fillParent" }}
                />
              </DxcFlex>
            </>
          )
        }
      </DxcSidenav>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Collapsed sidenav with groups expanded (no lines)" theme="light" level={4} />
      <DxcSidenav items={groupItems} title="App Name">
        {(expanded: boolean) =>
          expanded ? (
            <>
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
            </>
          ) : (
            <>
              <DxcAvatar color="primary" status={{ mode: "error", position: "bottom" }} title="Michael Ramirez" />
              <DxcFlex direction="column" gap="var(--spacing-gap-m)">
                <DxcButton
                  icon="group"
                  iconPosition="after"
                  title="Manage clients"
                  mode="secondary"
                  size={{ height: "medium", width: "fillParent" }}
                />
                <DxcButton
                  icon="note_add"
                  title="Start new application"
                  size={{ height: "medium", width: "fillParent" }}
                />
              </DxcFlex>
            </>
          )
        }
      </DxcSidenav>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Collapsed sidenav with groups expanded (lines)" theme="light" level={4} />
      <DxcSidenav items={groupItems} title="App Name" displayGroupLines>
        {(expanded: boolean) =>
          expanded ? (
            <>
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
            </>
          ) : (
            <>
              <DxcAvatar color="primary" status={{ mode: "error", position: "bottom" }} title="Michael Ramirez" />
              <DxcFlex direction="column" gap="var(--spacing-gap-m)">
                <DxcButton
                  icon="group"
                  iconPosition="after"
                  title="Manage clients"
                  mode="secondary"
                  size={{ height: "medium", width: "fillParent" }}
                />
                <DxcButton
                  icon="note_add"
                  title="Start new application"
                  size={{ height: "medium", width: "fillParent" }}
                />
              </DxcFlex>
            </>
          )
        }
      </DxcSidenav>
    </ExampleContainer>
  </>
);

const Hovered = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Hover state for groups" theme="light" level={4} />
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
);

const SelectedGroup = () => (
  <ExampleContainer>
    <Title title="Default sidenav" theme="light" level={4} />
    <DxcSidenav
      items={selectedGroupItems}
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
);
type Story = StoryObj<typeof DxcSidenav>;

// TODO: ADD TEST AND STORIES FOR LINK/RENDERITEM PROPS

export const Chromatic: Story = {
  render: SideNav,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuItem1 = (await canvas.findAllByRole("button"))[10];
    if (menuItem1) {
      await userEvent.click(menuItem1);
    }
    const menuItem2 = (await canvas.findAllByRole("button"))[12];
    if (menuItem2) {
      await userEvent.click(menuItem2);
    }
  },
};

export const CollapsedSideNav: Story = {
  render: Collapsed,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButtons = await canvas.findAllByRole("button", { name: "Collapse" });
    for (const button of collapseButtons) {
      await userEvent.click(button);
    }
    const menuItem1 = (await canvas.findAllByRole("button"))[9];
    if (menuItem1) {
      await userEvent.click(menuItem1);
    }
    const menuItem2 = (await canvas.findAllByRole("button"))[11];
    if (menuItem2) {
      await userEvent.click(menuItem2);
    }
    const menuItem3 = (await canvas.findAllByRole("button"))[21];
    if (menuItem3) {
      await userEvent.click(menuItem3);
    }
    const menuItem4 = (await canvas.findAllByRole("button"))[23];
    if (menuItem4) {
      await userEvent.click(menuItem4);
    }
  },
};

export const HoveredSideNav: Story = {
  render: Hovered,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log(await canvas.findAllByRole("button"));
    const menuItem1 = (await canvas.findAllByRole("button"))[1];
    if (menuItem1) {
      await userEvent.click(menuItem1);
    }
    const menuItem2 = (await canvas.findAllByRole("button"))[3];
    if (menuItem2) {
      await userEvent.click(menuItem2);
    }
  },
};

export const SelectedGroupSideNav: Story = {
  render: SelectedGroup,
};
