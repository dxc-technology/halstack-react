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
      <tr>
        <td>header: node</td>
        <td></td>
        <td>
          Header of the application layout shown at the top of the screen. It is
          optional and if it is not specified, the default header will be shown.
          Please check the Header documentation{" "}
          <Link href="/components/header" passHref>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </td>
      </tr>
      <tr>
        <td>footer: node</td>
        <td></td>
        <td>
          Footer of the application layout shown at the bottom of the screen. It
          is optional and if it is not specified, the default header will be
          shown. Please check the Footer documentation{" "}
          <Link href="/components/footer" passHref>
            <DxcLink>here</DxcLink>
          </Link>
          .
        </td>
      </tr>
      <tr>
        <td>sidenav: node</td>
        <td></td>
        <td>
          Sidenav of the application layout shown at the left side of the
          screen. Please check the Sidenav documentation{" "}
          <Link href="/components/sidenav" passHref>
            <DxcLink>here</DxcLink>
          </Link>
          .
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
        // content: <Example example={basicUsage} actionsVisible={false} />,
      },
      {
        title: "With sidenav",
        // content: <Example example={withSidenav} actionsVisible={false} />,
      },
      {
        title: "Custom header and footer",
        // content: (
        // <Example example={customHeaderFooter} actionsVisible={false} />
        // ),
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
