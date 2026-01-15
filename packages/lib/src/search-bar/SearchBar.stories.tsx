import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSearchBarTrigger from "./SearchBarTrigger";
import { useState } from "react";
import DxcSearchBar from "./SearchBar";
import DxcFlex from "../flex/Flex";
import DxcContainer from "../container/Container";
import { userEvent, within } from "storybook/internal/test";

export default {
  title: "Search Bar",
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
      <Title title="Search Bar component" theme="light" level={2} />
      <ExampleContainer>
        <SearchBarComponent />
      </ExampleContainer>

      <Title title="States" theme="light" level={2} />
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcSearchBarTrigger onTriggerClick={() => {}} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
          onCancel={() => {}}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hover" theme="light" level={4} />
        <DxcSearchBarTrigger onTriggerClick={() => {}} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
          onCancel={() => {}}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-focus", "pseudo-focus-within"]}>
        <Title title="Focus" theme="light" level={4} />
        <DxcSearchBarTrigger onTriggerClick={() => {}} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
          onCancel={() => {}}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-focus", "pseudo-active"]}>
        <Title title="Focus and active" theme="light" level={4} />
        <DxcSearchBarTrigger onTriggerClick={() => {}} />
        <DxcSearchBar
          placeholder="Search..."
          onBlur={(value) => {
            console.log("onBlur", value);
          }}
          onChange={(value) => console.log("onChange", value)}
          onEnter={(value) => {
            console.log("onEnter", value);
          }}
          onCancel={() => {}}
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
          onCancel={() => {}}
          disabled
        />
      </ExampleContainer>

      <Title title="Small Searchbar" theme="light" level={2} />
      <ExampleContainer>
        <DxcContainer width="220px">
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
        </DxcContainer>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcSearchBar>;

export const Chromatic: Story = {
  render: SearchBar,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    const enabledInputs = (await canvas.findAllByRole("textbox")).filter((input) => !input.hasAttribute("disabled"));

    for (let i = 0; i < enabledInputs.length - 1; i++) {
      await user.type(enabledInputs[i]!, "Lorem ipsum");
    }
  },
};
