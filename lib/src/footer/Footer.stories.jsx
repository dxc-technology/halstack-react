import React from "react";
import DxcFooter from "./Footer";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

const social = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logo: (
      <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 438.536 438.536" fill="currentColor">
        <g>
          <path
            d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
 C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
 h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
 C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
 c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
 c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
 c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
 c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
 c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
 c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
 H370.873z"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "https://twitter.com/dxctechnology",
    logo: (
      <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 438.536 438.536" fill="currentColor">
        <g>
          <path
            d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
  C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
  h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
  C438.532,59.576,430.49,40.204,414.41,24.123z M335.471,168.735c0.191,1.713,0.288,4.278,0.288,7.71
  c0,15.989-2.334,32.025-6.995,48.104c-4.661,16.087-11.8,31.504-21.416,46.254c-9.606,14.749-21.074,27.791-34.396,39.115
  c-13.325,11.32-29.311,20.365-47.968,27.117c-18.648,6.762-38.637,10.143-59.953,10.143c-33.116,0-63.76-8.952-91.931-26.836
  c4.568,0.568,9.329,0.855,14.275,0.855c27.6,0,52.439-8.565,74.519-25.7c-12.941-0.185-24.506-4.179-34.688-11.991
  c-10.185-7.803-17.273-17.699-21.271-29.691c4.947,0.76,8.658,1.137,11.132,1.137c4.187,0,9.042-0.76,14.56-2.279
  c-13.894-2.669-25.598-9.562-35.115-20.697c-9.519-11.136-14.277-23.84-14.277-38.114v-0.571
  c10.085,4.755,19.602,7.229,28.549,7.422c-17.321-11.613-25.981-28.265-25.981-49.963c0-10.66,2.758-20.747,8.278-30.264
  c15.035,18.464,33.311,33.213,54.816,44.252c21.507,11.038,44.54,17.227,69.092,18.558c-0.95-3.616-1.427-8.186-1.427-13.704
  c0-16.562,5.853-30.692,17.56-42.399c11.703-11.706,25.837-17.561,42.394-17.561c17.515,0,32.079,6.283,43.688,18.846
  c13.134-2.474,25.892-7.33,38.26-14.56c-4.757,14.652-13.613,25.788-26.55,33.402c12.368-1.716,23.88-4.95,34.537-9.708
  C357.458,149.793,347.462,160.166,335.471,168.735z"
          />
        </g>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logo: (
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 438.536 438.536"
        fill="currentColor"
        width="1000px"
        height="500px"
      >
        <g>
          <path
            d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
    C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
    h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
    C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
    c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
    c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
          />
        </g>
      </svg>
    ),
  },
];

const bottom = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin",
  },
  {
    href: "https://twitter.com/dxctechnology",
    text: "Twitter",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
];

export default {
  title: "Footer",
  component: DxcFooter,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcFooter />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With copyright" theme="light" level={4} />
      <DxcFooter copyright="Copyright" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With children" theme="light" level={4} />
      <DxcFooter>
        <div>
          <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
        </div>
      </DxcFooter>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Social links" theme="light" level={4} />
      <DxcFooter socialLinks={social} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Bottom links" theme="light" level={4} />
      <DxcFooter bottomLinks={bottom} />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcFooter margin="xxsmall"></DxcFooter>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcFooter margin="xsmall"></DxcFooter>
      <Title title="Small margin" theme="light" level={4} />
      <DxcFooter margin="small"></DxcFooter>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcFooter margin="medium"></DxcFooter>
      <Title title="Large margin" theme="light" level={4} />
      <DxcFooter margin="large"></DxcFooter>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcFooter margin="xlarge"></DxcFooter>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcFooter margin="xxlarge"></DxcFooter>
    </ExampleContainer>
    <Title title="Padding" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall padding" theme="light" level={4} />
      <DxcFooter padding="xxsmall"></DxcFooter>
      <Title title="Xsmall padding" theme="light" level={4} />
      <DxcFooter padding="xsmall"></DxcFooter>
      <Title title="Small padding" theme="light" level={4} />
      <DxcFooter padding="small"></DxcFooter>
      <Title title="Medium padding" theme="light" level={4} />
      <DxcFooter padding="medium"></DxcFooter>
      <Title title="Large padding" theme="light" level={4} />
      <DxcFooter padding="large"></DxcFooter>
      <Title title="Xlarge padding" theme="light" level={4} />
      <DxcFooter padding="xlarge"></DxcFooter>
      <Title title="Xxlarge padding" theme="light" level={4} />
      <DxcFooter padding="xxlarge"></DxcFooter>
    </ExampleContainer>
  </>
);
