import Head from "next/head";
import type { ReactElement } from "react";
import BulletedListPageLayout from "screens/components/bulleted-list/BulletedListPageLayout";
import BulletedListCodePage from "screens/components/bulleted-list/code/BulletedListCodePage";

const Index = () => {
  return (
    <>
      <Head>
        <title>Bulleted List — Halstack Design System</title>
      </Head>
      <BulletedListCodePage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <BulletedListPageLayout>{page}</BulletedListPageLayout>;
};

export default Index;
