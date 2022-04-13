import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
  DxcLink,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const HeaderSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <DxcText as="p">
          An inherit color from the definition of the application is received,
          so the component could change his color based on that parameter. There
          is no specific color tokens for this component.
        </DxcText>
        <HeadingLink level={4}>Typography</HeadingLink>
        <HeadingLink level={5}>Headings H1</HeadingLink>
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
        <HeadingLink level={5}>Headings H2</HeadingLink>
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
        <HeadingLink level={5}>Headings H3</HeadingLink>
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
        <HeadingLink level={5}>Headings H4</HeadingLink>
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
        <HeadingLink level={5}>Headings H5</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accesibility</HeadingLink>
        <DxcList>
          <DxcText>
            Heading components should be in order. That means an{" "}
            <Code>Headings-H1</Code> is followed by an <Code>Headings-H2</Code>,
            an <Code>Headings-H2</Code> is followed by a{" "}
            <Code>Headings-H2</Code> or <Code>Headings-H3</Code> and so on.
          </DxcText>
          <DxcText>
            Keep heading tags consistent. Inconsistently implementing headings
            can create confusion and frustration for users using assistive
            technologies.
          </DxcText>
          <DxcText>
            Headings are not interactive elements and therefore have no keyboard
            or pointer interaction.
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WCAG 2.1 Related Success Criterion</HeadingLink>
        <DxcList>
          <DxcText>
            SC 1.3.1 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
              text="Info and relationships"
              newWindow
            />
          </DxcText>
          <DxcText>
            SC 2.4.6 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
              text="Headings and labels"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/heading/specs/HeadingSpecsPage.tsx" />
    </DxcStack>
  );
};

export default HeaderSpecsPage;
