import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import requiredOptional from "./examples/requiredOptional";
import filterable from "./examples/filterable";

const sections = [
  {
    title: "Usage",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Filter",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Required and optional",
    content: (
      <>
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
      </>
    ),
  },
];

const SelectUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/select/usage/SelectUsagePage.tsx" />
    </DxcStack>
  );
};

export default SelectUsagePage;
