import { DxcFlex, DxcTable, DxcParagraph, DxcLink } from "@repo/ui";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlledAccordion from "./examples/controlledAccordion";
import uncontrolledAccordion from "./examples/uncontrolledAccordion";
import icons from "./examples/icons";
import controlledAccordionGroup from "./examples/controlledAccordionGroup";
import uncontrolledAccordionGroup from "./examples/uncontrolledAccordionGroup";
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
            <td>defaultIsExpanded</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Initial state of the panel, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>isExpanded</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              Represents the state of the panel. When true, the component will be expanded. If undefined, the component
              will be uncontrolled and its value will be managed internally by the component.
            </td>
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
              name or SVG element as the icon that will be placed next to the panel label. When using Material Symbols,
              replace spaces with underscores. By default they are outlined if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>.
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
            <td>onChange</td>
            <td>
              <TableCode>{"(isExpanded: boolean) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the accordion to expand or collapse the panel. The new
              state of the panel will be passed as a parameter.
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
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>The expanded panel of the accordion. This area can be used to render custom content.</td>
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
  {
    title: "Accordion Group",
    content: <DxcParagraph>Groups two or more accordions to distribute large volumes of information.</DxcParagraph>,
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
                <td>defaultIndexActive</td>
                <td>
                  <TableCode>number</TableCode>
                </td>
                <td>Initially active accordion, only when it is uncontrolled.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>indexActive</td>
                <td>
                  <TableCode>number</TableCode>
                </td>
                <td>
                  The index of the active accordion. If undefined, the component will be uncontrolled and the active
                  accordion will be managed internally by the component. If null, the component will be controlled and
                  all accordions will be closed.
                </td>
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
                <td>onActiveChange</td>
                <td>
                  <TableCode>{"(indexActive: number) => void"}</TableCode>
                </td>
                <td>
                  This function will be called when the user clicks on an accordion. The index of the clicked accordion
                  will be passed as a parameter.
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
                  <TableCode>
                    {"React.ReactElement <AccordionPropsType>[] | React.ReactElement <AccordionPropsType>"}
                  </TableCode>
                </td>
                <td>Contains one or more accordions.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>margin</td>
                <td>
                  <TableCode>
                    'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin
                  </TableCode>
                </td>
                <td>
                  Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left'
                  and 'right' properties in order to specify different margin sizes.
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "DxcAccordionGroup.Accordion",
        content: <DxcParagraph>Single accordion, part of an accordion group.</DxcParagraph>,
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
                    <td>icon</td>
                    <td>
                      <TableCode>string | {"React.ReactNode & React.SVGProps <SVGSVGElement>"}</TableCode>
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
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Controlled Accordion",
        content: <Example example={controlledAccordion} defaultIsVisible />,
      },
      {
        title: "Uncontrolled Accordion",
        content: <Example example={uncontrolledAccordion} defaultIsVisible />,
      },
      {
        title: "Controlled Accordion Group",
        content: <Example example={controlledAccordionGroup} defaultIsVisible />,
      },
      {
        title: "Uncontrolled Accordion Group",
        content: <Example example={uncontrolledAccordionGroup} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
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
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/code/AccordionCodePage.tsx" />
    </DxcFlex>
  );
};

export default AccordionUsagePage;
