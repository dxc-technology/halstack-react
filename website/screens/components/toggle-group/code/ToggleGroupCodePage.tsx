import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the component.</td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed above the component.</td>
        </tr>
        <tr>
          <td>defaultValue: number | number[]</td>
          <td></td>
          <td>
            The key(s) of the initially selected value(s), only when it is
            uncontrolled.
          </td>
        </tr>
        <tr>
          <td>value: number | number[]</td>
          <td></td>
          <td>
            The key(s) of the selected value(s). If the toggle group component
            doesn't allow multiple selection, it must be one unique value. If
            the component allows multiple selection, value must be an array. If
            undefined, the component will be uncontrolled and the value will be
            managed internally by the component.
          </td>
        </tr>
        <tr>
          <td>onChange: function</td>
          <td></td>
          <td>
            This function will be called every time the selection changes. The
            number with the key of the selected value will be passed as a
            parameter to this function. If multiple selection is allowed, an
            array of keys will be passed
          </td>
        </tr>
        <tr>
          <td>disabled: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the component will be disabled.</td>
        </tr>
        <tr>
          <td>multiple: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            If true, the toggle group will support multiple selection. In that
            case, value must be an array of numbers with the keys of the
            selected values.
          </td>
        </tr>
        <tr>
          <td>options: object[]</td>
          <td></td>
          <td>
            An array of objects representing the selectable options. Each object
            has the following properties:
            <ul>
              <li>
                <b>value</b>: Number with the option inner value.
              </li>
              <li>
                <b>label</b>: String with the option display value.
              </li>
              <li>
                <b>icon</b>: Element or path used as the icon of an option.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex.</td>
        </tr>
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
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const ToggleGroupCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/toggle-group/code/ToggleGroupCodePage.tsx" />
    </DxcStack>
  );
};

export default ToggleGroupCodePage;
