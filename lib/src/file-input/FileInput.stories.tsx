import React from "react";
import DxcFileInput from "./FileInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "File input",
  component: DxcFileInput,
};

const picPreview =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEDklEQVRogdXaXaxcUxQH8J/etloajVT1I9qgCbdIUB8PXPeKBJHgsV5ExAuVivBUgtSDxgNBVMVHxEeRUhIhkpJ40BYhoTShaQglQtA2VR+ttjMe1j45c6cztzNnzszc+09Ocs/Za+39/++zzt5rr7l0D1diA35P14b0bMJgAE+g2uR6FpP7xq4NZCL2YjlOSNdt6VkVj/eNXYu4VhD9G+c3aL8gtVWS7bjEsfhRCFk2ht2yZPNT8hl3WCUIfoZJY9gdhY+T7QM94NUWFmEfDuHCFuyXJNv9OL2LvNrGO2KGn2rD55nks6ErjAog+8B3YXYbfrPwR/Lt+4d/NLYLMrcW8F+efL/DtBJ5tY17EpEvxEbYLgawJfVxXxObRZhbiF2LWCjfE4Y66OeS1Mc/OLnm+Uw8ggP4oYP+j4hHxUy+VEJfL6e+3hTL8/X4RZ7W/FvCGE1xOdZp7wNvhvny9CULtSo+1QMhZWImPpQL+A03YbouCpkqXn8ZqA+jg1iD41P7NF0QMiAy2N0ipDrFWUa/hU9wXp1N6UIuEktsNug3HfY3gD2pr4rYTxrlZ6UJmY3n0mBZ7JYhhDi3ZP1+i6sb2HQsZBJuEEfUqljjV+Ic5QkhzifZylTF+xisae9IyBIRr1nnb+PU1DaoXCHkk5blXfvxGGYoKGQWnhbpdZb/XFNn0w0hGebgBXm4fY/rtClkOn6Wz8j96Vk9uikkw5DRm2JLQrKV4hB2pr+niJznuPI5toRN4rx/u1jZiLfUMqZiBf4Ss7Bb7Bu1WW0v3kgt5mA17i7iPB8vymN1Cy5Obb0W0jFm4Fd5jFbEfjJsggl5UBDeiLvk4bZP/4RcJj76W1p1OE2sXAfFBkgcotYrL0UpghF5BfOkVhzeTQ5rGrRdIXbiVWWxaxNvCG6vHckwq4jsFPXa8YYF8gPYVc2MaisiN/eGVyGsEBy3C86H4d5k8LliFZFeYSq+FlwP218WiJWpIpbY8Y5heeXllNqGdcqriPQKrwrO67MHZwh1ezGvT6SKIKu8VLCYWGareKgPZEZECrS5oP/Dgvtq2Jpuzi6FWmuYh7XyfK5asJ9zk++X5EWARuePsjEZd9SM+afOhBwjz9TtSDeDY3mUgBH526/gFRHnnQhZLD9NejLdvG7sn8yKoj6MtuLSmvaiQibJ8781RNl+V3rwEZaKpGxKQeIZ6sNoD+5s0G87QqYkbksT1yydWpQZDMl/kS16bawb9AN5GK3VfGnvZMwd0qEv+w+ETTgTN4rEcRAninSgVdTP6oE2fFvFf6JIuA1v4XmRkXQVk+UFhGoacKXDJ6eTj72nmGt0DWCbONdkmDBCMgzjK6MrmAtNQCGUvyH2HfXhNmGFZBgRNYD3Ou3ofwlpcfptqgzTAAAAAElFTkSuQmCC";

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
const file5 = new File(["file4"], "file5file5file5file5file5file5file5file5file5.mp4", {
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
    error: "Error message error message error message error message",
    file: file5,
  },
  {
    error: "Error message",
    file: file3,
    preview: picPreview,
  },
];

export const Chromatic = () => (
  <>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="File item hovered" theme="light" level={4} />
      <DxcFileInput value={fileExample} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="File item focused" theme="light" level={4} />
      <DxcFileInput value={fileExample} callbackFile={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="File item actived" theme="light" level={4} />
      <DxcFileInput value={fileExample} callbackFile={() => {}} />
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
  </>
);
