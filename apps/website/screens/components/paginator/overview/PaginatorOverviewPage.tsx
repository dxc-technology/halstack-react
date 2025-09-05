import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import paginatorAnatomy from "./images/paginator_anatomy.png";
import Example from "@/common/example/Example";
import flexibleConfiguration from "./examples/flexibleConfiguration";
import scrollable from "./examples/scrollable";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The paginator component allows users to navigate through large sets of data by breaking content into multiple
        pages. It provides controls to move between pages efficiently, ensuring a seamless browsing experience. Ideal
        for tables, lists and search results, the paginator improves usability by reducing load times and making content
        more manageable.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={paginatorAnatomy} alt="Paginator anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all the elements of the paginator, ensuring
            proper spacing, alignment and responsiveness within the interface.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Items per page:</strong> a control that allows users to adjust the number of items displayed per
            page, providing flexibility in data viewing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Items indicator:</strong> displays the current range of items being viewed and the total number of
            items, helping users understand their position within the dataset.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Page actions:</strong> navigation buttons that let users move between pages, typically including
            &quot;Next&quot;, &quot;Previous&quot;, &quot;First&quot; and &quot;Last&quot; controls.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Page selector:</strong> a dropdown or input that enables users to jump directly to a specific page,
            improving efficiency when navigating large datasets.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using paginators",
    subSections: [
      {
        title: "Reducing cognitive load",
        content: (
          <DxcParagraph>
            Paginators are essential for managing large amounts of content by dividing it into smaller, more digestible
            sections. They help maintain a clean and organized interface, ensuring that users can navigate through
            information efficiently without feeling overwhelmed. By breaking content into separate views, paginators
            reduce cognitive load, improve readability, and enhance the overall user experience. This approach is
            particularly useful in data-heavy applications, tables, or multi-page lists where presenting all information
            simultaneously would be impractical.
          </DxcParagraph>
        ),
      },
      {
        title: "Flexible configuration",
        content: (
          <>
            <DxcParagraph>
              Our paginator component offers different configurations to accommodate various use cases. Take the time to
              explore these options and identify the best fit for your specific needs — whether it's simple navigation,
              dynamic content loading, or more advanced pagination controls. Choosing the right configuration ensures a
              seamless experience for users.
            </DxcParagraph>
            <Example example={flexibleConfiguration} />
          </>
        ),
      },
      {
        title: "Pagination and scrolling",
        content: (
          <>
            <DxcParagraph>
              Pagination does not eliminate the need for scrolling; in fact, both can work together to improve
              usability. For instance, a table with many rows might require vertical scrolling to display more content
              within a single page while still using pagination to divide data into manageable sections. This approach
              provides a more intuitive way to navigate large datasets without losing context.
            </DxcParagraph>
            <Example example={scrollable} />
          </>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <DxcParagraph>
        Selecting the right type of paginator is important — particularly for applications that may be displayed in
        smaller screen sizes. Configurations with a simple navigation can go a long way towards reducing cognitive load
        and visual clutter (ex. simply show what page the user is on or limit interactive elements to the page selection
        dropdown for navigation).
      </DxcParagraph>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>
          <strong>Use pagination when necessary</strong>
          <DxcParagraph>
            Implement a paginator when the number of elements affects system performance or when displaying all content
            at once would significantly impact usability, especially on larger screens.
          </DxcParagraph>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Positioning matters</strong>
          <DxcParagraph>
            Always place the paginator at the bottom of the content it divides. This ensures users encounter all
            relevant information before deciding to navigate to another page.
          </DxcParagraph>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Clearly indicate current status</strong>
          <DxcParagraph>
            Display the current page number and the total number of items being shown. This helps users understand their
            position within the dataset and manage expectations when navigating.
          </DxcParagraph>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure intuitive navigation</strong>
          <DxcParagraph>
            Provide clear, accessible controls for moving between pages, including next/previous buttons and, when
            applicable, direct page selection for quicker access to specific sections.
          </DxcParagraph>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Consider different configurations</strong>
          <DxcParagraph>
            Adapt the paginator&apos;s design to fit different scenarios, such as adding an option to adjust the number
            of items displayed per page or offering compact versions for space-constrained layouts.
          </DxcParagraph>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Combine with scrolling when needed</strong>
          <DxcParagraph>
            In some cases, pagination and scrolling can work together. For example, tables with many rows may use a
            paginator to divide content into sections while allowing vertical scrolling within each page.
          </DxcParagraph>
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const PaginatorOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/paginator/overview/PaginatorOverviewPage.tsx" />
  </DxcFlex>
);

export default PaginatorOverviewPage;
