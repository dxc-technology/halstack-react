import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import anatomy from "./images/resultset_table_anatomy.png";
import resultsetTableOverflow from "./images/resultset_table_overflow.png";
import resultsetTableResponsive from "./images/resultset_table_responsive.png";
import Image from "@/common/Image";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The resultset table component is designed for displaying large datasets with interactive features such as
        sorting, pagination, and selection. Unlike the basic table component, this one offers built-in functionality
        that allows users to explore and manipulate data efficiently, making it ideal for use cases like search results,
        reports, or management dashboards.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="ResultsetTable anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Header row:</strong> displays the column titles and defines the data categories for the table. It
            also includes optional sorting icons to help users organize content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Cell:</strong> represents an individual data point within the table. Cells are aligned with the
            header columns and typically show text, numbers, or icons.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Sorting icon:</strong> indicates whether a column is sortable and shows the current sorting
            direction (ascending or descending). Appears next to the header label when sorting is enabled.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Row:</strong> Represents a single entry in the dataset. Each row groups related cells and can
            respond to user interactions like selection or hover.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrollbar:</strong> allows horizontal and vertical navigation when the table's content exceeds the
            visible area. It ensures accessibility for large datasets.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Paginator:</strong> provides controls to navigate through multiple pages of results. It helps manage
            large sets of data by splitting them into manageable views.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using resultset tables",
    content: (
      <DxcParagraph>
        The resultset table is intended for scenarios where users need to work with dynamic or high-volume data. Here
        are key aspects to keep in mind:
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Sorting and filtering",
        content: (
          <DxcParagraph>
            Resultset tables support client-side or server-side sorting, which allows users to reorganize the data by
            column. Use this feature to improve discoverability and simplify decision-making.
          </DxcParagraph>
        ),
      },
      {
        title: "Pagination",
        content: (
          <DxcParagraph>
            Built-in pagination controls prevent overwhelming the user with too much data at once and help maintain
            performance. Choose the pagination strategy depending on your backend setup.
          </DxcParagraph>
        ),
      },
      {
        title: "Row selection",
        content: (
          <DxcParagraph>
            Users can select one or multiple rows to perform bulk actions. Use checkboxes for multi-selection and radio
            buttons for single-selection. Selected rows can persist across pages if needed.
          </DxcParagraph>
        ),
      },
      {
        title: "Action column",
        content: (
          <DxcParagraph>
            Resultset tables can include an action column where users can perform row-level actions (e.g., edit, delete,
            view details). This column should remain consistent across rows to maintain usability.
          </DxcParagraph>
        ),
      },
      {
        title: "Custom content and responsiveness",
        content: (
          <DxcParagraph>
            Cells can contain more than just text: icons, buttons, or status indicators are supported. However, maintain
            clarity and avoid overloading. The layout can adapt to different screen sizes with horizontal scroll if
            necessary.
          </DxcParagraph>
        ),
      },
      {
        title: "Virtualization",
        content: (
          <DxcParagraph>
            For very large datasets, virtualization improves performance by rendering only the visible rows within the
            viewport, significantly reducing DOM load and enabling smooth scrolling. To enable virtualization, the{" "}
            <Code>virtualizedHeight</Code> prop must be set to a valid value on the resultset table. This defines the
            scrollable area and allows the table to calculate which rows should be rendered dynamically.
          </DxcParagraph>
        ),
      },
      {
        title: "Accessibility",
        content: (
          <DxcParagraph>
            The resultset table is fully keyboard navigable and screen-reader friendly. Ensure all custom content also
            follows accessibility guidelines.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          Changes to the screen size affects tables based on the default behavior of their parent components (ex.
          container, flexbox, grid).
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            When placing a table inside a container component that adjusts based on screen width, the table's width also
            correspondingly adjusts up to a certain minimum value based on its content and the number of columns.
            <Image src={resultsetTableResponsive} alt="Resultset table overflow" />
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Using the overflow property of the container (to account for both horizontal and vertical adjustments) is
            one way to preserve the size of the display of the table while using scrollbars for the adjustments needed
            in place of continuous resizing.
            <Image src={resultsetTableOverflow} alt="Resultset table responsive" />
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Consider using the reduced mode for tables that are information dense and need to minimize the spacing in
            between table cells. This can help accommodate more information as the screen size is reduced up to a
            certain extent.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use the resultset table when displaying large sets of interactive data:</strong> it is ideal for
          workflows where users need to search, sort, or take action on rows.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Limit the number of columns</strong> to what is strictly necessary. Too many columns can make the
          table hard to read and navigate.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep cell content focused:</strong> if you need to include actions or visuals, make sure they serve a
          purpose and don't clutter the interface.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Do not place more than one or two actions per row</strong>. If additional actions are needed, consider
          using a dropdown or context menu.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Label all interactive elements inside the table properly</strong>. This improves accessibility and
          helps users understand the functionality.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use consistent patterns across all rows</strong>. Keep the structure and interaction model predictable
          to support learnability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Optimize performance</strong> by using pagination, enabling virtualization and minimizing real-time
          rendering when working with large datasets.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Adapt for responsiveness</strong>. If the table is used in narrow viewports, allow horizontal
          scrolling or collapse less relevant columns.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ResultsetTableOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/resultset-table/overview/ResultsetTableOverviewPage.tsx" />
  </DxcFlex>
);

export default ResultsetTableOverviewPage;
