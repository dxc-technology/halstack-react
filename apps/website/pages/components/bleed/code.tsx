import Head from "next/head";
import type { ReactElement } from "react";
import BleedPageLayout from "screens/components/bleed/BleedPageLayout";
import BleedCodePage from "screens/components/bleed/code/BleedCodePage";

const Code = () => {
  return (
    <>
      <Head>
        <title>Bleed Code — Halstack Design System</title>
      </Head>
      <BleedCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <BleedPageLayout>{page}</BleedPageLayout>;

export default Code;
