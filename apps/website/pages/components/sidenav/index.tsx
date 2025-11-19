// import Head from "next/head";
// import type { ReactElement } from "react";
// import SidenavPageLayout from "screens/components/sidenav/SidenavPageLayout";
// import SidenavOverviewPage from "screens/components/sidenav/overview/SidenavOverviewPage";

// const Index = () => (
//   <>
//     <Head>
//       <title>Sidenav — Halstack Design System</title>
//     </Head>
//     {/* <SidenavOverviewPage /> */}
//     <SidenavOverviewPage />
//   </>
// );

// Index.getLayout = (page: ReactElement) => <SidenavPageLayout>{page}</SidenavPageLayout>;

// export default Index;

import Head from "next/head";
import type { ReactElement } from "react";
import SidenavPageLayout from "screens/components/sidenav/SidenavPageLayout";
import SidenavCodePage from "screens/components/sidenav/code/SidenavCodePage";

const Code = () => (
  <>
    <Head>
      <title>Sidenav code — Halstack Design System</title>
    </Head>
    <SidenavCodePage />
  </>
);

Code.getLayout = (page: ReactElement) => <SidenavPageLayout>{page}</SidenavPageLayout>;

export default Code;
