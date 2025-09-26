import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";
import groups from "./examples/groupedOptions";
import icons from "./examples/icons";
import Code, { TableCode, ExtendedTableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import virtualized from "./examples/virtualized";

const optionsType = `{ 
    label: string;
    value: string; 
    icon: string | Icon;
}`;

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
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Specifies a string to be used as the name for the select element when no <Code>label</Code> is provided.
            </td>
            <td>
              <TableCode>'Select'</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string | string[]</TableCode>
            </td>
            <td>Initial value of the select, only when it is uncontrolled.</td>
            <td>-</td>
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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                enableSelectAll
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Enables users to select multiple items from the list.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              If it is a defined value and also a truthy string, the component will change its appearance, showing the
              error below the select component. If the defined value is an empty string, it will reserve a space below
              the component for a future error, but it would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the select.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the select.</td>
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
            <td>multiple</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the select component will support multiple selected options. In that case, value will be an array
              of strings with each selected option value.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Name attribute of the input element. This attribute will allow users to find the component's value during
              the submit event. In this event, the component's value will always be a regular string, for both single
              and multiple selection modes, being a single option value in the first case and more than one value when
              multiple selection is available, separated by commas.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string | string[]; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the select loses the focus. An object including the value (or values)
              and the error (if the value selected is not valid) will be passed to this function. If there is no error,{" "}
              <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(val: { value: string | string[]; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user selects an option. An object including the new value (or
              values) and the error (if the value selected is not valid) will be passed to this function. If there is no
              error, <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the select will be optional, showing '(Optional)' next to the label and adding a default first
              option with an empty string as value and the placeholder (if defined) as its label. Otherwise, the field
              will be considered required and an error will be passed as a parameter to the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions if an option wasn't selected.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                options
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"Option[] | ({ label: string, options: Option[] })[]"}</TableCode>
              <p>
                being <Code>Option</Code> the following type:
              </p>
              <ExtendedTableCode>{optionsType}</ExtendedTableCode>
              <p>
                and <Code>Icon</Code>:
              </p>
              <TableCode>{`React.ReactNode & React.SVGProps<SVGSVGElement>`}</TableCode>
            </td>
            <td>
              An array of objects representing the selectable options. Each object has the following properties
              depending on whether it is a regular option or a group: <br />
              <br />
              <strong>Option</strong>
              <ul>
                <li>
                  <b>label</b>: Label of the option to be shown in the select's listbox.
                </li>
                <li>
                  <b>value</b>: Value of the option. It should be unique and not an empty string, which is reserved to
                  the empty option added by <Code>optional</Code> prop.
                </li>
                <li>
                  <b>icon</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element used as the icon for the option. When using Material Symbols, replace spaces with
                  underscores. By default they are outlined if you want it to be filled prefix the symbol name with{" "}
                  <Code>"filled_"</Code>.
                </li>
              </ul>
              <strong>Grouped options</strong>
              <br />
              <ul>
                <li>
                  <b>label</b>: Label of the group to be shown in the select's listbox.
                </li>
                <li>
                  <b>options</b>: List of <Code>Option</Code> instances.
                </li>
              </ul>
              <br />
              <strong>You can't mix single and grouped options in the same array.</strong>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the select.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, enables search functionality.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large' | 'fillParent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'medium'</TableCode>
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
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLDivElement>"}</TableCode>
            </td>
            <td>Reference to the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <TableCode>string | string[]</TableCode>
            </td>
            <td>
              Value of the select. If undefined, the component will be uncontrolled and the value will be managed
              internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                virtualizedHeight
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              A fixed height must be set to enable virtualization. If no height is provided, the select will
              automatically adjust to the height of its content, and virtualization will not be applied.
            </td>
            <td>
              <td>-</td>
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
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Uncontrolled",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Virtualized",
        content: <Example example={virtualized} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: <Example example={errorHandling} defaultIsVisible />,
      },
      {
        title: "Grouped options",
        content: <Example example={groups} defaultIsVisible />,
      },
      {
        title: "Icon usage",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const SelectCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/select/code/SelectCodePage.tsx" />
  </DxcFlex>
);

export default SelectCodePage;
