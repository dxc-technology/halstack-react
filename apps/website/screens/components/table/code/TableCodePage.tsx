import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import { TableCode, ExtendedTableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import basic from "./examples/basicUsage";
import reduced from "./examples/reduced";
import Link from "next/link";
import actions from "./examples/actions";

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
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The center section of the table. Can be used to render custom content in this area.</td>
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
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcTable.ActionsCell",
    content: (
      <DxcParagraph>
        A compound component aimed to be used inside the table to display up to three actions.
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
        content: (
          <>
            <Example example={basic} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Reduced usage",
        content: <Example example={reduced} defaultIsVisible />,
      },
      {
        title: "Actions cell",
        content: <Example example={actions} defaultIsVisible />,
      },
    ],
  },
];

const TableCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/table/code/TableCodePage.tsx" />
  </DxcFlex>
);

export default TableCodePage;
