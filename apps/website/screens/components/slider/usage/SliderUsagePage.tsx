import { DxcBulletedList, DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import input from "./examples/input";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Visualize the output of the slider as feedback to the user of the current state.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          As more information can give it to the user, the easier the selection will be.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If the value has to be specific, give some resource to the user to fill a precise input, i.e. an input next to
          the slider.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The slider component has two variants that can be used depending on the requirements of the application.
        </DxcParagraph>
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
                <strong>Discrete</strong>
              </td>
              <td>Slider can only get the value marked alongside the total line.</td>
            </tr>
            <tr>
              <td>
                <strong>Continuos</strong>
              </td>
              <td>Slider can take every value mapped.</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Slider with input",
    content: (
      <>
        <DxcParagraph>
          To accomplish these considerations, some slider&#39;s variations were designed with the purpose of offering a
          great user experience within the application.
        </DxcParagraph>
        <Example example={input} />
      </>
    ),
  },
];

const SliderUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/slider/usage/SliderUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SliderUsagePage;
