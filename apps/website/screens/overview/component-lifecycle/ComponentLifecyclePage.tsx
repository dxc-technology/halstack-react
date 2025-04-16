import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcBulletedList, DxcFlex, DxcHeading, DxcParagraph } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The lifecycle of a component within a Design System comprises several stages, spanning from its creation to
          eventual retirement. Starting with the design and development phases, components are conceptualized, designed
          and implemented. Once in use, they undergo real-world testing and user feedback to identify usability issues
          and potential improvements. As the system progresses, components may be upgraded or even withdrawn to meet
          ever-evolving standards and user requirements.
        </DxcParagraph>
        <DxcParagraph>
          Each of the states can be understood as milestones that summarize the maturity lifecycle of the components in
          Halstack and have their implications or requirements which need to be fulfilled to move from one to another.
          This process is non-linear, which means that a component can go backwards if the situation requires so.
        </DxcParagraph>
        <DxcParagraph>
          Adhering to this lifecycle ensures that our designers and developers uphold a well-organized Design System,
          facilitating a smooth and intuitive user experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Experimental",
    content: (
      <>
        <DxcParagraph>
          The component is ready for preliminary usage. It meets most maturity criteria, and use is encouraged for most
          scenarios. It may undergo last minute changes from its first uses, unexpected scenarios and actual user
          experience, which can sometimes be hard to estimate.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Implications",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Partial documentation.</strong> The documentation of the component may be incomplete, with missing
              parts, examples or even entire pages.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Partial implementation.</strong> The component may lack some features or new ones may be incoming.
              Regardless of this, all the released functionality is fully tested, including visual regression testing,
              snapshot testing, unit test, etc.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Already released and available in the next version of the Halstack npm library.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Already released and available in our design tools.</DxcBulletedList.Item>
            <DxcBulletedList.Item>The component API may be subject to change.</DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "New",
    content: (
      <>
        <DxcParagraph>
          The component has reached a level of maturity and completeness that the Halstack team is happy and confident
          with.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Implications",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Fully available.</strong> The component is already available in our design tools and has also been
              released in a minor version of the Halstack npm library.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Fully documented.</strong> Usage guidelines, API configuration, examples and design specifications
              cover all the features and use cases of the component.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Fully implemented.</strong> All the planned features of the component are available.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Fully tested.</strong> All the functionality offered by the component has been tested by our
              common tools (storybook, jest, chromatic, etc).
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Stable",
    content: (
      <>
        <DxcParagraph>
          The component is significantly mature and usage is strongly encouraged, with long-term support expected.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Implications",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              The API remains stable, with no breaking changes for at least one month.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              The component implementation remains fairly stable, with no breaking changes for at least one month.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Legacy",
    content: (
      <>
        <DxcParagraph>
          The component is stable but there are plans to replace its functionality with a new component or a combination
          of new components. The use of legacy components is not discouraged, with the caveat that they will be
          deprecated and replaced in the next major release.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Implications",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Documentation exists for the legacy component and includes any alternative components.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Manual or automated migration paths have been documented and will be code-available as soon as possible.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              The component will be considered as legacy for one release, so users can prepare to its eventual removal.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Deprecated",
    content: (
      <>
        <DxcParagraph>
          The component will be removed in the near future. Users should start avoiding it for new application and
          existing ones should start considering other approaches.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Implications",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>The component will be removed in the next major release.</DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ComponentLifecyclePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Component lifecycle" weight="bold" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/overview/component-lifecycle/ComponentLifecyclePage.tsx" />
  </DxcFlex>
);

export default ComponentLifecyclePage;
