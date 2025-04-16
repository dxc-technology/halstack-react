import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
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
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed next inside the tag.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>labelPosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Whether the label should appear after or before the icon.</td>
            <td>
              <TableCode>'after'</TableCode>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
            </td>
            <td>
              <DxcLink newWindow href="https://fonts.google.com/icons">
                Material Symbol
              </DxcLink>{" "}
              name or SVG element as the icon that will be placed next to the label. When using Material Symbols,
              replace spaces with underscores. By default they are outlined, if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconBgColor</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Background color of the icon section of the tag.</td>
            <td>
              <TableCode>'#5f249f'</TableCode>
            </td>
          </tr>
          <tr>
            <td>linkHref</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              If defined, the tag will be displayed as an anchor, using this prop as its <Code>href</Code>. The
              component will also show some visual feedback when it is hovered.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>newWindow</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the page will be opened in a new browser tab.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              If defined, the tag will be displayed as a button. This function will be called when the user clicks the
              tag. The component will show some visual feedback when hovered.
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
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large' | 'fillParent' | 'fitContent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'fitContent'</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute.
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
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const TagCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tag/code/TagCodePage.tsx" />
    </DxcFlex>
  );
};

export default TagCodePage;
