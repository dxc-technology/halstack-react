import {
  DxcLink,
  DxcHeading,
  DxcStack,
  DxcParagraph,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Halstack is the DXC Technology&#39;s open source Design System for
        insurance products and digital experiences. Our system provides all the
        tools and resources needed to create superior, beautiful but above all,
        functional user experiences.
      </DxcParagraph>
    ),
  },
  {
    title: "Design principles",
    content: (
      <>
        <DxcParagraph>
          Halstack design principles are the fundamental part of DXC
          Technology&#39;s approach to provide guidance for development teams in
          order to deliver delightful and consistent user experiences to our
          customers:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Balance</DxcBulletedList.Item>
          <DxcBulletedList.Item>Consistency</DxcBulletedList.Item>
          <DxcBulletedList.Item>Visual hierarchy</DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          All our components, design tokens, accessibility guidelines,
          responsive design techniques, and layout proposals have been carefully
          curated by DXC design and engineering teams with the objective of
          creating a unique visual language and ecosystem for our applications.
          This is the DXC way of creating User Experiences.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Open Source",
    content: (
      <>
        <DxcParagraph>
          Halstack is an open source Design System, this means that we work
          towards DXC Technology bussines needs, but it is open for anyone to
          use and contribute back to.
        </DxcParagraph>
        <DxcParagraph>
          We are charmed to receive external contributions to help us find bugs,
          design new features, or help us improve the project documentation. If
          you&#39;re interested, definitely check out our{" "}
          <DxcLink href="https://github.com/dxc-technology/halstack-style-guide/blob/master/contributing/overview.md">
            contribution guidelines
          </DxcLink>
          .
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Our Assets",
    subSections: [
      {
        title: "Design",
        content: (
          <DxcParagraph>
            In addition to our design guidelines, we mantain an{" "}
            <DxcLink href="https://shared-assets.adobe.com/link/732533f4-d925-487e-4761-9a760574cfac">
              Adobe XD public library
            </DxcLink>{" "}
            in order to provide designers all the building blocks needed to
            quickly create solutions four our clients. Helping them focusing on
            innovation and user experience.
          </DxcParagraph>
        ),
      },
      {
        title: "Code implementation",
        content: (
          <>
            <DxcParagraph>
              We also have our components documentation available in the
              following frameworks:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <DxcLink href="https://developer.dxc.com/tools/react/next/#/">
                  React documentation
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <DxcLink href="https://developer.dxc.com/tools/angular/next/#/">
                  Angular documentation
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              If you&#39;re using a different framework, you can still build
              components by following our design guidelines.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "GitHub",
        content: (
          <>
            <DxcParagraph>
              Our code implementation is available in the following GitHub
              public repositories:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <DxcLink href="https://github.com/dxc-technology/halstack-style-guide">
                  halstack-style-guide
                </DxcLink>
                : Design guidelines
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <DxcLink href="https://github.com/dxc-technology/halstack-react">
                  halstack-react
                </DxcLink>
                : React CDK
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <DxcLink href="https://github.com/dxc-technology/halstack-angular">
                  halstack-angular
                </DxcLink>
                : Angular CDK
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const Introduction = () => {
  return (
    <DxcStack gutter="xxlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading
            level={1}
            text="Halstack Design System"
            weight="bold"
          ></DxcHeading>
        </DxcStack>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
    </DxcStack>
  );
};

export default Introduction;
