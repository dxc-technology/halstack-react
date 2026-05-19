import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import Link from "next/link";
import selectable from "./examples/selectable";

const LoadingSizeConfig = `{
  width?: string;
  height?: string;
}`;

const EmptySizeConfig = `{
  width?: string;
  height?: string;
  iconSize?: "small" | "medium" | "large";
}`;

const Size = `{
  width?: "fillParent" | "fitContent";
  height?: "fillParent" | "fitContent";
}`;

const defaultSize = `{
  width: "fitContent",
  height: "fitContent"
}`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Custom content that will be placed inside the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>
              <TableCode>'row' | 'column'</TableCode>
            </td>
            <td>Specifies the direction of the card content.</td>
            <td>
              <TableCode>'column'</TableCode>
            </td>
          </tr>
          <tr>
            <td>emptySize</td>
            <td>
              <ExtendedTableCode>{EmptySizeConfig}</ExtendedTableCode>
            </td>
            <td>
              Specifies the size of the empty state. By default the icon is set to <Code>"medium"</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>href</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Specifies the URL of the card. If provided, the card will be clickable and navigate to the specified URL.
              The card will also be considered as an anchor and selectable will be ignored, even if it's set to{" "}
              <Code>true</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>image</td>
            <td>
              <TableCode>
                <Code>DxcImagePropsType</Code>
              </TableCode>
            </td>
            <td>
              This prop has the same type as the{" "}
              <Link href="/components/image" passHref legacyBehavior>
                <DxcLink>Image component</DxcLink>
              </Link>{" "}
              props and it will be used to render an image inside the card. It is optional and if not specified, no
              image will be rendered.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>imagePosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Specifies the position of the image inside the card.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
          </tr>
          <tr>
            <td>isEmpty</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Specifies whether the card is in an empty state.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>isLoading</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Specifies whether the card is in a loading state.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>loadingSize</td>
            <td>
              <ExtendedTableCode>{LoadingSizeConfig}</ExtendedTableCode>
            </td>
            <td>Specifies the size of the loading state.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'elevated' | 'outlined'</TableCode>
            </td>
            <td>
              Specifies the visual style of the card. It can be set to <Code>'elevated'</Code> or{" "}
              <Code>'outlined'</Code>.
            </td>
            <td>
              <TableCode>'elevated'</TableCode>
            </td>
          </tr>
          <tr>
            <td>newWindow</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Specifies whether the link will open in a new window. href must be provided for this to work.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(selected: boolean) => void"}</TableCode>
            </td>
            <td>
              Callback function that is called when the card is clicked. It receives a boolean value with the new
              selected state of the card. The selectable prop must be true for this to work.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"(event: React.MouseEvent) => void"}</TableCode>
            </td>
            <td>Callback function that is called when the card is clicked.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>selectable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the card can be selected. When the card is clicked, the onChange callback will be called with the
              new selected state of the card. If <Code>href</Code> is defined, the card won't be selectable, even if
              this prop is set to <Code>true</Code>.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>selected</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the card is selected.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <ExtendedTableCode>{Size}</ExtendedTableCode>
            </td>
            <td>Defines the size of the card. Width and height can be set to "fillParent" or "fitContent".</td>
            <td>
              <ExtendedTableCode>{defaultSize}</ExtendedTableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Specifies the tab index of the card.</td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
        </tbody>
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
        title: "Selectable",
        content: <Example example={selectable} defaultIsVisible />,
      },
    ],
  },
];

const CardCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/card/code/CardCodePage.tsx" />
  </DxcFlex>
);

export default CardCodePage;
