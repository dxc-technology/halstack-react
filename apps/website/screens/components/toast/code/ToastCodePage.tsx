import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";
import Example from "@/common/example/Example";
import basic from "./examples/basicUsage";
import semantic from "./examples/semantic";
import loading from "./examples/loading";
import Code from "@/common/Code";

const actionTypeString = `{
  icon: string | 
    (React.ReactNode 
      & React.SVGProps<SVGSVGElement>);
  label: string;
  onClick: () => void;
}`;

const sections = [
  {
    title: "Toasts queue",
    content: <DxcParagraph>A component to be rendered at the top level of the application.</DxcParagraph>,
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
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>ReactNode</TableCode>
                </td>
                <td>
                  Tree of components from which the <Code>useToast</Code> hook can be triggered.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>
                  <TableCode>number</TableCode>
                </td>
                <td>
                  Duration in milliseconds before a toast automatically hides itself. The range goes from 3000ms to
                  5000ms, any other value will not be taken into consideration.
                </td>
                <td>
                  <TableCode>3000</TableCode>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "useToast",
    content: (
      <>
        <DxcParagraph>
          A hook to queue toasts from any part of your application contained inside the Toast queue. It returns an
          object with five methods, each explained below:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Method</th>
              <th style={{ minWidth: "224px" }}>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>
                <TableCode>{`(toast: Default) => void`}</TableCode>
              </td>
              <td>Shows a toast with no implicit semantic meaning.</td>
            </tr>
            <tr>
              <td>info</td>
              <td>
                <TableCode>{`(toast: Semantic) => void`}</TableCode>
              </td>
              <td>Shows a toast with an information semantic.</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>
                <TableCode>{`(toast: Loading) => (() => void)`}</TableCode>
              </td>
              <td>
                Shows a loading status toast. Visually and semantically, it is the same as an information toast, but
                with the difference that it never disappears from the screen. Its removal will always depend on the
                user, thanks to the function returned by this method.
              </td>
            </tr>
            <tr>
              <td>success</td>
              <td>
                <TableCode>{`(toast: Semantic) => void`}</TableCode>
              </td>
              <td>Shows a toast with a success semantic.</td>
            </tr>
            <tr>
              <td>warning</td>
              <td>
                <TableCode>{`(toast: Semantic) => void`}</TableCode>
              </td>
              <td>Shows a toast with a warning semantic.</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcParagraph>
          Each method has a different argument type, which are detailed in the following sections.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Default",
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
                <td>action</td>
                <td>
                  <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
                </td>
                <td>Tertiary button which performs a custom action, specified by the user.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
                </td>
                <td>
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element as the icon that will be placed next to the panel label. When using Material
                  Symbols, replace spaces with underscores. By default they are outlined if you want it to be filled
                  prefix the symbol name with <TableCode>"filled_"</TableCode>.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="required" />
                    message
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Message to be displayed as a toast.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Loading",
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
                <td>action</td>
                <td>
                  <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
                </td>
                <td>Tertiary button which performs a custom action, specified by the user.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="required" />
                    message
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Message to be displayed as a toast.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Semantic",
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
                <td>action</td>
                <td>
                  <ExtendedTableCode>{actionTypeString}</ExtendedTableCode>
                </td>
                <td>Tertiary button which performs a custom action, specified by the user.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>hideSemanticIcon</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>Flag that allows to hide the semantic icon of the toast.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="required" />
                    message
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Message to be displayed as a toast.</td>
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
        content: <Example defaultIsVisible example={basic} />,
      },
      {
        title: "Semantic toasts",
        content: <Example defaultIsVisible example={semantic} />,
      },
      {
        title: "Loading toast",
        content: (
          <>
            <DxcParagraph>
              A loading toast is a toast that will never disappear from the screen. Its removal will always depend on
              the user, thanks to the function returned by the <Code>loading</Code> method. This allows users to have
              full control over the status of the process.
            </DxcParagraph>
            <Example defaultIsVisible example={loading} />
          </>
        ),
      },
    ],
  },
];

const ToastCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toast/code/ToastCodePage.tsx" />
  </DxcFlex>
);

export default ToastCodePage;
