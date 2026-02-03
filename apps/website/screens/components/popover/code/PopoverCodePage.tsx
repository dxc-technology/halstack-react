import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import Example from "@/common/example/Example";
import uncontrolled from "./examples/uncontrolled";
import controlled from "./examples/controlled";

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
            <td>actionToOpen</td>
            <td>
              <TableCode>'click' | 'hover'</TableCode>
            </td>
            <td>Action that triggers the popover to open.</td>
            <td>
              <TableCode>'click'</TableCode>
            </td>
          </tr>
          <tr>
            <td>align</td>
            <td>
              <TableCode>'start' | 'center' | 'end'</TableCode>
            </td>
            <td>Alignment of the popover relative to the trigger element.</td>
            <td>
              <TableCode>'center'</TableCode>
            </td>
          </tr>
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
            <td>Element that triggers the popover and works as the anchor.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>hasTip</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the popover should display a tip (arrow).</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>isOpen</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Controlled open state of the popover. If it is left undefined, it will be uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              Callback function when the popover is opened. Used only in controlled mode and if the trigger lacks the
              events to manage the controlled behavior.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onOpen</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>Callback function when the popover is closed.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                popoverContent
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Content to be displayed inside the popover.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>side</td>
            <td>
              <TableCode>'top' | 'bottom' | 'left' | 'right'</TableCode>
            </td>
            <td>Side of the trigger where the popover will appear.</td>
            <td>
              <TableCode>'bottom'</TableCode>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      { title: "Uncontrolled Popover", content: <Example example={uncontrolled} defaultIsVisible /> },
      { title: "Controlled Popover", content: <Example example={controlled} defaultIsVisible /> },
    ],
  },
];

const PopoverCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/popover/code/PopoverCodePage.tsx" />
  </DxcFlex>
);

export default PopoverCodePage;
