import { DxcText, DxcList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import validation from "./examples/validation";
import content from "./examples/content";
import description from "./examples/description";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          The horizontal/vertical line should not extend to the left of the
          first circle or to the right of the last circle.
        </DxcText>
        <DxcText>
          Do not overwhelmed the component with too many steps, it won't be a
          good idea for the user workflow neither for the display of the
          information.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcText as="p">
          The wizard component has two variants: <strong>horizontal</strong> and{" "}
          <strong>vertical</strong>.
        </DxcText>
        <Example example={variants} />
      </>
    ),
  },
  {
    title: "Validation",
    content: (
      <>
        <DxcText as="p">
          There could be some scenarios in which the content of a step wants to
          be validated while the user is filling the fields with information or
          doing relevant actions in every step of the wizard. For that case, a
          validation mark can be represented in every step once the user
          navigate to the next step in the linear progression. This will
          represent the status of the validation respecting the content, with a
          success mark or an error mark visible on the step mark.
        </DxcText>
        <Example example={validation} />
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        <DxcText as="p">
          Different variations of the content can be performed in the step:
        </DxcText>
        <DxcList>
          <DxcText>Only numbers</DxcText>
          <DxcText>Only icons</DxcText>
          <DxcText>Numbers/icons with step label</DxcText>
        </DxcList>
        <Example example={content} />
      </>
    ),
  },
  {
    title: "Description",
    content: (
      <>
        <DxcText as="p">
          Description can be added to the wizard component step:
        </DxcText>
        <Example example={description} />
      </>
    ),
  },
];

const WizardUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/wizard/usage/WizardUsagePage.tsx" />
    </DxcFlex>
  );
};

export default WizardUsagePage;
