import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcCard from "./Card";
import { Meta, StoryObj } from "@storybook/react-vite";
import DxcParagraph from "../paragraph/Paragraph";
import DxcContainer from "../container/Container";
import DxcFlex from "../flex/Flex";
import DxcImagePropsType from "../image/types";

export default {
  title: "Card",
  component: DxcCard,
} satisfies Meta<typeof DxcCard>;

const image: DxcImagePropsType = {
  alt: "Example image",
  width: "100%",
  height: "250px",
  objectFit: "cover",
  src: "https://picsum.photos/id/11/1920/1080",
};

const paragraphContent = (
  <div style={{ width: "500px", height: "250px", overflow: "auto" }} tabIndex={-1}>
    <DxcParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet nisi a neque scelerisque ultrices vitae
      pellentesque nunc. Curabitur facilisis sit amet arcu non dignissim. Sed magna enim, porttitor vitae blandit at,
      mollis euismod augue. Integer a imperdiet sem. Morbi convallis felis ut orci consectetur, eu finibus urna mollis.
      Aliquam et risus ac dolor dictum commodo vitae eu orci. Duis pretium enim nulla, quis interdum nunc egestas nec.
      Duis in luctus justo, vel egestas diam. Cras blandit ac eros non pretium. Sed fringilla feugiat lobortis. Vivamus
      feugiat efficitur tempus. Nam aliquam, tellus sed varius tempus, sem nulla accumsan ipsum, eu condimentum nibh
      turpis eget quam. Donec condimentum quis diam ac venenatis. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Fusce aliquam elit diam, sit amet tristique libero hendrerit vel. Integer ornare
      ipsum id felis facilisis imperdiet.
    </DxcParagraph>
  </div>
);

const Card = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image}>
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Image after column" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image} imagePosition="after">
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image} imagePosition="after">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Default Row" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image} direction="row">
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image} direction="row">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Image after row" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image} direction="row" imagePosition="after">
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image} direction="row" imagePosition="after">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Selected" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image} direction="row" selectable selected>
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image} selectable selected>
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Anchor" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard
          onClick={(e) => {
            e.preventDefault();
          }}
          image={image}
          href="https://developer.assure.dxc.com/halstack/next/"
          newWindow
        >
          {paragraphContent}
        </DxcCard>
        <DxcCard
          onClick={(e) => {
            e.preventDefault();
          }}
          image={image}
          href="https://developer.assure.dxc.com/halstack/next/"
          mode="outlined"
          newWindow
        >
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Empty" theme="light" level={4} />
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard isEmpty emptySize={{ width: "400px", height: "400px" }} />
        <DxcCard isEmpty mode="outlined" emptySize={{ width: "400px", height: "400px" }} />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Loading" theme="light" level={4} />
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard isLoading loadingSize={{ width: "516px", height: "400px" }} image={image} />
        <DxcCard isLoading direction="row" loadingSize={{ width: "516px" }} image={image} />
        <DxcContainer
          width="300px"
          height="250px"
          padding="var(--spacing-padding-m)"
          boxSizing="border-box"
          border={{
            color: "var(--border-color-primary-light)",
            width: "var(--border-width-m)",
            style: "var(--border-style-outline)",
          }}
        >
          <DxcCard isLoading size={{ width: "fillParent", height: "fillParent" }} image={image} />
        </DxcContainer>
        <DxcContainer
          width="500px"
          height="400px"
          padding="var(--spacing-padding-m)"
          boxSizing="border-box"
          border={{
            color: "var(--border-color-primary-light)",
            width: "var(--border-width-m)",
            style: "var(--border-style-outline)",
          }}
        >
          <DxcCard direction="row" isLoading size={{ width: "fillParent", height: "fillParent" }} image={image} />
        </DxcContainer>
        <DxcCard
          mode="outlined"
          isLoading
          loadingSize={{ width: "516px", height: "400px" }}
          image={image}
          imagePosition="after"
        />
        <DxcCard
          direction="row"
          mode="outlined"
          isLoading
          loadingSize={{ width: "516px" }}
          image={image}
          imagePosition="after"
        />
        <DxcContainer
          width="300px"
          height="250px"
          padding="var(--spacing-padding-m)"
          boxSizing="border-box"
          border={{
            color: "var(--border-color-primary-light)",
            width: "var(--border-width-m)",
            style: "var(--border-style-outline)",
          }}
        >
          <DxcCard
            mode="outlined"
            isLoading
            size={{ width: "fillParent", height: "fillParent" }}
            image={image}
            imagePosition="after"
          />
        </DxcContainer>
        <DxcContainer
          width="500px"
          height="400px"
          padding="var(--spacing-padding-m)"
          boxSizing="border-box"
          border={{
            color: "var(--border-color-primary-light)",
            width: "var(--border-width-m)",
            style: "var(--border-style-outline)",
          }}
        >
          <DxcCard
            mode="outlined"
            direction="row"
            isLoading
            size={{ width: "fillParent", height: "fillParent" }}
            image={image}
            imagePosition="after"
          />
        </DxcContainer>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Hover" theme="light" level={4} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Active" theme="light" level={4} />
    <ExampleContainer pseudoState="pseudo-active">
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
    <Title title="Focus" theme="light" level={4} />
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
        <DxcCard onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard onClick={() => {}} mode="outlined" image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image}>
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable onClick={() => {}} image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
        <DxcCard selectable selected image={image} mode="outlined">
          {paragraphContent}
        </DxcCard>
      </DxcFlex>
    </ExampleContainer>
  </>
);

// const actionCard = () => (
//   <>
//     <ExampleContainer>
//       <Title title="Focused default with action" theme="light" level={4} />
//       <DxcCard onClick={() => {}}>Focused default with action</DxcCard>
//     </ExampleContainer>
//     <ExampleContainer expanded>
//       <Title title="Hovered default with action" theme="light" level={4} />
//       <DxcCard onClick={() => {}}>Hovered default with action</DxcCard>
//     </ExampleContainer>
//   </>
// );

type Story = StoryObj<typeof DxcCard>;

// export const ActionCardStates: Story = {
//   render: actionCard,
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await userEvent.tab();
//     const card = (await canvas.findAllByText("Hovered default with action"))[1];
//     if (card != null) {
//       await userEvent.hover(card);
//     }
//   },
// };

export const Chromatic: Story = {
  render: Card,
};
