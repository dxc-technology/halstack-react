import { Meta, StoryObj } from "@storybook/react-vite";
import DxcNewHeader from "./new-header";
import DxcBadge from "../badge/Badge";
import { useEffect } from "react";

export default {
  title: "newHeader",
  component: DxcNewHeader,
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
} satisfies Meta<typeof DxcNewHeader>;

const branding = {
  logo: {
    src: "https://picsum.photos/104/34",
    alt: "DXC Logo",
    href: "https://www.dxc.com",
  },
  appTitle: "Application Title",
};

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

const NewHeader = () => (
  <>
    <DxcNewHeader branding={branding} navItems={items} sideContent={<div>Side Content</div>} />
  </>
);

type Story = StoryObj<typeof DxcNewHeader>;

export const Chromatic: Story = {
  render: NewHeader,
};
