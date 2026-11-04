import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTypography, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/button_link_anatomy.png";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import iconUsage from "./examples/iconUsage";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The Halstack Button Link component is designed for navigation that requires more visual emphasis than a
          standard text link. It provides the familiar appearance of a button while preserving the expected behavior of
          a link.
        </DxcParagraph>
        <DxcParagraph>
          Although buttons and links can look similar, they serve different purposes. A button triggers an action within
          the current interface, while a link navigates users to another destination. Button Link bridges this visual
          distinction by allowing navigation to be presented with the appearance of a button without changing its
          underlying semantics.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Button link anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> provides the interactive area and visual treatment inherited from the existing
            Button component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> appears before or after the label to provide additional context or clarify the
            destination.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> communicates the destination or purpose of the navigation.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcTypography as="p" fontStyle="italic">
          Button link follows the existing button component's typography, spacing, sizing, and visual styling rules.
        </DxcTypography>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          Button link supports three visual variants: primary, secondary, and tertiary. Each variant provides a
          different level of visual emphasis according to the importance of the destination within the interface.
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
                <strong>Primary</strong>
              </td>
              <td>
                For the most prominent navigation destination within a page or user flow. Use when navigation represents
                the main call to action.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Secondary</strong>
              </td>
              <td>
                For less prominent navigation that still requires button-like emphasis. It can be used alongside a
                primary button link or independently.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Tertiary</strong>
              </td>
              <td>
                For the least pronounced navigation destinations. Use when a lighter visual treatment is sufficient,
                such as supporting or contextual navigation.
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcTypography as="p" fontStyle="italic">
          Choose the variant according to the importance of the destination within the interface. Avoid giving multiple
          navigation elements the same level of prominence when a clear visual hierarchy can be established.
        </DxcTypography>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcParagraph>
          Any icon from the application's chosen icon library can be used in Halstack button link. It is recommended to
          use the same icon library throughout the application to maintain visual consistency.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Icons can appear before or after the label, with an 8-pixel separation from the text, following the existing
            button component's spacing rules.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Use icons when they provide additional meaning or help users understand the destination.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Consider using a trailing arrow to reinforce navigation when appropriate.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            An external-link icon can help users recognize that the destination leads outside the current application.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Avoid using icons solely for decoration. The icon should provide meaningful context.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Ensure the label communicates the destination without relying on the icon alone.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Icon-only button links are allowed when the context supports them. In these cases, provide a tooltip and an
            accessible name to communicate the link's purpose.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={iconUsage} />
      </>
    ),
  },
  {
    title: "Sizes",
    content: (
      <>
        <DxcParagraph>
          Button link follows the existing button component's sizing options: small, medium, and large. The size should
          be selected according to the surrounding interface while maintaining consistency with other interactive
          elements.
        </DxcParagraph>
        <DxcParagraph>
          Varying button sizes help establish a clear visual hierarchy, guiding users towards the most critical actions.
          Primary actions are made more prominent with larger buttons, while secondary actions use smaller buttons to
          avoid distraction.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Small",
        content: (
          <>
            <DxcParagraph>
              Small button links are suitable for compact layouts or contexts where space is limited.
            </DxcParagraph>
            <DxcParagraph>Use cases:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Compact spaces:</strong> Use in tables, toolbars, or other areas with limited space.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Supporting navigation:</strong> Suitable for less prominent navigation where a smaller visual
                treatment is appropriate.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Medium",
        content: (
          <>
            <DxcParagraph>
              Medium button links provide a balance between visibility and space usage, making them suitable for general
              navigation across applications.
            </DxcParagraph>
            <DxcParagraph>Use cases:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>General navigation:</strong> Use as the standard size for most navigation scenarios.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Consistency:</strong> Helps maintain a consistent appearance with other medium-sized interactive
                elements.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Large",
        content: (
          <>
            <DxcParagraph>
              Large button links provide greater visual prominence and are suitable for navigation that requires
              stronger emphasis.
            </DxcParagraph>
            <DxcParagraph>Use cases:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Prominent destinations</strong> Use when directing users to an important page or section.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Call to action:</strong> Suitable for prominent navigation areas where encouraging users to
                visit another destination is important.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Choosing between a link, button and button link",
    subSections: [
      {
        title: "Be clear and concise",
        content: (
          <>
            <DxcParagraph>
              Links and buttons are both interactive elements, but they serve different purposes. The main difference is
              whether the interaction takes users to another destination or performs an action within the current
              interface.
            </DxcParagraph>
            <DxcParagraph>
              Choosing the right component is important because it affects not only how an element looks, but also how
              it behaves, how users interact with it, and how assistive technologies interpret it.
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "When to use a link",
            content: (
              <>
                <DxcParagraph>
                  Use a <strong>link</strong> when the primary purpose is to navigate users to another page, section, or
                  resource, and the destination does not require strong visual emphasis.
                </DxcParagraph>
                <DxcParagraph>
                  Links are commonly integrated into content and provide a lightweight way to direct users to related
                  information.
                </DxcParagraph>

                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Inline navigation:</strong> Direct users to related information within a paragraph or
                    sentence.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Performing an operation</strong> Link to related pages, documentation, or external
                    references.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Supporting navigation:</strong> Provide access to additional resources or secondary
                    destinations.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "When to use a button",
            content: (
              <>
                <DxcParagraph>
                  Use a <strong>button</strong> when the interaction triggers an action or changes something within the
                  current application or interface.
                </DxcParagraph>
                <DxcParagraph>
                  A button is intended for actions that do not primarily involve navigating to another destination.
                </DxcParagraph>

                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Submitting information:</strong> Submit a form or send user-provided information.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Performing an operation:</strong> Save changes, delete an item, or update a record.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Changing the interface:</strong> Open a dialog, expand a section, or trigger an interaction.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Executing a process:</strong> Start an operation or initiate a workflow.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "When to use a button link",
            content: (
              <>
                <DxcParagraph>
                  Use a <strong>button link</strong> when the primary purpose is navigation, but the destination needs
                  more visual prominence than a standard Link can provide.
                </DxcParagraph>
                <DxcParagraph>
                  Button link combines the visual appearance of a button with the native behavior and semantics of a
                  link. It is useful when a navigation destination is important enough to stand out within the
                  interface, but the interaction should still behave like a link.{" "}
                </DxcParagraph>

                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Prominent calls to action:</strong> Direct users to an important destination, such as "View
                    Details" or "Open Project".
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Highlighted navigation:</strong> Provide access to an important section or resource that
                    needs greater visual emphasis than a standard text link.
                  </DxcBulletedList.Item>
                </DxcBulletedList>

                <DxcTypography as="p" fontStyle="italic">
                  Although button link looks like a button, it must retain link semantics and native anchor behavior. It
                  should navigate to a destination rather than trigger an action within the current interface
                </DxcTypography>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "General",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Use for navigation:</strong> Button link should only be used when the primary purpose is to
                navigate users to another destination.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Choose the appropriate component:</strong> Use button for actions, standard Link for lightweight
                navigation, and Button Link for prominent navigation.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Use clear labels:</strong> Choose concise and descriptive labels that help users understand
                where the link will take them.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Maintain consistency:</strong> Follow the existing button component's typography, spacing,
                sizing, and visual styling rules.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Avoid unnecessary emphasis:</strong> Do not use button link when a standard link provides
                sufficient visual emphasis.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Variants and hierarchy",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Reserve primary for the main destination:</strong> Use primary for the most prominent navigation
                destination within the relevant context.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Use secondary for supporting destinations:</strong> Choose Secondary when navigation needs
                emphasis without competing with the primary destination.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Use tertiary for less prominent navigation:</strong> Use Tertiary when a lighter visual
                treatment is more appropriate.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Establish a clear hierarchy:</strong> Avoid presenting several navigation destinations with
                equal visual prominence when one should receive more attention
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Navigation behavior",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Internal navigation:</strong> Use internal links to navigate to destinations within the same
                application or website, following the application's established routing behavior.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>External navigation:</strong> Use external links to navigate to destinations outside the current
                application or website. Consider an external-link icon when it helps communicate this behavior.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Opening a new tab:</strong> Open destinations in a new tab only when required by the use case.
                When appropriate, communicate this behavior to users.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Accessibility",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Preserve link semantics:</strong> Implement Button link using link semantics, regardless of its
                visual variant.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Provide descriptive labels:</strong> Ensure the accessible name communicates the destination or
                purpose of the link.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Support keyboard navigation:</strong> Ensure users can reach the component using the keyboard
                and activate it using Enter.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Maintain visible focus:</strong> Provide a clearly visible focus indicator for keyboard users.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Ensure sufficient contrast:</strong> Maintain sufficient contrast between the component and its
                background across its supported visual states.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Do not rely on icons alone:</strong> Icons should not replace the accessible name of the link.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Handle unavailable destinations appropriately</strong> If navigation is unavailable, ensure the
                implementation prevents navigation and communicates the intended state to assistive technologies.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const ButtonLinkOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/button-link/overview/ButtonLinkOverviewPage.tsx" />
  </DxcFlex>
);

export default ButtonLinkOverviewPage;
