import Head from "next/head";
import type { ReactElement } from "react";
import ChipCodePage from "screens/components/chip/code/ChipCodePage";
import ChipPageLayout from "screens/components/chip/ChipPageLayout";

const Code = () => {
  return (
    <>
      <Head>
        <title>Chip Code — Halstack Design System</title>
      </Head>
      <ChipCodePage />
    </>
  );
};

Code.getLayout = (page: ReactElement) => <ChipPageLayout>{page}</ChipPageLayout>;

export default Code;
