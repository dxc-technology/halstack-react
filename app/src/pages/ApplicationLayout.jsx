import React from "react";
import styled from "styled-components";

function App() {
  return (
    <CodesanboxContainer>
      <iframe
        src="https://codesandbox.io/embed/ecstatic-haibt-ggr5h?fontsize=14&hidenavigation=1&theme=dark"
        width="100%"
        height="100%"
        border="0"
        borderRadius="4px"
        overflow="hidden"
        title="ecstatic-haibt-ggr5h"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </CodesanboxContainer>
  );
}

const CodesanboxContainer = styled.div`
  height: 100vh;
`;

export default App;
