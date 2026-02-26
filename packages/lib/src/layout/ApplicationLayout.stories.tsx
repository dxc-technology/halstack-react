import { Meta, StoryObj } from "@storybook/react-vite";
import Title from "../../.storybook/components/Title";
import DxcApplicationLayout from "./ApplicationLayout";
import { userEvent, within } from "storybook/internal/test";
import { useEffect } from "react";

export default {
  title: "Application Layout",
  component: DxcApplicationLayout,
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.style.padding = "0";
      }, []);

      return <Story />;
    },
  ],
} satisfies Meta<typeof DxcApplicationLayout>;

const dxcLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="860" height="240" viewBox="0 0 860 240" fill="none">
    <title>DXC Logo</title>
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

const logo = {
  src: dxcLogo,
  alt: "DXC Logo",
  href: "https://www.dxc.com",
};

const ApplicationLayout = () => (
  <>
    <DxcApplicationLayout logo={logo} header={<DxcApplicationLayout.Header appTitle="Default Application Layout" />}>
      <DxcApplicationLayout.Main>
        <Title title="Default application layout" theme="light" level={4} />
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const items = [
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
  {
    label: "Sidenav Content",
    icon: "tab",
  },
];

const ApplicationLayoutDefaultSidenav = () => (
  <>
    <DxcApplicationLayout logo={logo} sidenav={<DxcApplicationLayout.Sidenav navItems={items} />}>
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutResponsiveSidenav = () => (
  <>
    <DxcApplicationLayout
      logo={logo}
      sidenav={
        <DxcApplicationLayout.Sidenav
          appTitle="Application layout with push sidenav"
          navItems={items}
          defaultExpanded={false}
        />
      }
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutCustomHeader = () => (
  <>
    <DxcApplicationLayout
      logo={logo}
      header={<p>Custom Header</p>}
      sidenav={<DxcApplicationLayout.Sidenav appTitle="Application layout with push sidenav" navItems={items} />}
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const ApplicationLayoutCustomFooter = () => (
  <>
    <DxcApplicationLayout
      logo={logo}
      footer={<p>Custom Footer</p>}
      header={<DxcApplicationLayout.Header appTitle="Application layout with custom footer" />}
      sidenav={<DxcApplicationLayout.Sidenav appTitle="Application layout with push sidenav" navItems={items} />}
    >
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  </>
);

const Tooltip = () => (
  <DxcApplicationLayout
    logo={logo}
    sidenav={
      <DxcApplicationLayout.Sidenav appTitle="Application layout with push sidenav" navItems={items} defaultExpanded />
    }
  >
    <DxcApplicationLayout.Main>
      <p>Main Content</p>
    </DxcApplicationLayout.Main>
  </DxcApplicationLayout>
);

type Story = StoryObj<typeof DxcApplicationLayout>;

export const DefaultApplicationLayout: Story = {
  render: ApplicationLayout,
};
export const ApplicationLayoutWithDefaultSidenav: Story = {
  render: ApplicationLayoutDefaultSidenav,
};
export const ApplicationLayoutWithResponsiveSidenav: Story = {
  render: ApplicationLayoutResponsiveSidenav,
  parameters: {
    chromatic: { viewports: [540] },
  },
  globals: {
    viewport: { value: "pixel", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = (await canvas.findAllByRole("button"))[0];
    if (collapseButton) {
      await userEvent.click(collapseButton);
    }
  },
};

export const ApplicationLayoutWithCustomHeader: Story = {
  render: ApplicationLayoutCustomHeader,
};

export const ApplicationLayoutWithCustomFooter: Story = {
  render: ApplicationLayoutCustomFooter,
};

export const ApplicationLayoutTooltip: Story = {
  render: Tooltip,
  parameters: {
    chromatic: { viewports: [540] },
  },
  globals: {
    viewport: { value: "pixel", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = (await canvas.findAllByRole("button"))[0];
    if (collapseButton) {
      await userEvent.hover(collapseButton);
    }
  },
};
