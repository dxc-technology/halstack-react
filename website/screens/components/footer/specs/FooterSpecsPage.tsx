import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import Image from "@/common/Image";
import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import Code from "../../../common/Code";
import footerAnatomy from "./images/footer_anatomy.png";
import footerSpecs from "./images/footer_specs.png";

const FooterSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Footer component design specs">
          <Image src={footerSpecs} alt="Footer component design specs" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={footerAnatomy} alt="Footer anatomy" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>Logo</DxcText>
          <DxcText>Social icons</DxcText>
          <DxcText>Copyright</DxcText>
          <DxcText>Company links</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
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
                <Code>backgroundColor</Code>
              </td>
              <td>Footer container</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksDividerColor</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksFontColor</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>copyrightFontColor</Code>
              </td>
              <td>Copyright</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <Code>socialLinksColor</Code>
              </td>
              <td>Social icons</td>
              <td>
                <Code>color-white</Code>
              </td>
              <td>#ffffff</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
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
                <Code>bottomLinksFontFamily</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksFontSize</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksFontWeight</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksFontStyle</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>bottomLinksTextDecoration</Code>
              </td>
              <td>Bottom links</td>
              <td>
                <Code>font-style-no-line</Code>
              </td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <Code>copyrightFontFamily</Code>
              </td>
              <td>Copyright</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>copyrightFontSize</Code>
              </td>
              <td>Copyright</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>copyrightFontWeight</Code>
              </td>
              <td>Copyright</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>copyrightFontStyle</Code>
              </td>
              <td>Copyright</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <Code>border-width</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>border-width-1</Code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <Code>border-style</Code>
              </td>
              <td>Divider</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Height</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>min-height</Code>
              </td>
              <td>124px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin-top</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Margin</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xxsmall</Code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <Code>xxlarge</Code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Padding</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>padding-top</Code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-right</Code>
              </td>
              <td>32px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-bottom</Code>
              </td>
              <td>22px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-left</Code>
              </td>
              <td>36px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Iconography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>height</Code>/ <Code>width</Code>
              </td>
              <td>Social media icons</td>
              <td>24/24px</td>
            </tr>
            <tr>
              <td>
                <Code>max-height</Code>
              </td>
              <td>DXC logo</td>
              <td>32px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Bottom Links</HeadingLink>
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
                <Code>min height</Code>
              </td>
              <td>Links container</td>
              <td>
                <Code>-</Code>
              </td>
              <td>20px</td>
            </tr>
            <tr>
              <td>
                <Code>padding-top</Code>
              </td>
              <td>Links container</td>
              <td>
                <Code>spacing-8</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Custom content</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>min-height</Code>
              </td>
              <td>Custom container</td>
              <td>16px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          The content of the footer should be adapt to the space available
          depending on the screen device.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>
          Responsive version for mobile and tablet
        </HeadingLink>
        <DxcText as="p">
          The same content in the footer will be displayed for the responsive
          versions and the only modification will be the width of it. With less
          space available to display the content, some of the items will be
          relocated to fit well in the screen.
        </DxcText>
        <DxcText as="p">
          Regarding his behavior, the footer must be pushed down always so it is
          not visible by default after page load, even when the content is
          smaller than the device screen size. This includes the splash screen,
          which must push the footer down. Of course, if the content is larger
          than the device screen size, the footer will be pushed down anyway.
        </DxcText>
        <DxcText as="p">
          On the mobile version, first we have the logo. Below it the links to
          privacy and terms to let a space for custom component and at the
          bottom the copyright terms, centered. At this stage, the custom
          content and the disposition is responsability of the user, the same
          way as it is in the desktop and tablet version.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/footer/specs/FooterSpecsPage.tsx" />
    </DxcStack>
  );
};

export default FooterSpecsPage;
