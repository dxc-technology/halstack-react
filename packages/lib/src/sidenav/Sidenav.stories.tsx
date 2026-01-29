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
import { useState } from "react";
import DxcApplicationLayout from "../layout/ApplicationLayout";
import DxcParagraph from "../paragraph/Paragraph";

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
  <svg xmlns="http://www.w3.org/2000/svg" width="73" height="40" viewBox="0 0 73 40">
    <title>DXC Logo</title>
    <g transform="translate(0)">
      <g>
        <path
          d="M91.613-28.177v2.514H90.231V-28.15l-2.415-3.82h1.616l1.5,2.532,1.526-2.532h1.571ZM83.9-25.555A3.15,3.15,0,0,1,80.6-28.8v-.018a3.231,3.231,0,0,1,3.294-3.262,3.442,3.442,0,0,1,2.469.865l-.87,1.054a2.311,2.311,0,0,0-1.643-.64,1.891,1.891,0,0,0-1.8,1.964v.018a1.886,1.886,0,0,0,1.9,2,2.2,2.2,0,0,0,1.3-.378v-.9H83.858v-1.2h2.729v2.738A4.071,4.071,0,0,1,83.9-25.555Zm-6.416-3.261a1.913,1.913,0,0,0-1.9-1.982A1.883,1.883,0,0,0,73.7-28.835v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,77.486-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018A3.255,3.255,0,0,1,75.6-32.078a3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,75.583-25.555Zm-9.173-.108V-31.97h1.382v5.045h3.133v1.261Zm-3.433-3.153a1.913,1.913,0,0,0-1.9-1.982,1.883,1.883,0,0,0-1.886,1.964v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,62.978-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018a3.255,3.255,0,0,1,3.348-3.262,3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,61.075-25.555Zm-6.508-.108-3.043-4.009v4.009H50.159V-31.97h1.275l2.944,3.883V-31.97h1.364v6.306Zm-8.246,0v-2.531h-2.55v2.531H42.389V-31.97h1.382v2.5h2.55v-2.5H47.7v6.306Zm-8.432.108A3.178,3.178,0,0,1,34.666-28.8v-.018a3.2,3.2,0,0,1,3.276-3.262,3.237,3.237,0,0,1,2.478.973l-.88,1.018a2.315,2.315,0,0,0-1.606-.712,1.866,1.866,0,0,0-1.822,1.964v.018a1.87,1.87,0,0,0,1.822,1.982,2.265,2.265,0,0,0,1.651-.739l.88.891A3.206,3.206,0,0,1,37.889-25.555Zm-9.805-.108V-31.97h4.739v1.235H29.458v1.279h2.962v1.234H29.458V-26.9h3.411v1.234ZM24.322-30.69v5.027H22.939V-30.69H21.028v-1.28h5.206v1.28H24.322"
          transform="translate(-21.028 65.555)"
          fill="#010101"
        />
        <path
          d="M75.836-76.712a8.975,8.975,0,0,1,2.246-3.9,8.393,8.393,0,0,1,6.058-2.457h9.824v-5.67H84.139a14.611,14.611,0,0,0-10.232,4.221,14.509,14.509,0,0,0-3.076,4.536,11.913,11.913,0,0,0-.973,3.271Zm0,4.325a8.978,8.978,0,0,0,2.246,3.9,8.394,8.394,0,0,0,6.058,2.457h9.824v5.67H84.139A14.611,14.611,0,0,1,73.907-64.58a14.506,14.506,0,0,1-3.076-4.536,11.91,11.91,0,0,1-.973-3.271ZM57.522-69.832l-7.5,9.473H42.581L53.818-74.55,42.581-88.739H50.02l7.5,9.472,7.5-9.472h7.439L61.225-74.55l11.237,14.19H65.023Zm-12.336-6.88a11.935,11.935,0,0,0-.973-3.271,14.515,14.515,0,0,0-3.076-4.536A14.612,14.612,0,0,0,30.9-88.739H21.081v5.67H30.9a8.394,8.394,0,0,1,6.058,2.457,8.978,8.978,0,0,1,2.246,3.9Zm0,4.325a11.932,11.932,0,0,1-.973,3.271,14.511,14.511,0,0,1-3.076,4.536A14.611,14.611,0,0,1,30.9-60.359H21.081v-5.67H30.9a8.4,8.4,0,0,0,6.058-2.457,8.981,8.981,0,0,0,2.246-3.9h5.978"
          transform="translate(-21.049 88.739)"
          fill="#603494"
        />
      </g>
    </g>
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
