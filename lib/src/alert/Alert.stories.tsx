import React from "react";
import DxcAlert from "./Alert";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Alert",
  component: DxcAlert,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Info" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Confirm" theme="light" level={4} />
      <DxcAlert type="confirm" inlineText="Confirm type alert with inline text." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning" theme="light" level={4} />
      <DxcAlert type="warning" inlineText="Warning type alert with inline text." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcAlert type="error" inlineText="Error type alert with inline text." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With close button" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text and close button." onClose={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="With hovered close button" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text and close button." onClose={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With focused close button" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text and close button." onClose={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="With actived close button" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text and close button." onClose={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With children" theme="light" level={4} />
      <DxcAlert>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With inline text and children" theme="light" level={4} />
      <DxcAlert inlineText="Info type alert with inline text.">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcAlert margin="xxsmall" inlineText="Info type alert with inline text and xxsmall margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcAlert margin="xsmall" inlineText="Info type alert with inline text and xsmall margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcAlert margin="small" inlineText="Info type alert with inline text and small margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcAlert margin="medium" inlineText="Info type alert with inline text and medium margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcAlert margin="large" inlineText="Info type alert with inline text and large margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcAlert margin="xlarge" inlineText="Info type alert with inline text and xlarge margin." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcAlert margin="xxlarge" inlineText="Info type alert with inline text and xxlarge margin." />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="FitContent" theme="light" level={4} />
      <DxcAlert
        size="fitContent"
        inlineText="Info type alert with inline text, children, close button and fitContent size."
        onClose={() => {}}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcAlert
        size="small"
        inlineText="Info type alert with inline text, children, close button and small size."
        onClose={() => {}}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcAlert
        size="medium"
        inlineText="Info type alert with inline text, children, close button and medium size."
        onClose={() => {}}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcAlert
        size="large"
        inlineText="Info type alert with inline text, children, close button and large size."
        onClose={() => {}}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent" theme="light" level={4} />
      <DxcAlert
        size="fillParent"
        inlineText="Info type alert with inline text, children, close button and fillParent size."
        onClose={() => {}}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAlert>
    </ExampleContainer>
  </>
);

export const ModalAlert = () => (
  <ExampleContainer>
    <DxcAlert inlineText="Modal alert." mode="modal" onClose={() => {}}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </div>
    </DxcAlert>
  </ExampleContainer>
);
