import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { userEvent, waitFor, within } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import { disabledRules } from "../../test/accessibility/rules/specific/header/disabledRules";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import { HalstackProvider } from "../HalstackContext";
import DxcLink from "../link/Link";
import DxcHeader from "./Header";

export default {
  title: "Header",
  component: DxcHeader,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const options: any = [
  {
    value: 1,
    label: "Amazon",
  },
];

const options2: any = [
  {
    value: 1,
    label: "Home",
  },
  {
    value: 2,
    label: "Release notes",
  },
  {
    value: 3,
    label: "Sign out",
  },
];

const opinionatedTheme = {
  header: {
    baseColor: "#ffffff",
    accentColor: "#000000",
    fontColor: "#000000",
    menuBaseColor: "#ffffff",
    hamburguerColor: "#000000",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    logoResponsive:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    contentColor: "#000000",
    overlayColor: "#000000b3",
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default with dropdown" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined with text" theme="light" level={4} />
      <DxcHeader underlined content={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined, dropdown and links" theme="light" level={4} />
      <DxcHeader
        content={
          <DxcFlex alignItems="center" gap="4rem">
            <DxcLink>Link 1</DxcLink>
            <DxcLink>Link 2</DxcLink>
            <DxcLink>Link 3</DxcLink>
            <DxcHeader.Dropdown options={options2} label="Label" onSelectOption={() => {}} />
          </DxcFlex>
        }
        underlined
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcHeader underlined margin="xxsmall" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcHeader underlined margin="xsmall" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcHeader underlined margin="small" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcHeader underlined margin="medium" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcHeader underlined margin="large" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcHeader underlined margin="xlarge" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcHeader underlined margin="xxlarge" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <DxcHeader
          underlined
          content={<DxcButton label={"Custom Button"} />}
          responsiveContent={(closeHandler) => (
            <>
              <DxcButton label={"Custom Button"} onClick={closeHandler} />
              Custom content
            </>
          )}
        />
      </HalstackProvider>
    </ExampleContainer>
  </>
);

export const ResponsiveHeader = () => (
  <ExampleContainer>
    <Title title="Responsive" theme="light" level={4} />
    <DxcHeader
      content={<DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />}
      responsiveContent={(closeHandler) => (
        <DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />
      )}
      underlined
    />
  </ExampleContainer>
);

const RespHeaderFocus = () => (
  <ExampleContainer pseudoState="pseudo-focus">
    <Title title="Responsive focus" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderHover = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Responsive hover" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenuMobile = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenuTablet = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenuOpinionated = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
    </HalstackProvider>
  </ExampleContainer>
);

ResponsiveHeader.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};

export const ResponsiveHeaderFocus = RespHeaderFocus.bind({});
ResponsiveHeaderFocus.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};
ResponsiveHeaderFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
};

export const ResponsiveHeaderHover = RespHeaderHover.bind({});
ResponsiveHeaderHover.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};
ResponsiveHeaderHover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
};

export const ResponsiveHeaderMenuMobile = RespHeaderMenuMobile.bind({});
ResponsiveHeaderMenuMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};
ResponsiveHeaderMenuMobile.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

export const ResponsiveHeaderMenuTablet = RespHeaderMenuTablet.bind({});
ResponsiveHeaderMenuTablet.parameters = {
  viewport: {
    defaultViewport: "pixelxl",
  },
  chromatic: { viewports: [720] },
};
ResponsiveHeaderMenuTablet.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

export const ResponsiveHeaderMenuOpinionated = RespHeaderMenuOpinionated.bind({});
ResponsiveHeaderMenuOpinionated.parameters = {
  viewport: {
    defaultViewport: "pixelxl",
  },
  chromatic: { viewports: [720] },
};
ResponsiveHeaderMenuOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};
