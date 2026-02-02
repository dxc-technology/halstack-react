import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import anatomy from "./images/popover-anatomy.png";
import positionVertical from "./images/popover-vertical-position.png";
import positionHorizontal from "./images/popover-horizontal-position.png";
import alignment from "./images/popover-alignment.png";
import caret from "./images/popover-caret.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The popover component is a <strong>non-blocking, contextual container</strong> that appears anchored to a
          trigger element to display supplementary content. It is designed to support{" "}
          <strong>secondary actions, contextual menus, and additional information</strong> without interrupting the
          user's current flow or taking focus away from the main interface.
        </DxcParagraph>
        <DxcParagraph>
          From a behavior perspective, the popover provides a <strong>flexible and robust positioning system</strong>.
          It supports preferred positions, explicit alignment control, optional auto placement, and{" "}
          <strong>dynamic positioning with automatic fallback</strong>, ensuring the content remains visible and usable
          across different screen sizes and layouts. Thanks to this flexibility, popover can also be used as the
          foundation for <strong>popup menus and contextual action panels</strong>.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Popover anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all popover content. It defines the surface,
            spacing, elevation, and overall layout, ensuring the popover is visually separated from the background and
            clearly associated with its trigger.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Arrow (caret)</strong> <em>(optional)</em>: a small visual indicator that points to the trigger
            element. It reinforces the contextual relationship between the popover and its origin and helps users
            understand where the content comes from.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Content area:</strong> the main area where information and actions are displayed. It can contain non
            interactive content, interactive elements such as toggles or buttons, or structured elements like menu
            items, depending on the use case.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using popovers",
    content: (
      <>
        <DxcParagraph>
          The popover component is the <strong>foundation for multiple Halstack components</strong> that need to display
          non-critical, contextual content. It is used internally by elements such as the{" "}
          <strong>dropdown list, select options, and the date input calendar</strong>, providing a consistent way to
          surface additional information or controls without interrupting the user's flow.
        </DxcParagraph>
        <DxcParagraph>
          Beyond these composite components, a popover can also be used <strong>on its own</strong> to support a wide
          range of use cases, including contextual action lists, quick configuration panels, lightweight tutorials,
          small product cards, and popup menus.
        </DxcParagraph>
        <DxcParagraph>
          A popover always requires a <strong>trigger element</strong> to appear. It is anchored to a reference element
          in the interface, which defines its position and context. This trigger can be{" "}
          <strong>interactive, such as a button or icon, or non interactive</strong>, such as a text label or avatar,
          depending on the use case and interaction model.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Popover vs Tooltip vs Dialog",
        content: (
          <>
            <DxcParagraph>
              When designing interfaces with contextual content, it’s important to choose the right overlay pattern for
              the job. <strong>Popover</strong>, <strong>tooltip</strong>, and <strong>dialog</strong> are all
              mechanisms for displaying layered content, but they serve different purposes and interaction models. The
              following table easily displays in which ways popovers relate and differ from tooltips and dialogs.
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Purpose</th>
                  <th>Interaction</th>
                  <th>Blocking</th>
                  <th>Typical content</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Popover</strong>
                  </td>
                  <td>Displays contextual content associated with a specific element</td>
                  <td>Can contain interactive and non interactive elements</td>
                  <td>Non-blocking</td>
                  <td>Secondary actions, contextual menus, configuration panels, supplementary information</td>
                  <td>
                    Used to expose contextual functionality or information while keeping the user within the current
                    flow
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Tooltip</strong>
                  </td>
                  <td>Provides brief, descriptive information about an element</td>
                  <td>Non interactive</td>
                  <td>Non-blocking</td>
                  <td>Text hints</td>
                  <td>Used to clarify the meaning or purpose of an element without introducing actions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Dialog</strong>
                  </td>
                  <td>Presents content that requires focused user attention</td>
                  <td>Interactive, often task driven</td>
                  <td>Blocking</td>
                  <td>Forms, confirmations, complex workflows</td>
                  <td>Used when a task or decision must be completed before returning to the main interface</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Position and alignment",
        content: (
          <>
            <DxcParagraph>
              The popover component is positioned <strong>relative to a trigger element</strong> and is designed to
              adapt dynamically to the surrounding layout and available space. By default, the popover can be displayed
              on any of the four main sides of its trigger: <strong>top, right, bottom, or left</strong>. The final
              placement is determined by the preferred position defined by the consuming component, combined with the
              available space within the viewport.
            </DxcParagraph>
            <DxcParagraph>
              Popover supports <strong>dynamic positioning with automatic fallback</strong>, allowing it to change its
              placement when there is not enough space in the preferred direction. This behavior ensures that the
              popover remains visible, accessible, and fully contained within the browser boundaries, preventing content
              from being clipped or rendered off screen.
            </DxcParagraph>
            <Figure caption="Popover position: bottom and top">
              <Image src={positionVertical} alt="Popover vertical position" />
            </Figure>
            <Figure caption="Popover position: left and right">
              <Image src={positionHorizontal} alt="Popover horizontal position" />
            </Figure>
            <DxcParagraph>
              In addition to side placement, popover allows <strong>explicit control over alignment</strong>, making it
              possible to align the popover to the start, center, or end of the trigger element. This enables more
              precise layout control and supports a wide range of interface patterns, from simple contextual hints to
              complex action panels.
            </DxcParagraph>
            <DxcParagraph>
              This flexible placement system ensures that popovers remain{" "}
              <strong>visually connected to their trigger</strong>, responsive to different screen sizes, and robust
              across varying layouts and containers.
            </DxcParagraph>
            <Figure caption="Popover alignment">
              <Image src={alignment} alt="Popover alignment" />
            </Figure>
          </>
        ),
      },
      {
        title: "Caret",
        content: (
          <>
            <DxcParagraph>
              The popover component can be rendered <strong>with or without a caret</strong>, depending on the use case
              and visual needs. The presence of a caret is optional and should be intentionally selected based on how
              strongly the relationship between the popover and its trigger needs to be expressed.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                When used <strong>with a caret</strong>, the popover visually points to its trigger element, reinforcing
                the contextual connection between both. This configuration is commonly applied in scenarios such as{" "}
                <strong>contextual help, lightweight tutorials, onboarding cues, or explanatory content</strong>, where
                it is important to clearly indicate the origin of the information and guide the user's attention.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                When used <strong>without a caret</strong>, the popover behaves as a floating surface that is still
                anchored to a trigger but does not explicitly point to it. This approach is typically preferred for{" "}
                <strong>action oriented content</strong>, such as{" "}
                <strong>popup menus, command lists, or configuration panels</strong>, where the emphasis is on the
                content itself rather than on visually highlighting the trigger element.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Both variants share the same positioning and interaction model. The choice to include a tip should be
              driven by clarity, visual hierarchy, and the role the popover plays within the interface.
            </DxcParagraph>
            <Figure caption="Caret configuration in Halstack popover">
              <Image src={caret} alt="Popover caret" />
            </Figure>
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
          <strong>Let the popover size be defined by its content:</strong> Popover is a content driven container. Its
          dimensions should adapt to what is inside rather than enforcing fixed sizes. As a general guideline, a popover
          should not occupy more than <strong>40% of the viewport</strong> in either width or height. If the content
          exceeds this threshold, a different pattern such as dialog should be considered.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use popover only for non critical, contextual content:</strong> Popover is intended to{" "}
          <strong>complement the interface, not to interrupt it</strong>. It should not be used for critical flows,
          mandatory decisions, or complex tasks that require full user attention.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep content focused and lightweight:</strong> Popover works best with{" "}
          <strong>concise, clearly scoped content</strong>. Long forms, dense data tables, or multi step processes
          reduce readability and weaken the contextual content. Long forms, dense data tables, or multi step processes
          reduce readability and weaken the contextual nature of the component.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure a clear relationship with the trigger:</strong> The trigger element{" "}
          <strong>should make it evident why the popover appears</strong>. The content should always feel directly
          related to the element it is anchored to.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid overusing popovers:</strong> Excessive use can clutter the interface and create cognitive
          overload. Popovers should be reserved for cases where content truly benefits from staying visually connected
          to a specific element.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure accessibility and dismiss behavior:</strong> Popovers{" "}
          <strong>should be easy to dismiss</strong> and should not trap the user. Clear focus management and
          predictable closing behaviors are essential to maintain usability and accessibility.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const PopoverOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/popover/overview/PopoverOverviewPage.tsx" />
  </DxcFlex>
);

export default PopoverOverviewPage;
