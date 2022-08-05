import {
  DxcFlex,
  DxcText,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import stacking from "./examples/stacking";

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
        <Example example={stacking} />
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
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/checkbox/usage/CheckboxUsagePage.tsx" />
    </DxcFlex>
  );
};

export default CheckboxInputUsagePage;
