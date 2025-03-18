import Head from "next/head";
import type { ReactElement } from "react";
import SliderPageLayout from "screens/components/slider/SliderPageLayout";
import SliderCodePage from "screens/components/slider/code/SliderCodePage";

const Code = () => (
  <>
    <Head>
      <title>Slider code — Halstack Design System</title>
    </Head>
    <SliderCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <SliderPageLayout>{page}</SliderPageLayout>;

export default Code;
