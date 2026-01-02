import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSearchBarTrigger from "./SearchBarTrigger";
import { useState } from "react";
import DxcSearchBar from "./SearchBar";
import DxcFlex from "../flex/Flex";

export default {
  title: "SearchBar",
  component: DxcSearchBar,
} satisfies Meta<typeof DxcSearchBar>;

const Link = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Title title="SearchBar component" theme="light" level={2} />
      <ExampleContainer>
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
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcSearchBar>;

export const Chromatic: Story = {
  render: Link,
};
