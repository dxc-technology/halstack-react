import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
import Example from "@/common/example/Example";
import basic from "./code-examples/basicSelect";
import controlled from "./code-examples/controlledSelect";
import uncontrolled from "./code-examples/uncontrolledSelect";
import multiple from "./code-examples/multipleSelect";
import searchable from "./code-examples/searchableSelect";
import groups from "./code-examples/groupedSelect";
import icons from "./code-examples/iconsSelect";
import optional from "./code-examples/optionalSelect";
import Code from "@/common/Code";

const SelectExamplesPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Examples</HeadingLink>
        <HeadingLink level={3}>Basic usage</HeadingLink>
        <DxcText as="p">
          Some examples with the different states of the Select component.
        </DxcText>
        <Example example={basic} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Controlled</HeadingLink>
        <DxcText as="p">
          This is an example of how to manage the state of the Select component
          using React stateful variables.
        </DxcText>
        <Example example={controlled} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Uncontrolled</HeadingLink>
        <DxcText as="p">
          The state of the component is managed internally by the select. Here
          is an example of how to use an uncontrolled select the submit event.
        </DxcText>
        <Example example={uncontrolled} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Searchable</HeadingLink>
        <DxcText as="p">
          The <Code>searchable</Code> prop enables the search functionality for
          filtering the select options.
        </DxcText>
        <Example example={searchable} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Multiple</HeadingLink>
        <DxcText as="p">
          The <Code>multiple</Code> prop enables the user to select more than
          one option. If the component is also optional, it will only add
          "(Optional)" next to the label and not another option to the listbox.
        </DxcText>
        <Example example={multiple} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Optional</HeadingLink>
        <DxcText as="p">
          You can mark a select as optional by setting to <Code>true</Code> the{" "}
          <Code>optional</Code> prop. In this particular case, the component
          will automatically add an extra selectable option which will have the
          empty string as value and the placeholder as a label. This only
          affects the single selection mode, otherwise this option will not be
          included.
        </DxcText>
        <Example example={optional} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Groups</HeadingLink>
        <DxcText as="p">
          The <Code>options</Code> prop allows you to group the options by
          slightly varying the structure of its object.
        </DxcText>
        <Example example={groups} defaultIsVisible />
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Icons</HeadingLink>
        <DxcText as="p">
          You can add icons to the options of the listbox either using a URL or
          an inline SVG.
        </DxcText>
        <Example example={icons} defaultIsVisible />
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select-copy/examples/SelectCopyExamplesPage.tsx" />
    </DxcStack>
  );
};

export default SelectExamplesPage;
