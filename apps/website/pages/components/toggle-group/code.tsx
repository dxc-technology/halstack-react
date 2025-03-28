import Head from "next/head";
import type { ReactElement } from "react";
import ToggleGroupPageLayout from "screens/components/toggle-group/ToggleGroupPageLayout";
import ToggleGroupCodePage from "screens/components/toggle-group/code/ToggleGroupCodePage";

const Code = () => (
  <>
    <Head>
      <title>Toggle group code — Halstack Design System</title>
    </Head>
    <ToggleGroupCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <ToggleGroupPageLayout>{page}</ToggleGroupPageLayout>;

export default Code;
