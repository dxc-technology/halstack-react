import {
  DxcHeading,
  DxcText,
  DxcTable,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import HeadingLink from "@/common/HeadingLink";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import colorOverview from "./images/color_overview.png";
import colorFamilies from "./images/color_families.png";
import onDarkcolorFamilies from "./images/color_families_onDark.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <Figure caption="Base Halstack core colors">
          <Image src={colorOverview} alt="DXC Colors" />
        </Figure>
        <DxcText as="p">
          <strong>
            The color palette is an essential asset as a communication resource
            of our design system.
          </strong>
        </DxcText>
        <DxcText as="p">
          Halstack color palette brings a unified consistency and helps in
          guiding the user&#39;s perception order. Our color palette is based in
          the{" "}
          <DxcLink
            href="https://en.wikipedia.org/wiki/HSL_and_HSV#:~:text=The%20HSL%20representation%20models%20the,paint%20corresponds%20to%20a%20high%20%22"
            newWindow
          >
            HSL model
          </DxcLink>
          . All our color families are calculated using the lightness value of
          the standard DXC palette colors.
        </DxcText>
      </>
    ),
  },
  {
    title: "Color Tokens",
    content: (
      <>
      <DxcText as="p">
        Halstack uses tokens to manage color. Appart from a multi-purpose
        greyscale family, purple and blue are the core color families used in
        our set of components. Additional families as red, green and yellow help
        as feedback role-based color palettes and must not be used outside this
        context.
      </DxcText>
      <DxcText as="p"><strong>Light and Dark Modes</strong><br/>Halstack uses both light and dark mode variants for its colors. Colors that are used across both variants are referred to by their default light mode token name while dark mode color tokens follow the same pattern approach but end in one (such as 101 or 201).</DxcText>
      <DxcText as="p">Refer to the Dark Mode core color families values diagram to see which color tokens are shared across variants.</DxcText>
      </>
    ),
    subSections: [
      {
        title: "Core color tokens",
        content: (
          <>
            <Figure caption="Light Mode core color families values">
              <Image src={colorFamilies} alt="Core color families values" />
            </Figure>
            <Figure caption="Dark Mode core color families values">
              <Image src={onDarkcolorFamilies} alt="Dark Mode core color families values" />
            </Figure>
          </>
        ),
        subSections: [
          {
            title: "Absolutes",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value (hex)</th>
                    <th>Value (hsl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                    <td>(0, 0%, 100%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                    <td>(0, 0%, 0%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: " Greyscale",
            subSections: [
              {
                title: "Solid variants",
                content: (
                  <DxcTable>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Value (hex)</th>
                        <th>Value (hsl)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Code>color-grey-50</Code>
                        </td>
                        <td>#fafafa</td>
                        <td>(0, 0%, 98%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-100</Code>
                        </td>
                        <td>#f2f2f2</td>
                        <td>(0, 0%, 95%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-200</Code>
                        </td>
                        <td>#e6e6e6</td>
                        <td>(0, 0%, 90%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-300</Code>
                        </td>
                        <td>#cccccc</td>
                        <td>(0, 0%, 80%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-400</Code>
                        </td>
                        <td>#bfbfbf</td>
                        <td>(0, 0%, 75%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-500</Code>
                        </td>
                        <td>#999999</td>
                        <td>(0, 0%, 60%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-600</Code>
                        </td>
                        <td>#808080</td>
                        <td>(0, 0%, 60%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-700</Code>
                        </td>
                        <td>#666666</td>
                        <td>(0, 0%, 40%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-800</Code>
                        </td>
                        <td>#4d4d4d</td>
                        <td>(0, 0%, 30%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-900</Code>
                        </td>
                        <td>#333333</td>
                        <td>(0, 0%, 20%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-51</Code>
                        </td>
                        <td>#0d0d0d</td>
                        <td>(0, 0%, 5%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-101</Code>
                        </td>
                        <td>#1a1a1a</td>
                        <td>(0, 0%, 10%)</td>
                      </tr>
                      <tr>  
                        <td>
                          <Code>color-grey-201</Code>
                        </td>
                        <td>#262626</td>
                        <td>(0, 0%, 15%)</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-301</Code>
                        </td>
                        <td>#404040</td>
                        <td>(0, 0%, 25%)</td>
                      </tr>
                      <tr>  
                        <td>
                          <Code>color-grey-401</Code>
                        </td>
                        <td>#595959</td>
                        <td>(0, 0%, 35%)</td>
                      </tr>
                      <tr>  
                        <td>
                          <Code>color-grey-501</Code>
                        </td>
                        <td>#737373</td>
                        <td>(0, 0%, 45%)</td>
                      </tr>
                      <tr>  
                        <td>
                          <Code>color-grey-801</Code>
                        </td>
                        <td>#d9d9d9</td>
                        <td>(0, 0%, 85%)</td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
              {
                title: "Trasparent variants",
                content: (
                  <DxcTable>
                    <thead>
                      <tr>
                        <th>Token</th>
                        <th>Opacity</th>
                        <th>Value (hsla)</th>
                        <th>Value (#RRGGBBAA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Code>color-grey-50-a</Code>
                        </td>
                        <td>0.02</td>
                        <td>hsla(0,0%,0% / 0.02)</td>
                        <td>#00000005</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-100-a</Code>
                        </td>
                        <td>0.05</td>
                        <td>hsla(0,0%,0% / 0.05)</td>
                        <td>#0000000d</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-200-a</Code>
                        </td>
                        <td>0.1</td>
                        <td>hsla(0,0%,0% / 0.1)</td>
                        <td>#0000001a</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-300-a</Code>
                        </td>
                        <td>0.2</td>
                        <td>hsla(0,0%,0% / 0.2)</td>
                        <td>#00000033</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-400-a</Code>
                        </td>
                        <td>0.3</td>
                        <td>hsla(0,0%,0% / 0.3)</td>
                        <td>#0000004d</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-500-a</Code>
                        </td>
                        <td>0.4</td>
                        <td>hsla(0,0%,0% / 0.4)</td>
                        <td>#00000066</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-600-a</Code>
                        </td>
                        <td>0.5</td>
                        <td>hsla(0,0%,0% / 0.5)</td>
                        <td>#00000080</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-700-a</Code>
                        </td>
                        <td>0.6</td>
                        <td>hsla(0,0%,0% / 0.6)</td>
                        <td>#00000099</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-800-a</Code>
                        </td>
                        <td>0.7</td>
                        <td>hsla(0,0%,0% / 0.7)</td>
                        <td>#000000b3</td>
                      </tr>
                      <tr>
                        <td>
                          <Code>color-grey-900-a</Code>
                        </td>
                        <td>0.8</td>
                        <td>hsla(0,0%,0% / 0.8)</td>
                        <td>#000000cc</td>
                      </tr>
                    </tbody>
                  </DxcTable>
                ),
              },
            ],
          },
          {
            title: "Purple",
            content: (
              <>
                <DxcText as="p">
                  The core Purple family serves as the primary action color.
                </DxcText>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value (hex)</th>
                      <th>Value (hsl)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Code>color-purple-50</Code>
                      </td>
                      <td>#faf7fd</td>
                      <td>(269, 63%, 98%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-100</Code>
                      </td>
                      <td>#f2eafa</td>
                      <td>(269, 63%, 95%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-200</Code>
                      </td>
                      <td>#e5d5f6</td>
                      <td>(269, 63%, 90%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-300</Code>
                      </td>
                      <td>#cbacec</td>
                      <td>(269, 63%, 80%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-400</Code>
                      </td>
                      <td>#b182e3</td>
                      <td>(269, 63%, 70%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-500</Code>
                      </td>
                      <td>#a46ede</td>
                      <td>(269, 63%, 65%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-600</Code>
                      </td>
                      <td>#7d2fd0</td>
                      <td>(269, 63%, 50%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-700</Code>
                      </td>
                      <td>#5f249f</td>
                      <td>(269, 63%, 38%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-800</Code>
                      </td>
                      <td>#4b1c7d</td>
                      <td>(269, 63%, 30%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-900</Code>
                      </td>
                      <td>#321353</td>
                      <td>(269, 63%, 20%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-51</Code>
                      </td>
                      <td>#0c0515</td>
                      <td>(266, 62%, 5%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-101</Code>
                      </td>
                      <td>#19092a</td>
                      <td>(269, 65%, 10%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-201</Code>
                      </td>
                      <td>#3e1868</td>
                      <td>(269, 63%, 25%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-401</Code>
                      </td>
                      <td>#702abb</td>
                      <td>(269, 63%, 45%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-501</Code>
                      </td>
                      <td>#9759d9</td>
                      <td>(269, 63%, 60%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-701</Code>
                      </td>
                      <td>#C0a5e4</td>
                      <td>(266, 54%, 77%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-purple-801</Code>
                      </td>
                      <td>#d8c1f1</td>
                      <td>(269, 63%, 85%)</td>
                    </tr>
                  </tbody>
                </DxcTable>
              </>
            ),
          },
          {
            title: "Blue",
            content: (
              <>
                <DxcText as="p">
                  The core Blue family serves as the accent color.
                </DxcText>
                <DxcTable>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value (hex)</th>
                      <th>Value (hsl)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Code>color-blue-50</Code>
                      </td>
                      <td>#f5fbff</td>
                      <td>(205, 100%, 98%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-100</Code>
                      </td>
                      <td>#e6f4ff</td>
                      <td>(205, 100%, 95%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-200</Code>
                      </td>
                      <td>#cceaff</td>
                      <td>(205, 100%, 90%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-300</Code>
                      </td>
                      <td>#99d5ff</td>
                      <td>(205, 100%, 80%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-400</Code>
                      </td>
                      <td>#66bfff</td>
                      <td>(205, 100%, 70%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-500</Code>
                      </td>
                      <td>#33aaff</td>
                      <td>(205, 100%, 60%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-600</Code>
                      </td>
                      <td>#0095ff</td>
                      <td>(205, 100%, 50%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-700</Code>
                      </td>
                      <td>#0086e6</td>
                      <td>(205, 100%, 45%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-800</Code>
                      </td>
                      <td>#0067b3</td>
                      <td>(205, 100%, 35%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-900</Code>
                      </td>
                      <td>#003c66</td>
                      <td>(205, 100%, 20%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-51</Code>
                      </td>
                      <td>#000f1a</td>
                      <td>(205, 100%, 5%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-101</Code>
                      </td>
                      <td>#001e33</td>
                      <td>(205, 100%, 10%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-201</Code>
                      </td>
                      <td>#002d4d</td>
                      <td>(205, 100%, 15%)</td>
                    </tr>
                    <tr>
                      <td>
                        <Code>color-blue-301</Code>
                      </td>
                      <td>#004a80</td>
                      <td>(205, 100%, 25%)</td>
                    </tr>
                  </tbody>
                </DxcTable>
              </>
            ),
          },
          {
            title: "Red",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value (hex)</th>
                    <th>Value (hsl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color-red-50</Code>
                    </td>
                    <td>#fff5f6</td>
                    <td>(352, 99%, 98%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-100</Code>
                    </td>
                    <td>#ffe6e9</td>
                    <td>(352, 99%, 95%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-200</Code>
                    </td>
                    <td>#ffccd3</td>
                    <td>(352, 99%, 90%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-300</Code>
                    </td>
                    <td>#fe9aa7</td>
                    <td>(352, 99%, 80%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-400</Code>
                    </td>
                    <td>#fe677b</td>
                    <td>(352, 99%, 70%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-500</Code>
                    </td>
                    <td>#fe344f</td>
                    <td>(352, 99%, 60%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-600</Code>
                    </td>
                    <td>#fe0123</td>
                    <td>(352, 99%, 50%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                    <td>(352, 99%, 41%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-800</Code>
                    </td>
                    <td>#980115</td>
                    <td>(352, 99%, 30%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-900</Code>
                    </td>
                    <td>#65010e</td>
                    <td>(352, 99%, 20%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-51</Code>
                    </td>
                    <td>#190003</td>
                    <td>(353, 100%, 5%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-101</Code>
                    </td>
                    <td>#4c000a</td>
                    <td>(352, 100%, 15%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-401</Code>
                    </td>
                    <td>#cb011c</td>
                    <td>(352, 99%, 40%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-701</Code>
                    </td>
                    <td>#fe8091</td>
                    <td>(352, 98%, 75%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-red-801</Code>
                    </td>
                    <td>#ffb3bd</td>
                    <td>(352, 100%, 85%)</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Green",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value (hex)</th>
                    <th>Value (hsl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color-green-50</Code>
                    </td>
                    <td>#f7fdf9</td>
                    <td>(137, 63%, 95%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-100</Code>
                    </td>
                    <td>#eafaef</td>
                    <td>(137, 63%, 95%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-200</Code>
                    </td>
                    <td>#d5f6df</td>
                    <td>(137, 63%, 90%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-300</Code>
                    </td>
                    <td>#acecbe</td>
                    <td>(137, 63%, 80%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-400</Code>
                    </td>
                    <td>#82e39e</td>
                    <td>(137, 63%, 70%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-500</Code>
                    </td>
                    <td>#59d97d</td>
                    <td>(137, 63%, 60%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-600</Code>
                    </td>
                    <td>#2fd05d</td>
                    <td>(137, 63%, 50%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-700</Code>
                    </td>
                    <td>#24a148</td>
                    <td>(137, 63%, 39%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-800</Code>
                    </td>
                    <td>#1c7d38</td>
                    <td>(137, 63%, 30%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-900</Code>
                    </td>
                    <td>#135325</td>
                    <td>(137, 63%, 20%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-51</Code>
                    </td>
                    <td>#051509</td>
                    <td>(135, 62%, 5%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-101</Code>
                    </td>
                    <td>#092a13</td>
                    <td>(138, 65%, 10%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-401</Code>
                    </td>
                    <td>#26a64a</td>
                    <td>(137, 63%, 40%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-green-801</Code>
                    </td>
                    <td>#c1f1ce</td>
                    <td>(136, 63%, 85%)</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Yellow",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value (hex)</th>
                    <th>Value (hsl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color-yellow-50</Code>
                    </td>
                    <td>#fffdf5</td>
                    <td>(48, 93%, 98%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-100</Code>
                    </td>
                    <td>#fef9e6</td>
                    <td>(48, 93%, 95%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-200</Code>
                    </td>
                    <td>#fdf4ce</td>
                    <td>(48, 93%, 90%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-300</Code>
                    </td>
                    <td>#fbe89d</td>
                    <td>(48, 93%, 80%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-400</Code>
                    </td>
                    <td>#fadd6b</td>
                    <td>(48, 93%, 70%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-500</Code>
                    </td>
                    <td>#f7cf2b</td>
                    <td>(48, 93%, 57%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-600</Code>
                    </td>
                    <td>#f6c709</td>
                    <td>(48, 93%, 50%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-700</Code>
                    </td>
                    <td>#c59f07</td>
                    <td>(48, 93%, 40%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-800</Code>
                    </td>
                    <td>#947705</td>
                    <td>(48, 93%, 30%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-900</Code>
                    </td>
                    <td>#624f04</td>
                    <td>(48, 93%, 20%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-51</Code>
                    </td>
                    <td>#191401</td>
                    <td>(48, 92%, 5%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-301</Code>
                    </td>
                    <td>#b69307</td>
                    <td>(48, 93%, 37%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-401</Code>
                    </td>
                    <td>#ddb308</td>
                    <td>(48, 93%, 45%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-501</Code>
                    </td>
                    <td>#f7cc22</td>
                    <td>(48, 93%, 55%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-601</Code>
                    </td>
                    <td>#f9d853</td>
                    <td>(48, 93%, 65%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-701</Code>
                    </td>
                    <td>#fbe384</td>
                    <td>(48, 94%, 75%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-yellow-801</Code>
                    </td>
                    <td>#fceeb5</td>
                    <td>(48, 92%, 85%)</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Orange",
            content: (
              <DxcTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value (hex)</th>
                    <th>Value (hsl)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Code>color-orange-50</Code>
                    </td>
                    <td>#fefaf5</td>
                    <td>(32, 90%, 98%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-100</Code>
                    </td>
                    <td>#fef3e7</td>
                    <td>(32, 90%, 95%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-200</Code>
                    </td>
                    <td>#fce7cf</td>
                    <td>(32, 90%, 90%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-300</Code>
                    </td>
                    <td>#facf9e</td>
                    <td>(32, 90%, 80%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-400</Code>
                    </td>
                    <td>#f7b76e</td>
                    <td>(32, 90%, 70%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-500</Code>
                    </td>
                    <td>#f59f3d</td>
                    <td>(32, 90%, 60%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-600</Code>
                    </td>
                    <td>#f38f20</td>
                    <td>(32, 90%, 54%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-700</Code>
                    </td>
                    <td>#c26c0a</td>
                    <td>(32, 90%, 40%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-800</Code>
                    </td>
                    <td>#915108</td>
                    <td>(32, 90%, 30%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-900</Code>
                    </td>
                    <td>#613605</td>
                    <td>(32, 90%, 20%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-51</Code>
                    </td>
                    <td>#180e01</td>
                    <td>(34, 92%, 5%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-101</Code>
                    </td>
                    <td>#492904</td>
                    <td>(32, 90%, 15%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-201</Code>
                    </td>
                    <td>#794406</td>
                    <td>(32, 91%, 25%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-301</Code>
                    </td>
                    <td>#aa5f09</td>
                    <td>(32, 90%, 35%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-401</Code>
                    </td>
                    <td>#da7a0b</td>
                    <td>(32, 90%, 45%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-501</Code>
                    </td>
                    <td>#f49325</td>
                    <td>(32, 90%, 55%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-601</Code>
                    </td>
                    <td>#f6ab55</td>
                    <td>(32, 90%, 65%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-701</Code>
                    </td>
                    <td>#f9c386</td>
                    <td>(32, 91%, 75%)</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>color-orange-801</Code>
                    </td>
                    <td>#fbdbb6</td>
                    <td>(32, 90%, 85%)</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
    ],
  },
];

const Color = () => {
  return (
    <DxcStack gutter="xxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Color" weight="bold"></DxcHeading>
        </DxcStack>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/color/ColorPage.tsx" />
    </DxcStack>
  );
};

export default Color;
