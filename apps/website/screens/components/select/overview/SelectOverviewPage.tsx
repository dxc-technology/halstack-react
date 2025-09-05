import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import single from "./examples/single";
import multiple from "./examples/multiple";
import filterable from "./examples/filterable";
import Image from "@/common/Image";
import anatomy from "./images/select_anatomy.png";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The <strong>select</strong> component provides a structured way for users to{" "}
        <strong>choose from a predefined list of options</strong>, streamlining decision-making in forms and interfaces.
        It supports various configurations, including placeholder text, grouped options, and icons, allowing for better
        usability and alignment with design needs. Designed for clarity and efficiency, it helps maintain a clean UI
        while offering an intuitive selection process.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Select anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Selection indicator (multiple):</strong> a visual marker, typically a checkmark, that shows which
            items have been selected in the multi-select variant of the component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Select all item:</strong> an option that allows users to select or deselect all available choices in
            the multi-select variant of the component for efficiency.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List option:</strong> an individual selectable item within the dropdown list, representing a choice
            available to the user.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List option checkbox:</strong> a checkbox placed next to each list option in a multi-select
            dropdown, allowing users to select multiple items.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a small graphic or symbol that visually represents the list option, aiding quick
            recognition of choices.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List option label:</strong> the text displayed next to an option in the listbox, providing a clear
            description of the choice.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> a descriptive title for the select component, helping users understand its purpose
            and context.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text:</strong> additional guidance placed below the label to clarify how the user should
            interact with the select component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Select value(s):</strong> displays the currently selected options within the input area, allowing
            users to see their selections at a glance.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Expand/collapse icon:</strong> a visual indicator that signals whether the dropdown list can be
            expanded or collapsed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Select container:</strong> the outer structure enclosing the select component, ensuring proper
            spacing and alignment within the UI.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Select listbox:</strong> the dropdown box that appears when the select is expanded, containing all
            available options.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List item selected indicator (single):</strong> a checkmark or highlight used to indicate which
            option is currently selected in a single-selection dropdown.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List item (single):</strong> an individual selectable option in a single-selection dropdown,
            allowing users to pick only one choice at a time.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using selects",
    content: (
      <DxcParagraph>
        The select component allows users to choose from a predefined list of options, making it a valuable input method
        for <strong>collecting user-provided information</strong>. It is particularly useful in forms where users need
        to submit structured data efficiently. Designed to handle <strong>more than four options</strong>, the select
        component improves usability by reducing clutter and keeping the interface clean compared to radio buttons or
        other selection methods. Depending on the use case, it can support both single and multiple selections, enabling
        flexibility in data input.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Filtering",
        content: (
          <>
            <DxcParagraph>
              Filtering features are present in all variants of the select component, and it's a very useful attribute
              of the component when dealing with long lists of options.
            </DxcParagraph>
            <DxcParagraph>
              As the user types, the list <strong>dynamically narrows down to display only the matching results</strong>
              , improving efficiency and ease of selection. The value updates when the user either types a string that
              matches an existing option or manually selects one from the list. If no matches are found, a "No matches
              found" message is displayed, providing clear feedback.
            </DxcParagraph>
            <Example example={filterable} />
          </>
        ),
      },
      {
        title: "Required and optional",
        content: (
          <DxcParagraph>
            The select component can be either <strong>optional</strong> or <strong>required</strong>, depending on the
            context. When marked as <strong>optional</strong>, it includes a placeholder-like option that allows users
            to leave the field empty if no selection is needed. On the other hand, if no optional label is present, the
            field is considered <strong>required</strong>, meaning users must choose an option before proceeding. If a
            required select is left empty, an error message stating "<strong>This field cannot be empty</strong>" should
            appear when the component loses focus, ensuring users provide the necessary input before submitting a form.
          </DxcParagraph>
        ),
      },
      {
        title: "Select vs dropdown",
        content: (
          <>
            <DxcParagraph>
              While both the <strong>select</strong> and <strong>dropdown</strong> components present a list of options,
              they serve distinct purposes within an interface. The <strong>select</strong> component is primarily used
              in forms to collect user input, allowing either single or multiple selections from a predefined set of
              options. It is designed to replace traditional radio buttons or checkboxes when space efficiency is
              needed, especially when dealing with long lists. Additionally, the select component can include a
              filtering mechanism to help users find their desired option more easily.
            </DxcParagraph>
            <DxcParagraph>
              On the other hand, the <strong>dropdown</strong> component is not meant for form inputs but rather for
              displaying contextual actions or navigation links. It typically triggers a menu that offers options such
              as commands, shortcuts, or external links, often enhancing interaction within a UI. Unlike the select,
              dropdowns do not retain selected values within the component itself but instead execute an action upon
              selection.
            </DxcParagraph>
            <DxcParagraph>
              When deciding between the two, consider whether the component needs to collect and retain user input
              (select) or provide quick access to actions and links (dropdown).
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Select all and grouped selection",
        content: (
          <DxcParagraph>
            <strong>Select all</strong> and <strong>grouped selection</strong> options provide users with efficient ways
            to manage large sets of checkable items within a list, dropdown, or multi-select component. These options
            help reduce interaction costs and minimize repetitive actions, especially when dealing with categorized data
            or bulk selection scenarios.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Select all",
            content: (
              <>
                <DxcParagraph>
                  The <strong>select all</strong> option (<Code>enableSelectAll</Code>) allows users to quickly select
                  or deselect all items in a list with a single action.
                </DxcParagraph>
                <DxcParagraph>
                  When the flag is set to true, a checkbox labelled with <em>"Select all"</em> text is placed at the top
                  of the list or above grouped items. It should visually reflect the current state:
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>Unselected when no items are selected.</DxcBulletedList.Item>
                  <DxcBulletedList.Item>Selected when all items are selected.</DxcBulletedList.Item>
                  <DxcBulletedList.Item>Indeterminate when only some items are selected.</DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Grouped selection",
            content: (
              <>
                <DxcParagraph>
                  <strong>Grouped selection</strong> enables users to manage selections within categorized sections of a
                  list. Each group has its own header with a group-level checkbox. This allows users to:
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>Quickly select all items within a specific group.</DxcBulletedList.Item>
                  <DxcBulletedList.Item>Understand how items are organized.</DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Maintain more granular control over selection without losing the efficiency of bulk actions.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  Just like the global select all, group checkboxes also reflect the selection state (selected,
                  unselected, indeterminate) based on the individual items in that group.
                </DxcParagraph>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        Depending on the number of items the user is able to select, our component can allow multiple or single
        selection.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Single selection",
        content: (
          <>
            <DxcParagraph>
              Ideal for scenarios where a single, definitive choice is required, the single-selection allows users to
              <strong>choose only one option from a predefined list</strong>. This variant is commonly used in forms
              where users need to specify categories, pick a location, select a status, or choose from mutually
              exclusive options like gender, payment methods, or subscription plans. It simplifies decision-making by
              preventing multiple selections, ensuring clarity and accuracy in user inputs.
            </DxcParagraph>
            <Example example={single} />
          </>
        ),
      },
      {
        title: "Multiple selection",
        content: (
          <>
            <DxcParagraph>
              The <strong>multiple-selection allows users to choose more than one option</strong> from a list, making it
              perfect for scenarios where multiple selections are necessary. This variant is commonly used in filters,
              permission settings, tag selection, and cases where users need to customize their choices, such as
              selecting multiple product categories, preferred communication channels, or applicable document types.
            </DxcParagraph>
            <DxcParagraph>
              To enhance usability, this variant includes a "<strong>Select all</strong>" feature within the listbox,
              allowing users to quickly select all options at once. This functionality is especially useful in forms
              with long lists, where multiple selections are likely to be valid, reducing the time and effort needed to
              choose items individually.
            </DxcParagraph>
            <Example example={multiple} />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use select for more than four options:</strong> if the number of choices is fewer, consider using
          radio buttons (for single selection) or checkboxes (for multiple selection) to reduce user interaction effort.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Enable filtering for long lists:</strong> if the option list is extensive (around 15 or more items),
          use the filterable variant to help users quickly find relevant choices.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Label optional fields clearly:</strong> when the select field is optional, ensure a placeholder option
          is available to indicate that the field can be left empty. If it's required, provide an error message when
          left unselected.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Choose the right selection mode:</strong> use the single-selection variant when users need to pick
          only one option. If multiple selections are needed, enable the multi-selection variant and consider including
          the "select all" feature for better usability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep option labels clear and concise:</strong> avoid overly long or ambiguous option labels. Each
          choice should be easily scannable and self-explanatory.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use placeholders wisely:</strong> a placeholder should provide guidance but not be mistaken for a
          default selection. Be clear and concise when deciding which placeholder to set into the select.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prevent excessive nesting:</strong> when grouping options into categories, keep the hierarchy simple
          and easy to navigate to avoid overwhelming the user.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const SelectOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/select/overview/SelectOverviewPage.tsx" />
  </DxcFlex>
);

export default SelectOverviewPage;
