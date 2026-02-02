import Head from "next/head";
import type { ReactElement } from "react";
import PopoverPageLayout from "screens/components/popover/PopoverPageLayout";
import PopoverCodePage from "screens/components/popover/code/PopoverCodePage";

const Code = () => (
  <>
    <Head>
      <title>Popover code — Halstack Design System</title>
    </Head>
    <PopoverCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <PopoverPageLayout>{page}</PopoverPageLayout>;

export default Code;
