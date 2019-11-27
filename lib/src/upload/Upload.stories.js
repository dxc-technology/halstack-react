import React from "react";
import { storiesOf } from "@storybook/react";

import UploadMD from "./readme.md";

import Upload from "./Upload";

async function callbackFunc() {
  const result = await new Promise(resolve => setTimeout(resolve, 1000));
  return result;
}

storiesOf("Form Components|Upload", module).add(
  "Component",
  () => {
    return (
      <div style={{ marginTop: "80px" }}>
        <Upload callbackUpload={callbackFunc} />
      </div>
    );
  },
  {
    notes: { markdown: UploadMD }
  }
);

const knobProps = () => ({});

storiesOf("Form Components|Upload", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return <Upload {...props} callbackUpload={callbackFunc} />;
  },
  {
    notes: { markdown: UploadMD }
  }
);
