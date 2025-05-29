import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const sections = [
  {
    title: "Props",
    content: (
      <>
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
              <td>caretHidden</td>
              <td>
                <TableCode>boolean</TableCode>
              </td>
              <td>Whether the arrow next to the label must be displayed or not.</td>
              <td>
                <TableCode>false</TableCode>
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
              <td>expandOnHover</td>
              <td>
                <TableCode>boolean</TableCode>
              </td>
              <td>If true, the options are shown when the dropdown is hovered.</td>
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
                name or SVG element as the icon that will be placed next to the dropdown label. When using Material
                Symbols, replace spaces with underscores. By default they are outlined if you want it to be filled
                prefix the symbol name with <TableCode>"filled_"</TableCode>.
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
              <td>Text to be placed within the dropdown.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>
                <TableCode>
                  'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin
                </TableCode>
              </td>
              <td>
                Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left'
                and 'right' properties in order to specify different margin sizes.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                  <StatusBadge status="required" />
                  onSelectOption
                </DxcFlex>
              </td>
              <td>
                <TableCode>{"(value: string) => void"}</TableCode>
              </td>
              <td>
                This function will be called every time the selection changes. The value of the selected option will be
                passed as a parameter.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                  <StatusBadge status="required" />
                  options
                </DxcFlex>
              </td>
              <td>
                <TableCode>
                  {
                    "{ label?: string; icon?: string | (React.ReactNode & React.SVGProps <SVGSVGElement>); value: string }[]"
                  }
                </TableCode>
              </td>
              <td>
                An array of objects representing the options. Each object has the following properties:
                <ul>
                  <li>
                    <b>label</b>: Option display value.
                  </li>
                  <li>
                    <b>icon</b>:{" "}
                    <DxcLink newWindow href="https://fonts.google.com/icons">
                      Material Symbol
                    </DxcLink>{" "}
                    name or SVG element as the icon that will be placed next to the option label. When using Material
                    Symbols, replace spaces with underscores. By default they are outlined if you want it to be filled
                    prefix the symbol name with <TableCode>"filled_"</TableCode>.
                  </li>
                  <li>
                    <b>value</b>: Option inner value.
                  </li>
                </ul>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>optionsIconPosition</td>
              <td>
                <TableCode>'before' | 'after'</TableCode>
              </td>
              <td>In case options include icons, whether the icon should appear after or before the label.</td>
              <td>
                <TableCode>'before'</TableCode>
              </td>
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
            <tr>
              <td>title</td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>
                Text representing advisory information related to the dropdown's trigger action. Under the hood, this
                prop also serves as an accessible label for the component.
              </td>
              <td>-</td>
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
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Icons",
        content: (
          <>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const DropdownCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/dropdown/code/DropdownCodePage.tsx" />
  </DxcFlex>
);

export default DropdownCodePage;
