import Head from "next/head";
import type { ReactElement } from "react";
import SelectPageLayout from "../../../screens/components/select-copy/SelectCopyPageLayout";
import SelectPropsPage from "../../../screens/components/select-copy/props/SelectCopyPropsPage";

const Props = () => {
  return (
    <>
      <Head>
        <title>Select Copy — Halstack Design System</title>
      </Head>
      <SelectPropsPage></SelectPropsPage>
    </>
  );
};

Props.getLayout = function getLayout(page: ReactElement) {
  return <SelectPageLayout>{page}</SelectPageLayout>;
};

export default Props;
