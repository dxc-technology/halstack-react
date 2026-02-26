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
import DxcApplicationLayout from "../layout/ApplicationLayout";
import DxcParagraph from "../paragraph/Paragraph";
import { useEffect, useState } from "react";

export default {
  title: "Sidenav",
  component: DxcSidenav,
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.style.padding = "0";
      }, []);

      return <Story />;
    },
  ],
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
            color="var(--color-fg-neutral-dark)"
            fontFamily="var(--typography-font-family)"
            fontSize="var(--typography-label-l)"
            fontWeight="var(--typography-label-regular)"
          >
            Michael Ramirez
          </DxcTypography>
          <DxcTypography
            color="var(--color-fg-neutral-stronger)"
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

const dxcLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="860" height="240" viewBox="0 0 860 240" fill="none">
    <path
      d="M220.055 60.7583C252.905 60.7583 279.643 87.4387 279.644 120.247C279.644 153.055 252.905 179.735 220.055 179.735H61V155.455H220.055C239.522 155.455 255.362 139.657 255.362 120.247C255.362 100.836 239.522 85.0396 220.055 85.0396H61V60.7583H220.055ZM798 85.0386H638.945C619.478 85.0386 603.638 100.836 603.638 120.247C603.638 139.657 619.478 155.454 638.945 155.454H798V179.735H638.945C606.08 179.735 579.357 153.054 579.356 120.247C579.356 87.4387 606.095 60.7573 638.945 60.7573H798V85.0386ZM556.104 85.0386C530.11 85.0387 511.856 96.5366 492.531 108.706C486.261 112.662 479.906 116.647 473.278 120.204C479.905 123.76 486.261 127.744 492.531 131.701C511.856 143.87 530.11 155.368 556.104 155.368V179.649C523.097 179.649 499.987 165.095 479.591 152.254C462.637 141.585 447.997 132.358 430.058 132.358C412.118 132.358 397.478 141.571 380.524 152.254C360.128 165.095 337.018 179.649 304.011 179.649V155.368C330.006 155.368 348.259 143.87 367.584 131.701C373.854 127.744 380.211 123.76 386.838 120.204C380.211 116.647 373.854 112.662 367.584 108.706C348.259 96.5366 330.006 85.0386 304.011 85.0386V60.7573C337.018 60.7573 360.128 75.3119 380.524 88.1665C397.478 98.8358 412.118 108.063 430.058 108.063V108.048C447.997 108.048 462.637 98.8364 479.591 88.1528C499.987 75.3125 523.097 60.7575 556.104 60.7573V85.0386Z"
      fill="url(#paint0_radial_1679_944)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_1679_944"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(402.422 -113.55 49.0928 173.987 432 120.032)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFB87E" />
        <stop offset="0.163458" stop-color="#FFA962" />
        <stop offset="0.337937" stop-color="#FEA15F" />
        <stop offset="0.557693" stop-color="#FF7E51" />
        <stop offset="0.839777" stop-color="#B88A99" />
        <stop offset="1" stop-color="#6399F0" />
      </radialGradient>
    </defs>
  </svg>
);

const dxcBrandedLogo = {
  src: dxcLogo,
  alt: "DXC Logo",
};

const Sidenav = () => (
  <>
    <ExampleContainer>
      <Title title="Default sidenav" theme="light" level={4} />
      <DxcSidenav
        navItems={groupItems}
        appTitle="Application Name"
        searchBar={{ placeholder: "Search..." }}
        bottomContent={
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
        }
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Sidenav with group lines" theme="light" level={4} />
      <DxcSidenav
        navItems={groupItems}
        appTitle="Application Name"
        searchBar={{ placeholder: "Search..." }}
        bottomContent={
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
        }
        displayGroupLines
      />
    </ExampleContainer>
  </>
);

const Collapsed = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpandedGroupsNoLines, setIsExpandedGroupsNoLines] = useState(true);
  const [isExpandedGroups, setIsExpandedGroups] = useState(true);
  return (
    <>
      <ExampleContainer>
        <Title title="Collapsed sidenav" theme="light" level={4} />
        <DxcSidenav
          navItems={groupItems}
          appTitle="App Name"
          searchBar={{ placeholder: "Search..." }}
          bottomContent={
            isExpanded ? (
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
          expanded={isExpanded}
          onExpandedChange={() => {
            setIsExpanded((previouslyExpanded) => !previouslyExpanded);
          }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Collapsed sidenav with groups expanded (no lines)" theme="light" level={4} />
        <DxcSidenav
          navItems={groupItems}
          appTitle="App Name"
          searchBar={{ placeholder: "Search..." }}
          bottomContent={
            isExpandedGroupsNoLines ? (
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
          expanded={isExpandedGroupsNoLines}
          onExpandedChange={() => {
            setIsExpandedGroupsNoLines((previouslyExpanded) => !previouslyExpanded);
          }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Collapsed sidenav with groups expanded (lines)" theme="light" level={4} />
        <DxcSidenav
          navItems={groupItems}
          appTitle="App Name"
          searchBar={{ placeholder: "Search..." }}
          bottomContent={
            isExpandedGroups ? (
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
          expanded={isExpandedGroups}
          onExpandedChange={() => {
            setIsExpandedGroups((previouslyExpanded) => !previouslyExpanded);
          }}
          displayGroupLines
        />
      </ExampleContainer>
    </>
  );
};

const Hovered = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Hover state for groups" theme="light" level={4} />
    <DxcSidenav
      navItems={groupItems}
      appTitle="Application Name"
      searchBar={{ placeholder: "Search..." }}
      bottomContent={
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
      }
    />
  </ExampleContainer>
);

const SelectedGroup = () => (
  <ExampleContainer>
    <Title title="Default sidenav" theme="light" level={4} />
    <DxcSidenav
      navItems={selectedGroupItems}
      appTitle="Application name"
      searchBar={{ placeholder: "Search..." }}
      bottomContent={
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
      }
    />
  </ExampleContainer>
);

const SidenavInLayout = () => (
  <DxcApplicationLayout
    logo={dxcBrandedLogo}
    sidenav={
      <DxcApplicationLayout.Sidenav
        appTitle="Application Layout with Sidenav"
        navItems={groupItems}
        searchBar={{ placeholder: "Search..." }}
      />
    }
  >
    <DxcApplicationLayout.Main>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
    </DxcApplicationLayout.Main>
  </DxcApplicationLayout>
);

export const InLayout: Story = {
  render: SidenavInLayout,
};

export const Responsive: Story = {
  render: SidenavInLayout,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise<void>((resolve) => setTimeout(resolve, 100));
    await canvas.findByLabelText("Expand");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await canvas.findByLabelText("Collapse");
  },
};

type Story = StoryObj<typeof DxcSidenav>;

export const Chromatic: Story = {
  render: Sidenav,
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

export const CollapsedSidenav: Story = {
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

export const HoveredSidenav: Story = {
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

export const SelectedGroupSidenav: Story = {
  render: SelectedGroup,
};
