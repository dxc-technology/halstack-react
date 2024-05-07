import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import StatusBadge from "@/common/StatusBadge";
import {
  DxcAlert,
  DxcFlex,
  DxcHeading,
  DxcLink,
  DxcParagraph,
  DxcStatusLight,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import componentsList from "../../common/componentsList.json";
import { ComponentStatus } from "@/common/pagesList";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Check the component lifecycle status of each component.
        </DxcParagraph>
        <DxcAlert size="fillParent">
          For more information on each of the stages of a component, see the{" "}
          <Link href="/overview/component-lifecycle" passHref legacyBehavior>
            <DxcLink>component lifecycle</DxcLink>
          </Link>{" "}
          page.
        </DxcAlert>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <th>Status</th>
              <th>Availability</th>
              <th>Documentation</th>
              <th>Implementation</th>
              <th>Tests</th>
            </tr>
          </thead>
          <tbody>
            {componentsList.map((component) => (
              <tr key={component.label}>
                <td>
                  <Link
                    href={`/components/${component.label.toLowerCase()}`}
                    passHref
                    legacyBehavior
                  >
                    <DxcLink>{component.label}</DxcLink>
                  </Link>
                </td>
                <td>
                  <StatusBadge
                    hasTitle
                    status={component.status as ComponentStatus}
                  />
                </td>
                <td><DxcStatusLight mode="success" label="Ready" size="small" /></td>
                <td><DxcStatusLight mode="success" label="Ready" size="small" /></td>
                <td><DxcStatusLight mode="success" label="Ready" size="small" /></td>
                <td><DxcStatusLight mode="success" label="Ready" size="small" /></td>
              </tr>
            ))}
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const ComponentStatusPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading
            level={1}
            text="Component status"
            weight="bold"
          ></DxcHeading>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/component-status/ComponentStatusPage.tsx" />
    </DxcFlex>
  );
};

export default ComponentStatusPage;
