import { DxcBulletedList, DxcParagraph, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import stacking from "./examples/stacking";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Labelling should be concise and clearly differentiated from other options.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          One option of the radio group can be pre-selected. Select the safest or convenient option.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Single radio button should not be used.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If the question that the user needs to respond is as easier as yes/no, it is recommended to use a checkbox
          instead of radio group.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Stacking",
    content: (
      <>
        <Example example={stacking} />
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vertical</td>
              <td>
                Short lists of radio buttons should be stacked vertically below a descriptive label to better associate
                the group. Options that are listed vertically are easier to read.
              </td>
            </tr>
            <tr>
              <td>Horizontal</td>
              <td>
                Multiple radio buttons may be displayed horizontally across the page while keeping them aligned within
                their respective columns. Here, it is needed to have in consideration that the linear radio buttons
                represent some challenge, because it&#39;s difficult to scan and localize.
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcParagraph>
          *In any case, in the specification it is specified the ideal distance between component with label in the same
          horizontal edge to avoid the problem of pairing and scalability.
        </DxcParagraph>
      </>
    ),
  },
];

const RadioGroupUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/radio-group/usage/RadioGroupUsagePage.tsx" />
    </DxcFlex>
  );
};

export default RadioGroupUsagePage;
