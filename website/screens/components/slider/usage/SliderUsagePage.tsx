import Image from "@/common/Image";
import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import sliderInput from "./images/slider_input.png";
import sliderVariants from "./images/slider_variants.png";

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
              <th>Description</th>
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
        <Figure caption="Slider variants">
          <Image src={sliderVariants} alt="Slider variants" />
        </Figure>
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
        <Figure caption="Slider with input example">
          <Image src={sliderInput} alt="Slider with input example" />
        </Figure>
      </>
    ),
  },
];

const SliderUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/slider/usage/SliderUsagePage.tsx" />
    </DxcStack>
  );
};

export default SliderUsagePage;
