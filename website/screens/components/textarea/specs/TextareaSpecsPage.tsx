import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import Image from "@/common/Image";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/textarea_specs.png";
import statesImage from "./images/textarea_states.png";
import anatomyImage from "./images/textarea_anatomy.png";

const TextareaSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={specsImage} alt="Component design specifications" />
        </Figure>
        <DxcText as="p">
          The textarea <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>width</Code> and <Code>margin</Code>{" "}
          specifications are inherited from the text input, for reference{" "}
          <DxcLink
            text="check the text input component documentation"
            href="/components/text-input"
          />
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Textarea component states example">
          <Image src={statesImage} alt="Textarea component states example" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design Tokens</HeadingLink>
        <HeadingLink level={4}>Spacing</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accesibility</HeadingLink>
        <HeadingLink level={4}>WCAG</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              text="1.3.1: Information and Relationships"
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              text="3.3.1: Error Identification"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              text="3.3.2: Labels and Instructions"
              href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              text="3.3.3: Error Suggestion"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              newWindow
              text="4.1.2: Name, Role, Value"
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Accessible Rich Internet Applications 1.2 -{" "}
            <DxcLink
              newWindow
              text="textbox role"
              href="https://www.w3.org/TR/wai-aria-1.2/#textbox"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/textarea/specs/TextareaSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TextareaSpecsPage;
