import {
  DxcFlex,
  DxcTable,
  DxcParagraph,
  DxcLink,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Link from "next/link";
import React from "react";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";

const sections = [
  {
    title: "Props",
    content: (
      <>
        <DxcAlert type="warning" size="fillParent">
          The <Code>padding</Code> prop has been deprecated. Consider using
          layout components like the{" "}
          <Link href="/components/inset/" passHref>
            <DxcLink>inset</DxcLink>
          </Link>{" "}
          for the same purpose.
        </DxcAlert>
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
              <td>underlined: boolean</td>
              <td>
                <Code>false</Code>
              </td>
              <td>
                Wether a contrast line should appear at the bottom of the
                header.
              </td>
            </tr>
            <tr>
              <td>content: node</td>
              <td></td>
              <td>
                Content showed in the header. Take into account that the
                component applies styles for the first child in the content, so
                we recommend the use of React.Fragment to be applied correctly.
                Otherwise, the styles can be modified.
              </td>
            </tr>
            <tr>
              <td>responsiveContent: function</td>
              <td></td>
              <td>
                Content showed in responsive version. It receives the close menu
                handler that can be used to add that functionality when a
                element is clicked.
              </td>
            </tr>
            <tr>
              <td>onClick: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the header
                logo.
              </td>
            </tr>
            <tr>
              <td>margin: string</td>
              <td></td>
              <td>
                Size of the bottom margin to be applied to the header ('xxsmall'
                | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge').
              </td>
            </tr>
            <tr>
              <td>padding: string | object</td>
              <td></td>
              <td>
                <DxcFlex gap="0.25rem" direction="column" alignItems="baseline">
                  <StatusTag status="Deprecated">Deprecated</StatusTag>
                  Size of the padding to be applied to the custom area of the
                  component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
                  | 'xlarge' | 'xxlarge'). You can pass an object with 'top',
                  'bottom', 'left' and 'right' properties in order to specify
                  different padding sizes.
                </DxcFlex>
              </td>
            </tr>
            <tr>
              <td>tabIndex: number</td>
              <td>
                <Code>0</Code>
              </td>
              <td>
                Value of the tabindex for all interactuable elements, except
                those inside the custom area.
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Children",
    subSections: [
      {
        title: "DxcHeader.Dropdown",
        content: (
          <DxcParagraph>
            Everything between this tags will be displayed as a dropdown. If you
            want to show a{" "}
            <Link href="/components/dropdown" passHref>
              <DxcLink>DxcDropdown</DxcLink>
            </Link>
            , as a shortcut, you can also use it as a direct child of the
            DxcHeader without the tags, but we recommend to use it with the tags
            since some styles will be applied for a better fit in the header.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Header in application layout",
        content: (
          <iframe
            src="https://codesandbox.io/embed/rough-https-9oduyh?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              minHeight: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="Footer and header"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        ),
      },
    ],
  },
];

const HeaderCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/header/code/HeaderCodePage.tsx" />
    </DxcFlex>
  );
};

export default HeaderCodePage;
