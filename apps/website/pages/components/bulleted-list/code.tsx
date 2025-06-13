import Head from "next/head";
import type { ReactElement } from "react";
import BulletedListCodePage from "screens/components/bulleted-list/code/BulletedListCodePage";
import BulletedListPageLayout from "screens/components/bulleted-list/BulletedListPageLayout";

const Code = () => (
  <>
    <Head>
      <title>Bulleted list code — Halstack Design System</title>
    </Head>
    <BulletedListCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <BulletedListPageLayout>{page}</BulletedListPageLayout>;

export default Code;
