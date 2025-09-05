import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import Code, { TableCode } from "@/common/Code";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Custom content that will be placed inside the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageBgColor</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Color of the background image.</td>
            <td>
              <TableCode>'black'</TableCode>
            </td>
          </tr>
          <tr>
            <td>imageCover</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the image must cover the its whole area of the card.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>imagePadding</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Padding
              </TableCode>
            </td>
            <td>
              Size of the padding to be applied to the image section of the component. You can pass an object with
              'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>imagePosition</td>
            <td>
              <TableCode>'after' | 'before'</TableCode>
            </td>
            <td>Where the image should appear in relation to the content.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
          </tr>
          <tr>
            <td>imageSrc</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              URL of the image that will be placed in the card component. In case of omission, the image container will
              not appear and the content will occupy its space.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>linkHref</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              If defined, the card will be displayed as an anchor, using this prop as <Code>href</Code>. The component
              will display visual information on mouse-over.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the card. Component will show some visual feedback on
              hover.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>outlined</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Determines whether or not the component should have an outline.</td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied when the component is clickable.
            </td>
            <td>
              <TableCode>0</TableCode>
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
    ],
  },
];

const CardCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/card/code/CardCodePage.tsx" />
  </DxcFlex>
);

export default CardCodePage;
