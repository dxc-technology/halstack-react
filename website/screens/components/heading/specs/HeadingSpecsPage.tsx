import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
  DxcLink,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <DxcText as="p">
            An inherit color from the definition of the application is received,
            so the component could change his color based on that parameter.
            There is no specific color tokens for this component.
          </DxcText>
        ),
      },
      {
        title: "Typography",
        subSections: [
          {
            title: "Headings H1",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif;</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>600</td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>32px / 2.5rem</td>
                    <td>
                      <Code>font-scale-07</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>regular</td>
                    <td>
                      <Code>font-normal</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>initial</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>-12.5px / -0.0125em</td>
                    <td>
                      <Code>font-tracking-tight-01</Code>
                    </td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Headings H2",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif;</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>600</td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>24px / 1.5rem</td>
                    <td>
                      <Code>font-scale-05</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>regular</td>
                    <td>
                      <Code>font-normal</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>initial</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>0px / 0em</td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Headings H3",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif;</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>600</td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>20px / 1.25rem</td>
                    <td>
                      <Code>font-scale-04</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>regular</td>
                    <td>
                      <Code>font-normal</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>initial</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>0px / 0em</td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Headings H4",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif;</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>600</td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>16px / 1rem</td>
                    <td>
                      <Code>font-scale-03</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>regular</td>
                    <td>
                      <Code>font-normal</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>initial</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>0px / 0em</td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Headings H5",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                    <th>Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>font-family</Code>
                    </td>
                    <td>&#39;Open Sans&#39;, sans-serif;</td>
                    <td>
                      <Code>font-family-sans</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-weight</Code>
                    </td>
                    <td>600</td>
                    <td>
                      <Code>font-weight-semibold</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-size</Code>
                    </td>
                    <td>14px / 0.875rem</td>
                    <td>
                      <Code>font-scale-02</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>font-style</Code>
                    </td>
                    <td>regular</td>
                    <td>
                      <Code>font-normal</Code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Code>text-transform</Code>
                    </td>
                    <td>initial</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <Code>letter-spacing</Code>
                    </td>
                    <td>0px / 0em</td>
                    <td>
                      <Code>font-tracking-normal</Code>
                    </td>
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
    content: (
      <DxcList>
        <DxcText>
          Heading components should be in order. That means an{" "}
          <Code>Headings-H1</Code> is followed by an <Code>Headings-H2</Code>,
          an <Code>Headings-H2</Code> is followed by a <Code>Headings-H2</Code>{" "}
          or <Code>Headings-H3</Code> and so on.
        </DxcText>
        <DxcText>
          Keep heading tags consistent. Inconsistently implementing headings can
          create confusion and frustration for users using assistive
          technologies.
        </DxcText>
        <DxcText>
          Headings are not interactive elements and therefore have no keyboard
          or pointer interaction.
        </DxcText>
      </DxcList>
    ),
    subSections: [
      {
        title: "WCAG 2.1 Related Success Criterion",
        content: (
          <DxcList>
            <DxcText>
              SC 1.3.1 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
                newWindow
              >
                Info and relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              SC 2.4.6 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
                newWindow
              >
                Headings and labels
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const HeadingSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/heading/specs/HeadingSpecsPage.tsx" />
    </DxcStack>
  );
};

export default HeadingSpecsPage;
