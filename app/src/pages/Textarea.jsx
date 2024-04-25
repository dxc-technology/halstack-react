import React, { useState } from "react";
import {
  DxcTextarea,
  DxcButton,
  DxcFlex,
} from "@dxc-technology/halstack-react";

function App() {
  const [textValue, setTextValue] = useState("");

  const updateTextarea = () => {
    setTextValue((value) => {
      return (
        value +
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      );
    });
  };

  return (
    <>
      <DxcFlex direction="row" gap={"1rem"}>
        <DxcFlex direction="column" gap={"1rem"}>
          <DxcButton label={"Add Text"} onClick={() => updateTextarea()} />
          <DxcButton
            label={"Clear"}
            mode="secondary"
            onClick={() => setTextValue("")}
          />
        </DxcFlex>
        <DxcTextarea
          rows={4}
          onChange={({ value }) => setTextValue(value)}
          value={textValue}
          verticalGrow="auto"
        />
      </DxcFlex>
    </>
  );
}

export default App;
