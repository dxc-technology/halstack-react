import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcParagraph, DxcFlex, DxcTable, DxcLink } from "@repo/ui";
import basicUsage from "./examples/basicUsage";
import nestedList from "./examples/nestedList";
import TableCode from "@/common/TableCode";

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
            <td>type</td>
            <td>
              <TableCode>'disc' | 'circle' | 'square' | 'number' | 'icon'</TableCode>
            </td>
            <td>Defines the style of the bullet point in the list.</td>
            <td>
              <Code>'disc'</Code>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>string | {"(React.ReactNode & React.SVGProps<SVGSVGElement>)"}</TableCode>
            </td>
            <td>
              <DxcLink newWindow href="https://fonts.google.com/icons">
                Material Symbol
              </DxcLink>{" "}
              name or SVG element to be displayed as the bullet. When using Material Symbols, replace spaces with
              underscores. By default they are outlined if you want it to be filled prefix the symbol name with{" "}
              <TableCode>"filled_"</TableCode>.
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcBulletedList.Item",
    content: <DxcParagraph>Everything between the tags will be displayed as a text item in the list.</DxcParagraph>,
    subSections: [
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
                <td>Text to be shown in the list.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Nested list",
        content: <Example example={nestedList} defaultIsVisible />,
      },
    ],
  },
];

const BulletedListCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bulleted-list/code/BulletedListCodePage.tsx" />
    </DxcFlex>
  );
};

export default BulletedListCodePage;
