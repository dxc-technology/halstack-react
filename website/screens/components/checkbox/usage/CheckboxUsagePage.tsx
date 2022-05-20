import {
  DxcStack,
  DxcText,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import checkboxStack from "./images/checkbox_stack.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcText as="p">Use the checkbox when:</DxcText>
        <DxcList>
          <DxcText>Multiple choices offered.</DxcText>
          <DxcText>Binary response are requested (yes/no).</DxcText>
          <DxcText>Accepting conditions and additional features.</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Stacking",
    content: (
      <>
        <DxcText as="p">
          Checkbox may be either vertically or horizontally stacked.
        </DxcText>
        <Figure caption="Checkbox group stacking types">
          <Image src={checkboxStack} alt="Checkbox group stacking types" />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Vertical</strong>
              </td>
              <td>
                Related checkboxes that belong to the same category. The
                horizontal spacing between horizontally stacked checkboxes
                should be 8px.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Horizontal</strong>
              </td>
              <td>
                Checkboxes are independent of a category*. The vertical spacing
                between stacked checkboxes should be 32px. Don&#39;t stack more
                than 3 options
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const CheckboxInputUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/checkbox/usage/CheckboxUsagePage.tsx" />
    </DxcStack>
  );
};

export default CheckboxInputUsagePage;
