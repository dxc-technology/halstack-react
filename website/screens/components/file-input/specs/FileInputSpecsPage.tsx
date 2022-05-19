import {
  DxcStack,
  DxcText,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import fileInputStatesFile from "./images/input_file_states_file.png";
import fileInputStatesFiledrop from "./images/input_file_states_filedrop.png";
import fileInputStatesDropzone from "./images/input_file_states_dropzone.png";
import fileInputStatesFileItem from "./images/input_file_states_fileitem.png";
import fileInputAnatomy from "./images/input_file_anatomy.png";
import fileInputFileFileItemPreview from "./images/input_file_fileitem_preview.png";
import fileInputFileSingleFile from "./images/input_file_single_file.png";
import fileInputSpecs from "./images/input_file_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="File input design specifications">
        <Image src={fileInputSpecs} alt="File input design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <DxcText as="p">
        The component file input is made-up of an input (type: file) and a
        file-item(s).
      </DxcText>
    ),
    subSections: [
      {
        title: "File",
        content: (
          <>
            <DxcText as="p">
              The element has the following states: <strong>enabled</strong>,{" "}
              <strong>hover</strong>, <strong>focus</strong>,{" "}
              <strong>active</strong> and <strong>disabled</strong>.
            </DxcText>
            <Figure caption="File variant states">
              <Image src={fileInputStatesFile} alt="File variant states" />
            </Figure>
          </>
        ),
      },
      {
        title: "Filedrop",
        content: (
          <>
            <DxcText as="p">
              The element has the following states: <strong>enabled</strong>,{" "}
              <strong>hover</strong>, <strong>focus</strong>,{" "}
              <strong>active</strong>, <strong>dragover</strong> and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Filedrop variant states">
              <Image
                src={fileInputStatesFiledrop}
                alt="Filedrop variant states"
              />
            </Figure>
          </>
        ),
      },
      {
        title: "Dropzone",
        content: (
          <>
            <DxcText as="p">
              The element has the following states: <strong>enabled</strong>,{" "}
              <strong>hover</strong>, <strong>focus</strong>,{" "}
              <strong>active</strong>, <strong>dragover</strong> and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Dropzone variant states">
              <Image
                src={fileInputStatesDropzone}
                alt="Dropzone variant states"
              />
            </Figure>
          </>
        ),
      },
      {
        title: "File items",
        content: (
          <>
            <DxcText as="p">
              The element has the following states: <strong>enabled</strong>,{" "}
              <strong>hover</strong>, <strong>focus</strong>,{" "}
              <strong>active</strong>, <strong>loading</strong> and{" "}
              <strong>error</strong>.
            </DxcText>
            <Figure caption="File item states">
              <Image src={fileInputStatesFileItem} alt="File item states" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={fileInputAnatomy} alt="Component file input anatomy" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Drag and drop area</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Action - Remove file</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>file input button</DxcText>
          <DxcText>File preview</DxcText>
          <DxcText>File name</DxcText>
          <DxcText>File item container</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "File item with preview",
    content: (
      <>
        <DxcText as="p">
          When the files to upload are mainly images, the preview can provide
          more feedback to the user rather than the name of the file, preventing
          errors loading content.
        </DxcText>
        <Figure caption="File item with preview example">
          <Image
            src={fileInputFileFileItemPreview}
            alt="File item with preview example"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Single-file file input",
    content: (
      <>
        <DxcText as="p">
          In order to provide a compact version of the file input component to
          accommodate any layout restriction, the variant file displays the file
          name in the same row instead of growing vertically.
        </DxcText>
        <Figure caption="Variant file single">
          <Image src={fileInputFileSingleFile} alt="Variant file single" />
        </Figure>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        subSections: [
          {
            title: "Base",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Component token</th>
                    <th>Element</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>dropBorderColor</Code>
                    </td>
                    <td>Drag and drop area</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fileItemBorderColor</Code>
                    </td>
                    <td>File item</td>
                    <td>
                      <Code>color-grey-300</Code>
                    </td>
                    <td>#cccccc</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>deleteFileItemColor</Code>
                    </td>
                    <td>File item</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>fileNameFontColor</Code>
                    </td>
                    <td>File name</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>filePreviewBackgroundColor</Code>
                    </td>
                    <td>File preview</td>
                    <td>
                      <Code>color-color-grey-100</Code>
                    </td>
                    <td>#f2f2f2</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>filePreviewIconColor</Code>
                    </td>
                    <td>File preview icon</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>labelFontColor</Code>
                    </td>
                    <td>Label</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>helperTextFontColor</Code>
                    </td>
                    <td>Helper text</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>dropLabelFontColor</Code>
                    </td>
                    <td>Drop label</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Interactive",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Component token</th>
                    <th>Element</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>disabledLabelFontColor</Code>
                    </td>
                    <td>Label:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledHelperTextFontColor</Code>
                    </td>
                    <td>Helper text:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledDropLabelFontColor</Code>
                    </td>
                    <td>Drop label:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusDropBorderColor</Code>
                    </td>
                    <td>Dnd border:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledDropBorderColor</Code>
                    </td>
                    <td>Dnd border:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>dragoverDropBackgroundColor</Code>
                    </td>
                    <td>Dnd fill:dragover</td>
                    <td>
                      <Code>color-blue-50</Code>
                    </td>
                    <td>#f5fbff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverDeleteFileItemBackgroundColor</Code>
                    </td>
                    <td>File item icon:hover</td>
                    <td>
                      <Code>color-grey-a-100</Code>
                    </td>
                    <td>#0000000d</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusDeleteFileItemBorderColor</Code>
                    </td>
                    <td>File item icon:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>activeDeleteFileItemBackgroundColor</Code>
                    </td>
                    <td>File item icon:active</td>
                    <td>
                      <Code>color-grey-a-300</Code>
                    </td>
                    <td>#00000033</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorFileItemBorderColor</Code>
                    </td>
                    <td>File item container:error</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorFileItemBackgroundColor</Code>
                    </td>
                    <td>File item container:error</td>
                    <td>
                      <Code>color-red-50</Code>
                    </td>
                    <td>#fff5f6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorFilePreviewBackgroundColor</Code>
                    </td>
                    <td>File item preview:error</td>
                    <td>
                      <Code>color-red-200</Code>
                    </td>
                    <td>#ffccd3</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorFilePreviewIconColor</Code>
                    </td>
                    <td>File item preview icon:error</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorMessageFontColor</Code>
                    </td>
                    <td>File item:error</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Typography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-bold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>line-height</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-leading-loose-01</Code>
                </td>
                <td>1.75em</td>
              </tr>
              <tr>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>line-height</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>font-leading-normal</Code>
                </td>
                <td>1.5em</td>
              </tr>
              <tr>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>line-height</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-leading-normal</Code>
                </td>
                <td>1.5em</td>
              </tr>
              <tr>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>Drop label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Drop label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Drop label</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>Error message</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>Open Sans</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Error message</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Error message</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>line-height</Code>
                </td>
                <td>Error message</td>
                <td>
                  <Code>font-leading-normal</Code>
                </td>
                <td>1.5em</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Component token</th>
                  <th>Element</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>closeIconBorderThickness</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-width-0</Code>
                  </td>
                  <td>0px</td>
                </tr>
                <tr>
                  <td>
                    <Code>closeIconBorderStyle</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>closeIconBorderRadius</Code>
                  </td>
                  <td>Icon close</td>
                  <td>
                    <Code>border-radius-none</Code>
                  </td>
                  <td>0</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Element</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>border-width</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>border-width-0</Code>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Code>border-style</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>border-style-none</Code>
                  </td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <Code>border-radius</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>border-radius-medium</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Spacing",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>margin-right</Code>
                </td>
                <td>Title icon</td>
                <td>
                  <Code>spacing-12</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-bottom</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Drag and drop area</td>
                <td>
                  <Code>border-style-dashed</Code>
                </td>
                <td>dashed</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Drag and drop area</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Drag and drop area</td>
                <td>
                  <Code>border-radius-large</Code>
                </td>
                <td>0.375rem / 6px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>File item</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>box-shadow</Code>
                </td>
                <td>File item icon:focus</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>0 0 0 2px</td>
              </tr>
              <tr>
                <td>
                  <Code>box-shadow</Code>
                </td>
                <td>Drag and drop area:dragover</td>
                <td>
                  <Code>-</Code>
                </td>
                <td>0 0 0 2px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const FileInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/dialog/specs/DialogSpecsPage.tsx" />
    </DxcStack>
  );
};

export default FileInputSpecsPage;
