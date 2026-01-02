import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSearchBarTrigger from "./SearchBarTrigger";
import { useState } from "react";
import DxcSearchBar from "./SearchBar";
import DxcFlex from "../flex/Flex";
import DxcContainer from "../container/Container";

export default {
  title: "SearchBar",
  component: DxcSearchBar,
} satisfies Meta<typeof DxcSearchBar>;

const SearchBarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <DxcFlex alignItems="center">
      {!showSearch ? (
        <DxcSearchBarTrigger onTriggerClick={() => setShowSearch(!showSearch)} />
      ) : (
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
            setShowSearch(false);
          }}
          onCancel={() => setShowSearch(false)}
        />
      )}
    </DxcFlex>
  );
};

const SearchBar = () => {
  return (
    <>
      <Title title="SearchBar component" theme="light" level={2} />
      <ExampleContainer>
        <SearchBarComponent />
      </ExampleContainer>

      <Title title="States" theme="light" level={2} />
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hover" theme="light" level={4} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus-within">
        <Title title="Focus" theme="light" level={4} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled" theme="light" level={4} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
          disabled
        />
      </ExampleContainer>

      <Title title="Small SearchBar component" theme="light" level={2} />
      <ExampleContainer>
        <DxcContainer width="220px">
          <SearchBarComponent />
        </DxcContainer>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcSearchBar>;

export const Chromatic: Story = {
  render: SearchBar,
};
