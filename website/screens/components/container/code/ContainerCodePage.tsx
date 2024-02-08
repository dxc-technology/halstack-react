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
import StatusTag from "@/common/StatusTag";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import listbox from "./examples/listbox";
import Link from "next/link";

const backgroundTypeString = `{
    attachment?: string;
    clip?: string;
    color?: CoreColorTokens;
    image?: string;
    origin?: string;
    position?: string;
    repeat?: string;
    size?: string;
}`;
const borderTypeString = `BorderProperties | {
  top?: BorderProperties;
  right?: BorderProperties;
  bottom?: BorderProperties;
  left?: BorderProperties;
}`;
const borderPropertiesTypeString = `{
    width?: string;
    style?: LineStyleValues;
    color?: CoreColorTokens;
}`;
const insetTypeString = `{
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}`;
const outlineTypeString = `{
    width?: string;
    style?: LineStyleValues;
    color?: CoreColorTokens;
    offset?: string;
}`;
const overflowTypeString = `OverflowValues | 
{ 
    x?: OverflowValues; 
    y?: OverflowValues;
}`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th style={{ minWidth: "200px" }}>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>background</td>
          <td>
            <ExtendedTableCode>{backgroundTypeString}</ExtendedTableCode>
            <p>
              being <Code>CoreColorTokens</Code> the color tokens provided by
              Halstack Design System. See our{" "}
              <Link
                href="/principles/color/#color-tokens-core-color-tokens"
                passHref
                legacyBehavior
              >
                <DxcLink newWindow>Color palette</DxcLink>
              </Link>{" "}
              for further knowledge.
            </p>
          </td>
          <td>
            Based on the CSS property <Code>background</Code> allows configuring
            all properties related to the background of a container. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/background"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>border</td>
          <td>
            <DxcFlex direction="column" gap="0.5rem" alignItems="baseline">
              <ExtendedTableCode>{borderTypeString}</ExtendedTableCode>
              <p>
                being <Code>BorderProperties</Code> an object with the following
                properties:
              </p>
              <ExtendedTableCode>
                {borderPropertiesTypeString}
              </ExtendedTableCode>
              <p>
                and <Code>LineStyleValues</Code> an enum with the following
                possible values:
              </p>
              <TableCode>
                'none' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' |
                'ridge' | 'inset' | 'outset'
              </TableCode>
            </DxcFlex>
          </td>
          <td>
            Based on the CSS property <Code>border</Code> allows configuring all
            properties related to the border of a container.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>borderRadius</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>border-radius</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>boxShadow</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>box-shadow</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'none'</TableCode>
          </td>
        </tr>
        <tr>
          <td>boxSizing</td>
          <td>
            <TableCode>'content-box' | 'border-box'</TableCode>
          </td>
          <td>
            Sets the <Code>box-sizing</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'content-box'</TableCode>
          </td>
        </tr>
        <tr>
          <td>
            <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
              <StatusTag status="Required">Required</StatusTag>children
            </DxcFlex>
          </td>
          <td>
            <TableCode>React.ReactNode</TableCode>
          </td>
          <td>Custom content inside the container.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>display</td>
          <td>
            <TableCode>'block' | 'inline-block' | 'inline' | 'none'</TableCode>
          </td>
          <td>
            Sets the <Code>display</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
            >
              MDN
            </DxcLink>{" "}
            for further information. The set of values is limited to the ones
            related to the outer display type. If you want to apply any pattern
            from the inner box and how the children are laid out, we recommend
            you to use the Flex and Grid components.
          </td>
          <td>
            <TableCode>'block'</TableCode>
          </td>
        </tr>
        <tr>
          <td>float</td>
          <td>
            <TableCode>'left' | 'right' | 'none'</TableCode>
          </td>
          <td>
            Sets the <Code>float</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/float"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'none'</TableCode>
          </td>
        </tr>
        <tr>
          <td>height</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>height</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
        <tr>
          <td>inset</td>
          <td>
            <ExtendedTableCode>{insetTypeString}</ExtendedTableCode>
          </td>
          <td>
            Based on the CSS property <Code>inset</Code> this prop is a
            shorthand that corresponds to the <Code>top</Code>,{" "}
            <Code>right</Code>, <Code>bottom</Code>, and/or <Code>left</Code>{" "}
            properties.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
        <tr>
          <td>margin</td>
          <td>
            <TableCode>
              'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
              'xxlarge' | Space
            </TableCode>
          </td>
          <td>
            Size of the margin to be applied to the component. You can pass an
            object with 'top', 'bottom', 'left' and 'right' properties in order
            to specify different margin sizes.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>maxHeight</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>max-height</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-height"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'none'</TableCode>
          </td>
        </tr>
        <tr>
          <td>maxWidth</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>max-width</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-width"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'none'</TableCode>
          </td>
        </tr>
        <tr>
          <td>minHeight</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>min-height</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/min-height"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>min-width</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/min-width"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
        <tr>
          <td>outline</td>
          <td>
            <ExtendedTableCode>{outlineTypeString}</ExtendedTableCode>
          </td>
          <td>
            Based on the CSS property <Code>outline</Code> allows configuring
            all properties related to the outline of a container.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>overflow</td>
          <td>
            <ExtendedTableCode>{overflowTypeString}</ExtendedTableCode>
            <p>
              being <Code>OverflowValues</Code> an enum with the following
              possible values:
            </p>
            <TableCode>
              'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
            </TableCode>
          </td>
          <td>
            Sets the <Code>overflow</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'visible'</TableCode>
          </td>
        </tr>
        <tr>
          <td>padding</td>
          <td>
            <TableCode>
              'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
              'xxlarge' | Space
            </TableCode>
          </td>
          <td>
            Size of the margin to be applied to the component. You can pass an
            object with 'top', 'bottom', 'left' and 'right' properties in order
            to specify different margin sizes.
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>position</td>
          <td>
            <TableCode>
              'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
            </TableCode>
          </td>
          <td>
            Sets the <Code>position</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/position"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'static'</TableCode>
          </td>
        </tr>
        <tr>
          <td>width</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>
            Sets the <Code>width</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td>
            <TableCode>'auto' | number</TableCode>
          </td>
          <td>
            Sets the <Code>z-index</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
          <td>
            <TableCode>'auto'</TableCode>
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Building a listbox",
        content: (
          <>
            <DxcParagraph>
              This code provides an illustration of a custom component created
              exclusively with the <Code>DxcContainer</Code>.{" "}
              <strong>You should not copy this code</strong>, but use instead
              our <Code>DxcSelect</Code>.
            </DxcParagraph>
            <DxcParagraph>
              It is imperative to exclusively utilize Halstack components for
              optimal compatibility and adherence to our development standards.
              In case you do not find one that fits your needs, please{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/discussions/new/choose"
                newWindow
              >
                reach out to our development team
              </DxcLink>{" "}
              first to discuss your particular situation.
            </DxcParagraph>
            <Example example={listbox} defaultIsVisible />
          </>
        ),
      },
    ],
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
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/container/code/ContainerCodePage.tsx" />
    </DxcFlex>
  );
};

export default ImageCodePage;
