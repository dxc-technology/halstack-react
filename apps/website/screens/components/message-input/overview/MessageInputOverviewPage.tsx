import QuickNavContainer from "@/common/QuickNavContainer";
import DxcFlex from "../../../../../../packages/lib/src/flex/Flex";
import DocFooter from "@/common/DocFooter";
import DxcParagraph from "../../../../../../packages/lib/src/paragraph/Paragraph";
import { DxcBulletedList } from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import messageInputAnatomy from "./images/message-input-anatomy.png";
import messageInputExample from "./images/message-input-example.png";
import generatingState from "./images/generating-state.png";

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <DxcParagraph>
          The <strong>Message input</strong> provides a structured composition area for conversational interfaces. It
          combines a <strong>text input field</strong>, an optional <strong>context zone</strong> for attachments and
          selections, and a <strong>persistent action bar</strong> with submission controls. Common use cases include
          chat applications, customer support tools, AI assistants, and any interface where users compose and send
          messages or queries.
        </DxcParagraph>
        <DxcParagraph>
          Unlike our text area, which is a general-purpose multi-line text field for form contexts, the{" "}
          <strong>message input is built around the interaction model of sending a message</strong>. It exposes
          configurable zones for attached context, a left action slot for secondary selections, and a voice input
          toggle, and it includes a dedicated generating state for AI interfaces that need to communicate when the
          system is processing a response.
        </DxcParagraph>
        <DxcParagraph>
          Proper use of placeholder text, the available states, and the optional zones can significantly improve the
          usability and clarity of any conversational interface.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={messageInputAnatomy} alt="Message input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Dropdown</strong> <em>(optional)</em>: allows the user to attach files, either as context for the AI
            or as files to send in a conversation or message.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Attachments </strong> <em>(optional)</em>: A chip or set of chips that reflects the selection made
            by the dropdown immediately to its left. It represents the context attachments the user can add for the
            agent, or any file they want to include with the message.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Send button</strong>: the primary submission control, anchored to the bottom right of the action
            bar. Transitions to a stop or cancel affordance in the generating state.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container</strong>: the visual wrapper of the component, defining its boundary, background, and
            border. Border color changes to reflect the current interaction state.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Model Selector</strong> <em>(optional)</em>: a dropdown anchored to the bottom-left corner of the
            action bar. Intended for selections that shape how the message is processed, such as a model selector or a
            conversation mode picker.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Text input area</strong>: the main composition field. Displays placeholder text when empty and grows
            vertically as the user types.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Dictation button</strong> <em>(optional)</em>: a voice input trigger positioned to the left of the
            send button that lets user dictate their query instead of typing. It should only be visible when voice input
            is functional in the target context.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Conversational inputs",
    content: (
      <>
        <DxcParagraph>
          The message input is designed for <strong>conversational UI patterns</strong>, where the primary user goal is
          to compose and submit a message or query. Unlike traditional form inputs, it is not intended for data
          collection in structured forms.
        </DxcParagraph>
        <DxcParagraph>
          A message input always requires a send action to complete the interaction. It may optionally include a
          contextual zone for attachments and a left action slot for secondary selections that affect how the message is
          processed.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Shared input characteristics",
        content: (
          <>
            <DxcParagraph>
              Although the Message input differs from standard form inputs, it shares some common configurable features:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Placeholder text:</strong> a short hint displayed inside the text input area that describes its
                purpose or expected content.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> additional guidance displayed below the component to help the user
                understand constraints or formatting requirements.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Optional elements:</strong> the top actions zone, left action slot, and voice button are all
                optional and can be toggled independently to fit the needs of each interface.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Common input states",
        content: (
          <>
            <DxcParagraph>
              The message input supports the following standard interactive and informative states:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Disabled:</strong> prevents user interaction. Use when the input is not applicable or editable
                under certain conditions, such as when permissions are insufficient or the interface is in a read-only
                mode.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Error:</strong> applied when the input fails validation or a submission results in a system
                error. The border switches to the error color and the error message zone below the container becomes
                visible.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Read-only:</strong> the field is visible and focusable but not editable. Suitable for displaying
                a message that cannot be modified.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Using message inputs",
    content: (
      <>
        <DxcParagraph>
          The Message input is highly configurable, allowing teams to adapt it to both simple messaging interfaces and
          complex AI-assisted applications. This section highlights the key behaviors and zones of the component.
        </DxcParagraph>
        <Figure caption="An example of our message input inside a conversational interface.">
          <Image src={messageInputExample} alt="An example of our message input inside a conversational interface." />
        </Figure>
      </>
    ),
    subSections: [
      {
        title: "Top actions zone",
        content: (
          <>
            <DxcParagraph>
              The top actions zone provides space for contextual chips and a dropdown. When enabled, it appears as a
              horizontally scrollable strip above the text input. Chips in this zone represent items attached to or
              scoping the current message, such as uploaded files or active filters.
            </DxcParagraph>
            <DxcParagraph>
              Users can dismiss individual chips using the close action on each one. When the number of chips exceeds
              the available width, the strip scrolls horizontally.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Left action slot",
        content: (
          <>
            <DxcParagraph>
              The left action slot hosts an optional selector at the bottom left of the action bar. Its purpose is to
              provide a secondary selection that affects how the message is processed, not to trigger an action.
              Examples include model selectors, conversation mode pickers, and language selectors.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Action buttons",
        content: (
          <>
            <DxcParagraph>
              The action bar's right side contains the <strong>send button</strong>, and optionally the{" "}
              <strong>voice button</strong>.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The <strong>send button</strong> is always visible and submits the composed message.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The <strong>voice button</strong> provides a voice input trigger. It should only be shown when dictation
                is supported and operational in the target context. Displaying it without functional voice capability
                creates a broken affordance.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Generating state",
        content: (
          <>
            <DxcParagraph>
              The generating state is specific to AI-assisted interfaces. It locks the send button to prevent duplicate
              submissions while the system processes a response, and transitions the button to a stop or cancel
              affordance. The text input area remains accessible so users can draft their next message while waiting.
            </DxcParagraph>

            <Figure caption="Generating state of the message input">
              <Image src={generatingState} alt="Generating state of the message input" />
            </Figure>
          </>
        ),
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
                    <strong>Use this component for message composition only:</strong> The message input carries
                    conversational connotations by design. Using it in standard form contexts, such as notes fields,
                    description inputs, or feedback forms, creates mismatched expectations. Use our text area component
                    for those cases.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Write placeholder text that sets scope:</strong> avoid generic strings like "Type here" or
                    "Write something...". Prefer specific strings that reflect the capability of the interface, such as
                    "Ask about your policy documents". Keep it short enough to be absorbed at a glance.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Top actions",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Keep chips focused on the current message:</strong> chips should represent items directly
                    tied to the message being composed, such as attached files or active filters. Do not use this zone
                    for persistent session state or navigation elements unrelated to the current input.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Avoid overloading the context selector:</strong> the context selector dropdown in the top
                    zone should offer a focused set of options. If the number of options grows large, consider using a
                    separate selection pattern before the user enters the composition area.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Model selector",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Reserve this slot for context-setting selections:</strong> the left action slot is intended
                    for selections that shape the message, not for buttons or navigation elements. Model selectors, mode
                    pickers, and language selectors are appropriate. Overloading this slot with primary controls creates
                    ambiguity about the message flow.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "AI contexts",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Use the generating state instead of disabling the component:</strong> disabling the field
                    during AI processing removes the ability to draft the next message while waiting for a response. The
                    generating state locks submission while keeping the composition area accessible. Reserve disabled
                    for genuinely unavailable contexts.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Write actionable error messages:</strong> the error string should tell the user what to do,
                    not just what went wrong. "Maximum 2,000 characters" is more useful than "Input too long". If the
                    error originates from a system failure, acknowledge it clearly and offer a next step.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
        ],
      },
    ],
  },
];

const MessageInputOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/message-input/overview/MessageInputOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default MessageInputOverviewPage;
