import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBreadcrumbs from "./Breadcrumbs";
import DxcContainer from "../container/Container";

export default {
  title: "Breadcrumbs",
  component: DxcBreadcrumbs,
};

const collapsedIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
  </svg>
);

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User Menu",
    href: "",
  },
  {
    label: "Preferences",
    href: "",
  },
  {
    label: "Customization",
    href: "",
  },
  {
    label: "Dark Mode",
    href: "",
  },
];

export const Chromatic = () => (
  <>
    <Title title="Breadcrumbs" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "User Menu",
            href: "",
          },
          {
            label: "Preferences",
            href: "",
          },
          {
            label: "Dark Mode",
            href: "",
          },
        ]}
      />
    </ExampleContainer>
    <Title title="Home icon breadcrumbs" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "User Menu",
            href: "",
          },
        ]}
      />
    </ExampleContainer>
    <Title title="Collapsed breadcrumbs" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Collapsed breadcrumbs without root" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs items={items} showRoot={false} />
    </ExampleContainer>
    <Title title="Collapsed breadcrumbs with custom collapsed icon" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs items={items} showRoot={false} />
    </ExampleContainer>
    <Title title="Breadcrumbs collapse with three elements" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs
        items={[
          {
            label: "Root",
            href: "/",
          },
          {
            label: "Main folder",
            href: "",
          },
          {
            label: "User",
            href: "",
          },
          {
            label: "Test",
            href: "",
          },
        ]}
        itemsBeforeCollapse={3}
      />
    </ExampleContainer>
    <Title title="Truncation and text ellipsis (only when collapsed)" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="200px">
        <DxcBreadcrumbs
          items={[
            {
              label: "Root",
              href: "/",
            },
            {
              label: "Main folder",
              href: "",
            },
            {
              label: "User",
              href: "",
            },
            {
              label: "Very long label for the link",
              href: "",
            },
          ]}
          itemsBeforeCollapse={3}
          showRoot={false}
        />
      </DxcContainer>
    </ExampleContainer>
  </>
);
