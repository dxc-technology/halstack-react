import React from "react";
import DxcFooter from "./Footer";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

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
      <svg viewBox="0 0 248 204" fill="currentColor">
        <path
          fill="#1d9bf0"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
        />
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

const opinionatedTheme = {
  footer: {
    baseColor: "#000000",
    fontColor: "#ffffff",
    accentColor: "#0095ff",
    logo: (
      <svg id="g10" xmlns="http://www.w3.org/2000/svg" width="280.781" height="32" viewBox="0 0 280.781 32">
        <g id="g12">
          <path
            id="path14"
            d="M171.5-54.124v12.539h-3.6V-54.124h-4.973v-3.191h13.54v3.191H171.5"
            transform="translate(-68.528 65.45)"
            fill="#fff"
          />
          <path
            id="path16"
            d="M189.96-41.585V-57.315h12.326v3.079h-8.753v3.191h7.7v3.078h-7.7v3.3h8.87v3.078H189.96"
            transform="translate(-77.56 65.45)"
            fill="#fff"
          />
          <path
            id="path18"
            d="M223.558-41.438a8.1,8.1,0,0,1-8.382-8.1v-.045a8.161,8.161,0,0,1,8.522-8.146,8.6,8.6,0,0,1,6.444,2.431l-2.289,2.543a6.133,6.133,0,0,0-4.178-1.778,4.743,4.743,0,0,0-4.738,4.905v.045a4.752,4.752,0,0,0,4.738,4.95,6,6,0,0,0,4.295-1.845l2.288,2.228a8.491,8.491,0,0,1-6.7,2.813"
            transform="translate(-86.019 65.583)"
            fill="#fff"
          />
          <path
            id="path20"
            d="M254.988-41.585V-47.9h-6.63v6.315h-3.6V-57.315h3.6v6.225h6.63v-6.225h3.594v15.731h-3.594"
            transform="translate(-95.903 65.45)"
            fill="#fff"
          />
          <path
            id="path22"
            d="M285.991-41.585l-7.914-10v10h-3.549V-57.315h3.316l7.657,9.685v-9.685h3.549v15.731h-3.058"
            transform="translate(-105.869 65.45)"
            fill="#fff"
          />
          <path
            id="path24"
            d="M317.2-49.583a4.869,4.869,0,0,0-4.949-4.95,4.793,4.793,0,0,0-4.9,4.905v.045a4.869,4.869,0,0,0,4.949,4.95,4.793,4.793,0,0,0,4.9-4.905Zm-4.949,8.145c-5.043,0-8.661-3.623-8.661-8.1v-.045c0-4.478,3.666-8.146,8.708-8.146s8.66,3.623,8.66,8.1v.045c0,4.477-3.664,8.145-8.708,8.145"
            transform="translate(-115.631 65.583)"
            fill="#fff"
          />
          <path
            id="path26"
            d="M336.786-41.585V-57.315h3.6v12.584h8.148v3.146H336.786"
            transform="translate(-126.654 65.45)"
            fill="#fff"
          />
          <path
            id="path28"
            d="M372.78-49.583a4.87,4.87,0,0,0-4.949-4.95,4.794,4.794,0,0,0-4.9,4.905v.045a4.869,4.869,0,0,0,4.949,4.95,4.794,4.794,0,0,0,4.9-4.905Zm-4.949,8.145c-5.043,0-8.662-3.623-8.662-8.1v-.045c0-4.478,3.666-8.146,8.708-8.146s8.661,3.623,8.661,8.1v.045c0,4.477-3.666,8.145-8.708,8.145"
            transform="translate(-135.016 65.583)"
            fill="#fff"
          />
          <path
            id="path30"
            d="M399.735-41.438c-5.09,0-8.592-3.443-8.592-8.1v-.045a8.243,8.243,0,0,1,8.568-8.146,9.18,9.18,0,0,1,6.42,2.16l-2.265,2.634a6.141,6.141,0,0,0-4.272-1.6,4.807,4.807,0,0,0-4.692,4.905v.045a4.8,4.8,0,0,0,4.949,4.995,5.89,5.89,0,0,0,3.384-.945v-2.25h-3.618v-2.992h7.1v6.841a10.837,10.837,0,0,1-6.98,2.5"
            transform="translate(-145.284 65.583)"
            fill="#fff"
          />
          <path
            id="path32"
            d="M428.664-47.855v6.27h-3.6v-6.2l-6.28-9.528h4.2L426.89-51l3.968-6.315h4.085l-6.28,9.46"
            transform="translate(-154.162 65.45)"
            fill="#fff"
          />
          <path
            id="path34"
            d="M84.218-55.737a10.063,10.063,0,0,1,2.589-4.4,9.792,9.792,0,0,1,6.985-2.77h11.328V-69.3H93.792a17.041,17.041,0,0,0-11.8,4.759,16.344,16.344,0,0,0-3.547,5.115,13.247,13.247,0,0,0-1.122,3.688Zm0,4.877a10.065,10.065,0,0,0,2.589,4.4,9.793,9.793,0,0,0,6.985,2.77h11.328V-37.3H93.792a17.042,17.042,0,0,1-11.8-4.759,16.339,16.339,0,0,1-3.547-5.114,13.251,13.251,0,0,1-1.122-3.688ZM63.1-47.98,54.45-37.3H45.873l12.957-16-12.957-16H54.45L63.1-58.619l8.65-10.68h8.578l-12.957,16,12.957,16H71.749ZM48.875-55.737a13.212,13.212,0,0,0-1.122-3.688,16.359,16.359,0,0,0-3.546-5.115,17.043,17.043,0,0,0-11.8-4.759H21.08v6.393H32.408a9.79,9.79,0,0,1,6.985,2.77,10.072,10.072,0,0,1,2.59,4.4Zm0,4.877a13.215,13.215,0,0,1-1.122,3.688,16.353,16.353,0,0,1-3.546,5.114,17.044,17.044,0,0,1-11.8,4.759H21.08v-6.393H32.408a9.791,9.791,0,0,0,6.985-2.77,10.074,10.074,0,0,0,2.59-4.4h6.892"
            transform="translate(-21.08 69.298)"
            fill="#fff"
          />
        </g>
      </svg>
    ),
  },
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcFooter />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With children, copyright, bottom links and social links" theme="light" level={4} />
      <DxcFooter copyright="Copyright" socialLinks={social} bottomLinks={bottom}>
        <div>
          <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
        </div>
      </DxcFooter>
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <DxcFooter copyright="Copyright" socialLinks={social} bottomLinks={bottom}>
          <div>
            <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
          </div>
        </DxcFooter>
      </HalstackProvider>
    </ExampleContainer>
  </>
);
