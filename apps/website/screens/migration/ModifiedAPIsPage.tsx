import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Version <Code>16.0.0</Code> introduces major breaking changes, including redesigned components, API updates,
          and the removal of deprecated elements. This guide details the main differences and migration paths from
          <Code>15.x.x</Code> to <Code>16.0.0</Code>.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Removed components",
    content: (
      <>
        <DxcParagraph>
          The following components are no longer available and must be replaced or removed from your application:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tag</td>
              <td>
                Removed completely. Replace with <Code>Badge</Code>, a <Code>Chip</Code> or <Code>StatusLight</Code>{" "}
                based on the context.
              </td>
            </tr>
          </tbody>
        </DxcTable>

        <DxcParagraph>The following table describes which component to use depending on the use case:</DxcParagraph>

        <DxcTable>
          <thead>
            <tr>
              <th>Replacement</th>
              <th>Recommended use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>Badge</Code>
              </td>
              <td>
                Use when you need to display a compact piece of information such as a count, short label, or status
                indicator inside or near another component (e.g., notification count, "New", "Beta").
              </td>
            </tr>
            <tr>
              <td>
                <Code>Chip</Code>
              </td>
              <td>
                Use for interactive labels or items representing filters, selections, or categories that users can
                select, deselect, or remove.
              </td>
            </tr>
            <tr>
              <td>
                <Code>StatusLight</Code>
              </td>
              <td>
                Use for simple, non-interactive visual indicators of state or system status (e.g., success, warning,
                error, inactive).
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Modified APIs",
    content: (
      <>
        <DxcParagraph>
          Several components were redesigned and now expose different props or behavior. See below for details.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Tabs",
        content: (
          <>
            <DxcParagraph>
              The <Code>Tabs</Code> component no longer supports the legacy API. Update to the new structure using the
              <Code>tabs</Code> prop with items as objects containing <Code>label</Code>, <Code>icon</Code>, and{" "}
              <Code>onClick</Code>.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Slider",
        content: (
          <>
            <DxcParagraph>
              <Code>tabIndex</Code> prop has been removed. The new implementation follows native accessibility patterns.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "ToggleGroup",
        content: (
          <>
            <DxcParagraph>
              The <Code>ToggleGroup</Code> component has been redesigned with a new API and structure. Refer to updated
              documentation for usage examples.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Heading",
        content: (
          <>
            <DxcParagraph>
              Simplified API for <Code>Heading</Code>. Levels and weights are handled internally according to design
              tokens.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "New components",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Code>Header</Code>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>Footer</Code>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>SideNav</Code>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>ApplicationLayout</Code>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          These components define the structure of page layouts within the Halstack Design System.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Token updates",
    content: (
      <>
        <DxcParagraph>
          New design tokens have been added for semantic color mapping and improved theme support. Review any custom
          themes using deprecated core tokens.
        </DxcParagraph>
      </>
    ),
  },
];

const MigrationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Migrating from 15.x.x to 16.0.0" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/migration/MigrationPage.tsx" />
  </DxcFlex>
);

export default MigrationPage;
