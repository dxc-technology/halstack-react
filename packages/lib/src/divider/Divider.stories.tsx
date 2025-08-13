import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcFlex from "../flex/Flex";
import DxcParagraph from "../paragraph/Paragraph";
import DxcDivider from "./Divider";

export default {
  title: "Divider",
  component: DxcDivider,
} satisfies Meta<typeof DxcDivider>;

const Divider = () => (
  <>
    <Title title="Default" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Default strong" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider weight="strong" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Default light grey" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider color="lightGrey" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Default dark grey" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider color="darkGrey" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Vertical" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="row">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider orientation="vertical" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Vertical strong" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="row">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider orientation="vertical" weight="strong" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Vertical light grey" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="row">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider orientation="vertical" color="lightGrey" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Vertical dark grey" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-ml)" direction="row">
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
        <DxcDivider orientation="vertical" color="darkGrey" />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcDivider>;

export const Chromatic: Story = {
  render: Divider,
};
