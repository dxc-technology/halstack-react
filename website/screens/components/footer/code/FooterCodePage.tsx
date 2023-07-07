import {
  DxcFlex,
  DxcParagraph,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";

const sections = [
  {
    title: "Props",
    content: (
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
              as icons at the top-right side of the footer. Each object has the
              following properties:
              <ul>
                <li>
                  <b>logo</b>: Element or path used as the icon for the link.
                </li>
                <li>
                  <b>href</b>: URL of the page the link goes to.
                </li>
                <li>
                  <StatusTag status="Information">New</StatusTag> <b>title</b>:
                  Text representing advisory information related to the social
                  link. Under the hood, it also serves as an accessible label
                  for the icon.
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
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>
              Value of the tabindex for all interactuable elements, except those
              inside the custom area.
            </td>
          </tr>
        </tbody>
      </DxcTable>
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
