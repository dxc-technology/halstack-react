import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import positions from "./images/tooltip_positions.png";
import Image from "@/common/Image";
import anatomy from "./images/tooltip_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The tooltip component{" "}
        <strong>provides contextual information when users hover over, focus on, or interact with an element</strong>.
        It enhances usability by offering additional details without cluttering the interface. Tooltips are especially
        useful for clarifying icons, abbreviations, or complex functionalities, ensuring users can access helpful
        explanations without disrupting their workflow.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Tooltip anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> it's the structure that holds the component's content. It appears near the
            target element when triggered and provides a contrasting background to ensure readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a small directional indicator, often in the form of a triangle or arrow, that
            visually connects the tooltip to the element it describes, reinforcing the relationship between them.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the text content inside the component that provides additional context or
            information about the associated element, ensuring clarity without taking up permanent screen space.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Placing tooltips",
    content: (
      <>
        <DxcParagraph>
          Depending on the tooltip's placement relative to the object it describes, there are four possible
          configurations: <strong>top</strong>, <strong>right</strong>, <strong>bottom</strong>, and{" "}
          <strong>left</strong>.
        </DxcParagraph>
        <Image src={positions} alt="Tooltip positions" />
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use tooltips for clarification, not essential information:</strong> tooltips should provide additional
          context for UI elements but should not contain crucial instructions or actions users must take to complete a
          task.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep content short and clear:</strong> avoid long sentences or excessive details. The tooltip should
          be a quick reference, not a replacement for proper UI labels or descriptions.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure tooltips are accessible:</strong> they should be triggered not only on hover but also on
          keyboard focus so that users navigating with assistive technologies can access them.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Place tooltips thoughtfully:</strong> they should not obstruct important content or interactive
          elements. Position them near the element they describe while maintaining readability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid excessive tooltips:</strong> overuse can clutter the interface and become distracting. If too
          many tooltips are needed, consider improving the overall UI clarity instead.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use appropriate dismissal behavior:</strong> tooltips should disappear when users move away from the
          trigger but remain visible long enough to be read comfortably. A short delay before appearing can prevent
          accidental activations.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Do not use tooltips for critical messages:</strong> warnings, errors, or essential system feedback
          should be displayed using more persistent components like alerts, modals, or inline messages.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TooltipOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tooltip/overview/TooltipOverviewPage.tsx" />
  </DxcFlex>
);

export default TooltipOverviewPage;
