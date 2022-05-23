import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import specsImage from "./images/tag_specs.png";
import statesImage from "./images/tag_states.png";
import anatomyImage from "./images/tag_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Design specification for the tag component">
        <Image
          src={specsImage}
          alt="Design specification for the tag component"
        />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <Figure caption="Component tag states">
          <Image src={statesImage} alt="Component tag states" />
        </Figure>
        <DxcText as="p">
          Also, this component is static, which means that there is only one
          difference between the default and hover state, changing the cursor
          from the default to the pointer cursor. The tag is merely a link to
          other resource or a place to display some information, so it is not
          intended that the flow of the component consider all the different
          states.
        </DxcText>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Component tag anatomy" />
        <DxcList type="number">
          <DxcText>Icon</DxcText>
          <DxcText>Label</DxcText>
          <DxcText>Container</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <>
            {" "}
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
                    <Code>fontColor</Code>
                  </td>
                  <td>Label</td>
                  <td>
                    <Code>color-black</Code>
                  </td>
                  <td>
                    <Code>#000000</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>iconColor</Code>
                  </td>
                  <td>Icon</td>
                  <td>
                    <Code>color-white</Code>
                  </td>
                  <td>
                    <Code>#ffffff</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>focusColor</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>color-blue-600</Code>
                  </td>
                  <td>
                    <Code>#0095ff</Code>
                  </td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcText as="p">
              *
              <em>
                The <Code>tag</Code> component is using the <Code>box</Code>{" "}
                underneath, the values for the background are inherited from the
                definition in the component. By default, the background color is
                white and not themable, so it will be the same for both
                components.
              </em>
            </DxcText>
          </>
        ),
      },
      {
        title: "Typography",
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
                  <Code>fontSize</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Shadow",
        content: (
          <>
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
                    <Code>box-shadow</Code>
                  </td>
                  <td>Container</td>
                  <td>
                    <Code>shadow-default</Code>
                  </td>
                  <td>0 4px 6px -1px rgba(0,0,0,0.1)</td>
                </tr>
                <tr>
                  <td>
                    <Code>box-shadow</Code>
                  </td>
                  <td>Container:hover</td>
                  <td>
                    <Code>shadow-high</Code>
                  </td>
                  <td>0 8px 14px -2px rgba(0,0,0,0.1)</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcText as="p">
              *
              <em>
                The <Code>shadow-default</Code> token is used for the{" "}
                <Code>:enabled</Code>, <Code>:focus</Code> and{" "}
                <Code>:disabled</Code> states. The <Code>shadow-high</Code> for{" "}
                <Code>:hover</Code> and <Code>:active</Code>.
              </em>
            </DxcText>
          </>
        ),
      },
      {
        title: "Spacing",
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
                  <Code>labelPaddingTop</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-0 </Code>
                </td>
                <td>0rem / 0px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelPaddingBottom</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-0 </Code>
                </td>
                <td>0rem / 0px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelPaddingLeft</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelPaddingRight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Size",
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
                  <Code>height</Code>
                </td>
                <td>Container</td>
                <td>-</td>
                <td>40px</td>
              </tr>
              <tr>
                <td>
                  <Code>iconHeight</Code>
                </td>
                <td>Icon</td>
                <td>-</td>
                <td>24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const TagSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/tag/specs/TagSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TagSpecsPage;
