import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import Image from "@/common/Image";
import anatomy from "./images/toggle_group_anatomy.png";
import singleSelection from "./examples/singleSelection";
import multipleSelection from "./examples/multipleSelection";
import orientation from "./examples/orientation";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The toggle group component provides a flexible way to present related options or actions within a single
        interface. It consists of multiple toggle buttons, allowing users to make either single or multiple selections
        depending on the configuration. This component is particularly useful for settings, filtering options, or mode
        switching, where users need to quickly toggle between states. By grouping these actions together, it enhances
        usability and keeps the interface organized, ensuring a seamless interaction experience.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Button's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all toggle buttons together.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> an optional visual element within a toggle button that helps users quickly identify
            its function or meaning.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the textual representation inside each toggle button, describing its function or
            selection state.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Toggle button</strong> <em>(selected)</em>: a button in an active state, indicating that the user
            has chosen this option.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Toggle button</strong> <em>(unselected)</em>: a button in its default or inactive state. It remains
            visually subdued compared to the selected button but is still clearly visible and interactive, allowing
            users to switch selections easily.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        Depending on the number of actions or options the user can select on a toggle group, there are two different
        variants of the component.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Single selection",
        content: (
          <DxcParagraph>
            The <strong>single selection</strong> variant allows users to select{" "}
            <strong>only one option at a time</strong>. When a new option is selected, the previous one is automatically
            deselected. This variant is ideal for scenarios where users need to toggle between mutually exclusive
            options, ensuring clarity and preventing conflicting selections.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Use cases",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>View selection:</strong> allowing users to switch between different data presentation
                    formats, such as <strong>grid view vs. list view</strong> in a product catalog.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Mode switching:</strong> Enabling users to toggle between modes like{" "}
                    <strong>light mode vs. dark mode</strong> in an interface.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Filter selection:</strong> Helping users refine content by choosing a{" "}
                    <strong>single category filter</strong> in dashboards or reports.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <Example example={singleSelection} />
              </>
            ),
          },
        ],
      },
      {
        title: "Multiple selection",
        content: (
          <DxcParagraph>
            The <strong>multiple selection</strong> variant of the toggle group component allows users to select
            multiple options at the same time. Unlike the single selection variant, this version enables users to
            activate or deactivate multiple toggles independently, making it useful for scenarios where multiple choices
            can be applied simultaneously.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Use cases",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Formatting options:</strong> enabling users to apply <strong>bold</strong>,{" "}
                    <strong>italic</strong>, and <strong>underline</strong> text styles simultaneously in a text editor.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Risk assessment options:</strong> underwriters can enable multiple risk factors when
                    evaluating a client, such as <strong>pre-existing conditions</strong>, <strong>vehicle age</strong>,
                    and <strong>past claim history</strong>.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Filtering:</strong> allowing users to refine searches by toggling filters like "in
                    progress", "ready to review" or "done".
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <Example example={multipleSelection} />
              </>
            ),
          },
        ],
      },
      {
        title: "Orientation",
        content: (
          <>
            <DxcParagraph>
              Although not technically a variant, the toggle group can also be{" "}
              <strong>stacked in two different ways: horizontally and vertically</strong>. Users can choose the option
              that better fits their needs according to layout constraints.
            </DxcParagraph>
            <Example example={orientation} />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>
          <strong>Choose the right selection mode:</strong> use <strong>single selection</strong> when only one option
          can be active at a time (e.g., selecting a payment method). Use <strong>multiple selection</strong> when users
          can activate several options simultaneously (e.g., selecting policy add-ons).
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Group related actions logically:</strong> ensure that the toggle buttons represent actions or choices
          that are related to each other, helping users make clear and informed selections.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use appropriate labels and icons:</strong> labels should be concise and self-explanatory. If using
          icons, ensure they clearly represent their respective actions or choices.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Stack options based on content needs:</strong> use a <strong>horizontal layout</strong> when there are
          only a few options and space allows, making comparisons easier. Use a <strong>vertical layout</strong> when
          dealing with multiple choices or longer text labels to enhance readability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Be mindful of where you place the toggle group:</strong> this component is not meant to replace{" "}
          <strong>radio buttons</strong>, <strong>checkboxes</strong>, or <strong>switches</strong>, as it does not
          register selections as form inputs. If the user needs to provide structured answers, use the appropriate form
          elements instead.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ToggleGroupOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toggle-group/overview/ToggleGroupOverviewPage.tsx" />
  </DxcFlex>
);

export default ToggleGroupOverviewPage;
