import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Link from "next/link";
import specsImage from "./images/textarea_specs.png";
import statesImage from "./images/textarea_states.png";
import anatomyImage from "./images/textarea_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Component design specifications">
          <Image src={specsImage} alt="Component design specifications" />
        </Figure>
        <DxcText as="p">
          The textarea <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>width</Code> and <Code>margin</Code>{" "}
          specifications are inherited from the text input, for reference{" "}
          <DxcLink>
            <Link href="/components/text-input">
              <a>check the text input component documentation</a>
            </Link>
          </DxcLink>
          .
        </DxcText>
        <DxcText as="p">
          The textarea doesn&#39;t have the following text-input elements,
          therefore, their listed styles don&#39;t apply:
        </DxcText>
        <DxcList>
          <DxcText>Action</DxcText>
          <DxcText>Prefix / Suffix</DxcText>
          <DxcText>Error indicator</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Textarea component states example">
          <Image src={statesImage} alt="Textarea component states example" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Anatomy image" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>Placeholder/Value</DxcText>
          <DxcText>Container</DxcText>
          <DxcText>Resizer</DxcText>
          <DxcText>Error message</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Spacing",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>padding-left</Code>
                </td>
                <td>Texarea container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Texarea container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-top</Code>
                </td>
                <td>Texarea container</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-bottom</Code>
                </td>
                <td>Texarea container</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
              >
                1.3.1: Information and Relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
              >
                3.3.1: Error Identification
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
              >
                3.3.2: Labels and Instructions
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
              >
                3.3.3: Error Suggestion
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
              >
                4.1.2: Name, Role, Value
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "WAI-ARIA",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Accessible Rich Internet Applications 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-1.2/#textbox"
              >
                textbox role
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const TextareaSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/textarea/specs/TextareaSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TextareaSpecsPage;
