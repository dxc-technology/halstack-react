import { DxcParagraph, DxcBulletedList, DxcTable, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/datagrid-anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The datagrid component offers a robust solution for displaying and managing tabular data. It supports essential
        features such as <strong>sorting</strong>, allowing users to organize and refine data easily. With{" "}
        <strong>multi-selection capabilities</strong>, users can perform bulk actions like deleting or exporting records
        efficiently. The component also includes <strong>in-line editing</strong> for quick data modifications directly
        within the grid, and <strong>expandable rows</strong> for showcasing additional details without cluttering the
        main view. Additionally, users can <strong>reorder columns</strong> to customize their data layout, ensuring an
        intuitive and flexible user experience tailored to their specific needs.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Datagrid's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Header row:</strong> it's the top section of the datagrid that displays the column titles and can
            support actions like sorting or filtering.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Cell:</strong> basic unit of the datagrid where individual pieces of data are displayed and aligned
            with the column.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Summary row</strong> <em>(Optional)</em>: row at the bottom that shows summarized or aggregated data
            for one or multiple columns.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Selectable row</strong> <em>(Optional)</em>: a data row that users can click to select, usually for
            performing actions like editing or deleting.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Expanded row</strong> <em>(Optional)</em>: a row that, when expanded, reveals additional contextual
            information related to that entry.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Expandable indicator</strong> <em>(Optional)</em>: an icon or control that shows users a row can be
            expanded to access more detailed content.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
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
              <DxcBulletedList.Item>
                Users can <strong>select one or multiple rows for bulk actions</strong>. It's recommended to include
                checkboxes for multiple row selection, or else radio buttons for single-row selection.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Row <strong>selection can persist across pages when pagination is used</strong> in the datagrid,
                ensuring users can perform bulk actions on rows even if they navigate away from the current view.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Users can set a default selected row on initial load, useful for pre-populating forms or automatically
                highlighting the most relevant data for their specific use case.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Users can easily undo multiple selections at once using the <strong>select/deselect all</strong> feature
                located in the datagrid's header, streamlining bulk actions.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Sorting and filtering",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Users can apply sorting to multiple columns simultaneously</strong>, enabling more complex data
                analysis by arranging data based on different criteria.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Filtering in our datagrid is enabled through integrated Halstack components, such as dropdowns, and is
                applied at the row level for precise data refinement.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
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
                <strong>Changes made through in-line editing are immediately reflected in the datagrid</strong>, giving
                users real-time feedback on their edits.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Built-in validation ensures that only correct and acceptable values are submitted, reducing errors and
                improving data accuracy.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Additionally, when editing permissions are required, the datagrid can be configured with other Halstack
                components, such as the button, to enable editing only after the button is activated.
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
                The datagrid component allows users to{" "}
                <strong>reveal additional information for specific rows without cluttering the main view</strong>. This
                optimizes space efficiency and improves user experience by offering access to in-depth information when
                needed, all while maintaining a clean and organized grid layout.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                When a row is expanded, it displays supplementary details, such as extra data fields, images, or action
                buttons, providing context and enhancing data exploration.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The expanded area can display various content types, such as additional data fields, images, or action
                buttons, enhancing the data presentation.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Column reordering",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The re-ordering feature of our datagrid allows users to <strong>rearrange columns</strong> according to
                their preferences <strong>by dragging and dropping them</strong>, enhancing the personalized data
                viewing experience.
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
      },
      {
        title: "Hierarchical data",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The datagrid supports <strong>hierarchical or tree-structured data</strong>, allowing users to explore
                nested information within expandable rows. This is especially useful when working with parent-child
                relationships, such as organizational structures, grouped datasets, or categories with subcategories.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Rows can be expanded to reveal child rows, enabling users to{" "}
                <strong>view and interact with multi-level data in context</strong>, without navigating away or loading
                separate tables.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                This feature improves clarity and usability for complex datasets by letting users{" "}
                <strong>drill down into relevant sections</strong> while keeping the rest of the grid collapsed and
                clean.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Data contextualization:</strong> provide context within the grid by labeling columns clearly,
            ensuring users understand the significance of the data they are viewing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Column alignment:</strong> although data can be aligned in columns however the user chooses, it must
            be aligned consistently across columns to enhance readability:
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                Text: aligned to the <strong>left</strong> for natural reading flow.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Numbers and currencies: align numbers, currencies, and other quantitative data to the{" "}
                <strong>right</strong> for clear comparison, especially when dealing with decimals or aligning figures
                by their numerical place value.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Dates and times: aligned to the <strong>left</strong> for readability, as users generally read these
                like text, but consider right-aligning if dates need to be compared sequentially.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Actions: align action buttons or interactive elements (such as "Edit" or "Delete") to the{" "}
                <strong>center</strong> or <strong>right</strong>, depending on layout consistency. Centering actions
                can make them more accessible and distinguishable from data fields.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Booleans: align checkboxes or toggles to the <strong>center</strong> to visually separate them from text
                or data and create a clear, interactive area.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Icons: aligned to the <strong>center</strong> or next to their corresponding text, with spacing, to
                maintain clarity and improve the user interface.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Column sizing:</strong> make sure that columns are sized appropriately for the type of data they
            display (e.g. dates should not take up too much space, neither do numerical values, which must take only the
            minimal space it requires for them to be shown without truncation).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear default sorting:</strong> set a sensible default sorting order for columns to help users
            quickly access the most relevant data when they first interact with the grid.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear filters option:</strong> when filtering data, include a button to clear all filters at once,
            allowing users to quickly reset their views and return to the unfiltered dataset.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Accessible bulk actions:</strong> ensure that bulk actions, such as "Delete" or "Export", are easily
            accessible once rows are selected, facilitating efficient data management. Consider also implementing
            confirmation prompts for bulk actions to prevent accidental data loss and ensure users are intentional with
            their actions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use of expandable rows:</strong> use expandable rows to display additional information that isn't
            crucial for immediate viewing, but avoid overusing this feature to prevent increased cognitive load on
            users.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Limit expandable content:</strong> use expandable rows sparingly to avoid overwhelming users,
            ensuring that only essential supplementary information is included.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrolling:</strong> the datagrid supports both horizontal and vertical scrolling to handle extensive
            data sets, ensuring all rows and columns are accessible without cluttering the UI. While the component
            supports scrolling, it is designed to prioritize displaying the most essential data upfront, minimizing the
            need for scrolling to reduce potential user confusion and enhance accessibility.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const DataGridOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/data-grid/overview/DataGridOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default DataGridOverviewPage;
