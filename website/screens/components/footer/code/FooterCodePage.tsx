import {
  DxcAlert,
  DxcFlex,
  DxcLink,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";
import Link from "next/link";

const sections = [
  {
    title: "Props",
    content: (
      <>
        <DxcAlert type="warning" size="fillParent">
          The <Code>padding</Code> prop has been deprecated. Consider using
          layout components like the{" "}
          <Link href="/components/inset/" passHref legacyBehavior>
            <DxcLink>Inset</DxcLink>
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
              <td>socialLinks: object[]</td>
              <td>
                <Code>[]</Code>
              </td>
              <td>
                An array of objects representing the links that will be rendered
                as icons at the top-right side of the footer. Each object has
                the following properties:
                <ul>
                  <li>
                    <b>logo</b>: Element or path used as the icon for the link.
                  </li>
                  <li>
                    <b>href</b>: URL of the page the link goes to.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>bottomLinks: object[]</td>
              <td>
                <Code>[]</Code>
              </td>
              <td>
                An array of objects representing the links that will be rendered
                at the bottom part of the footer. Each object has the following
                properties:
                <ul>
                  <li>
                    <b>text</b>: Text for the link.
                  </li>
                  <li>
                    <b>href</b>: URL of the page the link goes to.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>copyright: string</td>
              <td></td>
              <td>The text that will be displayed as copyright disclaimer.</td>
            </tr>
            <tr>
              <td>children: node</td>
              <td></td>
              <td>
                The center section of the footer. Can be used to render custom
                content in this area.
              </td>
            </tr>
            <tr>
              <td>margin: string</td>
              <td></td>
              <td>
                Size of the top margin to be applied to the footer ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
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
    title: "Examples",
    subSections: [
      {
        title: "Footer in application layout",
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

const FooterCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/footer/code/FooterCodePage.tsx" />
    </DxcFlex>
  );
};

export default FooterCodePage;
