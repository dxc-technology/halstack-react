import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import { TableCode } from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import contextual from "./examples/contextual";
import notification from "./examples/notification";
import icons from "./examples/icons";

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
            <td>color</td>
            <td>
              <TableCode>'grey' | 'blue' | 'green' | 'orange' | 'red' | 'yellow' | 'purple'</TableCode>
            </td>
            <td>Affects the visual style of the badge. It can be used following semantic purposes or not.</td>
            <td>
              <TableCode>'grey'</TableCode>
            </td>
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
              name or SVG element as the icon that will be placed next to the badge label. When using Material Symbols,
              replace spaces with underscores. By default they are outlined, if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string | number</TableCode>
            </td>
            <td>Text to be placed in the badge.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'contextual' | 'notification'</TableCode>
            </td>
            <td>The available badge modes.</td>
            <td>
              <TableCode>'contextual'</TableCode>
            </td>
          </tr>
          <tr>
            <td>notificationLimit</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              In notification mode, if the number entered as label is greater that this notification limit,{" "}
              <TableCode>+notificationLimit</TableCode> will be shown. If not, the entered text will be shown as label.
            </td>
            <td>
              <TableCode>99</TableCode>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'medium'</TableCode>
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text representing advisory information related to the badge. Under the hood, this prop also serves as an
              accessible label for the component.
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Contextual",
        content: <Example example={contextual} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
      {
        title: "Notification",
        content: <Example example={notification} defaultIsVisible />,
      },
    ],
  },
];

const BadgeCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/badge/code/BadgeCodePage.tsx" />
    </DxcFlex>
  );
};

export default BadgeCodePage;
