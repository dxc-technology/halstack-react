import React from "react";
import {
  DxcHeader,
  DxcStandardLayout,
  DxcFooter,
} from "@dxc-technology/halstack-react";

function App() {
  return (
    <DxcStandardLayout>
      <DxcHeader
        underlined={false}
        margin="medium"
        padding={{ right: "medium" }}
      />
      <DxcFooter />
      <DxcStandardLayout.Main>Main Content</DxcStandardLayout.Main>
    </DxcStandardLayout>
  );
}

export default App;
