import Head from "next/head";
import type { ReactElement } from "react";
import GridPageLayout from "screens/components/grid/GridPageLayout";
import GridCodePage from "screens/components/grid/code/GridCodePage";

const Code = () => (
  <>
    <Head>
      <title>Grid code — Halstack Design System</title>
    </Head>
    <GridCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <GridPageLayout>{page}</GridPageLayout>;

export default Code;
