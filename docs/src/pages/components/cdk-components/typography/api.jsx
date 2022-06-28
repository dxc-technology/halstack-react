import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const TypographyPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>as: 'p' | 'span' | 'strong' | 'small' | 'em' | 'u'</td>
        <td>'span'</td>
        <td>
          Determines the HTML tag with which the text is to be rendered
          (paragraph, span, strong, small, italic or underlined).
        </td>
      </tr>
      <tr>
        <td>display: 'inline' | 'block'</td>
        <td>'inline'</td>
        <td>Specifies the display CSS property of the component.</td>
      </tr>
      <tr>
        <td>
          fontFamily: 'Open Sans, sans-serif' | 'Source Code Pro, monospace'
        </td>
        <td>'Open Sans, sans-serif'</td>
        <td>Specifies the font-family CSS property of the component.</td>
      </tr>
      <tr>
        <td>
          fontSize: "3.75rem" | "3rem" | "2rem" | "1.5rem" | "1.25rem" | "1rem"
          | "0.875rem" | "0.75rem"
        </td>
        <td>'1rem'</td>
        <td>Specifies the font-size CSS property of the component.</td>
      </tr>
      <tr>
        <td>fontStyle: "italic" | "normal"</td>
        <td>'normal'</td>
        <td>Specifies the font-style CSS property of the component.</td>
      </tr>
      <tr>
        <td>fontWeight: "300" | "400" | "600" | "700" </td>
        <td>'400'</td>
        <td>Specifies the font-weight CSS property of the component.</td>
      </tr>
      <tr>
        <td>
          letterSpacing: "-0.025em" | "-0.0125em" | "0em" | "0.025em" | "0.05em"
          | "0.1em"{" "}
        </td>
        <td>'0em'</td>
        <td>Specifies the letter-spacing CSS property of the component.</td>
      </tr>
      <tr>
        <td>
          lineHeight: "1em" | "1.25em" | "1.365em" | "1.5em" | "1.715em" | "2em"{" "}
        </td>
        <td>'1.5em'</td>
        <td>Specifies the line-height CSS property of the component.</td>
      </tr>
      <tr>
        <td>textAlign: 'left' | 'center' | 'right' </td>
        <td>'left'</td>
        <td>Specifies the text-align CSS property of the component.</td>
      </tr>
      <tr>
        <td>color: string</td>
        <td>'#000000'</td>
        <td>Color of text.</td>
      </tr>
      <tr>
        <td>textDecoration: "none" | "underline" | "line-through"</td>
        <td>'none'</td>
        <td>Specifies the text-decoration CSS property of the component.</td>
      </tr>
      <tr>
        <td>textOverflow: "clip" | "ellipsis" | "unset"</td>
        <td>'unset'</td>
        <td>Specifies the text-overflow CSS property of the component.</td>
      </tr>
      <tr>
        <td>
          whiteSpace: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap"
        </td>
        <td>'normal'</td>
        <td>Specifies the white-space CSS property of the component.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td></td>
      </tr>
    </DxcTable>
  );
};

export default TypographyPropsTable;
