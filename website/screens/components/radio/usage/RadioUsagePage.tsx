import {
  DxcList,
  DxcStack,
  DxcText,
  DxcTable,
} from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import stacking from "./examples/stacking";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Labelling should be concise and clearly differentiated from other
          options.
        </DxcText>
        <DxcText>
          By default, one option of the radio group must be pre-selected. Select
          the safest or convenient option.
        </DxcText>
        <DxcText>Single radio buttons should not be used.</DxcText>
        <DxcText>
          If the question that the user needs to answer is as easier as yes/no,
          it is recommended to use checkbox instead of radio button.
        </DxcText>
      </DxcList>
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
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vertical</td>
              <td>
                Short lists of radio buttons should be stacked vertically below
                a descriptive label to better associate the group. Options that
                are listed vertically are easier to read
              </td>
            </tr>
            <tr>
              <td>Horizontal</td>
              <td>
                Multiple radio buttons may be displayed horizontally across the
                page while keeping them aligned within their respective columns.
                Here, it is needed to have in consideration that the linear
                radio buttons represent some challenge, because it&#39;s
                difficult to scan and localize
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          *In any case, in the specification it is specified the ideal distance
          between component with label in the same horizontal edge to avoid the
          problem of pairing and scannability.
        </DxcText>
      </>
    ),
  },
];

const RadioUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio/usage/RadioUsagePage.tsx" />
    </DxcStack>
  );
};

export default RadioUsagePage;
