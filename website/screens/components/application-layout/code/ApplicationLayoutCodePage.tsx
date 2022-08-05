import {
  DxcParagraph,
  DxcFlex,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import Link from "next/link";
import basicUsage from "./examples/basicUsage";
import withSidenav from "./examples/withSideNav";
import customHeaderFooter from "./examples/customHeaderFooter";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const ApplicationLayoutPropsTable = () => (
  <DxcTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <HeaderDescriptionCell>Description</HeaderDescriptionCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>visibilityToggleLabel: string</td>
        <td></td>
        <td>
          Text to be placed next to the hamburger button that toggles the
          visibility of the sidenav.
        </td>
      </tr>
    </tbody>
  </DxcTable>
);

const SidenavApplicationLayoutPropsTable = () => (
  <DxcTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <HeaderDescriptionCell>Description</HeaderDescriptionCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>children: React.ReactNode</td>
        <td></td>
        <td>
          The area inside the sidenav. This area can be used to render custom
          content.
        </td>
      </tr>
    </tbody>
  </DxcTable>
);

const sections = [
  {
    title: "Props",
    subSections: [
      {
        title: "DxcApplicationLayout",
        content: <ApplicationLayoutPropsTable />,
      },
      {
        title: "DxcApplicationLayout.Header",
        content: (
          <DxcParagraph>
            Everything between this tags will be displayed as a header, at the
            top of the screen. If you want to show a{" "}
            <Link href="/components/header" passHref>
              <DxcLink>DxcHeader</DxcLink>
            </Link>
            , as a shortcut, you can use it as a direct child of the
            DxcApplicationLayout without the tags. This is optional and if it is
            not specified, the DxcHeader will be shown by default.
          </DxcParagraph>
        ),
      },
      {
        title: "DxcApplicationLayout.Footer",
        content: (
          <DxcParagraph>
            Everything between the tags will be displayed as a footer, at the
            bottom of the screen. If you want to show a{" "}
            <Link href="/components/footer" passHref>
              <DxcLink>DxcFooter</DxcLink>
            </Link>
            , as a shortcut, you can use it as a direct child of the
            DxcApplicationLayout without the tags. This is optional and if it is
            not specified, the DxcFooter will be shown by default.
          </DxcParagraph>
        ),
      },
      {
        title: "DxcApplicationLayout.Sidenav",
        content: (
          <DxcParagraph>
            Everything between the tags will be displayed as the content of the
            sidenav, positioned on the left side of the screen, between the
            header and the footer. This is optional and if it is not specified,
            the DxcSidenav will not be shown.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Props",
            content: <SidenavApplicationLayoutPropsTable />,
          },
        ],
      },
      {
        title: "DxcApplicationLayout.Main",
        content: (
          <DxcParagraph>
            Everything between the tags will be displayed as the main content of
            the application layout.
          </DxcParagraph>
        ),
      },
      {
        title: "DxcApplicationLayout.useResponsiveSidenavVisibility",
        content: (
          <DxcParagraph>
            Custom hook that returns a function to manually change the
            visibility of the sidenav in responsive mode. This can be very
            useful for cases where a custom sidenav is being used and some of
            its inner elements can close it (for example, a navigation link).
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} actionsVisible={false} />,
      },
      {
        title: "With sidenav",
        content: <Example example={withSidenav} actionsVisible={false} />,
      },
      {
        title: "Custom header and footer",
        content: (
          <Example example={customHeaderFooter} actionsVisible={false} />
        ),
      },
    ],
  },
];

const ButtonCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/Code/ButtonCodePage.tsx" />
    </DxcFlex>
  );
};

export default ButtonCodePage;
