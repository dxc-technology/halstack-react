import Head from "next/head";
import type { ReactElement } from "react";
import ImagePageLayout from "screens/components/image/ImagePageLayout";
import ImageOverviewPage from "screens/components/image/overview/ImageOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Image — Halstack Design System</title>
    </Head>
    <ImageOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <ImagePageLayout>{page}</ImagePageLayout>;

export default Index;
