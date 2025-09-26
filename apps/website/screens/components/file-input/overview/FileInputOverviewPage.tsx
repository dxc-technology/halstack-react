import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable, DxcImage } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Code from "@/common/Code";
import anatomy from "./images/file_input_anatomy.png";
import Example from "@/common/example/Example";
import variants from "./examples/variants";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The file input component is a key UI element for collecting <strong>digital files</strong> such as documents,
          images, videos or other media types. It plays a critical role in workflows where users must provide
          supplemental information — like uploading resumes, profile pictures, supporting documents or media attachments.
        </DxcParagraph>
        <DxcParagraph>
          Unlike text or number inputs, file inputs trigger system-level dialogs and are limited in how their visual
          appearance can be customized. However, they provide built-in functionality for browsing, selecting and
          preparing files for upload. Developers can also configure constraints such as file type (e.g.,{" "}
          <Code>.jpg</Code>, <Code>.pdf</Code>) or maximum file size to ensure data quality and improve server-side
          processing.
        </DxcParagraph>
        <DxcParagraph>
          Clear instructions, visual feedback and validation help users understand what types of files are accepted,
          whether multiple files are allowed, and if an upload was successful. Proper labeling and accessibility
          support — including keyboard navigation and screen reader compatibility — are essential to providing an inclusive
          experience.
        </DxcParagraph>
        <DxcParagraph>
          File inputs enhance functionality in forms by enabling richer user interactions and expanding the types of
          data an application can accept.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="File input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: a descriptive text that helps users understand what information
            is expected in the input field. It should be clear, concise and placed near the input for better
            readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: a small indicator that signals the input field is
            not mandatory. It helps users know they can leave the field empty without causing validation errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: additional text placed below the input label that provides
            guidance, examples or explanations to assist users in filling out the field correctly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual boundary that encloses the file input area. It helps define the drop
            zone and clickable area and should visually reflect interaction states such as focus, hover or error.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>File input button:</strong> instructional or informative text inside the drop area (e.g., "Select
            files or drop files here") that helps orient users and encourage interaction.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>File item container:</strong> displays the name of the file(s) selected or dropped.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Uploaded file preview</strong> <em>(Optional)</em>: a visual element placed before the file input
            area, often used to display a file icon or category label to reinforce the expected content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Error message:</strong> appears below the input field when validation fails (e.g., unsupported file
            type or size). The message should clearly explain the issue and how to fix it.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Remove action:</strong> allows users to delete a selected file before submission.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Form inputs",
    content: (
      <>
        <DxcParagraph>
          Form inputs are essential UI elements that allow users to interact with digital products by{" "}
          <strong>entering or selecting data</strong>. Choosing the right input type and structure is key to designing
          efficient, user-friendly forms that support task completion and data accuracy.
        </DxcParagraph>
        <DxcParagraph>
          A form input (also known as a form field) is used to capture user data. Common input types include text
          fields, date pickers, number fields, radio buttons, checkboxes, toggles and dropdowns. Forms should always
          include a submission method, such as a submit button, link or keyboard trigger, to complete the interaction.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Shared input characteristics",
        content: (
          <>
            <DxcParagraph>
              Although input fields vary in type and purpose, they often share a common set of features:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> additional information displayed below the field to guide the user in
                providing the correct input.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Optional label:</strong> inputs that are not mandatory can be marked with an "Optional" tag to
                set clear expectations.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Common input states",
        content: (
          <>
            <DxcParagraph>Most inputs can also present standard interactive or informative states:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Disabled:</strong> this state prevents users from interacting with the field. It's typically
                used when a value is not applicable or editable under certain conditions or roles.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Error:</strong> when a user enters invalid or incomplete data, the input shows an error state,
                often accompanied by a helpful message to guide corrections.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Using file inputs",
    content: (
      <>
        <DxcParagraph>
          File inputs are commonly used in applications and forms where users are required to upload documents, images,
          or other digital files. Our file input component is designed to be flexible and accessible, supporting both
          drag-and-drop interactions and traditional file browsing. It enables designers and developers to handle a
          variety of file-based use cases while maintaining usability, clarity and strong user feedback.
        </DxcParagraph>
        <DxcParagraph>
          In this section, we will explore the key characteristics and behaviors of our file input component to help you
          understand how to use it effectively and accessibly in your product.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Uploading files",
        content: (
          <>
            <DxcParagraph>
              Uploading files is the core interaction of the file input component. Users can either click to open the
              file picker or drag-and-drop files directly into the designated area. The component supports single and
              multiple file uploads, provides visual feedback once a file is selected and often includes the ability to
              remove files before submission.
            </DxcParagraph>
            <DxcParagraph>
              Clear affordances, immediate validation (e.g., for file type or size) and the option to undo or remove
              uploads help users remain in control and confident in the submission process.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Variants",
        content: (
          <>
            <DxcParagraph>
              The file input component is available in multiple variants to support a wide range of use cases and
              interaction patterns. Each variant adapts to different interface needs, whether it's a compact
              multi-device form or a file-intensive desktop experience. Designers and developers should select the most
              appropriate variant based on context, layout constraints and user expectations.
            </DxcParagraph>
            <Example example={variants} defaultIsVisible={false} />
            <DxcParagraph>
              Below is a summary of the available file input variants and their recommended use cases:
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Use case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>File</strong>
                  </td>
                  <td>
                    Use the file variant when designing for <strong>multi-device compatibility</strong>. It offers a
                    minimal, straightforward interface ideal for responsive layouts and mobile-first designs.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Filedrop</strong>
                  </td>
                  <td>
                    Use in <strong>large or complex forms</strong> when designing only for <strong>desktop</strong>. It
                    combines both click-to-upload and drag-and-drop functionality in a compact inline layout.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Dropzone</strong>
                  </td>
                  <td>
                    Choose the dropzone when the <strong>primary goal is file uploading</strong> — such as media galleries
                    or document submission tools. It provides a large, visually prominent area optimized for dragging
                    and dropping files.
                  </td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Always use clear labels:</strong> provide descriptive and specific labels that indicate the type of
            file expected (e.g., "Upload profile picture" or "Attach supporting document"). Avoid generic terms like
            "Upload."
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use helper text to guide users:</strong> add helper text below the label when users need more
            context about accepted file types (e.g., PDF, PNG), maximum file size or quantity limitations. This reduces
            the likelihood of upload errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Display file previews when useful:</strong> for visual content like images, enabling preview
            thumbnails can improve user confidence by providing a direct visual confirmation rather than just a file
            name. This is especially helpful when uploading multiple similar images.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use single-line layout for compact spaces:</strong> when working with constrained or dense layouts,
            the single-file file input variant keeps the selected file inline with the field, avoiding vertical
            expansion and keeping the form tidy.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Validate early and clearly:</strong> display error messages immediately if a file does not meet
            requirements (e.g., incorrect format or file too large). Use clear, concise language that explains how to
            fix the issue.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const FileInputOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/file-input/overview/FileInputOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default FileInputOverviewPage;
