import {
  DxcList,
  DxcFlex,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
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
      <DxcList>
        <DxcText>
          Visualize the output of the slider as feedback to the user of the
          current state.
        </DxcText>
        <DxcText>
          As more information can give it to the user, the easier the selection
          will be.
        </DxcText>
        <DxcText>
          If the value has to be specific, give some resource to the user to
          fill a precise input, i.e. an input next to the slider.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcText as="p">The slider has two variants:</DxcText>
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
              <td>
                Slider can only get the value marked alongside the total line
              </td>
            </tr>
            <tr>
              <td>
                <strong>Continous</strong>
              </td>
              <td>Slider can take every value mapped</td>
            </tr>
          </tbody>
        </DxcTable>
        <Example example={variants} />
      </>
    ),
  },
  {
    title: "Slider with input",
    content: (
      <>
        <DxcText as="p">
          To accomplish these considerations, some slider&#39;s variations were
          designed with the purpose of offering a great user experience within
          the application.
        </DxcText>
        <Example example={input} />
      </>
    ),
  },
];

const SliderUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/slider/usage/SliderUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SliderUsagePage;
