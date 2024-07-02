import Head from "next/head";
import type { ReactElement } from "react";
import ChipCodePage from "../../../screens/components/chip/code/ChipCodePage";
import ChipPageLayout from "../../../screens/components/chip/ChipPageLayout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Chip — Halstack Design System</title>
      </Head>
      <ChipCodePage></ChipCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <ChipPageLayout>{page}</ChipPageLayout>;
};

export default Index;
