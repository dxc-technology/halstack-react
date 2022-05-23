import {
  DxcText,
  DxcTable,
  DxcList,
  DxcStack,
  DxcLink,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "What is a theme?",
    content: (
      <>
        <DxcText as="p">
          In order to understand what a theme is, we need to understand first
          that the definition of colors, sizes, shapes... is an intrinsic part
          of a design system. Since these parameters are essential for
          guaranteeing accessibility and a good user experience, having the
          ability of changing them, might go frontally against the intentions of
          the design system.
        </DxcText>
        <DxcText as="p">
          This is precisely what themes are, just custom defined objects that
          allow users to{" "}
          <strong>
            override fundamental decisions of Halstack Design System
          </strong>
          . They are a way of escaping the restrictions imposed by the Design
          System, and using themes could result in applications not being
          compliant with the Halstack guidelines, or even introducing many
          different types of accessibility issues if not used carefully.
        </DxcText>
        <DxcText as="p">
          Typically, you would create a Halstack Design System application, and
          after that,{" "}
          <strong>only if there is a white-labeling requirement</strong>, we
          would apply a theme on top of the base application. This, and only
          this, is the whole purpose of using themes.
        </DxcText>
      </>
    ),
  },
  {
    title: "Different theming strategies",
    content: (
      <>
        <DxcText as="p">
          As explained in the previous section, themes are basically a list of
          properties that allow you to override fundamental decisions of the
          design system. Based on the amount of decisions that can be
          overridden, Halstack Design System has two different theming
          strategies:
        </DxcText>
        <DxcList>
          <DxcText>
            <strong>Opinionated theme.</strong> This theming strategy lets you
            change some decisions of the design system, but is still opinionated
            about the ones we consider fundamental. The list of configurable
            properties is small, but it applies at the component level. You can
            generate the theme object using our{" "}
            <DxcLink
              href="https://developer.dxc.com/tools/react/next/#/themeBuilder"
              newWindow
            >
              opinionated theme generator
            </DxcLink>
            .
          </DxcText>
          <DxcText>
            <strong>Advanced theme.</strong> This theming strategy lets you
            change most of the design decisions of the design system (all the
            design tokens), trying to be as little opinionated as possible. Have
            in mind that it is impossible to make the components 100%
            configurable without writing actual code, since some design
            decisions are structural to the component. The list of configurable
            properties is large, and it applies at the component level. You can
            generate the theme object using our{" "}
            <DxcLink
              href="https://developer.dxc.com/tools/react/next/#/themeBuilder/advancedTheme"
              newWindow
            >
              advanced theme generator
            </DxcLink>
            .
          </DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Opinionated theme inputs list",
    content: (
      <>
        <DxcText as="p">
          Tokens in the second column, which names are in bold, will have the
          value that results from applying the transformation indicated in
          brackets to the &#39;Theme input&#39;. (If nothing, they will have the
          same value as the &#39;Theme input&#39;).
        </DxcText>
        <DxcText as="p">
          Theme inputs value must be hexadecimal without alpha channel.
        </DxcText>
      </>
    ),
    subSections: [
      {
        title: "Accordion",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accent color</td>
                <td>
                  <Code>arrowColor</Code>
                  <br />
                  <br />
                  <Code>iconColor</Code>
                  <br />
                  <br />
                  <Code>focusBorderColor</Code>
                  <br />
                  <br />
                  <Code>hoverBackgroundColor</Code> (16% of opacity)
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>assistiveTextFontColor</Code>
                  <br />
                  <br />
                  <Code>titleLabelFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Button",
        content: (
          <DxcTable>
            <thead>
              <th>Theme Input</th>
              <th>Tokens (calculation)</th>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>primaryBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>secondaryFontColor</Code>
                  <br />
                  <br />
                  <Code>secondaryBorderColor</Code>
                  <br />
                  <br />
                  <Code>secondaryHoverBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>textFontColor</Code>
                  <br />
                  <br />
                  <Code>primaryHoverBackgroundColor</Code> (-8% of lightness)
                  <br />
                  <br />
                  <Code>primaryActiveBackgroundColor</Code> (-18% of lightness)
                  <br />
                  <br />
                  <Code>secondaryActiveBackgroundColor</Code> (-18% of
                  lightness)
                  <br />
                  <br />
                  <Code>textHoverBackgroundColor</Code> (+57% of lightness)
                  <br />
                  <br />
                  <Code>textActiveBackgroundColor</Code> (+52% of lightness)
                </td>
              </tr>
              <tr>
                <td>Primary font color</td>
                <td>
                  <Code>primaryFontColor</Code>
                </td>
              </tr>
              <tr>
                <td>Secondary hover font color</td>
                <td>
                  <Code>secondaryHoverFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Checkbox",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColorChecked</Code>
                  <br />
                  <br />
                  <Code>borderColor</Code>
                  <br />
                  <br />
                  <Code>hoverBackgroundColorChecked</Code> (-15% of lightness)
                  <br />
                  <br />
                  <Code>hoverBorderColor</Code> (-15% of lightness)
                </td>
              </tr>
              <tr>
                <td>Check color</td>
                <td>
                  <Code>checkColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>fontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Chip",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>fontColor</Code>
                  <br />
                  <br />
                  <Code>iconColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Date Input",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selected date background color</td>
                <td>
                  <Code>pickerSelectedDateBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>pickerHoverDateBackgroundColor</Code> (34% of opacity)
                </td>
              </tr>
              <tr>
                <td>Selected date font color</td>
                <td>
                  <Code>pickerSelectedDateColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Dropdown",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>buttonBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>hoverButtonBackgroundColor</Code> (34% of opacity)
                  <br />
                  <br />
                  <Code>activeButtonBackgroundColor</Code> (70% of opacity)
                  <br />
                  <br />
                  <Code>hoverOptionBackgroundColor</Code> (34% of opacity)
                  <br />
                  <br />
                  <Code>activeOptionBackgroundColor</Code> (70% of opacity)
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>buttonFontColor</Code>
                  <br />
                  <br />
                  <Code>caretIconColor</Code>
                  <br />
                  <br />
                  <Code>buttonIconColor</Code>
                </td>
              </tr>
              <tr>
                <td>Option font color</td>
                <td>
                  <Code>optionFontColor</Code>
                  <br />
                  <br />
                  <Code>optionIconColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "File input",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>dropLabelFontColor</Code>
                  <br />
                  <br />
                  <Code>fileNameFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Footer",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>bottomLinksFontColor</Code>
                  <br />
                  <br />
                  <Code>copyrightFontColor</Code>
                  <br />
                  <br />
                  <Code>socialLinksColor</Code>
                </td>
              </tr>
              <tr>
                <td>Accent color</td>
                <td>
                  <Code>bottomLinksDividerColor</Code>
                </td>
              </tr>
              <tr>
                <td>Logo</td>
                <td>
                  <Code>logo</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Header",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Accent color</td>
                <td>
                  <Code>underlinedColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>hamburguerFontColor</Code>
                </td>
              </tr>
              <tr>
                <td>Menu base color</td>
                <td>
                  <Code>menuBackgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Hamburguer color</td>
                <td>
                  <Code>hamburguerIconColor</Code>
                  <br />
                  <br />
                  <Code>hamburguerHoverColor</Code> (16% of opacity)
                </td>
              </tr>
              <tr>
                <td>Logo</td>
                <td>
                  <Code>logo</Code>
                </td>
              </tr>
              <tr>
                <td>Responsive logo</td>
                <td>
                  <Code>logoResponsive</Code>
                </td>
              </tr>
              <tr>
                <td>Content color</td>
                <td>
                  <Code>contentColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Paginator",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>fontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Progress bar",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>totalLineColor</Code>
                </td>
              </tr>
              <tr>
                <td>Accent color</td>
                <td>
                  <Code>trackLineColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>valueFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Radio",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>color</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>fontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
          <HeadingLink level={3}>Radio Group</HeadingLink>
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>radioInputColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>radioInputLabelFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Select",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selected option background color</td>
                <td>
                  <Code>selectedListOptionBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>selectedHoverListOptionBackgroundColor</Code> (-5% of
                  lightness)
                  <br />
                  <br />
                  <Code>selectedActiveListOptionBackgroundColor</Code> (-10% of
                  lightness)
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>listOptionFontColor</Code>
                  <br />
                  <br />
                  <Code>valueFontColor</Code>
                  <br />
                  <br />
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>placeholderFontColor</Code> (50% of opacity)
                  <br />
                  <br />
                  <Code>collapseIndicatorColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Sidenav",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>backgroundColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Slider",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>thumbBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>tickBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>trackLineColor</Code>
                  <br />
                  <br />
                  <Code>hoverThumbBackgroundColor</Code> (-15% of lightness)
                  <br />
                  <br />
                  <Code>activeThumbBackgroundColor</Code> (-15% of lightness)
                  <br />
                  <br />
                  <Code>totalLineColor</Code> (34% of opacity)
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>limitValuesFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spinner",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>totalCircleColor</Code>
                </td>
              </tr>
              <tr>
                <td>Accent color</td>
                <td>
                  <Code>trackCircleColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>progressValueFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Switch",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Checked base color</td>
                <td>
                  <Code>checkedTrackBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>disabledCheckedTrackBackgroundColor</Code> (34% of
                  opacity)
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Table",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>headerBackgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Header font color</td>
                <td>
                  <Code>headerFontColor</Code>
                  <br />
                  <br />
                  <Code>sortIconColor</Code>
                </td>
              </tr>
              <tr>
                <td>Cell font color</td>
                <td>
                  <Code>dataFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Tabs",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>selectedFontColor</Code>
                  <br />
                  <br />
                  <Code>selectedIconColor</Code>
                  <br />
                  <br />
                  <Code>selectedUnderlineColor</Code>
                  <br />
                  <br />
                  <Code>focusOutline</Code>
                  <br />
                  <br />
                  <Code>hoverBackgroundColor</Code> (+58% of lightness)
                  <br />
                  <br />
                  <Code>pressedBackgroundColor</Code> (+53% of lightness)
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Text input",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>valueFontColor</Code>
                  <br />
                  <br />
                  <Code>actionIconColor</Code>
                  <br />
                  <br />
                  <Code>hoverActionIconColor</Code>
                  <br />
                  <br />
                  <Code>focusActionIconColor</Code>
                  <br />
                  <br />
                  <Code>activeActionIconColor</Code>
                  <br />
                  <br />
                  <Code>suffixColor</Code> (50% of opacity)
                  <br />
                  <br />
                  <Code>prefixColor</Code> (50% of opacity)
                  <br />
                  <br />
                  <Code>placeholderFontColor</Code> (50% of opacity)
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Toggle group",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selected base color</td>
                <td>
                  <Code>selectedBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>unselectedActiveBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>selectedHoverBackgroundColor</Code> (-8% of lightness)
                  <br />
                  <br />
                  <Code>selectedActiveBackgroundColor</Code> (-18% of lightness)
                  <br />
                  <br />
                  <Code>selectedDisabledBackgroundColor</Code> (+57% of
                  lightness)
                </td>
              </tr>
              <tr>
                <td>Selected font color</td>
                <td>
                  <Code>selectedFontColor</Code>
                  <br />
                  <br />
                  <Code>selectedDisabledFontColor</Code> (+42% of lightness)
                </td>
              </tr>
              <tr>
                <td>Unselected base color</td>
                <td>
                  <Code>unselectedBackgroundColor</Code>
                  <br />
                  <br />
                  <Code>unselectedHoverBackgroundColor</Code> (-8% of lightness)
                </td>
              </tr>
              <tr>
                <td>Unselected font color</td>
                <td>
                  <Code>unselectedFontColor</Code>
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Wizard",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Theme Input</th>
                <th>Tokens (calculation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base color</td>
                <td>
                  <Code>selectedStepperBackgroundColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>selectedStepperBorderColor</Code>
                </td>
              </tr>
              <tr>
                <td>Selected font color</td>
                <td>
                  <Code>selectedStepperFontColor</Code>
                </td>
              </tr>
              <tr>
                <td>Font color</td>
                <td>
                  <Code>labelFontColor</Code>
                  <br />
                  <br />
                  <Code>activeLabelFontColor</Code>
                  <br />
                  <br />
                  <Code>helperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>activeHelperTextFontColor</Code>
                  <br />
                  <br />
                  <Code>unvisitedStepperBorderColor</Code> (60% of opacity)
                  <br />
                  <br />
                  <Code>unvisitedStepperFontColor</Code> (60% of opacity)
                  <br />
                  <br />
                  <Code>unvisitedLabelFontColor</Code> (60% of opacity)
                  <br />
                  <br />
                  <Code>unvisitedHelperTextFontColor</Code> (60% of opacity)
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const Themes = () => {
  return (
    <DxcStack gutter="xxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Themes" weight="bold"></DxcHeading>
        </DxcStack>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Themes"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/principles/themes/ThemesPage.tsx" />
    </DxcStack>
  );
};

export default Themes;
