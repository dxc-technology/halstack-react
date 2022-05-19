import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import variants from "./examples/variantsSelect";
import requiredOptional from "./examples/requiredOptionalSelect";
import filterable from "./examples/filterableSelect";
import groups from "./examples/groupedSelect";
import icons from "./examples/iconsSelect";
import controlled from "./examples/controlledSelect";
import uncontrolled from "./examples/uncontrolledSelect";

const SelectUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">Considerations about the select usage:</DxcText>
        <DxcList>
          <DxcText>
            A dialog element should allow the user to select one option from a
            list.
          </DxcText>
          <DxcText>
            If the list of options is short (4 or less), use checkboxes instead
            of the select component.
          </DxcText>
          <DxcText>
            The select component should always display a label different from
            any name in the option list.
          </DxcText>
          <DxcText>Use a pre-selected good default where possible.</DxcText>
          <DxcText>
            Use progressive disclosure between linked select components.
          </DxcText>
          <DxcText>
            If more than one option is applicable, use the multi-select variant.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Variants</HeadingLink>
        <DxcText as="p">
          Single and multiple variants of the select component:
        </DxcText>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Single</strong>
              </td>
              <td>Allows the user to select one option from a list</td>
            </tr>
            <tr>
              <td>
                <strong>Multiple</strong>
              </td>
              <td>Allows the user to select multiple options from a list</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Filter</HeadingLink>
        <DxcText as="p">Filterable single and multi variants:</DxcText>
        <Example example={filterable} />
        <DxcList>
          <DxcText>Both select variants can be filterable.</DxcText>
          <DxcText>
            Use the filter when the number of items in the optionList is
            extremely long (± 15 elements).
          </DxcText>
          <DxcText>
            This list will be reduced to show only the matches as the user
            types.
          </DxcText>
          <DxcText>
            The value will change when the user types a string that matches an
            option from the list or pick one manually.
          </DxcText>
          <DxcText>
            When the search does not match any result, a "No matches found"
            message will be displayed.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Required and optional</HeadingLink>
        <DxcText as="p">
          Required with error and optional select examples:
        </DxcText>
        <Example example={requiredOptional} />
        <DxcList>
          <DxcText>
            When labeled as optional, the select will display an option matching
            the placeholder to allow leaving it empty.
          </DxcText>
          <DxcText>
            When no optional label appears, the select is required.
          </DxcText>
          <DxcText>
            If the select was left empty, the required should display the error
            "This field can not be empty" when the select loses the focus.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Groups</HeadingLink>
        <DxcText as="p">
          The <Code>options</Code> prop allows you to group the options by
          slightly varying the structure of its object.
        </DxcText>
        <Example example={groups} />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Icons</HeadingLink>
        <DxcText as="p">
          You can add icons to the options of the listbox either using a URL or
          an inline SVG.
        </DxcText>
        <Example example={icons} />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Controlled and uncontrolled</HeadingLink>
        <DxcText as="p">
          In a controlled component, the inner state of the Select component
          should be managed using React stateful variables.
        </DxcText>
        <Example example={controlled} />
        <DxcText as="p">
          When the component is uncontrolled, the state of the component is
          managed internally by the select. Also, since the component controls
          the state, in order to set a predefined value you can use the prop{" "}
          <Code>defaultValue</Code> Here is an example of how to use an
          uncontrolled select the submit event:
        </DxcText>
        <Example example={uncontrolled} />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Props</HeadingLink>
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
              <td>
                Initial value of the select, only when it is uncontrolled.
              </td>
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
                this event, the component's value will always be a regular
                string, for both single and multiple selection modes, been in
                the first one a single option value and in the multiple variant
                more than one option value, separated by commas.
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
                    <b>Value: string</b>: Value of the option. It should be
                    unique and not an empty string, which is reserved to the
                    empty option added by <i>optional</i> prop.
                  </li>
                  <li>
                    <b>Icon: string | SVGSVGElement</b>: Element used as the
                    icon that will be placed before the option label. It can be
                    a url of an image or an inline SVG. If the url option is the
                    chosen one, take into account that the component's color
                    styling tokens will not be applied to the image.
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
                options. In that case, value will be an array of strings with
                each selected option value.
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
                If true, the select will be optional, showing '(Optional)' next
                to the label and adding a default first option with an empty
                string as value, been the placeholder (if defined) its label.
                Otherwise, the field will be considered required and an error
                will be passed as a parameter to the OnBlur and onChange
                functions if an option wasn't selected.
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
                object including the value (or values) and the error (if the
                value selected is not valid) will be passed to this function. An
                example of this object is:{" "}
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
                both the appearance and the space for the error message would
                not be modified.
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select/usage/SelectUsagePage.tsx" />
    </DxcStack>
  );
};

export default SelectUsagePage;
