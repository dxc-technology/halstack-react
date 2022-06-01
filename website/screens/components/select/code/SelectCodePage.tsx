import { DxcText, DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import basic from "./examples/basic";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";
import groups from "./examples/groups";
import icons from "./examples/icons";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>defaultValue: string | string[]</td>
            <td></td>
            <td>Initial value of the select, only when it is uncontrolled.</td>
          </tr>
          <tr>
            <td>value: string | string[]</td>
            <td></td>
            <td>
              Value of the select. If undefined, the component will be
              uncontrolled and the value will be managed internally by the
              component.
            </td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed above the select.</td>
          </tr>
          <tr>
            <td>name: string</td>
            <td></td>
            <td>
              Name attribute of the input element. This attribute will allow
              users to find the component's value during the submit event. In
              this event, the component's value will always be a regular string,
              for both single and multiple selection modes, been in the first
              one a single option value and in the multiple variant more than
              one option value, separated by commas.
            </td>
          </tr>
          <tr>
            <td>options: Option[] | OptionGroup[]</td>
            <td></td>
            <td>
              An array of objects representing the selectable options. Each
              object has the following properties depending on whether it is a
              regular option or a group: <br />
              Option:
              <ul>
                <li>
                  <b>Label: string</b>: Label of the option to be shown in the
                  select's listbox.
                </li>
                <li>
                  <b>Value: string</b>: Value of the option. It should be unique
                  and not an empty string, which is reserved to the empty option
                  added by <i>optional</i> prop.
                </li>
                <li>
                  <b>Icon: string | SVGSVGElement</b>: Element used as the icon
                  that will be placed before the option label. It can be a url
                  of an image or an inline SVG. If the url option is the chosen
                  one, take into account that the component's color styling
                  tokens will not be applied to the image.
                </li>
              </ul>
              OptionGroup:
              <br />
              <ul>
                <li>
                  <b>Label: string</b>: Label of the group to be shown in the
                  select's listbox.
                </li>
                <li>
                  <b>Options: Option[]</b>: List of the grouped options.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>helperText: string</td>
            <td></td>
            <td>Helper text to be placed above the select.</td>
          </tr>
          <tr>
            <td>placeholder: string</td>
            <td></td>
            <td>Text to be put as placeholder of the select.</td>
          </tr>
          <tr>
            <td>searchable: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, enables search functionality.</td>
          </tr>
          <tr>
            <td>multiple: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the select component will support multiple selected
              options. In that case, value will be an array of strings with each
              selected option value.
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
            <td>optional: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the select will be optional, showing '(Optional)' next to
              the label and adding a default first option with an empty string
              as value and the placeholder (if defined) as its label. Otherwise,
              the field will be considered required and an error will be passed
              as a parameter to the OnBlur and onChange functions if an option
              wasn't selected.
            </td>
          </tr>
          <tr>
            <td>onChange: function</td>
            <td></td>
            <td>
              This function will be called when the user selects an option. An
              object including the new value (or values) and the error (if the
              value selected is not valid) will be passed to this function. An
              example of this object is:
              <Code>
                {"{ "}value: value, error: error{" }"}
              </Code>
              . If there is no error, error will not be defined.
            </td>
          </tr>
          <tr>
            <td>onBlur: function</td>
            <td></td>
            <td>
              This function will be called when the select loses the focus. An
              object including the value (or values) and the error (if the value
              selected is not valid) will be passed to this function. An example
              of this object is:{" "}
              <Code>
                {"{ "}value: value, error: error{" }"}
              </Code>
              . If there is no error, error will not be defined.
            </td>
          </tr>
          <tr>
            <td>error: string</td>
            <td></td>
            <td>
              If it is a defined value and also a truthy string, the component
              will change its appearance, showing the error below the select
              component. If the defined value is an empty string, it will
              reserve a space below the component for a future error, but it
              would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not
              be modified.
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>size: string</td>
            <td>
              <Code>'medium'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' |
              'fillParent').
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex attribute.</td>
          </tr>
          <tr>
            <td>ref: object</td>
            <td></td>
            <td>Reference to the component.</td>
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
        content: <Example example={basic} defaultIsVisible />,
      },
      {
        title: "Controlled",
        content: (
          <>
            <DxcText as="p">
              This is an example of how to manage the state of the Select
              component using React stateful variables.
            </DxcText>
            <Example example={controlled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Uncontrolled",
        content: (
          <>
            <DxcText as="p">
              Alternatively you can let the component manage its state
              internally. The example below shows how to handle the value of an
              uncontrolled select in the submit event.
            </DxcText>
            <DxcText as="p">
              The Select's value is empty by default, but an initial,
              uncontrolled, value can be provided using the{" "}
              <Code>defaultValue</Code> prop.
            </DxcText>
            <Example example={uncontrolled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Error handling",
        content: (
          <>
            <DxcText as="p">
              When handling errors, we recommend initializing the{" "}
              <Code>error</Code> prop with an empty string. This will reserve
              space for a possible future error message and prevent unintended
              layout changes. Also, the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> events will send <Code>undefined</Code> when
              there is no error, so you may need to check this too to avoid the
              same problem.
            </DxcText>
            <DxcText>
              Below is an example of how to treat errors using the <Code>onBlur</Code> event.
            </DxcText>
            <Example example={errorHandling} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Grouped options",
        content: (
          <>
            <DxcText as="p">
              The <Code>options</Code> prop allows you to group the options by
              slightly varying the structure of the object.
            </DxcText>
            <Example example={groups} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Icons",
        content: (
          <>
            <DxcText as="p">
              You can optionally add icons to the options of the listbox either
              using a URL or an inline SVG.
            </DxcText>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const SelectCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select/examples/SelectCodePage.tsx" />
    </DxcStack>
  );
};

export default SelectCodePage;
