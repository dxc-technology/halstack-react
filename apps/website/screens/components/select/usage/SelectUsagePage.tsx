import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import requiredOptional from "./examples/requiredOptional";
import filterable from "./examples/filterable";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>Considerations about the select usage:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            A dialog element should allow the user to select one option from a list.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            If the list of options is short (4 or less), use checkboxes instead of the select component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The select component should always display a label different from any name in the option list.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Use a pre-selected good default where possible.</DxcBulletedList.Item>
          <DxcBulletedList.Item>Use progressive disclosure between linked select components.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            If more than one option is applicable, use the multi-select variant.
          </DxcBulletedList.Item>
        </DxcBulletedList>
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
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
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
        <DxcBulletedList>
          <DxcBulletedList.Item>Both select variants can be filterable.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Use the filter when the number of items in the optionList is extremely long (± 15 elements).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            This list will be reduced to show only the matches as the user types.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The value will change when the user types a string that matches an option from the list or pick one
            manually.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            When the search does not match any result, a "No matches found" message will be displayed.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Required and optional",
    content: (
      <>
        <Example example={requiredOptional} />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            When labeled as optional, the select will display an option matching the placeholder to allow leaving it
            empty.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>When no optional label appears, the select is required.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            If the select was left empty, the required should display the error "This field can not be empty" when the
            select loses the focus.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const SelectUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/select/usage/SelectUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SelectUsagePage;
