import {
  DxcLink,
  DxcBulletedList,
  DxcParagraph,
  DxcFlex,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import specsImage from "./images/appLayout_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Application layout design specifications">
          <Image
            src={specsImage}
            alt="Application layout design specifications"
          />
        </Figure>
        <DxcParagraph>
          Columns, gutters, and margins make up the responsive layout grid
          following these breakpoints. Depending on resolution and screen size
          of a device, column numbers and the values of the margins and gutters
          adjust to accommodate all screen elements in the most optimal manner.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Columns are the areas of the screen where content is placed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            A gutter is the space between columns used to separate content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Margins are the space between the edges of the screen and content.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Recommended values",
    content: (
      <>
        <DxcParagraph>
          The following table describes the columns, margins, and gutter at each
          of the different breakpoints:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Columns</th>
              <th>
                Gutter (recommended) <sup>1</sup>
              </th>
              <th>
                Margin (min)<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xsmall</Code>
              </td>
              <td>4</td>
              <td>16 / small</td>
              <td>24</td>
            </tr>
            <tr>
              <td>
                <Code>small</Code>
              </td>
              <td>4</td>
              <td>16 / small</td>
              <td>24</td>
            </tr>
            <tr>
              <td>
                <Code>medium</Code>
              </td>
              <td>4</td>
              <td>24 / medium</td>
              <td>48</td>
            </tr>
            <tr>
              <td>
                <Code>large</Code>
              </td>
              <td>8</td>
              <td>16 / small</td>
              <td>56</td>
            </tr>
            <tr>
              <td>
                <Code>xlarge</Code>
              </td>
              <td>8</td>
              <td>24/medium</td>
              <td>56</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            Any value provided by the gutter prop in the layout components can
            be used (ideally multiples of 8) although we recommend to stick to
            the values provided.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The margin value provided are the minimun recommended, any value
            from our spacing scale can be used or even an auto value.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ApplicationLayoutSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/application-layout/specs/ApplicationLayoutSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ApplicationLayoutSpecsPage;
