import Image from "@/common/Image";
import {
  DxcHeading,
  DxcText,
  DxcList,
  DxcStack,
  DxcLink,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import typesOpenSans from "./images/type_open_sans.png";
import headingTypes from "./images/type_set_headings.png";
import bodyTypes from "./images/type_set_body.png";
import additionalTypes from "./images/type_set_additional.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <Image src={typesOpenSans} alt="Typography overview" />
        <DxcText as="p">
          Our selected typography helps in structuring our user&#39;s experience
          based on the visual impact that it has on the user interface content.
          It defines what is the first noticeable piece of information or data
          based on the font shape, size, color, or type and it highlights some
          pieces of text over the rest. Some typographic elements used in
          Halstack Design System include headers, body, taglines, captions, and
          labels.
        </DxcText>
        <DxcText as="p">
          Make sure you include all the different typographic variants in order
          to enhance the application&#39;s content structure, including the
          Heading component which defines different levels of page and section
          titles.
        </DxcText>
      </>
    ),
  },
  {
    title: "Font family",
    content: (
      <>
        <DxcText as="p">
          For our sans-serif <Code>font-family</Code>, we use the humanist
          typeface Open Sans, designed by Steve Matteson and licensed under the{" "}
          <DxcLink
            href="https://www.apache.org/licenses/LICENSE-2.0.html"
            newWindow
          >
            Apache License, Version 2.0.
          </DxcLink>
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>Description</th>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>Default font family sans-serif</td>
              <td>
                <Code>font-family</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>font-family-mono</Code>
              </td>
              <td>Default font family monospaced</td>
              <td>
                <Code>font-family</Code>
              </td>
              <td>Source Code Pro&#39;, monospace</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Weight",
    content: (
      <>
        <DxcText as="p">
          In order to add contrast between typographic elements in the UI,
          Halstack uses four different and well balanced{" "}
          <Code>font-weight</Code> values.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>Description</th>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-weight-light</Code>
              </td>
              <td>Set font weight as light (300)</td>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>300</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>Set font weight as regular (400)</td>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>Set font weight as semibold (600)</td>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight-bold</Code>
              </td>
              <td>Set font weight as bold (700)</td>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>700</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Scale",
    content: (
      <>
        <DxcText as="p">
          As we approached the foundational elements with simplification and
          standardization in mind, the typographic scale is one of the most
          important elements to create hierarchy. Our type scale provides eight
          relative values based on a root font size of 16px, making it scalable
          and accessible.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>Description</th>
              <th>Property</th>
              <th>Value(rem)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>Set the font size as 12px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>0.75</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>Set the font size as 14px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>0.875</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>Set the font size as 16px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-04</Code>
              </td>
              <td>Set the font size as 20px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>1.25</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-05</Code>
              </td>
              <td>Set the font size as 24px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-06</Code>
              </td>
              <td>Set the font size as 32px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-07</Code>
              </td>
              <td>Set the font size as 48px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <Code>font-scale-08</Code>
              </td>
              <td>Set the font size as 60px</td>
              <td>
                <Code>font-size</Code>
              </td>
              <td>3.75</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Formatting",
    subSections: [
      {
        title: "Style",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Token</th>
                <th>Description</th>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-style-italic</Code>
                </td>
                <td>Set font style as italic</td>
                <td>
                  <Code>font-style</Code>
                </td>
                <td>italic</td>
              </tr>
              <tr>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>Set font style as normal</td>
                <td>
                  <Code>font-style</Code>
                </td>
                <td>normal</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Letter spacing",
        content: (
          <>
            <DxcText as="p">
              We calibrate our <Code>letter-spacing</Code> at large scales to
              provide a better legibility and readability of our text.
            </DxcText>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Description</th>
                  <th>Property</th>
                  <th>Value(em)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font-tracking-tight-02</Code>
                  </td>
                  <td>Set letter spacing as -0.025em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>-0.025</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-tracking-tight-01</Code>
                  </td>
                  <td>Set letter spacing as -0.0125em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>-0.0125</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-tracking-normal</Code>
                  </td>
                  <td>Set letter spacing as 0em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-tracking-wide-01</Code>
                  </td>
                  <td>Set letter spacing as 0.025em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>0.025</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-tracking-wide-02</Code>
                  </td>
                  <td>Set letter spacing as 0.05em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>0.05</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-tracking-wide-03</Code>
                  </td>
                  <td>Set letter spacing as 0.1em</td>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>0.1</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Leading",
        content: (
          <>
            <DxcText as="p">
              We use a ratio of 1:1.5 as a standard <Code>line-height</Code>{" "}
              value. A body font of 16px (1rem) returns a value of 24px
              (1.5rem), which is the main reference measurement for the vertical
              organization.
            </DxcText>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Description</th>
                  <th>Property</th>
                  <th>Value(em)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font-leading-compact-03</Code>
                  </td>
                  <td>Set line height as 1em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-leading-compact-02</Code>
                  </td>
                  <td>Set line height as 1.25em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>1.25</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-leading-compact-01</Code>
                  </td>
                  <td>Set line height as 1.365em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>1.365</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-leading-normal</Code>
                  </td>
                  <td>Set line height as 1.5em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-leading-loose-01</Code>
                  </td>
                  <td>Set line height as 1.715em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>1.715</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-leading-loose-02</Code>
                  </td>
                  <td>Set line height as 2em</td>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>2</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Capitalization",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Description</th>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font-transform-initial</Code>
                  </td>
                  <td>Preserve default value</td>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>initial</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-transform-lowercase</Code>
                  </td>
                  <td>Transform text to lowercase</td>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>lowercase</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-transform-uppercase</Code>
                  </td>
                  <td>Transform text to uppercase</td>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>uppercase</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Text decoration",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Description</th>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font-decoration-no-line</Code>
                  </td>
                  <td>Unset all present decorations</td>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-decoration-underline</Code>
                  </td>
                  <td>Underline the text</td>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>underline</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-decoration-line-through</Code>
                  </td>
                  <td>Put a strikethrough the text</td>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>line-through</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Halstack type set",
    subSections: [
      {
        title: "Headings",
        content: (
          <>
            <Figure caption="Heading set styles">
              <Image src={headingTypes} alt="Heading set styles" />
            </Figure>
            <DxcText as="p">
              Styles for the headings can be found in the{" "}
              <a href="https://developer.dxc.com/design/guidelines/components/heading">
                component documentation
              </a>
              . When using native <Code>&lt;h1&gt;...&lt;h5&gt;</Code> html tags
              or a different component to represent application headings, use
              the styles defined.
            </DxcText>
          </>
        ),
      },
      {
        title: "Body",
        content: (
          <Figure caption="Body set styles">
            <Image src={bodyTypes} alt="Body set styles" />
          </Figure>
        ),
        subSections: [
          {
            title: "body-01",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-regular</Code>
                    </td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>1rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-normal</Code>
                    </td>
                    <td>normal</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-initial</Code>
                    </td>
                    <td>initial</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
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
            title: "body-02",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                    <td>1rem / 16px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-normal</Code>
                    </td>
                    <td>normal</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-initial</Code>
                    </td>
                    <td>initial</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
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
            title: "body-03",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-regular</Code>
                    </td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-normal</Code>
                    </td>
                    <td>normal</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-initial</Code>
                    </td>
                    <td>initial</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
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
            title: "body-04",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-normal</Code>
                    </td>
                    <td>normal</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-initial</Code>
                    </td>
                    <td>initial</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
                    <td>
                      <Code>font-leading-normal</Code>
                    </td>
                    <td>1.5em</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Additional styles",
        content: (
          <Figure caption="Additional caption and overline styles">
            <Image
              src={additionalTypes}
              alt="Additional caption and overline styles"
            />
          </Figure>
        ),
        subSections: [
          {
            title: "caption",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-regular</Code>
                    </td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-01</Code>
                    </td>
                    <td>0.75rem / 12px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-italic</Code>
                    </td>
                    <td>italic</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-initial</Code>
                    </td>
                    <td>initial</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
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
            title: "overline",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Core token</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>
                      <Code>font-weight-regular</Code>
                    </td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                    <td>0.875rem / 14px</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>
                      <Code>font-style-italic</Code>
                    </td>
                    <td>italic</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>
                      <Code>font-transform-uppercase</Code>
                    </td>
                    <td>uppercase</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>
                      <Code>font-tracking-wide-02</Code>
                    </td>
                    <td>0.05em</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>line-height</Code>
                    </td>
                    <td>
                      <Code>font-leading-normal</Code>
                    </td>
                    <td>1.5em</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"
                newWindow
              >
                SC 1.4.6: Contrast (Enhanced)
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing"
                newWindow
              >
                SC 1.4.12: Text Spacing
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const Typography = () => {
  return (
    <DxcStack gutter="xxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Typography" weight="bold"></DxcHeading>
        </DxcStack>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/principles/typography/TypographyPage.tsx" />
    </DxcStack>
  );
};

export default Typography;
