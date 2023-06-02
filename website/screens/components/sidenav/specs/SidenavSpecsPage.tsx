import {
  DxcBulletedList,
  DxcTable,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import sidenavAnatomy from "./images/sidenav_anatomy.png";
import sidenavSpecs from "./images/sidenav_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Sidenav design specifications">
        <Image src={sidenavSpecs} alt="Sidenav design specifications" />
      </Figure>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={sidenavAnatomy} alt="Sidenav anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Title <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Group Title <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Page or Section Link</DxcBulletedList.Item>
          <DxcBulletedList.Item>Divider</DxcBulletedList.Item>
          <DxcBulletedList.Item>Current Page or Section</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>backgroundColor</Code>
                </td>
                <td>Sidenav container</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontColor</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleFontColor</Code>
                </td>
                <td>Group title</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleHoverBackgroundColor</Code>
                </td>
                <td>Group title background:hover</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleActiveBackgroundColor</Code>
                </td>
                <td>Group title background:active</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleSelectedFontColor</Code>
                </td>
                <td>Group title:selected</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleSelectedBackgroundColor</Code>
                </td>
                <td>Group title background:selected</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleSelectedHoverFontColor</Code>
                </td>
                <td>Group title:hover selected</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleSelectedHoverBackgroundColor</Code>
                </td>
                <td>Group title background:selected hover</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontColor</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>linkHoverBackgroundColor</Code>
                </td>
                <td>Link background:hover</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>linkSelectedFontColor</Code>
                </td>
                <td>Link:selected</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>linkSelectedBackgroundColor</Code>
                </td>
                <td>Link background:selected</td>
                <td>
                  <Code>color-grey-800</Code>
                </td>
                <td>#4d4d4d</td>
              </tr>
              <tr>
                <td>
                  <Code>linkSelectedHoverFontColor</Code>
                </td>
                <td>Link:selected hover</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>linkSelectedHoverBackgroundColor</Code>
                </td>
                <td>Link background:selected hover</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFocusColor</Code>
                </td>
                <td>Link:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarThumbColor</Code>
                </td>
                <td>Scroll thumb</td>
                <td>
                  <Code>color-grey-200-a</Code>
                </td>
                <td>#0000001a</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarTrackColor</Code>
                </td>
                <td>Scroll track</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Typography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>titleFontFamily</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontSize</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-04</Code>
                </td>
                <td>1.25rem / 20px</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontStyle</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>titleFontLetterSpacing</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>spacing-0</Code>
                </td>
                <td>0em</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleFontFamily</Code>
                </td>
                <td>Group title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleFontSize</Code>
                </td>
                <td>Group title</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleFontStyle</Code>
                </td>
                <td>Group title</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>groupTitleFontWeight</Code>
                </td>
                <td>Group title</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontFamily</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontSize</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontStyle</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>linkFontWeight</Code>
                </td>
                <td>Link</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Element</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>margin-top</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-bottom</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-right</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-left</Code>
                  </td>
                  <td>Link</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
];

const SidenavSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/sidenav/specs/SidenavSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default SidenavSpecsPage;
