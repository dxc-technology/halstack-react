import Head from "next/head";
import type { ReactElement } from "react";
import SliderPageLayout from "screens/components/slider/SliderPageLayout";
import SliderOverviewPage from "screens/components/slider/overview/SliderOverviewPage";

const Index = () => (
  <>
    <Head>
      <title>Slider — Halstack Design System</title>
    </Head>
    <SliderOverviewPage />
  </>
);

Index.getLayout = (page: ReactElement) => <SliderPageLayout>{page}</SliderPageLayout>;

export default Index;
