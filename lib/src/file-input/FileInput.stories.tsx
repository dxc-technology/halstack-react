import React from "react";
import DxcFileInput from "./FileInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import FileItem from "./FileItem";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "File input",
  component: DxcFileInput,
};

const picPreview = "https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg";

const file1 = new File(["file1"], "file.pdf", { type: "text/plain" });
const file2 = new File(["file2"], "file2.mp3", {
  type: "audio",
});
const file3 = new File(["file3"], "file3.png", {
  type: "image/png",
});
const file4 = new File(["file4"], "file4file4file4file4file4file4file4file4file4.mp4", {
  type: "video",
});
const file5 = new File(["file5"], "file5file5file5file5file5file5file5file5file5.mp4", {
  type: "video",
});

const fileExample = [
  {
    file: file1,
  },
];

const fileExampleError = [
  {
    error: "Error message",
    file: file1,
  },
];

const filesExamples = [
  {
    file: file1,
  },
  {
    file: file2,
  },
  {
    file: file3,
    preview: picPreview,
  },
  {
    file: file4,
  },
  {
    error: "This error message is a multiline paragraph for testing.",
    file: file5,
  },
  {
    error: "Error message",
    file: file3,
    preview: picPreview,
  },
];

const opinionatedTheme = {
  fileInput: {
    fontColor: "#000000",
  },
};

export const Chromatic = () => (
  <>
    <Title title="File item states" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <FileItem
        fileName="file"
        error=""
        singleFileMode={false}
        showPreview={false}
        preview={picPreview}
        type="image/png"
        onDelete={() => {}}
        tabIndex={0}
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <FileItem
        fileName="file"
        error=""
        singleFileMode={false}
        showPreview={false}
        preview={picPreview}
        type="image/png"
        onDelete={() => {}}
        tabIndex={0}
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived" theme="light" level={4} />
      <FileItem
        fileName="file"
        error=""
        singleFileMode={false}
        showPreview={false}
        preview={picPreview}
        type="image/png"
        onDelete={() => {}}
        tabIndex={0}
      />
    </ExampleContainer>
    <Title title="File" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcFileInput value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcFileInput label="File input" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and helper text" theme="light" level={4} />
      <DxcFileInput label="File input" helperText="Please select files" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single file" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        multiple={false}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid single file" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExampleError}
        multiple={false}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple files" theme="light" level={4} />
      <DxcFileInput label="File input" helperText="Please select files" value={filesExamples} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Show preview" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={filesExamples}
        callbackFile={() => {}}
        showPreview
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcFileInput label="File input" helperText="Please select files" disabled value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="xxsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="xsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="small"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="xlarge"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="xxlarge"
      />
    </ExampleContainer>
    <Title title="Filedrop" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcFileInput mode="filedrop" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcFileInput mode="filedrop" label="File input" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label, helper text and ellipsis" theme="light" level={4} />
      <DxcFileInput
        mode="filedrop"
        label="File input"
        dropAreaLabel="or drop files or drop files or drop files or drop files or drop files"
        helperText="Please select files"
        value={[]}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single file" theme="light" level={4} />
      <DxcFileInput
        mode="filedrop"
        label="File input"
        helperText="Please select files"
        value={fileExample}
        multiple={false}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid single file" theme="light" level={4} />
      <DxcFileInput
        mode="filedrop"
        label="File input"
        helperText="Please select files"
        value={fileExampleError}
        multiple={false}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple files" theme="light" level={4} />
      <DxcFileInput
        mode="filedrop"
        label="File input"
        helperText="Please select files"
        value={filesExamples}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Show preview" theme="light" level={4} />
      <DxcFileInput
        mode="filedrop"
        label="File input"
        helperText="Please select files"
        value={filesExamples}
        callbackFile={() => {}}
        showPreview
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        mode="filedrop"
        disabled
        value={[]}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="xxsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="xsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="small"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        margin="xlarge"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="filedrop"
        margin="xxlarge"
      />
    </ExampleContainer>
    <Title title="Dropzone" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcFileInput mode="dropzone" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcFileInput label="File input" mode="dropzone" value={[]} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label, helper text and ellipsis" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        mode="dropzone"
        dropAreaLabel="or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files or drop files"
        value={[]}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single file" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        mode="dropzone"
        value={fileExample}
        callbackFile={() => {}}
        multiple={false}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid single file" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        mode="dropzone"
        value={fileExampleError}
        callbackFile={() => {}}
        multiple={false}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple files" theme="light" level={4} />
      <DxcFileInput
        mode="dropzone"
        label="File input"
        helperText="Please select files"
        value={filesExamples}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Show preview" theme="light" level={4} />
      <DxcFileInput
        mode="dropzone"
        label="File input"
        helperText="Please select files"
        value={filesExamples}
        callbackFile={() => {}}
        showPreview
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        mode="dropzone"
        disabled
        value={[]}
        callbackFile={() => {}}
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="xxsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="xsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="small"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="xlarge"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcFileInput
        label="File input"
        helperText="Please select files"
        value={fileExample}
        callbackFile={() => {}}
        mode="dropzone"
        margin="xxlarge"
      />
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={4} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <Title title="Single file" theme="light" level={4} />
        <DxcFileInput
          label="File input"
          helperText="Please select files"
          value={fileExample}
          multiple={false}
          callbackFile={() => {}}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <Title title="Invalid single file" theme="light" level={4} />
        <DxcFileInput
          label="File input"
          helperText="Please select files"
          value={fileExampleError}
          multiple={false}
          callbackFile={() => {}}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single file" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcFileInput
          mode="filedrop"
          label="File input"
          helperText="Please select files"
          value={fileExample}
          multiple={false}
          callbackFile={() => {}}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid single file" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcFileInput
          mode="filedrop"
          label="File input"
          helperText="Please select files"
          value={fileExampleError}
          multiple={false}
          callbackFile={() => {}}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single file" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcFileInput
          label="File input"
          helperText="Please select files"
          mode="dropzone"
          value={fileExample}
          callbackFile={() => {}}
          multiple={false}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid single file" theme="light" level={4} />{" "}
      <HalstackProvider theme={opinionatedTheme}>
        <DxcFileInput
          label="File input"
          helperText="Please select files"
          mode="dropzone"
          value={fileExampleError}
          callbackFile={() => {}}
          multiple={false}
        />
      </HalstackProvider>
    </ExampleContainer>
  </>
);
