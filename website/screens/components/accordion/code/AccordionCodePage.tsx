import {
  DxcFlex,
  DxcTable,
  DxcParagraph,
  DxcAlert,
  DxcLink,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code from "@/common/Code";
import controlledAccordion from "./examples/controlledAccordion";
import uncontrolledAccordion from "./examples/uncontrolledAccordion";
import icons from "./examples/icons";
import controlledAccordionGroup from "./examples/controlledAccordionGroup";
import uncontrolledAccordionGroup from "./examples/uncontrolledAccordionGroup";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";
import Link from "next/link";

const sections = [
  {
    title: "Props",
    content: (
      <DxcAlert type="warning" size="fillParent">
        The padding prop is deprecated, consider using layout components like
        the{" "}
        <Link href="/components/inset/" passHref>
          <DxcLink>inset</DxcLink>
        </Link>
        .
      </DxcAlert>
    ),
    subSections: [
      {
        title: "Accordion",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <HeaderDescriptionCell>Description</HeaderDescriptionCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>label: string</td>
                <td></td>
                <td>The panel label.</td>
              </tr>
              <tr>
                <td>icon: node | string</td>
                <td></td>
                <td>
                  Element or path used as the icon that will be placed next to
                  panel label.
                </td>
              </tr>
              <tr>
                <td>assistiveText: string</td>
                <td></td>
                <td>
                  Assistive text to be placed on the right side of the panel.
                </td>
              </tr>
              <tr>
                <td>disabled: boolean</td>
                <td>
                  <Code>false</Code>
                </td>
                <td>If true, the component will be disabled.</td>
              </tr>
              <tr>
                <td>defaultIsExpanded: boolean</td>
                <td></td>
                <td>
                  Initial state of the panel, only when it is uncontrolled.
                </td>
              </tr>
              <tr>
                <td>isExpanded: boolean</td>
                <td></td>
                <td>
                  Represents the state of the panel. When true, the component
                  will be expanded. If undefined, the component will be
                  uncontrolled and its value will be managed internally by the
                  component.
                </td>
              </tr>
              <tr>
                <td>onChange: function</td>
                <td></td>
                <td>
                  This function will be called when the user clicks the
                  accordion to expand or collapse the panel. The new state of
                  the panel will be passed as a parameter.
                </td>
              </tr>
              <tr>
                <td>children: node</td>
                <td></td>
                <td>
                  The expanded panel of the accordion. This area can be used to
                  render custom content.
                </td>
              </tr>
              <tr>
                <td>margin: string | object</td>
                <td></td>
                <td>
                  Size of the margin to be applied to the component ('xxsmall' |
                  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                  'xxlarge'). You can pass an object with 'top', 'bottom',
                  'left' and 'right' properties in order to specify different
                  margin sizes.
                </td>
              </tr>
              <tr>
                <td>padding: string | object</td>
                <td></td>
                <td>
                  <DxcFlex
                    gap="0.25rem"
                    direction="column"
                    alignItems="baseline"
                  >
                    <StatusTag status="Deprecated">Deprecated</StatusTag>
                    Size of the padding to be applied to the custom area
                    ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' |
                    'xlarge' | 'xxlarge'). You can pass an object with 'top',
                    'bottom', 'left' and 'right' properties in order to specify
                    different padding sizes.
                  </DxcFlex>
                </td>
              </tr>
              <tr>
                <td>tabIndex: number</td>
                <td>0</td>
                <td>Value of the tabindex.</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Accordion Group",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <HeaderDescriptionCell>Description</HeaderDescriptionCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>defaultIndexActive: number</td>
                <td></td>
                <td>
                  Initially active accordion, only when it is uncontrolled.
                </td>
              </tr>
              <tr>
                <td>indexActive: number</td>
                <td></td>
                <td>
                  The index of the active accordion. If undefined, the component
                  will be uncontrolled and the active accordion will be managed
                  internally by the component. If null, the component will be
                  controlled and all accordions will be closed.
                </td>
              </tr>
              <tr>
                <td>disabled: boolean</td>
                <td>
                  <Code>false</Code>
                </td>
                <td>If true, the component will be disabled.</td>
              </tr>
              <tr>
                <td>onActiveChange: function</td>
                <td></td>
                <td>
                  This function will be called when the user clicks on an
                  accordion. The index of the clicked accordion will be passed
                  as a parameter.
                </td>
              </tr>
              <tr>
                <td>margin: string | object</td>
                <td></td>
                <td>
                  Size of the margin to be applied to the component ('xxsmall' |
                  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                  'xxlarge'). You can pass an object with 'top', 'bottom',
                  'left' and 'right' properties in order to specify different
                  margin sizes.
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
        subSections: [
          {
            title: "DxcAccordionGroup.Accordion",
            content: (
              <DxcParagraph>
                This must be defined as children of the accordion group. It has
                the following props:
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
                        <th>Default</th>
                        <HeaderDescriptionCell>
                          Description
                        </HeaderDescriptionCell>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>label: string</td>
                        <td></td>
                        <td>The panel label.</td>
                      </tr>
                      <tr>
                        <td>icon: node | string</td>
                        <td></td>
                        <td>
                          Element or path used as the icon that will be placed
                          next to panel label.
                        </td>
                      </tr>
                      <tr>
                        <td>assistiveText: string</td>
                        <td></td>
                        <td>
                          Assistive text to be placed on the right side of the
                          panel.
                        </td>
                      </tr>
                      <tr>
                        <td>disabled: boolean</td>
                        <td>
                          <Code>false</Code>
                        </td>
                        <td>If true, the component will be disabled.</td>
                      </tr>
                      <tr>
                        <td>children: node</td>
                        <td></td>
                        <td>
                          The expanded panel of the accordion. This area can be
                          used to render custom content.
                        </td>
                      </tr>
                      <tr>
                        <td>padding: string | object</td>
                        <td></td>
                        <td>
                          <DxcFlex
                            gap="0.25rem"
                            direction="column"
                            alignItems="baseline"
                          >
                            <StatusTag status="Deprecated">
                              Deprecated
                            </StatusTag>
                            Size of the padding to be applied to the custom area
                            ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
                            | 'xlarge' | 'xxlarge'). You can pass an object with
                            'top', 'bottom', 'left' and 'right' properties in
                            order to specify different padding sizes.
                          </DxcFlex>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
            ],
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
        content: (
          <Example example={controlledAccordionGroup} defaultIsVisible />
        ),
      },
      {
        title: "Uncontrolled Accordion Group",
        content: (
          <Example example={uncontrolledAccordionGroup} defaultIsVisible />
        ),
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
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/code/AccordionCodePage.tsx" />
    </DxcFlex>
  );
};

export default AccordionUsagePage;
