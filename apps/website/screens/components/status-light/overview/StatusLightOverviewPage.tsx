import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import variants from "./examples/variants";
import anatomy from "./images/status_light_anatomy.png";
import Image from "@/common/Image";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Being a <strong>non-clickable UI element</strong>, the status light is used to provide a quick, at-a-glance
        indication of system states, alerts, or conditions within an interface. Designed for clarity and instant
        recognition, it seamlessly integrates into various layouts without adding cognitive load. Status lights follow a
        consistent color-coded system to ensure users can easily interpret their meaning. They are often used alongside
        other components, such as tables, accordions, or dashboards, to enhance visibility and provide contextual
        awareness.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Status light anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Status light:</strong> the core visual element of a status light, designed as a dot for clarity and
            easy recognition.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> a short text description alongside the status light to provide additional context.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The status light component is available in five semantic variants, each represented by a distinct color. These
          colors ensure clear communication of different states.
        </DxcParagraph>
        <DxcParagraph>
          Additionally, the component comes in three different sizes, allowing for flexibility across various layouts
          and screen sizes while maintaining readability and visual consistency.
        </DxcParagraph>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Default</strong>
              </td>
              <td>For neutral statuses, like archived, draft, paused...</td>
            </tr>
            <tr>
              <td>
                <strong>Info</strong>
              </td>
              <td>For live statuses, like active, in use, uploaded...</td>
            </tr>
            <tr>
              <td>
                <strong>Success</strong>
              </td>
              <td>For positive statuses, like finished, approved, completed...</td>
            </tr>
            <tr>
              <td>
                <strong>Warning</strong>
              </td>
              <td>For pending or critical statuses, like scheduled, in progress, processing...</td>
            </tr>
            <tr>
              <td>
                <strong>Error</strong>
              </td>
              <td>For negative statuses, like incomplete, rejected, failed...</td>
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
          <strong>Ensure semantic accuracy:</strong> always match each status light color with the correct meaning to
          maintain clarity and avoid misinterpretation.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Optimize for different screen sizes:</strong> Select the appropriate size to ensure visibility and
          legibility across various layouts.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use clear and concise labels:</strong> Keep them brief and ensure they accurately describe the current
          state.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Combine with badges carefully:</strong> status lights and semantic badges can only be used together if
          one of them does not use a semantic color or if their semantic colors do not contradict each other. This
          prevents misinterpretation and maintains clarity in data visualizations such as tables, charts, or grids.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use strategically:</strong> overusing status lights in interfaces with high cognitive load can
          overwhelm users and disrupt readability. Use them only where they add real value.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const StatusLightOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/status-light/overview/StatusLightOverviewPage.tsx" />
  </DxcFlex>
);

export default StatusLightOverviewPage;
