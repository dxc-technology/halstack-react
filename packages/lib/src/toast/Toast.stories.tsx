import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcToast from "./Toast";

export default {
  title: "Toast",
  component: DxcToast,
};

const action = {
  label: "Action",
  onClick: () => {
    console.log("Action clicked");
  },
};

const onClear = () => {};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcToast message="This is a toast." semantic="default" action={action} onClear={onClear} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info" theme="light" level={4} />
      <DxcToast message="This is an info toast." semantic="info" action={action} onClear={onClear} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success" theme="light" level={4} />
      <DxcToast message="This is a success toast." semantic="success" action={action} onClear={onClear} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning" theme="light" level={4} />
      <DxcToast message="This is a warning toast." semantic="warning" action={action} onClear={onClear} />
    </ExampleContainer>
  </>
);
