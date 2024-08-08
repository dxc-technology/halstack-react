import DxcIcon from "./Icon";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcTypography from "../typography/Typography";

export default {
  title: "Icon",
  component: DxcIcon,
};

export const Chromatic = () => (
  <>
    <Title title="Icon component" theme="light" level={2} />
    <ExampleContainer>
      <DxcTypography as="p" fontSize="1.5rem">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
    <ExampleContainer>
      <DxcTypography as="p" fontSize="1.5rem" color="#b182e3">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
  </>
);