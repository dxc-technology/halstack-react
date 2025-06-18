import Head from "next/head";
import type { ReactElement } from "react";
import ParagraphPageLayout from "screens/components/paragraph/ParagraphPageLayout";
import ParagraphCodePage from "screens/components/paragraph/code/ParagraphCodePage";
const Code = () => (
  <>
    <Head>
      <title>Paragraph code — Halstack Design System</title>
    </Head>
    <ParagraphCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ParagraphPageLayout>{page}</ParagraphPageLayout>;

export default Code;
