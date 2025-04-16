import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import DxcParagraph from "../paragraph/Paragraph";
import DxcImage from "./Image";

export default {
  title: "Image",
  component: DxcImage,
} as Meta<typeof DxcImage>;

const Image = () => (
  <>
    <Title title="Image component" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Simple image" theme="light" level={4} />
      <DxcImage
        alt="Example image"
        width="100%"
        src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Image with text" theme="light" level={4} />
      <DxcParagraph>
        Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
        arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
        lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh tristique
        porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue diam in dui
        morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo nisi. Vel mus
        ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit augue. In fermentum
        metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae. Commodo sagittis
        volutpat id lorem.
      </DxcParagraph>
      <DxcInset top="var(--spacing-padding-xl)" bottom="var(--spacing-padding-xl)">
        <DxcImage
          alt="Ratatouille is a great movie"
          caption="Ratatouille with a smile on his face."
          src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/por-que-ratatouille-nos-sigue-enamorando-10-anos-despues/136444706-1-esl-ES/Por-que-Ratatouille-nos-sigue-enamorando-10-anos-despues.jpg"
        />
      </DxcInset>
      <DxcParagraph>
        Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
        arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
        lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh tristique
        porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue diam in dui
        morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo nisi. Vel mus
        ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit augue. In fermentum
        metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae. Commodo sagittis
        volutpat id lorem.
      </DxcParagraph>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Example image" theme="light" level={4} />
      <DxcFlex gap="var(--spacing-gap-ml)">
        <DxcImage
          alt="Camera pic"
          caption="Picture of a camera and the sunset."
          width="500px"
          src="https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg"
        />
        <DxcParagraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem. Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis
          volutpat urna. Hendrerit aliquet et arcu purus. Sodales elementum sollicitudin consequat elementum tortor.
          Lectus eget cursus ut ac pharetra lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus
          vitae vitae aenean arcu. Nibh tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh
          est sed. Netus venenatis congue diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu
          nec fringilla enim purus ut justo nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper
          nullam sit sagittis hendrerit augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed
          enim in sed vel nec ut vitae. Commodo sagittis volutpat id lorem.
        </DxcParagraph>
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Object position" theme="light" level={4} />
      <DxcImage
        alt="Moon pic"
        caption="Picture of the moon."
        width="250px"
        src="https://interactive-examples.mdn.mozilla.net/media/examples/moon.jpg"
        objectPosition="right top"
        objectFit="none"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Object fit: contain" theme="light" level={4} />
      <div
        style={{
          display: "flex",
          width: "fit-content",
          border: "var(--border-width-s) var(--border-style-default) var(--border-color-neutral-dark)",
          padding: "var(--spacing-padding-xs)",
        }}
      >
        <DxcImage
          alt="Dog pic"
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"
          width="200px"
          height="200px"
          objectFit="contain"
          caption="Pretty dog."
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Object fit: cover" theme="light" level={4} />
      <div style={{ width: "75%", height: "300px" }}>
        <DxcImage
          alt="Spaceship pic"
          src="https://media.istockphoto.com/id/1344443930/es/foto/lanzamiento-de-cohetes-del-transbordador-espacial-en-el-cielo-y-nubes-al-espacio-exterior.jpg?s=612x612&w=0&k=20&c=CO2A96GnnWvJsgZuj9WfYCVIBVzicnQDfnzwD1nomN0="
          objectFit="cover"
          width="50%"
          height="100%"
          objectPosition="0px 0px"
        />
        <DxcImage
          alt="Spaceship pic"
          src="https://media.istockphoto.com/id/1344443930/es/foto/lanzamiento-de-cohetes-del-transbordador-espacial-en-el-cielo-y-nubes-al-espacio-exterior.jpg?s=612x612&w=0&k=20&c=CO2A96GnnWvJsgZuj9WfYCVIBVzicnQDfnzwD1nomN0="
          objectFit="cover"
          width="50%"
          height="100%"
          objectPosition="0px 0px"
        />
      </div>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcImage>;

export const Chromatic: Story = {
  render: Image,
};
