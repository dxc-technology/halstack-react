import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

const code = `() => {
    const logo = {
    src: dxcLogo,
    alt: "DXC Logo",
    href: "https://www.dxc.com",
    };

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
  return (
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
}`;

const scope = {
  DxcApplicationLayout,
};

export default { code, scope };
