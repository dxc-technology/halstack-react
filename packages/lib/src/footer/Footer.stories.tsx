import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import disabledRules from "../../test/accessibility/rules/specific/footer/disabledRules";
import DxcFlex from "../flex/Flex";
import DxcFooter from "./Footer";
import DxcLink from "../link/Link";
import { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/internal/test";
import DxcParagraph from "../paragraph/Paragraph";
import DxcHeading from "../heading/Heading";
import DxcApplicationLayout from "../layout/ApplicationLayout";
import DxcHeader from "../header/Header";
import DxcBadge from "../badge/Badge";
import DxcButton from "../button/Button";

export default {
  title: "Footer",
  component: DxcFooter,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...(preview?.parameters?.a11y?.config?.rules || []),
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcFooter>;

const social = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logo: (
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 438.536 438.536" fill="currentColor">
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
    title: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    logo: (
      <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="currentColor" />
        <path
          d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
          fill="white"
        />
      </svg>
    ),
    title: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logo: (
      <svg
        version="1.1"
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
    title: "Facebook",
  },
];

const socialMaterialIcons = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logo: "person",
    title: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    logo: "group",
    title: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logo: "thumb_up",
    title: "Facebook",
  },
];

const bottom = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    text: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
];

const bottomLong = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    text: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
];

const Footer = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcFooter />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With custom logo" theme="light" level={4} />
      <DxcFooter logo={{ src: "https://picsum.photos/id/1000/104/34", alt: "Custom logo" }} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With children, copyright, bottom links and social links" theme="light" level={4} />
      <DxcFooter
        socialLinks={social}
        bottomLinks={bottom}
        leftContent={
          <>
            <DxcParagraph>
              Application description, version, notes, and contact details can go here for additional information
            </DxcParagraph>
            <DxcParagraph>
              <strong>Contact Us:</strong> email@dxc.com
            </DxcParagraph>
          </>
        }
        rightContent={
          <>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
          </>
        }
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long content" theme="light" level={4} />
      <DxcFooter
        socialLinks={social}
        bottomLinks={bottomLong}
        copyright="This is a long copyright text, this is a long copyright text, this is a long copyright text, this is a long copyright text, this is a long copyright text, this is a long copyright text, this is a long copyright text."
        leftContent={
          <>
            <DxcParagraph>
              Application description, version, notes, and contact details can go here for additional information.
              Application description, version, notes, and contact details can go here for additional information
              Application description, version, notes, and contact details can go here for additional information
              Application description, version, notes, and contact details can go here for additional information
              Application description, version, notes, and contact details can go here for additional information
              Application description, version, notes, and contact details can go here for additional information
            </DxcParagraph>
            <DxcParagraph>
              <strong>Contact Us:</strong> email@dxc.com
            </DxcParagraph>
          </>
        }
        rightContent={
          <>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
          </>
        }
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With children, copyright, bottom links and social links from material" theme="light" level={4} />
      <DxcFooter
        copyright="Copyright"
        socialLinks={socialMaterialIcons}
        bottomLinks={bottom}
        leftContent={
          <>
            <DxcParagraph>
              Application description, version, notes, and contact details can go here for additional information
            </DxcParagraph>
            <DxcParagraph>
              <strong>Contact Us:</strong> email@dxc.com
            </DxcParagraph>
          </>
        }
        rightContent={
          <>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
          </>
        }
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused bottom and social links" theme="light" level={4} />
      <DxcFooter
        copyright="Copyright"
        socialLinks={social}
        bottomLinks={bottom}
        leftContent={
          <>
            <DxcParagraph>
              Application description, version, notes, and contact details can go here for additional information
            </DxcParagraph>
            <DxcParagraph>
              <strong>Contact Us:</strong> email@dxc.com
            </DxcParagraph>
          </>
        }
        rightContent={
          <>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
            <DxcFlex direction="column">
              <DxcHeading text="Forms" level={5} margin={{ bottom: "small" }} />
              <DxcLink>Login / Sign-up</DxcLink>
              <DxcLink>Subscribe</DxcLink>
              <DxcLink>Unsubsicribe</DxcLink>
            </DxcFlex>
          </>
        }
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced" theme="light" level={4} />
      <DxcFooter mode="reduced" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced with custom logo" theme="light" level={4} />
      <DxcFooter mode="reduced" logo={{ src: "https://picsum.photos/id/1000/104/34", alt: "Custom logo" }} />
    </ExampleContainer>
  </>
);

const dxcLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="73" height="40" viewBox="0 0 73 40">
    <title>DXC Logo</title>
    <g transform="translate(0)">
      <g>
        <path
          d="M91.613-28.177v2.514H90.231V-28.15l-2.415-3.82h1.616l1.5,2.532,1.526-2.532h1.571ZM83.9-25.555A3.15,3.15,0,0,1,80.6-28.8v-.018a3.231,3.231,0,0,1,3.294-3.262,3.442,3.442,0,0,1,2.469.865l-.87,1.054a2.311,2.311,0,0,0-1.643-.64,1.891,1.891,0,0,0-1.8,1.964v.018a1.886,1.886,0,0,0,1.9,2,2.2,2.2,0,0,0,1.3-.378v-.9H83.858v-1.2h2.729v2.738A4.071,4.071,0,0,1,83.9-25.555Zm-6.416-3.261a1.913,1.913,0,0,0-1.9-1.982A1.883,1.883,0,0,0,73.7-28.835v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,77.486-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018A3.255,3.255,0,0,1,75.6-32.078a3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,75.583-25.555Zm-9.173-.108V-31.97h1.382v5.045h3.133v1.261Zm-3.433-3.153a1.913,1.913,0,0,0-1.9-1.982,1.883,1.883,0,0,0-1.886,1.964v.018a1.913,1.913,0,0,0,1.9,1.982A1.883,1.883,0,0,0,62.978-28.8Zm-1.9,3.261a3.225,3.225,0,0,1-3.33-3.243v-.018a3.255,3.255,0,0,1,3.348-3.262,3.225,3.225,0,0,1,3.331,3.243v.018A3.255,3.255,0,0,1,61.075-25.555Zm-6.508-.108-3.043-4.009v4.009H50.159V-31.97h1.275l2.944,3.883V-31.97h1.364v6.306Zm-8.246,0v-2.531h-2.55v2.531H42.389V-31.97h1.382v2.5h2.55v-2.5H47.7v6.306Zm-8.432.108A3.178,3.178,0,0,1,34.666-28.8v-.018a3.2,3.2,0,0,1,3.276-3.262,3.237,3.237,0,0,1,2.478.973l-.88,1.018a2.315,2.315,0,0,0-1.606-.712,1.866,1.866,0,0,0-1.822,1.964v.018a1.87,1.87,0,0,0,1.822,1.982,2.265,2.265,0,0,0,1.651-.739l.88.891A3.206,3.206,0,0,1,37.889-25.555Zm-9.805-.108V-31.97h4.739v1.235H29.458v1.279h2.962v1.234H29.458V-26.9h3.411v1.234ZM24.322-30.69v5.027H22.939V-30.69H21.028v-1.28h5.206v1.28H24.322"
          transform="translate(-21.028 65.555)"
          fill="#010101"
        />
        <path
          d="M75.836-76.712a8.975,8.975,0,0,1,2.246-3.9,8.393,8.393,0,0,1,6.058-2.457h9.824v-5.67H84.139a14.611,14.611,0,0,0-10.232,4.221,14.509,14.509,0,0,0-3.076,4.536,11.913,11.913,0,0,0-.973,3.271Zm0,4.325a8.978,8.978,0,0,0,2.246,3.9,8.394,8.394,0,0,0,6.058,2.457h9.824v5.67H84.139A14.611,14.611,0,0,1,73.907-64.58a14.506,14.506,0,0,1-3.076-4.536,11.91,11.91,0,0,1-.973-3.271ZM57.522-69.832l-7.5,9.473H42.581L53.818-74.55,42.581-88.739H50.02l7.5,9.472,7.5-9.472h7.439L61.225-74.55l11.237,14.19H65.023Zm-12.336-6.88a11.935,11.935,0,0,0-.973-3.271,14.515,14.515,0,0,0-3.076-4.536A14.612,14.612,0,0,0,30.9-88.739H21.081v5.67H30.9a8.394,8.394,0,0,1,6.058,2.457,8.978,8.978,0,0,1,2.246,3.9Zm0,4.325a11.932,11.932,0,0,1-.973,3.271,14.511,14.511,0,0,1-3.076,4.536A14.611,14.611,0,0,1,30.9-60.359H21.081v-5.67H30.9a8.4,8.4,0,0,0,6.058-2.457,8.981,8.981,0,0,0,2.246-3.9h5.978"
          transform="translate(-21.049 88.739)"
          fill="#603494"
        />
      </g>
    </g>
  </svg>
);

const dxcBrandedLogo = {
  src: dxcLogo,
  alt: "DXC Logo",
};

const items = [
  {
    label: "Grouped Item 1",
    icon: "favorite",
    items: [
      { label: "Item 1", icon: "person", selected: true },
      {
        label: "Grouped Item 2",
        items: [
          {
            label: "Item 2",
            icon: "bookmark",
            badge: <DxcBadge color="primary" label="Experimental" />,
          },
          { label: "Selected Item 3" },
        ],
      },
    ],
    badge: <DxcBadge color="success" label="New" />,
  },
  { label: "Item 4", icon: "key" },
  { label: "Item 5", icon: "person" },
  { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
  { label: "Item 9" },
];

const FooterInLayout = () => (
  <DxcApplicationLayout
    header={
      <DxcHeader
        logo={dxcBrandedLogo}
        navItems={items}
        sideContent={(isResponsive) =>
          isResponsive ? (
            <>
              <DxcButton icon="settings" title="Settings" mode="tertiary" size={{ height: "medium" }} />
            </>
          ) : (
            <>
              <DxcButton icon="settings" title="Settings" mode="tertiary" size={{ height: "medium" }} />
              <DxcButton label="Side button" mode="secondary" size={{ height: "medium" }} />
              <DxcButton label="Another button" mode="primary" size={{ height: "medium" }} />
            </>
          )
        }
        responsiveBottomContent={
          <>
            <DxcButton label="Bottom content button" mode="secondary" size={{ width: "fillParent" }} />
            <DxcButton label="Another button" mode="primary" size={{ width: "fillParent" }} />
          </>
        }
      />
    }
    sidenav={<DxcApplicationLayout.Sidenav navItems={items} />}
  >
    <DxcApplicationLayout.Main>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices fermentum ante et pharetra. Integer
        ullamcorper ante non laoreet suscipit. Integer pharetra viverra nunc, quis fermentum urna eleifend eget.
        Maecenas dolor justo, ullamcorper ac posuere tincidunt, dictum id urna. Suspendisse est metus, euismod et felis
        eget, condimentum elementum eros. Curabitur ut lorem ut odio volutpat lacinia. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed leo quam, lobortis in ultricies ac, interdum in sem. Suspendisse magna enim,
        rhoncus eget lectus vitae, rutrum interdum ligula. Nunc efficitur neque ac orci pretium lacinia. Proin sagittis
        condimentum mi, eu dapibus quam faucibus eget. Aenean fermentum nisl ut mauris convallis, in imperdiet neque
        porttitor. Aliquam erat volutpat. Fusce tincidunt arcu id arcu dignissim viverra. Sed imperdiet vitae odio eget
        consequat. Vivamus eu dictum orci.
      </DxcParagraph>
    </DxcApplicationLayout.Main>
  </DxcApplicationLayout>
);

const Tooltip = () => {
  return (
    <ExampleContainer>
      <Title title="Default tooltip" theme="light" level={2} />
      <DxcFooter socialLinks={social.slice(0, 2)} />
    </ExampleContainer>
  );
};

type Story = StoryObj<typeof DxcFooter>;

export const Chromatic: Story = {
  render: Footer,
};

export const Responsive: Story = {
  render: Footer,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
};

export const InLayout: Story = {
  render: FooterInLayout,
};

export const FooterTooltipFirst: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = (await canvas.findAllByRole("link"))[0];
    if (link != null) {
      await userEvent.hover(link);
    }
  },
};

export const FooterTooltipSecond: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = (await canvas.findAllByRole("link"))[1];
    if (link != null) {
      await userEvent.hover(link);
    }
  },
};
