import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import StatusTag from "@/common/StatusTag";
import TableCode from "@/common/TableCode";

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
            <td>Text to be placed in the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'primary' | 'secondary' | 'text'</TableCode>
            </td>
            <td>The available button modes.</td>
            <td>
              <TableCode>'primary'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusTag status="Information">New</StatusTag>title
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text representing advisory information related to the button's
              action. Under the hood, this prop also serves as an accessible
              label for the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <TableCode>'button' | 'reset' | 'submit'</TableCode>
            </td>
            <td>
              Sets the <Code>type</Code> attribute of the <abbr>HTML</abbr>{" "}
              button element. See{" "}
              <DxcLink
                newWindow
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes"
              >
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'button'</TableCode>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>
                string | {"(React.ReactNode & React.SVGProps<SVGSVGElement>)"}
              </TableCode>
            </td>
            <td>
              Element or path used as the icon that will be placed next to the
              button label.
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
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the button.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge' | Margin
              </TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an
              object with 'top', 'bottom', 'left' and 'right' properties in
              order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>
                'small' | 'medium' | 'large' | 'fillParent' | 'fitContent'
              </TableCode>
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
            <td>Value of the tabindex attribute.</td>
            <td>0</td>
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

const ButtonCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/code/ButtonCodePage.tsx" />
    </DxcFlex>
  );
};

export default ButtonCodePage;
