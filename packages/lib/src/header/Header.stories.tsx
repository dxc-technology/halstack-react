import { Meta, StoryObj } from "@storybook/react-vite";
import DxcHeader from "./Header";
import DxcBadge from "../badge/Badge";
import { useEffect } from "react";
import DxcFlex from "../flex/Flex";
import Title from "../../.storybook/components/Title";

export default {
  title: "Header",
  component: DxcHeader,
  decorators: [
    (Story) => {
      useEffect(() => {
        const prev = document.body.style.cssText;
        document.body.style.backgroundColor = "var(--color-bg-neutral-light)";
        document.body.style.padding = "0";
        return () => {
          document.body.style.cssText = prev;
        };
      }, []);

      return <Story />;
    },
  ],
} satisfies Meta<typeof DxcHeader>;

const branding = {
  logo: {
    src: "https://picsum.photos/id/1000/104/34",
    alt: "DXC Logo",
    href: "https://www.dxc.com",
  },
  appTitle: "Application Title",
};

const brandingWithoutTitle = {
  logo: {
    src: "https://picsum.photos/id/1000/104/34",
    alt: "DXC Logo",
    href: "https://www.dxc.com",
  },
};

const longBranding = {
  logo: {
    src: "https://picsum.photos/id/1000/104/34",
    alt: "DXC Logo",
    href: "https://www.dxc.com",
  },
  appTitle:
    "Application Title with a very long name that exceeds the normal length to test how the header manages overflow situations",
};

const longSideContent = `Long side content that is intended to test how the header component handles situations where the side content exceeds the typical length. This content should ideally wrap or be truncated based on the design specifications of the header component within the application.`;

const items = [
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
  { label: "Item 5", icon: "person" },
  { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
  { label: "Item 9" },
];

const longItems = [
  ...items,
  { label: "Item 10" },
  { label: "Item 11" },
  { label: "Item 12" },
  { label: "Item 13" },
  { label: "Item 14" },
  { label: "Item 15" },
  { label: "Item 16" },
  { label: "Item 17" },
];

const Header = () => (
  <DxcFlex gap="var(--spacing-gap-m)" direction="column">
    <Title title="Default Header" theme="light" level={3} />
    <DxcHeader branding={brandingWithoutTitle} />
    <DxcHeader branding={branding} />
    <DxcHeader branding={branding} sideContent={<div>Side Content</div>} />
    <DxcHeader branding={branding} navItems={items} sideContent={<div>Side Content</div>} />
    <Title title="Header with long content" theme="light" level={3} />
    <DxcHeader branding={branding} navItems={items} sideContent={<div>{longSideContent}</div>} />
    <DxcHeader branding={longBranding} navItems={items} />
    <DxcHeader branding={longBranding} navItems={items} sideContent={<div>{longSideContent}</div>} />
    <DxcHeader branding={longBranding} sideContent={<div>{longSideContent}</div>} />
    <DxcHeader branding={longBranding} navItems={longItems} />
    <DxcHeader branding={longBranding} navItems={longItems} sideContent={<div>{longSideContent}</div>} />
  </DxcFlex>
);

type Story = StoryObj<typeof DxcHeader>;

export const Chromatic: Story = {
  render: Header,
};
