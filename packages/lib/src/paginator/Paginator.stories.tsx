import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcPaginator from "./Paginator";

export default {
  title: "Paginator",
  component: DxcPaginator,
} as Meta<typeof DxcPaginator>;

const customViewports = {
  resizedScreen: {
    name: "Custom viewport",
    styles: {
      width: "400px",
      height: "1600px",
    },
  },
};

const Paginator = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcPaginator />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default with items per page options" theme="light" level={4} />
      <DxcPaginator itemsPerPageOptions={[5, 10, 15]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default with show go to page selector" theme="light" level={4} />
      <DxcPaginator showGoToPage />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change in first page" theme="light" level={4} />
      <DxcPaginator currentPage={1} itemsPerPage={10} totalItems={27} onPageChange={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change in middle page" theme="light" level={4} />
      <DxcPaginator currentPage={2} itemsPerPage={10} totalItems={27} onPageChange={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change in last page" theme="light" level={4} />
      <DxcPaginator currentPage={3} itemsPerPage={10} totalItems={27} onPageChange={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change and items per page options" theme="light" level={4} />
      <DxcPaginator
        currentPage={1}
        itemsPerPage={10}
        totalItems={27}
        onPageChange={() => {}}
        itemsPerPageOptions={[5, 10, 15]}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change and show go to page selector" theme="light" level={4} />
      <DxcPaginator currentPage={1} itemsPerPage={10} totalItems={27} onPageChange={() => {}} showGoToPage />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Page change, show go to page and items per page selectors" theme="light" level={4} />
      <DxcPaginator
        currentPage={1}
        itemsPerPage={10}
        totalItems={27}
        onPageChange={() => {}}
        itemsPerPageOptions={[5, 10, 15]}
        showGoToPage
      />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcPaginator>;

export const Chromatic: Story = {
  render: Paginator,
};

export const ResponsivePaginator: Story = {
  render: Paginator,
  parameters: {
    viewport: { viewports: customViewports, defaultViewport: "resizedScreen" },
    chromatic: { viewports: [400] },
  },
};
