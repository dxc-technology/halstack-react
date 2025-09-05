import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import iconUsage from "./examples/iconUsage";
import Image from "@/common/Image";
import anatomy from "./images/dropdown_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The dropdown enhances usability by displaying a list of choices in a collapsible menu, optimizing space while
          keeping options easily accessible. It supports icons, sections, and different selection behaviors to adapt to
          various use cases. Designed for efficiency, it ensures keyboard navigation, accessibility, and proper contrast
          for readability.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Dropdown anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Dropdown:</strong> the main container that triggers the list of options when clicked, allowing users
            to select an item.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Listbox:</strong> the expanded panel displaying all available options for selection.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a visual aid that can accompany the selected option, helping users quickly recognize
            the category or purpose.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the textual representation of the selected option, ensuring clarity in the user's
            choice.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Expand/collapse icon:</strong> an indicator that shows whether the dropdown is expanded or
            collapsed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>List item:</strong> an individual option within the dropdown list, which users can click to make a
            selection.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using dropdowns",
    content: (
      <>
        <DxcParagraph>
          Dropdowns have a similar look and behavior to select components, the difference is that while select is only
          to collect user's data into a form, dropdown can be used in various scenarios.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Dropdowns display a list of options that appear when the user clicks or hovers over the parent element,
            providing a compact and efficient way to make selections.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The arrow linked to the dropdown label indicates to the user that more options are available but currently
            hidden.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            By default, a dropdown expands below its main container if there is enough screen space to accommodate the
            full size of the pop-up.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          If displaying the dropdown below the selector hides important information, reducing discoverability and
          scanability, consider alternative ways to present the content or adjust the pop-up's position to better fit
          the application's needs.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Icon usage",
        content: (
          <>
            <DxcParagraph>
              Icons can be used within the dropdown component in various configurations. They can be placed before or
              after the label or serve as the sole content of the dropdown placeholder and options. This maintains
              consistency with other components in our Design System, such as buttons and selects, which follow the same
              behavior.
            </DxcParagraph>
            <Example example={iconUsage} />
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
          <strong>User clear and concise labels:</strong> ensure dropdown labels are descriptive and easily understood,
          helping users quickly grasp their choices. Avoid vague terms like "Select an option."
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prioritize logical ordering:</strong> arrange options in a meaningful order — alphabetically for lists,
          by frequency of use for common selections, or categorically when grouping similar items.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep the list of options manageable:</strong> avoid overwhelming users with too many options. If the
          list is long, consider using grouped sections or an alternative selection method like autocomplete.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure accessibility:</strong> provide sufficient contrast, keyboard navigation, and screen reader
          support. Icons should always have accessible labels to maintain clarity.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid nesting too deep:</strong> multi-level dropdowns can be hard to navigate. If multiple selection
          levels are required, consider using a different component, like a sidebar or tree structure.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Be mindful of placement and screen space:</strong> ensure the dropdown appears in a location where it
          doesn't obscure critical content. If needed, adjust its position dynamically to fit within the viewport.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use icons thoughtfully:</strong> icons can enhance usability but should only be added when they add
          clarity. Overloading the dropdown with icons can create visual clutter.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const DropdownOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/dropdown/overview/DropdownOverviewPage.tsx" />
  </DxcFlex>
);

export default DropdownOverviewPage;
