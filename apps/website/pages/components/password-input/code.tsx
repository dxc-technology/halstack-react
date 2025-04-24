import Head from "next/head";
import type { ReactElement } from "react";
import PasswordInputPageLayout from "screens/components/password-input/PasswordInputPageLayout";
import PasswordInputCodePage from "screens/components/password-input/code/PasswordInputCodePage";

const Code = () => (
  <>
    <Head>
      <title>Password input code — Halstack Design System</title>
    </Head>
    <PasswordInputCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <PasswordInputPageLayout>{page}</PasswordInputPageLayout>;

export default Code;
