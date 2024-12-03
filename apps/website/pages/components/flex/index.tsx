import Head from "next/head";
import type { ReactElement } from "react";
import FlexPageLayout from "screens/components/flex/FlexPageLayout";
import FlexCodePage from "screens/components/flex/code/FlexCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Flex — Halstack Design System</title>
      </Head>
      <FlexCodePage></FlexCodePage>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <FlexPageLayout>{page}</FlexPageLayout>;
};

export default Index;
