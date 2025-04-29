import {
  DxcTable,
  DxcFlex,
  DxcLink,
  DxcHeading,
  DxcParagraph,
  DxcBulletedList,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import JsonContainer from "@/common/JsonContainer";
import bloomTheme from "./examples/bloomTheme";
import defaultAdvancedTheme from "@/common/themes/advanced-theme.json";

const sections = [
  {
    title: "What is a theme?",
    content: (
      <>
        <DxcParagraph>
          In order to understand what a theme is, we need to understand first that the definition of colors, sizes,
          shapes... is an intrinsic part of a design system. Since these parameters are essential for guaranteeing
          accessibility and a good user experience, having the ability of changing them, might go frontally against the
          intentions of the design system.
        </DxcParagraph>
        <DxcParagraph>
          This is precisely what themes are, just custom defined objects that allow users to{" "}
          <strong>override fundamental decisions of Halstack Design System</strong>. They are a way of escaping the
          restrictions imposed by the Design System, and using themes could result in applications not being compliant
          with the Halstack guidelines, or even introducing many different types of accessibility issues if not used
          carefully.
        </DxcParagraph>
        <DxcParagraph>
          Typically, you would create a Halstack Design System application, and after that,{" "}
          <strong>only if there is a white-labeling requirement</strong>, we would apply a theme on top of the base
          application. This, and only this, is the whole purpose of using themes.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Different theming strategies",
    content: (
      <>
        <DxcParagraph>
          As explained in the previous section, themes are basically a list of properties that allow you to override
          fundamental decisions of the design system. Based on the amount of decisions that can be overridden, Halstack
          Design System has two different theming strategies which will be explained below:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Opinionated theme.</DxcBulletedList.Item>
          <DxcBulletedList.Item>Advanced theme.</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
    subSections: [
      {
        title: "Opinionated theme",
        content: (
          <>
            <DxcParagraph>
              This theming strategy lets you change some decisions of the design system, but is still opinionated about
              the ones we consider fundamental. The list of configurable properties is small, but it applies at the
              component level.
            </DxcParagraph>
            <DxcAlert
              title="Opinionated theming"
              semantic="info"
              message={{
                text: (
                  <>
                    We strongly recommend using the{" "}
                    <Link href="/theme-generator/opinionated-theme" passHref legacyBehavior>
                      <DxcLink>opinionated theme generator</DxcLink>
                    </Link>{" "}
                    to create the theme, but you can also create it yourself from scratch.{" "}
                  </>
                ),
              }}
              closable={false}
            />
            <DxcParagraph>
              Either through the theme-generator or by creating it from scratch, you will have to build a theme
              containing as many objects as components you want to customize. The props of each component are a
              key-value pair where:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>key:</strong> Corresponds to the 'Theme input' column of the tables that you can see in the
                Opinionated theme input list section.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>value:</strong> The color, must be hexadecimal without alpha channel.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              In the opinionated theme we must take into account that some of the colours that affect the component will
              be calculated based on the theme inputs of the component. As you can see as follows:
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "Opinionated theme inputs list",
            content: (
              <>
                <DxcParagraph>
                  Tokens in the second column, which names are in bold, will have the value that results from applying
                  the transformation indicated in brackets to the &#39;Theme input&#39;. (If nothing, they will have the
                  same value as the &#39;Theme input&#39;).
                </DxcParagraph>
                <DxcParagraph>Theme inputs value must be hexadecimal without alpha channel.</DxcParagraph>
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
                          <Code>hoverBackgroundColor</Code> (+57% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Title font color</td>
                        <td>
                          <br />
                          <Code>titleLabelFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Sublabel font color</td>
                        <td>
                          <br />
                          <Code>subLabelFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Assistive text font color</td>
                        <td>
                          <Code>assistiveTextFontColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Alert",
                content: (
                  <DxcParagraph>
                    The Alert component does not include theme inputs. The colors used in this component are universal
                    semantic colors, which we believe should remain unchanged to prevent confusion and ensure
                    consistency.
                  </DxcParagraph>
                ),
              },
              {
                title: "Button",
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
                          <Code>primaryDefaultFontColor</Code>
                          <br />
                          <br />
                          <Code>primaryDefaultBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>secondaryDefaultFontColor</Code>
                          <br />
                          <br />
                          <Code>secondaryDefaultBorderColor</Code>
                          <br />
                          <br />
                          <Code>secondaryHoverDefaultBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>tertiaryDefaultFontColor</Code>
                          <br />
                          <br />
                          <Code>primaryHoverDefaultBackgroundColor</Code> (-8% of lightness)
                          <br />
                          <br />
                          <Code>primaryActiveDefaultBackgroundColor</Code> (-18% of lightness)
                          <br />
                          <br />
                          <Code>secondaryActiveDefaultBackgroundColor</Code> (-18% of lightness)
                          <br />
                          <br />
                          <Code>tertiaryHoverDefaultBackgroundColor</Code> (+57% of lightness)
                          <br />
                          <br />
                          <Code>tertiaryActiveDefaultBackgroundColor</Code> (+52% of lightness)
                          <br />
                          <br />
                          <Code>primaryDisabledDefaultBackgroundColor</Code> (+42% of lightness)
                          <br />
                          <br />
                          <Code>primaryDisabledDefaultFontColor</Code> (+42% of lightness)
                          <br />
                          <br />
                          <Code>secondaryDisabledDefaultBorderColor</Code> (+42% of lightness)
                          <br />
                          <br />
                          <Code>secondaryDisabledDefaultFontColor</Code> (+42% of lightness)
                          <br />
                          <br />
                          <Code>tertiaryDisabledDefaultFontColor</Code> (+42% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Primary font color</td>
                        <td>
                          <Code>primaryDefaultFontColor</Code>
                          <br />
                          <br />
                          <Code>primaryDisabledDefaultFontColor</Code> (+42% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary hover font color</td>
                        <td>
                          <Code>secondaryHoverDefaultFontColor</Code>
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
                        </td>
                      </tr>
                      <tr>
                        <td>Icon color</td>
                        <td>
                          <Code>iconColor</Code>
                          <br />
                          <br />
                          <Code>hoverIconColor</Code> (-10% lightness)
                          <br />
                          <br />
                          <Code>activeIconColor</Code> (-30% lightness)
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Contextual Menu",
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
                        <td>Accent color</td>
                        <td>
                          <Code>selectedMenuItemBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>hoverSelectedMenuItemBackgroundColor</Code> (-5% of lightness)
                          <br />
                          <br />
                          <Code>activeSelectedMenuItemBackgroundColor</Code> (-5% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Base color</td>
                        <td>
                          <Code>backgroundColor</Code>
                          <br />
                          <br />
                          <Code>hoverMenuItemBackgroundColor</Code> (-5% of lightness)
                          <br />
                          <br />
                          <Code>activeMenuItemBackgroundColor</Code> (-5% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Font color</td>
                        <td>
                          <Code>menuItemFontColor</Code>
                          <br />
                          <br />
                          <Code>sectionFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Icon color</td>
                        <td>
                          <Code>iconColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Data Grid",
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
                          <br />
                          <br />
                          <Code>headerCheckboxCheckColor</Code>
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
                        </td>
                      </tr>
                      <tr>
                        <td>Header font color</td>
                        <td>
                          <Code>headerFontColor</Code>
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
                        <td>Base color</td>
                        <td>
                          <Code>pickerSelectedBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>pickerCurrentYearFontColor</Code>
                          <br />
                          <br />
                          <Code>pickerActiveBackgroundColor</Code> (-8% of lightness)
                          <br />
                          <br />
                          <Code>pickerHeaderActiveBackgroundColor</Code> (-8% of lightness)
                          <br />
                          <br />
                          <Code>pickerHoverBackgroundColor</Code> (+52% lightness)
                          <br />
                          <br />
                          <Code>pickerCurrentDateBorderColor</Code> (+42% lightness)
                          <br />
                          <br />
                          <Code>pickerHeaderHoverBackgroundColor</Code> (+52% lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Selected font color</td>
                        <td>
                          <Code>pickerSelectedFontColor</Code>
                          <br />
                          <br />
                          <Code>pickerActiveFontColor</Code>
                          <br />
                          <br />
                          <Code>pickerHeaderActiveFontColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Dialog",
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
                        <td>Close icon color</td>
                        <td>
                          <Code>closeIconColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Overlay color</td>
                        <td>
                          <Code>overlayColor</Code>
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
                          <Code>hoverButtonBackgroundColor</Code> (-5% of lightness)
                          <br />
                          <br />
                          <Code>activeButtonBackgroundColor</Code> (-12% of lightness)
                          <br />
                          <br />
                          <Code>hoverOptionBackgroundColor</Code> (-5% of lightness)
                          <br />
                          <br />
                          <Code>activeOptionBackgroundColor</Code> (-20% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Font color</td>
                        <td>
                          <Code>buttonFontColor</Code>
                          <br />
                          <br />
                          <Code>buttonIconColor</Code>
                          <br />
                          <br />
                          <Code>caretIconColor</Code>
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
                          <Code>hamburgerFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Menu base color</td>
                        <td>
                          <Code>menuBackgroundColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Hamburger color</td>
                        <td>
                          <Code>hamburgerIconColor</Code>
                          <br />
                          <br />
                          <Code>hamburgerHoverColor</Code> (+90% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Logo</td>
                        <td>
                          <Code>logo</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Logo responsive</td>
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
                      <tr>
                        <td>Overlay color</td>
                        <td>
                          <Code>overlayColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Link",
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
                          <Code>visitedFontColor</Code>
                          <br />
                          <br />
                          <Code>visitedUnderlineColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Nav tabs",
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
                          <Code>unselectedFontColor</Code>
                          <br />
                          <br />
                          <Code>selectedIconColor</Code>
                          <br />
                          <br />
                          <Code>unselectedIconColor</Code>
                          <br />
                          <br />
                          <Code>hoverBackgroundColor</Code> (+55% of lightness)
                          <br />
                          <br />
                          <Code>pressedBackgroundColor</Code> (+50% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Accent color</td>
                        <td>
                          <Code>selectedUnderlineColor</Code>
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
                      <tr>
                        <td>Overlay color</td>
                        <td>
                          <Code>overlayColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Overlay font color</td>
                        <td>
                          <Code>overlayFontColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Quick Nav",
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
                        <td>Accent color</td>
                        <td>
                          <Code>hoverFontColor</Code>
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
                title: "Radio Group",
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
                          <Code>radioInputColor</Code>
                          <br />
                          <br />
                          <Code>hoverRadioInputColor</Code> (-10% lightness)
                          <br />
                          <br />
                          <Code>activeRadioInputColor</Code> (-25% lightness)
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
                          <Code>selectedHoverListOptionBackgroundColor</Code> (-5% of lightness)
                          <br />
                          <br />
                          <Code>selectedActiveListOptionBackgroundColor</Code> (-15% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Font color</td>
                        <td>
                          <Code>valueFontColor</Code>
                          <br />
                          <br />
                          <Code>labelFontColor</Code>
                          <br />
                          <br />
                          <Code>helperTextFontColor</Code>
                          <br />
                          <br />
                          <Code>placeholderFontColor</Code> (+30% of lightness)
                          <br />
                          <br />
                          <Code>collapseIndicatorColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Option font color</td>
                        <td>
                          <Code>listOptionFontColor</Code>
                          <br />
                          <br />
                          <Code>listOptionIconColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Hover border color</td>
                        <td>
                          <Code>hoverInputBorderColor</Code>
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
                          <Code>focusThumbBackgroundColor</Code>
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
                        </td>
                      </tr>
                      <tr>
                        <td>Total line color</td>
                        <td>
                          <Code>totalLineColor</Code>
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
                      <tr>
                        <td>Overlay color</td>
                        <td>
                          <Code>trackCircleColorOverlay</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Overlay font color</td>
                        <td>
                          <Code>overlayLabelFontColor</Code>
                          <br />
                          <br />
                          <Code>overlayProgressValueFontColor</Code>
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
                          <Code>disabledCheckedTrackBackgroundColor</Code> (+57% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Font color</td>
                        <td>
                          <Code>labelFontColor</Code>
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
                          <Code>hoverBackgroundColor</Code> (+57% of lightness)
                          <br />
                          <br />
                          <Code>pressedBackgroundColor</Code> (+52% of lightness)
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Tag",
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
                          <Code>fontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Icon color</td>
                        <td>
                          <Code>iconColor</Code>
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
                          <Code>suffixColor</Code> (+40% of lightness)
                          <br />
                          <br />
                          <Code>prefixColor</Code> (+40% of lightness)
                          <br />
                          <br />
                          <Code>placeholderFontColor</Code> (+30% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Hover border color</td>
                        <td>
                          <Code>hoverBorderColor</Code>
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Textarea",
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
                          <Code>placeholderFontColor</Code> (+30% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Hover border color</td>
                        <td>
                          <Code>hoverBorderColor</Code>
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
                          <Code>selectedDisabledBackgroundColor</Code> (+57% of lightness)
                          <br />
                          <br />
                          <Code>selectedDisabledFontColor</Code> (+42% of lightness)
                        </td>
                      </tr>
                      <tr>
                        <td>Selected font color</td>
                        <td>
                          <Code>selectedFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Unselected base color</td>
                        <td>
                          <Code>unselectedBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>unselectedHoverBackgroundColor</Code> (-10% of lightness)
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
                          <Code>selectedStepBackgroundColor</Code>
                          <br />
                          <br />
                          <Code>selectedStepBorderColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Selected step font color</td>
                        <td>
                          <Code>selectedStepFontColor</Code>
                        </td>
                      </tr>
                      <tr>
                        <td>Font color</td>
                        <td>
                          <Code>visitedLabelFontColor</Code>
                          <br />
                          <br />
                          <Code>selectedLabelFontColor</Code>
                          <br />
                          <br />
                          <Code>visitedHelperTextFontColor</Code>
                          <br />
                          <br />
                          <Code>selectedHelperTextFontColor</Code>
                          <br />
                          <br />
                          <Code>unvisitedStepBorderColor</Code> (+40% of lightness)
                          <br />
                          <br />
                          <Code>unvisitedStepFontColor</Code> (+40% of lightness)
                          <br />
                          <br />
                          <Code>unvisitedLabelFontColor</Code> (+40% of lightness)
                          <br />
                          <br />
                          <Code>unvisitedHelperTextFontColor</Code> (+40% of lightness)
                        </td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Example",
                content: (
                  <>
                    <DxcParagraph>Finally, here you can see an example of an opinionated theme object:</DxcParagraph>
                    <JsonContainer>
                      <pre>{JSON.stringify(bloomTheme, null, " ")}</pre>
                    </JsonContainer>
                    <DxcParagraph>
                      More examples can be found in the{" "}
                      <Link href="/utilities/halstack-provider/#opinionated-theme" passHref legacyBehavior>
                        <DxcLink>Halstack Provider section</DxcLink>
                      </Link>
                      .
                    </DxcParagraph>
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        title: "Advanced theme",
        content: (
          <>
            <DxcParagraph>
              This theming strategy lets you change most of the design decisions of the design system (all the design
              tokens), trying to be as little opinionated as possible. Have in mind that it is impossible to make the
              components 100% configurable without writing actual code, since some design decisions are structural to
              the component. The list of configurable properties is large, and it applies at the component level.
            </DxcParagraph>
            <DxcAlert
              title="Advanced theming"
              semantic="info"
              message={{
                text: (
                  <>
                    We strongly recommend using the{" "}
                    <Link href="/theme-generator/advanced-theme" passHref legacyBehavior>
                      <DxcLink>advanced theme generator</DxcLink>
                    </Link>{" "}
                    to create the theme, but you can also create it yourself from scratch.
                  </>
                ),
              }}
              closable={false}
            />
            <DxcParagraph>
              Below is an example of a default advanced theme. The number of configurable properties is significantly
              higher than in the previous strategy.
            </DxcParagraph>
            <JsonContainer>
              <pre>{JSON.stringify(defaultAdvancedTheme, null, " ")}</pre>
            </JsonContainer>
            <DxcParagraph>
              More examples can be found in the{" "}
              <Link href="/utilities/halstack-provider/#advanced-theme" passHref legacyBehavior>
                <DxcLink>Halstack Provider section</DxcLink>
              </Link>
              .
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
];

const Themes = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Themes"></DxcHeading>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/themes/ThemesPage.tsx" />
    </DxcFlex>
  );
};

export default Themes;
