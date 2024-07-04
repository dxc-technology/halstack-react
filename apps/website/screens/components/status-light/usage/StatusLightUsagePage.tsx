import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import variants from "./example/variants";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        The Status light component serves as a powerful communicator of an element or process' status. It focuses
        exclusively on conveying semantic information within a range of five variants, each of them aligned with its
        specific process status.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Match each status light variant with the correct semantic meaning to communicate clearly and consistently
              messages about our statuses.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use each size of the component according to the different screen sizes where it will be placed, paying
              special attention to maintaining legibility and functionality.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use concise and precise labels that reflect the status of a process accordingly. You should not use more
              than three words in a status light label.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Mix semantic meanings within Status lights, as this will lead to confusion and misinterpretation of
              process states.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use Status light and semantic badges in the same data visualization format (tables, charts, data
              grids...).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Overuse the component. In screens with high cognitive load, you should not overuse this component, as it
              may confuse users and interrupt the reading flow.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The Status light component has five different modes, each one corresponding to its semantic meaning.
        </DxcParagraph>
        <DxcParagraph>
          Variants: <strong>default</strong>, <strong>info</strong>, <strong>success</strong>, <strong>warning</strong>{" "}
          and <strong>error</strong>.
        </DxcParagraph>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>For neutral statuses, like archived, draft, paused...</td>
            </tr>
            <tr>
              <td>Info</td>
              <td>For live statuses, like active, in use, uploaded...</td>
            </tr>
            <tr>
              <td>Success</td>
              <td>For positive statuses, like finished, approved, completed...</td>
            </tr>
            <tr>
              <td>Warning</td>
              <td>For pending or critical statuses, like scheduled, in progress, processing...</td>
            </tr>
            <tr>
              <td>Error</td>
              <td>For negative statuses, like incomplete, rejected, failed...</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const StatusLightUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/status-light/usage/StatusLightUsagePage.tsx" />
    </DxcFlex>
  );
};

export default StatusLightUsagePage;
