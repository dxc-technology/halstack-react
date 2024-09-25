import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import expandedContent from "./examples/expandedContent";
import selectable from "./examples/selectable";
import filterable from "./examples/fiterable";
import draggable from "./examples/draggable";

const sections = [
  {
    title: "Overview",
    content: (
      <DxcParagraph>
        The Datagrid component offers a robust solution for displaying and managing tabular data. It supports essential
        features such as sorting and filtering, allowing users to organize and refine data easily. With multi-selection
        capabilities, users can perform bulk actions like deleting or exporting records efficiently. The component also
        includes in-line editing for quick data modifications directly within the grid, and expandable rows for
        showcasing additional details without cluttering the main view. Additionally, users can reorder columns to
        customize their data layout, ensuring an intuitive and flexible user experience tailored to their specific
        needs.
      </DxcParagraph>
    ),
  },
  {
    title: "Key interactions and features",
    subSections: [
      {
        title: "Row selection",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>Users can select one or multiple rows for bulk actions.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Row selection can persist across pages when pagination is used in the Datagrid, ensuring users can
                perform bulk actions on rows even if they navigate away from the current view.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Users can set a default selected row on initial load, useful for pre-populating forms or automatically
                highlighting the most relevant data for their specific use case.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Users can easily undo multiple selections at once using the select/deselect all feature located in the
                Datagrid’s header, streamlining bulk actions.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Example",
            content: <Example example={selectable} />,
          },
        ],
      },
      {
        title: "Sorting and filtering",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Users can apply sorting to multiple columns simultaneously, enabling more complex data analysis by
                arranging data based on different criteria.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Users can apply sorting to multiple columns simultaneously, enabling more complex data analysis by
                arranging data based on different criteria.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Filtering in our Datagrid is enabled through integrated Halstack components, such as Dropdowns, and is
                applied at the row level for precise data refinement.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Example",
            content: <Example example={filterable} />,
          },
        ],
      },
      {
        title: "In-line editing",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Users can modify data directly within the grid cells, allowing for quick and intuitive updates without
                navigating away from the grid. This feature is particularly valuable for large datasets, where edits
                need to be made directly within the data source for efficiency and real-time updates.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                RChanges made through in-line editing are immediately reflected in the Datagrid, giving users real-time
                feedback on their edits.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Additionally, when editing permissions are required, the Datagrid can be configured with other Halstack
                components, such as the Button, to enable editing only after the button is activated.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Expandable rows",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The Datagrid component allows users to reveal additional information for specific rows without
                cluttering the main view. This optimizes space efficiency and improves user experience by offering
                access to in-depth information when needed, all while maintaining a clean and organized grid layout.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The expanded area can display various content types, such as additional data fields, images, or action
                buttons, enhancing the data presentation.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Example",
            content: <Example example={expandedContent} />,
          },
        ],
      },
      {
        title: "Column reordering",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The re-ordering feature of our Datagrid allows users to rearrange columns according to their preferences
                by dragging and dropping them, enhancing the personalized data viewing experinece.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                By letting users prioritize the most relevant columns, this feature helps them access and analyze data
                more efficiently. It is also designed to be user-friendly, enabling quick adjustments with minimal
                effort.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                As users drag columns, visual indicators guide them, making it clear where the column will be placed
                when dropped.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Example",
            content: <Example example={draggable} />,
          },
        ],
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Data contextualization</strong>: Provide context within the grid by labeling columns clearly,
            ensuring users understand the significance of the data they are viewing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Column alignment</strong>: though data can be aligned in columns however the user chooses, it must
            be aligned consistently across columns to enhance readability:
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                <strong>Text</strong>: aligned to the left for natural reading flow.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Numbers and currencies</strong>: align numbers, currencies, and other quantitative data to the
                right for clear comparison, especially when dealing with decimals or aligning figures by their numerical
                place value.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Dates and times</strong>: aligned to the left for readability, as users generally read these
                like text, but consider right-aligning if dates need to be compared sequentially.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Actions</strong>: align action buttons or interactive elements (such as "Edit" or "Delete") to
                the center or right, depending on layout consistency. Centering actions can make them more accessible
                and distinguishable from data fields.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Booleans</strong>: align checkboxes or toggles to the center to visually separate them from text
                or data and create a clear, interactive area.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Icons</strong>: aligned to the center or next to their corresponding text, with spacing, to
                maintain clarity and improve the user interface.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Column sizing</strong>: make sure that columns are sized appropriately for the type of data they
            display (e.g. dates should not take up too much space, neither do numerical values, which must take only the
            minimal space it requires for them to be shown without truncation).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear default sorting</strong>: Set a sensible default sorting order for columns to help users
            quickly access the most relevant data when they first interact with the grid.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear filters option</strong>: When filtering data, include a button to clear all filters at once,
            allowing users to quickly reset their views and return to the unfiltered dataset.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Accessible bulk actions</strong>: Ensure that bulk actions, such as “Delete” or “Export,” are easily
            accessible once rows are selected, facilitating efficient data management. Consider also implementing
            confirmation prompts for bulk actions to prevent accidental data loss and ensure users are intentional with
            their actions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use of expandable rows</strong>: Use expandable rows to display additional information that isn’t
            crucial for immediate viewing, but avoid overusing this feature to prevent increased cognitive load on
            users.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Limit expandable content</strong>: Use expandable rows sparingly to avoid overwhelming users,
            ensuring that only essential supplementary information is included.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrolling</strong>: The Datagrid supports both horizontal and vertical scrolling to handle extensive
            data sets, ensuring all rows and columns are accessible without cluttering the UI. While the component
            supports scrolling, it is designed to prioritize displaying the most essential data upfront, minimizing the
            need for scrolling to reduce potential user confusion and enhance accessibility.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const DataGridUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/data-grid/usage/DataGridUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DataGridUsagePage;
