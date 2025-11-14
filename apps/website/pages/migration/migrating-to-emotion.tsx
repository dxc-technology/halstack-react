import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    content: (
      <DxcParagraph>
        As part of the version <Code>16.0.0</Code> release, Halstack React now uses <Code>emotion</Code> as its internal
        styling engine. Previous versions relied on <Code>styled-components</Code>. This change improves performance,
        reduces bundle size, and aligns with the rest of the Halstack ecosystem. This page explains the required steps
        if your application relied on <Code>styled-components</Code> specific features, theme injections, or style
        overrides.
      </DxcParagraph>
    ),
  },
  {
    title: "What has changed",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Area</th>
            <th>styled-components</th>
            <th>emotion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary styling API</td>
            <td>
              <Code>styled</Code> factory from styled-components
            </td>
            <td>
              <Code>@emotion/styled</Code>
            </td>
          </tr>
          <tr>
            <td>CSS prop</td>
            <td>Not available by default</td>
            <td>
              Available natively (<Code>/** @jsxImportSource @emotion/react */</Code>)
            </td>
          </tr>
          <tr>
            <td>SSR insertion</td>
            <td>
              <Code>ServerStyleSheet</Code>
            </td>
            <td>
              <Code>@emotion/server</Code> (<Code>extractCritical</Code>)
            </td>
          </tr>
          <tr>
            <td>Theme object</td>
            <td>SC ThemeProvider</td>
            <td>Emotion ThemeProvider</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Impact on consumers",
    content: (
      <>
        <DxcParagraph>Applications may need adjustments in the following areas:</DxcParagraph>
        <ul>
          <li>
            Local components using <Code>styled-components</Code>.
          </li>
          <li>
            Overriding Halstack components with <Code>styled()</Code> wrappers.
          </li>
          <li>
            Server-side rendering setups relying on <Code>ServerStyleSheet</Code>.
          </li>
          <li>Build setups using the Babel plugin for styled-components.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Updating styled components to emotion",
    subSections: [
      {
        title: "Instalation",
        content: (
          <>
            <DxcParagraph>
              As stated in the{" "}
              <Link href="/overview/installation" passHref legacyBehavior>
                <DxcLink>Installation Page</DxcLink>
              </Link>
              , the following packages must be added to your project:
            </DxcParagraph>
            <Code>@emotion/react @emotion/styled</Code>
            <DxcParagraph>While the following package must be removed from it:</DxcParagraph>
            <Code>styled-components</Code>
          </>
        ),
      },
      {
        title: "Styled usage",
        content: (
          <>
            <DxcParagraph>
              Replace imports from <Code>styled-components</Code> with <Code>@emotion/styled</Code>:
            </DxcParagraph>
            <DxcParagraph>Previous version:</DxcParagraph>
            <Code>import styled from "styled-components";</Code>
            <DxcParagraph>New version:</DxcParagraph>
            <Code>import styled from "@emotion/styled";</Code>
            <DxcParagraph>
              The API of both works in the same way, so this should be the only required change.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Theming",
        content: (
          <>
            <DxcParagraph>
              Theme context must now be provided using Emotion's <Code>ThemeProvider</Code>:
            </DxcParagraph>
            <Code>
              {`// Before
import { ThemeProvider } from "styled-components";

// Now
import { ThemeProvider } from "@emotion/react";`}
            </Code>
          </>
        ),
      },
      {
        title: "CSS prop",
        content: (
          <>
            <DxcParagraph>
              Emotion supports the <Code>css</Code> prop natively. Enable it by adding the pragma at the file top if
              required:
            </DxcParagraph>
            <Code>
              {`/** @jsxImportSource @emotion/react */
<div css={{ marginTop: 16 }} />`}
            </Code>
          </>
        ),
      },
      {
        title: "SSR configuration",
        content: (
          <>
            <DxcParagraph>
              If your app uses SSR, replace <Code>ServerStyleSheet</Code> with Emotion's server utilities:
            </DxcParagraph>
            <Code>
              {`// Before
import { ServerStyleSheet } from "styled-components";

// Now
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css"; // or emotion-cache if configured

const { extractCritical } = createEmotionServer(cache);`}
            </Code>
          </>
        ),
      },
    ],
  },
  {
    title: "Overriding Halstack components",
    content: (
      <>
        <DxcParagraph>
          Emotion's <Code>styled</Code> API can still wrap Halstack components. Replace any previous SC wrappers with
          Emotion's equivalent:
        </DxcParagraph>
        <Code>
          {`import styled from "@emotion/styled";
import { DxcButton } from "@dxc-technology/halstack-react";

const CustomButton = styled(DxcButton)\`
  --button-padding: 12px;
\`;`}
        </Code>
      </>
    ),
  },
  {
    title: "Removing styled-components from your build",
    content: (
      <>
        <DxcParagraph>Styled-components is no longer required by Halstack React. You may remove:</DxcParagraph>
        <ul>
          <li>
            <Code>styled-components</Code> from <Code>package.json</Code>
          </li>
          <li>
            Babel plugin: <Code>"babel-plugin-styled-components"</Code>
          </li>
          <li>Any SC-specific webpack or SSR setup</li>
        </ul>
      </>
    ),
  },
];

const EmotionMigrationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Migration to Emotion" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/migration/EmotionMigrationPage.tsx" />
  </DxcFlex>
);

export default EmotionMigrationPage;
