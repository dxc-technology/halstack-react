import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import sortable from "./examples/sortable";
import Code, { TableCode, ExtendedTableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import reduced from "./examples/reduced";
import Link from "next/link";
import paginatorHidden from "./examples/paginatorHidden";
import virtualized from "./examples/virtualized";

const actionsType = `{
  icon: string | SVG;
  title: string;
  onClick: () => void;
  disabled?: boolean;
  tabIndex?: number;
}[] | {
  title: string;
  onClick: (value?: string) => void;
  disabled?: boolean;
  tabIndex?: number;
  options: Option[];
}[]`;

const cellTypeString = `{ 
  displayValue: React.ReactNode; 
  sortValue?: string | number | Date; 
}[]`;

const columnTypeString = `{ 
  displayValue: React.ReactNode; 
  isSortable?: boolean; 
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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                columns
              </DxcFlex>
            </td>
            <td>
              <TableCode>Column[]</TableCode>
              <p>
                being <Code>Column</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{columnTypeString}</ExtendedTableCode>
            </td>
            <td>
              An array of objects representing the columns of the table. Each object has the following properties:
              <ul>
                <li>
                  <b>displayValue</b>: Column display value.
                </li>
                <li>
                  <b>isSortable</b>: Boolean value to indicate whether the column is sortable or not.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                height
              </DxcFlex>
            </td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              A fixed height must be set to enable virtualization. If no height is provided, the table will
              automatically adjust to the height of its content, and virtualization will not be applied.
            </td>
            <td>
              <td>-</td>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                rows
              </DxcFlex>
            </td>
            <td>
              <TableCode>Row[]</TableCode>
              <p>
                being <Code>Row</Code> a <Code>Cell[]</Code> and being <Code>Cell</Code> an object with the following
                properties:
              </p>
              <ExtendedTableCode>{cellTypeString}</ExtendedTableCode>
            </td>
            <td>
              An array of objects representing the rows of the table, you will have as many objects as columns in the
              table. Each row is a set of cells that have the following properties:
              <ul>
                <li>
                  <b>displayValue</b>: Value to be displayed in the cell.
                </li>
                <li>
                  <b>sortValue</b>: Value to be used when sorting the table by that column. If not indicated
                  displayValue will be used for sorting.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                mode
              </DxcFlex>
            </td>
            <td>
              <TableCode>'default' | 'reduced'</TableCode>
            </td>
            <td>
              The available table modes:
              <ul>
                <li>
                  <b>default</b>: Default table size.
                </li>
                <li>
                  <b>reduced</b>: More compact table with less spacing for high density information.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                hidePaginator
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, paginator will not be displayed.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>showGoToPage</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, a select component for navigation between pages will be displayed.</td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>itemsPerPage</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of items per page.</td>
            <td>
              <TableCode>5</TableCode>
            </td>
          </tr>
          <tr>
            <td>itemsPerPageOptions</td>
            <td>
              <TableCode>number[]</TableCode>
            </td>
            <td>An array of numbers representing the items per page options.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsPerPageFunction</td>
            <td>
              <TableCode>{"(value: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user selects an item per page option. The value selected will be
              passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to the sortable icon.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcResultsetTable.ActionsCell",
    content: (
      <DxcParagraph>
        A compound component aimed to be used inside the resultset table's displayValue to display up to three actions.
      </DxcParagraph>
    ),
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
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    actions
                  </DxcFlex>
                </td>
                <td>
                  <ExtendedTableCode>{actionsType}</ExtendedTableCode>
                </td>
                <td>
                  <p>
                    It represents a list of interactive elements that will work as buttons or as a dropdown. Those with
                    an <TableCode>icon</TableCode> from{" "}
                    <DxcLink newWindow href="https://fonts.google.com/icons">
                      Material Symbols
                    </DxcLink>{" "}
                    or a <TableCode>SVG</TableCode> are treated as buttons. If any element lacks an{" "}
                    <TableCode>icon</TableCode> and includes <TableCode>options</TableCode>, it is interpreted as a
                    dropdown. Only the first action with options will be displayed and only up to 3 actions. In the case
                    of the dropdown the click function will pass the value assigned to the option, click{" "}
                    <Link href="/components/dropdown" passHref legacyBehavior>
                      <DxcLink>here</DxcLink>
                    </Link>{" "}
                    for more details.
                  </p>
                </td>
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
        title: "Reduced usage",
        content: <Example example={reduced} defaultIsVisible />,
      },
      {
        title: "Sortable",
        content: <Example example={sortable} defaultIsVisible />,
      },
      {
        title: "No paginator",
        content: <Example example={paginatorHidden} defaultIsVisible />,
      },
      {
        title: "Virtualized",
        content: <Example example={virtualized} defaultIsVisible />,
      },
    ],
  },
];

const ResultsetTableCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/resultset-table/code/ResultsetTableCodePage.tsx" />
  </DxcFlex>
);

export default ResultsetTableCodePage;
