import React from "react";
import { DxcBadge } from "@dxc-technology/halstack-react";

function App() {
  return (
    <div>
      <div>
        <div className="test-case" id="small-size">
          <DxcBadge notificationText="10" />
        </div>
      </div>
    </div>
  );
}

export default App;
