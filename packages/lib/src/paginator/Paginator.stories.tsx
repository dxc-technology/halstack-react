import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { HalstackProvider } from "../HalstackContext";
import DxcPaginator from "./Paginator";

export default {
  title: "Paginator",
  component: DxcPaginator,
};

const opinionatedTheme = {
  paginator: {
    baseColor: "#f2f2f2",
    fontColor: "#000000",
  },
};

export const Chromatic = () => (
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <ExampleContainer>
          <Title title="Page change and items per page options" theme="light" level={4} />
          <DxcPaginator
            currentPage={1}
            itemsPerPage={10}
            totalItems={27}
            onPageChange={() => {}}
            itemsPerPageOptions={[5, 10, 15]}
            showGoToPage
          />
        </ExampleContainer>
      </HalstackProvider>
    </ExampleContainer>
  </>
);
