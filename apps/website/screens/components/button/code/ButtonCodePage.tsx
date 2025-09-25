import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import semantic from "./examples/semantic";
import icons from "./examples/icons";
import sizes from "./examples/sizes";
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
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will be disabled.</td>
            <td>
              <TableCode>false</TableCode>
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
              replace spaces with underscores. By default they are outlined if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Whether the icon should appear after or before the label.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed in the button.</td>
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
            <td>mode</td>
            <td>
              <TableCode>'primary' | 'secondary' | 'tertiary'</TableCode>
            </td>
            <td>The available button modes.</td>
            <td>
              <TableCode>'primary'</TableCode>
            </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>This function will be called when the user clicks the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>semantic</td>
            <td>
              <TableCode>'default' | 'error' | 'warning' | 'success' | 'info'</TableCode>
            </td>
            <td>Specifies the semantic meaning of the buttons, which determines its color.</td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>
                {
                  "{ height: 'small' | 'medium' | 'large'; width: 'small' | 'medium' | 'large' | 'fillParent' | 'fitContent' }"
                }
              </TableCode>
            </td>
            <td>Object used to define the dimensions of the button in terms of height and width. </td>
            <td>
              <TableCode>{"{ height: 'large'; width: 'fitContent' }"}</TableCode>
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
          <tr>
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text representing advisory information related to the button's action. Under the hood, this prop also
              serves as an accessible label for the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <TableCode>'button' | 'reset' | 'submit'</TableCode>
            </td>
            <td>
              Sets the <Code>type</Code> attribute of the <abbr>HTML</abbr> button element. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'button'</TableCode>
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
      {
        title: "Semantic",
        content: <Example example={semantic} defaultIsVisible />,
      },
      {
        title: "Size",
        content: <Example example={sizes} defaultIsVisible />,
      },
    ],
  },
];

const ButtonCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/button/code/ButtonCodePage.tsx" />
  </DxcFlex>
);

export default ButtonCodePage;
