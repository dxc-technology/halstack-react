import { DxcParagraph, DxcFlex, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/table_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The table component provides a lightweight and accessible way to{" "}
        <strong>display structured data in rows and columns</strong>. It is ideal for presenting small to medium-sized
        datasets that don't require complex interactions such as in-line editing or row expansion. The component
        supports different table densities and content types, ensuring clarity and visual consistency across use cases
        like summary lists, comparison views, or static reports. Unlike the datagrid or resultsate table component, our
        table is designed for <strong>non-complex scenarios</strong> where the priority is clear data display over
        advanced functionality.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Table anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Header row:</strong> defines the label for each column and helps users understand the structure and
            meaning of the data presented. It can also include sorting controls when applicable.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Cell:</strong> displays the individual content within the table.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Action cell:</strong> contains interactive elements such as buttons or icons that allow users to
            perform specific actions related to that row.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using tables",
    content: (
      <DxcParagraph>
        The table component is designed for clear and structured data presentation, with minimal interactivity and a
        strong focus on readability. Below are key aspects to keep in mind when using this component:
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Layout and content",
        content: (
          <>
            <DxcParagraph>
              Tables are best suited for displaying <strong>moderate amounts of data</strong> with consistent structure.
              Each column should represent a single data type or category, while each row corresponds to a data entry.
              Keep content concise to avoid horizontal scrolling and ensure legibility.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Responsiveness",
        content: (
          <DxcParagraph>
            While the table is not responsive by default, <strong>content can be adjusted</strong> to fit smaller
            screens using wrapping text, truncation, or custom scroll containers. If your use case involves extensive
            data manipulation or mobile-first design, consider using the datagrid instead.
          </DxcParagraph>
        ),
      },
      {
        title: "Text alignment and formatting",
        content: (
          <DxcParagraph>
            Align text consistently within columns based on content type: left-align text, right-align numbers, and
            center-align icons or action buttons.
          </DxcParagraph>
        ),
      },
      {
        title: "Styling and density",
        content: (
          <DxcParagraph>
            The component <strong>supports different visual densities</strong> to adapt to the use case. Use higher
            density for data-heavy views where space is limited, and lower density for overviews or summary pages where
            clarity takes priority.
          </DxcParagraph>
        ),
      },
      {
        title: "Table vs ResultsetTable",
        content: (
          <>
            <DxcParagraph>
              While both components present structured data in tabular format, their purposes and features are
              different:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Table</strong> is a lightweight component intended for <strong>static data</strong>. It doesn't
                include interaction features such as sorting or pagination. It's ideal for small datasets or summary
                views where simplicity and clarity are the main goals.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Resultset table</strong>, on the other hand, is a more advanced component built for dynamic
                datasets. It includes support for pagination, sorting, and density control. It's best suited for result
                views where users need to browse through large volumes of data efficiently, such as search results or
                query outputs.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Choose between them based on your needs: use the table for simple data display, and the resultset table
              for user-driven exploration of data.
            </DxcParagraph>
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
          <strong>Use the table component for structured, static data</strong> that doesn't require user interaction,
          such as summaries, configuration overviews, or comparison tables.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep content concise and scannable:</strong> avoid long text blocks inside cells to preserve
          readability and prevent layout issues.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain a clear visual hierarchy</strong> by using appropriate text styles for headers, totals, and
          other relevant indicators.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure alignment consistency:</strong> text should be left-aligned, numbers right-aligned, and icons
          or controls centered, depending on their function.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use a maximum of two or three actions per cell:</strong> avoid overcrowding cells with multiple
          buttons or icons to maintain clarity and avoid interaction confusion.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use density thoughtfully:</strong> apply higher density when screen real estate is limited, and lower
          density when space allows for better readability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid using this component for large, interactive datasets</strong>. For those scenarios, opt for the
          resultset table or datagrid instead.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TableOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/table/overview/TableOverviewPage.tsx" />
  </DxcFlex>
);

export default TableOverviewPage;
