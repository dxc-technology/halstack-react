import { DxcFlex, DxcTable, DxcParagraph, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import badgeStatusLight from "./examples/badgeStatusLight";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";
import accordions from "./examples/accordions";
import TableCode from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";
import Code from "@/common/Code";

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
            <td>independent</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              When true, limits the user to single-open section at a time. When false, multiple sections can be opened
              simultaneously.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultIndexActive</td>
            <td>
              <TableCode>number | number[]</TableCode>
            </td>
            <td>
              Initially active accordion, only when it is uncontrolled. If the accordion is not independent, several
              accordions can be activated by default.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>indexActive</td>
            <td>
              <TableCode>number | number[]</TableCode>
            </td>
            <td>
              The index of the active accordion. If undefined, the component will be uncontrolled and the active
              accordion will be managed internally by the component. If null, the component will be controlled and all
              accordions will be closed. If the accordion is not independent, several accordions can be activated.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onActiveChange</td>
            <td>
              <TableCode>{`(index: number | number[]) => void`}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on an accordion. The index of the clicked accordion will
              be passed as a parameter.
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
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>{`ReactElement<AccordionPropsType>[] | ReactElement<AccordionPropsType>`}</TableCode>
            </td>
            <td>Contains one or more accordion items.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcAccordion.AccordionItem",
    content: <DxcParagraph>Accordion item, that composes the accordion component.</DxcParagraph>,
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
                    label
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>The panel label.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="new" />
                    subLabel
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Additional info label positioned under the label.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="new" />
                    badge
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>{"{ position: 'before' | 'after'; element: ReactNode }"}</TableCode>
                </td>
                <td>Badge component to add extra value to the accordion.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="new" />
                    statusLight
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>Status light component to add extra value to the accordion.</td>
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
                  prefix the symbol name with <Code>"filled_"</Code>.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>assistiveText</td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Assistive text to be placed on the right side of the panel.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>If true, the component will be disabled.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>The expanded panel of the accordion. This area can be used to render custom content.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>tabIndex</td>
                <td>
                  <TableCode>number</TableCode>
                </td>
                <td>
                  Value of the <Code>tabindex</Code> attribute.
                </td>
                <td>
                  <TableCode>0</TableCode>
                </td>
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
        title: "Controlled Accordion",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Uncontrolled Accordion",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Badge and status light",
        content: <Example example={badgeStatusLight} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
      {
        title: "Group of accordions",
        content: <Example example={accordions} defaultIsVisible />,
      },
    ],
  },
];

const AccordionUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/accordion/code/AccordionCodePage.tsx" />
    </DxcFlex>
  );
};

export default AccordionUsagePage;
