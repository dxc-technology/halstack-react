import { DxcFlex, DxcParagraph, DxcHeading, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";
import Link from "next/link";
import CodeBlock from "@/common/CodeBlock";

const sections = [
  {
    title: "Overview",
    content: (
      <DxcParagraph>
        As part of the version <Code>16.0.0</Code> release, Halstack React now uses <Code>emotion</Code> as its internal
        styling engine. Previous versions relied on <Code>styled-components</Code>. This change improves performance,
        reduces bundle size, and aligns with the rest of the Halstack ecosystem. This page explains the required steps
        if your application relied on <Code>styled-components</Code> specific features, theme injections, or style
        overrides. If any topic is not covered here, please refer to the{" "}
        <DxcLink newWindow href="https://emotion.sh/docs/introduction">
          official Emotion documentation
        </DxcLink>
        .
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
              <Code>styled</Code> factory from <Code>styled-components</Code>
            </td>
            <td>
              <Code>@emotion/styled</Code>
            </td>
          </tr>
          <tr>
            <td>CSS prop</td>
            <td>Not available by default</td>
            <td>
              Available natively{" "}
              <Link
                href="/migration/migrating-to-emotion/#updating-styled-components-to-emotion-css-prop"
                passHref
                legacyBehavior
              >
                <DxcLink>CSS prop</DxcLink>
              </Link>
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
        title: "Installation",
        content: (
          <>
            <DxcParagraph>
              As stated in the{" "}
              <Link href="/overview/installation" passHref legacyBehavior>
                <DxcLink>Installation Page</DxcLink>
              </Link>
              , the following packages must be added to your project:
            </DxcParagraph>
            <CodeBlock>{`npm i @emotion/react @emotion/styled`}</CodeBlock>
            <DxcParagraph>While the following package must be removed from it:</DxcParagraph>
            <CodeBlock>{`npm un styled-components`}</CodeBlock>
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
            <CodeBlock>import styled from "styled-components";</CodeBlock>
            <DxcParagraph>New version:</DxcParagraph>
            <CodeBlock>import styled from "@emotion/styled";</CodeBlock>
            <DxcParagraph>
              The API of both works in the same way, so this should be the only required change. For further
              information, please refer to the{" "}
              <DxcLink newWindow href="https://emotion.sh/docs/styled">
                official documentation
              </DxcLink>
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Animations and keyframes",
        content: (
          <>
            <DxcParagraph>
              Replace <Code>keyframes</Code> from styled-components with the one provided by Emotion.
            </DxcParagraph>
            <DxcParagraph>Previous version:</DxcParagraph>
            <CodeBlock>{`import { keyframes } from "styled-components";`}</CodeBlock>
            <DxcParagraph>New version:</DxcParagraph>
            <CodeBlock>{`import { keyframes } from "@emotion/react";`}</CodeBlock>
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
            <DxcParagraph>Previous version:</DxcParagraph>
            <CodeBlock>{`import { ThemeProvider } from "styled-components";`}</CodeBlock>
            <DxcParagraph>New version:</DxcParagraph>
            <CodeBlock>{`import { ThemeProvider } from "@emotion/react";`}</CodeBlock>
            <DxcParagraph>
              Emotion and styled-components have mostly compatible theming APIs, but theme propagation differs in some
              edge cases. In Emotion, deeply nested styled components always use the nearest
              <Code>ThemeProvider</Code> without needing additional wrappers.
            </DxcParagraph>
            <DxcParagraph>
              If your application relied on implicit theme merging or multiple nested theme layers from
              styled-components, verify that the theme structure is still correct after migrating.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "CSS prop",
        content: (
          <>
            <DxcParagraph>
              Emotion supports the <Code>css</Code> prop natively. This prop can be used to apply styles directly to any
              component without needing to create a styled wrapper. For more information please refer to the{" "}
              <DxcLink newWindow href="https://emotion.sh/docs/css-prop">
                official documentation
              </DxcLink>
            </DxcParagraph>
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
            <DxcParagraph>Previous version:</DxcParagraph>
            <CodeBlock>{`import { ServerStyleSheet } from "styled-components";`}</CodeBlock>
            <DxcParagraph>New version:</DxcParagraph>
            <CodeBlock>{`import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css"; // or emotion-cache if configured
const { extractCritical } = createEmotionServer(cache);`}</CodeBlock>
          </>
        ),
      },
    ],
  },
  {
    title: "Global styles",
    content: (
      <>
        <DxcParagraph>
          If your application used <Code>createGlobalStyle</Code> from <Code>styled-components</Code>, it must be
          replaced with Emotion's <Code>Global</Code> component.
        </DxcParagraph>
        <DxcParagraph>Previous version:</DxcParagraph>
        <CodeBlock>
          {`import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle\`
  body {
    margin: 0;
  }
\`;`}
        </CodeBlock>
        <DxcParagraph>New version:</DxcParagraph>
        <CodeBlock>
          {`import { Global, css } from "@emotion/react";

const GlobalStyles = (
  <Global
    styles={css\`
      body {
        margin: 0;
      }
    \`}
  />
);`}
        </CodeBlock>
      </>
    ),
  },
  {
    title: "Overriding Halstack components",
    content: (
      <>
        <DxcParagraph>
          Emotion's <Code>styled</Code> API can still wrap Halstack components. Replace any previous SC wrappers with
          Emotion's equivalent:
        </DxcParagraph>
        <CodeBlock>
          {`import styled from "@emotion/styled";
import { DxcButton } from "@dxc-technology/halstack-react";

const CustomButton = styled(DxcButton)\`
  --button-padding: 12px;
\`;`}
        </CodeBlock>
      </>
    ),
  },
  {
    title: "Removing styled-components from your build",
    content: (
      <>
        <DxcParagraph>
          <Code>styled-components</Code> is no longer required by Halstack React. You should make sure to remove:
        </DxcParagraph>
        <ul>
          <li>
            <Code>styled-components</Code> from <Code>package.json</Code>
          </li>
          <li>
            Babel plugin (<Code>babel-plugin-styled-components</Code>)
          </li>
          <li>Any styled-components-specific webpack or SSR setup</li>
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
