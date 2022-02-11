import React from "react";
import { DxcTable, DxcLink } from "@dxc-technology/halstack-react";

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
          <td>name: string</td>
          <td></td>
          <td>Name attribute.</td>
        </tr>
        <tr>
          <td>mode: 'file' | 'filedrop' | 'dropzone'</td>
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
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept"
              text="here"
            ></DxcLink>
            .
          </td>
        </tr>
        <tr>
          <td>minSize: number</td>
          <td></td>
          <td>
            The minimum file size (in bytes) allowed. If the size of the file
            does not comply the minSize, the file will have an error.
          </td>
        </tr>
        <tr>
          <td>maxSize: number</td>
          <td></td>
          <td>
            The maximum file size (in bytes) allowed. If the size of the file
            does not comply the maxSize, the file will have an error.
          </td>
        </tr>
        <tr>
          <td>multiple: boolean</td>
          <td>
            <code>true</code>
          </td>
          <td>
            If true, the component allows multiple file items and will show all
            of them. If false, only one file will be shown, and if there is
            already one file selected and a new one is chosen, it will be
            replaced by the new selected one.
          </td>
        </tr>
        <tr>
          <td>value: object[]</td>
          <td></td>
          <td>
            An array of files representing the selected files. Each file has the
            following properties:
            <ul>
              <li>
                <b>file: File</b>: Selected file.
              </li>
              <li>
                <b>error: string</b>: Error of the file. If it is defined, it
                will be shown and the file item will be mark as invalid.
              </li>
              <li>
                <b>preview: string</b>: Preview of the file.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>showPreview: boolean</td>
          <td>
            <code>false</code>
          </td>
          <td>
            If true, if the file is an image, a preview of it will be shown. If
            not, an icon refering to the file type will be shown.
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
            The list of files will be sent as a parameter. In this function, the
            files can be updated or returned as they come. These files must be
            passed to the value in order to be shown.
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
    </>
  );
};

export default fileInputPropsTable;
