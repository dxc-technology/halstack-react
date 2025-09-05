import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import headingSizes from "./images/heading_sizes.png";
import headingWeights from "./images/heading_weights.png";
import { DxcLink } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The heading component provides consistent typographic structure for titles and section headers within the UI. It
        enforces semantic hierarchy through HTML tags (<Code>h1</Code> through <Code>h6</Code>), supports visual
        distinction via styles and weights, and plays a key role in SEO and accessibility. The component is flexible in
        use, allowing control over styling and structure without breaking the logical order of information.
      </DxcParagraph>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The Open Sans typeface has 5 different weights, from light to extra-bold but Halstack use three variations,
          light, regular and bold (default). The font size goes from 40 pixels for the <Code>h1</Code> heading to 12
          pixels for the <Code>h6</Code> level.
        </DxcParagraph>
        <Figure caption="Default headings">
          <Image src={headingSizes} alt="Default headings" />
        </Figure>
        <Figure caption="Regular and light headings">
          <Image src={headingWeights} alt="Regular and light headings" />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>H1</strong>
              </td>
              <td>Page title. Used once per page for the main heading.</td>
            </tr>
            <tr>
              <td>
                <strong>H2</strong>
              </td>
              <td>Section title. Defines top-level content sections.</td>
            </tr>
            <tr>
              <td>
                <strong>H3</strong>
              </td>
              <td>Sub-section titles. Used inside sections to separate content.</td>
            </tr>
            <tr>
              <td>
                <strong>H4</strong>
              </td>
              <td>Nested subsections, often in detail-heavy contexts.</td>
            </tr>
            <tr>
              <td>
                <strong>H5-H6</strong>
              </td>
              <td>Minor subsections, used for fine-grained grouping or labels.</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use headings to define page and section titles:</strong> start each page with an <Code>h1</Code>,
          followed by <Code>h2-h6</Code> for content hierarchy and structure.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Organize subsections with appropriate heading levels:</strong> use <Code>h3</Code>, <Code>h4</Code>,{" "}
          <Code>h5</Code>, <Code>h6</Code> to title content within larger sections for better scannability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Apply headings to group content semantically in UI elements:</strong> use headings inside, cards, or
          other containers to establish clear structure.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Support accessibility and SEO with semantic heading structure:</strong> proper use of heading tags
          enhances screen reader navigation and search engine indexing.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Always use the Heading component for structural content:</strong> don't manually style text to look
          like a heading. Use the component to maintain consistency and semantics.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain proper heading order:</strong> avoid skipping levels (e.g., going from <Code>h1</Code> to{" "}
          <Code>h4</Code>) unless there's a clear content structure that justifies it.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid stacking headings without content:</strong> every heading should introduce related content.
          Don't chain multiple headings together without context
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Use the <Code>level</Code> prop to set visual style, and <Code>as</Code> to control the semantic tag:
          </strong>{" "}
          while we recommend following the defined levels and styles to maintain consistency, we understand that certain
          interfaces may require customization. Use these props to adapt the component as needed and ensure semantic
          meaning and structural clarity are preserved.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Accessibility",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Heading components should be in order. That means an <Code>Headings-H1</Code> is followed by an{" "}
          <Code>Headings-H2</Code>, an <Code>Headings-H2</Code> is followed by a <Code>Headings-H2</Code> or{" "}
          <Code>Headings-H3</Code> and so on.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Keep heading tags consistent. Inconsistently implementing headings can create confusion and frustration for
          users using assistive technologies.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Headings are not interactive elements and therefore have no keyboard or pointer interaction.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
    subSections: [
      {
        title: "WCAG 2.1 Related Success Criterion",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <DxcLink newWindow href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships">
                SC 1.3.1 — Info and relationships:
              </DxcLink>{" "}
              Information, structure, and relationships conveyed through presentation can be programmatically determined
              or are available in text.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <DxcLink newWindow href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html">
                SC 2.4.6 — Headings and Labels:
              </DxcLink>{" "}
              Headings and labels describe the topic or purpose.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const HeadingOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/heading/overview/HeadingOverviewPage.tsx" />
  </DxcFlex>
);

export default HeadingOverviewPage;
