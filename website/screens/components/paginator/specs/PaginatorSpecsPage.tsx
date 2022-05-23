import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import paginatorAnatomy from "./images/paginator_anatomy.png";
import paginatorSpecs from "./images/paginator_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Paginator design specifications">
        <Image src={paginatorSpecs} alt="Paginator design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={paginatorAnatomy} alt="Paginator anatomy" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>Items per page</DxcText>
          <DxcText>Items indicator</DxcText>
          <DxcText>Page actions</DxcText>
          <DxcText>Page selector</DxcText>
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
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Component token</th>
                <th align="left">Element</th>
                <th align="left">Core token</th>
                <th align="left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>backgroundColor</Code>
                </td>
                <td align="left">Container</td>
                <td align="left">
                  <Code>color-grey-100</Code>
                </td>
                <td align="left">#f2f2f2</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>fontColor</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">
                  <Code>color-black</Code>
                </td>
                <td align="left">#000000</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Typography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Component token</th>
                <th align="left">Element</th>
                <th align="left">Core token</th>
                <th align="left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>fontFamily</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">
                  <Code>font-family-sans</Code>
                </td>
                <td align="left">&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>fontSize</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">
                  <Code>font-scale-03</Code>
                </td>
                <td align="left">1rem / 16px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>fontStyle</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">
                  <Code>font-style-normal</Code>
                </td>
                <td align="left">normal</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>fontWeight</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">
                  <Code>font-weight-regular</Code>
                </td>
                <td align="left">400</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>fontTextTransform</Code>
                </td>
                <td align="left">Type all</td>
                <td align="left">-</td>
                <td align="left">none</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th align="left">Component token</th>
                <th align="left">Element</th>
                <th align="left">Core token</th>
                <th align="left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>marginRight</Code>
                </td>
                <td align="left">Content</td>
                <td align="left">
                  <Code>spacing-32</Code>
                </td>
                <td align="left">2rem / 32px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>marginLeft</Code>
                </td>
                <td align="left">Content</td>
                <td align="left">
                  <Code>spacing-32</Code>
                </td>
                <td align="left">2rem / 32px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>itemsPerPageSelectorMarginLeft</Code>
                </td>
                <td align="left">Items per page</td>
                <td align="left">
                  <Code>spacing-0</Code>
                </td>
                <td align="left">0rem / 0px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>itemsPerPageSelectorMarginRight</Code>
                </td>
                <td align="left">Items per page</td>
                <td align="left">
                  <Code>spacing-16</Code>
                </td>
                <td align="left">1rem / 16px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>pageSelectorMarginRight</Code>
                </td>
                <td align="left">Page selector</td>
                <td align="left">
                  <Code>spacing-16</Code>
                </td>
                <td align="left">1rem / 16px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>pageSelectorMarginLeft</Code>
                </td>
                <td align="left">Page selector</td>
                <td align="left">
                  <Code>spacing-0</Code>
                </td>
                <td align="left">0rem / 0px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>totalItemsContainerMarginRight</Code>
                </td>
                <td align="left">Items indicator</td>
                <td align="left">
                  <Code>spacing-48</Code>
                </td>
                <td align="left">3rem / 48px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>totalItemsContainerMarginLeft</Code>
                </td>
                <td align="left">Items indicator</td>
                <td align="left">
                  <Code>spacing-0</Code>
                </td>
                <td align="left">0rem / 0px</td>
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
                <th align="left">Component token</th>
                <th align="left">Element</th>
                <th align="left">Core token</th>
                <th align="left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="left">
                  <Code>height</Code>
                </td>
                <td align="left">Container</td>
                <td align="left">-</td>
                <td align="left">64px</td>
              </tr>
              <tr>
                <td align="left">
                  <Code>width</Code>
                </td>
                <td align="left">Container</td>
                <td align="left">-</td>
                <td align="left">100%</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const PaginatorSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/paginator/specs/PaginatorSpecsPage.tsx" />
    </DxcStack>
  );
};

export default PaginatorSpecsPage;
