import React from "react";
import { DxcTable, DxcHeading, DxcLink } from "@dxc-technology/halstack-react";

const fileInputPropsTable = () => {
  return (
    <>
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>name</td>
          <td></td>
          <td>Name attribute.</td>
        </tr>
        <tr>
          <td>mode: 'file', 'filedrop' and 'dropzone'</td>
          <td>'file'</td>
          <td>Available modes of the component.</td>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the component.</td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed above the component.</td>
        </tr>
        <tr>
          <td>accept: string</td>
          <td></td>
          <td>
            The file types that the component accepts. Its value must be one of
            all the possible values of the HTML file input's accept attribute.
            Please check the documentation{" "}
            <DxcLink
              href="https://developer.mozilla.org/es/docs/Web/HTML/Attributes/accept"
              text="here"
            ></DxcLink>
            .
          </td>
        </tr>
        <tr>
          <td>maxSize: number</td>
          <td></td>
          <td>The maximum file size (in bytes) allowed.</td>
        </tr>
        <tr>
          <td>minSize: number</td>
          <td></td>
          <td>The minimum file size (in bytes) allowed.</td>
        </tr>
        <tr>
          <td>multiple: boolean</td>
          <td>
            <code>true</code>
          </td>
          <td>
            If true, the component allows multiple file items and will show all
            of them. If false, the selected file will be replaced by the new
            selected one.
          </td>
        </tr>
        <tr>
          <td>value: []</td>
          <td></td>
          <td>
            Value of the input file. Value must be passed including the list of
            files. An example of the value could be: {"{ "}
            <code>error: "Error text", file: file</code>.
          </td>
        </tr>
        <tr>
          <td>showPreview: boolean</td>
          <td>
            <code>false</code>
          </td>
          <td>
            If true, the preview of each file item will be shown. If it's not
            possible to show a preview, an icon refering to the file type will
            be shown.
          </td>
        </tr>
        <tr>
          <td>disabled: boolean</td>
          <td>
            <code>false</code>
          </td>
          <td>If true, the component will be disabled.</td>
        </tr>
        <tr>
          <td>callbackFile: function</td>
          <td></td>
          <td>
            This function will be called when the user selects or drops a file.
            The file or list of files will be sent as a parameter.
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>0</td>
          <td>Value of the tabindex.</td>
        </tr>
      </DxcTable>
      <DxcHeading
        level={3}
        text="File"
        margin={{ top: "medium", bottom: "medium" }}
      />
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>error: string</td>
          <td></td>
          <td>
            If it is defined, an error will be shown below the file name. If it
            is not defined, the error messages will be created and managed
            internally.
          </td>
        </tr>
        <tr>
          <td>file: File</td>
          <td></td>
          <td>Selected file.</td>
        </tr>
      </DxcTable>
    </>
  );
};

export default fileInputPropsTable;
