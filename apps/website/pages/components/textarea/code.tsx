import Head from "next/head";
import type { ReactElement } from "react";
import TextareaPageLayout from "screens/components/textarea/TextareaPageLayout";
import TextareaCodePage from "screens/components/textarea/code/TextareaCodePage";

const Code = () => (
  <>
    <Head>
      <title>Textarea code — Halstack Design System</title>
    </Head>
    <TextareaCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TextareaPageLayout>{page}</TextareaPageLayout>;

export default Code;
