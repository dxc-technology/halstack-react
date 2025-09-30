import { Meta, StoryObj } from "@storybook/react";
import styled from "@emotion/styled";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBulletedList from "./BulletedList";

export default {
  title: "Bulleted List",
  component: DxcBulletedList,
} as Meta<typeof DxcBulletedList>;

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

const Container = styled.div`
  width: 400px;
`;

const BulletedList = () => (
  <>
    <ExampleContainer>
      <Title title="Icon list (SVG)" level={4} />
      <DxcBulletedList type="icon" icon={icon}>
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Icon list (path)" level={4} />
      <DxcBulletedList type="icon" icon="filled_check_circle">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Number list" level={4} />
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Square" level={4} />
      <DxcBulletedList type="square">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Circle" level={4} />
      <DxcBulletedList type="circle">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Disc" level={4} />
      <DxcBulletedList>
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
      <Title title="Multiple lines" level={4} />
      <Container>
        <Title title="Number" level={4} />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Text 2.</DxcBulletedList.Item>
        </DxcBulletedList>
      </Container>
      <Container>
        <Title title="Square" level={4} />
        <DxcBulletedList type="square">
          <DxcBulletedList.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Text 2.</DxcBulletedList.Item>
        </DxcBulletedList>
      </Container>
      <Container>
        <Title title="Circle" level={4} />
        <DxcBulletedList type="circle">
          <DxcBulletedList.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Text 2.</DxcBulletedList.Item>
        </DxcBulletedList>
      </Container>
      <Title title="Disc" level={4} />
      <Container>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Text 2.</DxcBulletedList.Item>
        </DxcBulletedList>
      </Container>
      <Container>
        <Title title="Icon" level={4} />
        <DxcBulletedList type="icon" icon={icon}>
          <DxcBulletedList.Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Text 2.</DxcBulletedList.Item>
        </DxcBulletedList>
      </Container>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcBulletedList>;

export const Chromatic: Story = {
  render: BulletedList,
};
