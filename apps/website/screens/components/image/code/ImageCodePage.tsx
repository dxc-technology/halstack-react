import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basic from "./examples/basicUsage";
import StatusBadge from "@/common/StatusBadge";
import Code, { TableCode } from "@/common/Code";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>
            <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
              <StatusBadge status="required" />
              alt
            </DxcFlex>
          </td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Alternative text description displayed when the specified image is not loaded. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt">
              MDN
            </DxcLink>{" "}
            and the{" "}
            <DxcLink newWindow href="https://www.w3.org/WAI/tutorials/images/decision-tree/">
              alt decision tree
            </DxcLink>{" "}
            of W3C for further information.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>caption</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Image legend with a descriptive purpose. It is placed below the image and is complementary to the{" "}
            <Code>alt</Code> attribute, which is required regardless of the presence of the caption or not.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>height</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Sets the rendered height of the image.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lazyLoading</td>
          <td>
            <TableCode>boolean</TableCode>
          </td>
          <td>
            If true, the image will be loaded only when it is visible on the screen (lazy loading). Otherwise and by
            default, the image will be loaded as soon as the component is mounted (eager loading).
          </td>
          <td>
            <TableCode>false</TableCode>
          </td>
        </tr>
        <tr>
          <td>objectFit</td>
          <td>
            <TableCode>'contain' | 'cover' | 'fill' | 'none' | 'scale-down'</TableCode>
          </td>
          <td>
            Sets the <Code>object-fit</Code> CSS property. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'fill'</TableCode>
          </td>
        </tr>
        <tr>
          <td>objectPosition</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>object-position</Code> CSS property. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position">
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'50% 50%'</TableCode>
          </td>
        </tr>
        <tr>
          <td>onError</td>
          <td>
            <TableCode>{"React.ReactEventHandler <HTMLImageElement>"}</TableCode>
          </td>
          <td>This function will be called when the image fails to load.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>onLoad</td>
          <td>
            <TableCode>{"React.ReactEventHandler <HTMLImageElement>"}</TableCode>
          </td>
          <td>This function will be called when the image is loaded.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>sizes</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            One or more strings separated by commas, indicating a set of source sizes. If the <Code>srcSet</Code>{" "}
            attribute is absent or contains no values with a width descriptor, then this attribute has no effect. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes">
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
              <StatusBadge status="required" />
              src
            </DxcFlex>
          </td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>URL of the image.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>srcSet</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            List of one or more strings separated by commas indicating a set of possible images for the user agent to
            use. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset">
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Sets the rendered width of the image.</td>
          <td>-</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basic} defaultIsVisible />,
      },
    ],
  },
];

const ImageCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/image/code/ImageCodePage.tsx" />
  </DxcFlex>
);

export default ImageCodePage;
