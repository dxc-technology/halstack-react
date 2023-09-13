import {
  DxcFlex,
  DxcTable,
  DxcLink,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <HeaderDescriptionCell>Description</HeaderDescriptionCell>
        </tr>
        <tr>
          <td>alt: string</td>
          <td></td>
          <td>
            Alternative text description displayed when the specified image is not loaded.
            See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt"
            >
              MDN
            </DxcLink>{" "}
            and the{" "}
            <DxcLink
              newWindow
              href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
            >
              alt decision tree
            </DxcLink>{" "}
            of W3C for further information. This prop is{" "}
            <strong>required</strong>.
          </td>
        </tr>
        <tr>
          <td>caption: string</td>
          <td></td>
          <td>
            Image legend with a descriptive purpose. It is placed below the
            image and is complementary to the <Code>alt</Code> attribute, which
            is required regardless of the presence of the caption or not.
          </td>
        </tr>
        <tr>
          <td>lazyLoading: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            If true, the image will be loaded only when it is visible on the
            screen (lazy loading). Otherwise and by default, the image will be
            loaded as soon as the component is mounted (eager loading).
          </td>
        </tr>
        <tr>
          <td>src: string</td>
          <td></td>
          <td>
            URL of the image. This prop is <strong>required</strong> and must be valid.
          </td>
        </tr>
        <tr>
          <td>srcSet: string</td>
          <td></td>
          <td>
            List of one or more strings separated by commas indicating a set of
            possible images for the user agent to use. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>sizes: string</td>
          <td></td>
          <td>
            One or more strings separated by commas, indicating a set of source
            sizes. If the <Code>srcSet</Code> attribute is absent or contains
            no values with a width descriptor, then this attribute has no
            effect. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>width: string</td>
          <td></td>
          <td>Sets the rendered width of the image.</td>
        </tr>
        <tr>
          <td>height: string</td>
          <td></td>
          <td>Sets the rendered height of the image.</td>
        </tr>
        <tr>
          <td>
            objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
          </td>
          <td>
            <Code>'fill'</Code>
          </td>
          <td>
            Sets the <Code>object-fit</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>objectPosition: string</td>
          <td>
            <Code>'50% 50%'</Code>
          </td>
          <td>
            Sets the <Code>object-position</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>onLoad: ReactEventHandler</td>
          <td></td>
          <td>This function will be called when the image is loaded.</td>
        </tr>
        <tr>
          <td>onError: ReactEventHandler</td>
          <td></td>
          <td>This function will be called when the image fails to load.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "🚧 Examples",
    content: (
      <DxcParagraph>
        The code examples are under construction and will be available soon.
      </DxcParagraph>
    ),
  },
];

const ImageCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/image/code/ImageCodePage.tsx" />
    </DxcFlex>
  );
};

export default ImageCodePage;
