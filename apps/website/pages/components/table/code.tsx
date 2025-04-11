import Head from "next/head";
import type { ReactElement } from "react";
import TablePageLayout from "screens/components/table/TablePageLayout";
import TableCodePage from "screens/components/table/code/TableCodePage";

const Code = () => (
  <>
    <Head>
      <title>Table code — Halstack Design System</title>
    </Head>
    <TableCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <TablePageLayout>{page}</TablePageLayout>;

export default Code;
