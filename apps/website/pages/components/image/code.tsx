import Head from "next/head";
import type { ReactElement } from "react";
import ImageCodePage from "screens/components/image/code/ImageCodePage";
import ImagePageLayout from "screens/components/image/ImagePageLayout";

const Code = () => (
  <>
    <Head>
      <title>Image code — Halstack Design System</title>
    </Head>
    <ImageCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ImagePageLayout>{page}</ImagePageLayout>;

export default Code;
