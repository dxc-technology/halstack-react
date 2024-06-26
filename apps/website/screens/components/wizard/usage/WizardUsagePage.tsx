import { DxcParagraph, DxcBulletedList, DxcFlex } from "@repo/ui";
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
      <DxcBulletedList>
        <DxcBulletedList.Item>
          The horizontal/vertical line should not extend to the left of the first circle or to the right of the last
          circle.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Do not overwhelmed the component with too many steps, it won't be a good idea for the user workflow neither
          for the display of the information.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The wizard component has two variants: <strong>horizontal</strong> and <strong>vertical</strong>.
        </DxcParagraph>
        <Example example={variants} />
      </>
    ),
  },
  {
    title: "Validation",
    content: (
      <>
        <DxcParagraph>
          There could be some scenarios in which the content of a step wants to be validated while the user is filling
          the fields with information or doing relevant actions in every step of the wizard. For that case, a validation
          mark can be represented in every step once the user navigate to the next step in the linear progression. This
          will represent the status of the validation respecting the content, with a success mark or an error mark
          visible on the step mark.
        </DxcParagraph>
        <Example example={validation} />
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        <DxcParagraph>Different variations of the content can be performed in the step:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Only numbers</DxcBulletedList.Item>
          <DxcBulletedList.Item>Only icons</DxcBulletedList.Item>
          <DxcBulletedList.Item>Numbers/icons with step label</DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={content} />
      </>
    ),
  },
  {
    title: "Description",
    content: (
      <>
        <DxcParagraph>Description can be added to the wizard component step:</DxcParagraph>
        <Example example={description} />
      </>
    ),
  },
];

const WizardUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/wizard/usage/WizardUsagePage.tsx" />
    </DxcFlex>
  );
};

export default WizardUsagePage;
