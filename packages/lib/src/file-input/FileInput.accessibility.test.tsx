import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFileInput from "./FileInput";
import { vi } from "vitest";

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

describe("FileInput component accessibility tests", () => {
  it("Should not have basic accessibility issues for dropzone mode", async () => {
    const callbackFile = vi.fn();
    const { container } = render(
      <DxcFileInput
        label="File input"
        helperText="Helper Text"
        value={filesExamples}
        buttonLabel="Button Label"
        dropAreaLabel="Drop Area"
        margin="medium"
        mode="dropzone"
        multiple
        callbackFile={callbackFile}
        minSize={1000}
        maxSize={20000}
        showPreview
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const callbackFile = vi.fn();
    const { container } = render(
      <DxcFileInput
        label="File input"
        helperText="Helper Text"
        value={filesExamples}
        buttonLabel="Button Label"
        dropAreaLabel="Drop Area"
        margin="medium"
        mode="dropzone"
        multiple
        callbackFile={callbackFile}
        minSize={1000}
        maxSize={20000}
        disabled
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for file mode", async () => {
    const callbackFile = vi.fn();
    const { container } = render(
      <DxcFileInput
        label="File input"
        helperText="Helper Text"
        value={filesExamples}
        buttonLabel="Button Label"
        margin="medium"
        mode="file"
        multiple
        callbackFile={callbackFile}
        minSize={1000}
        maxSize={20000}
        showPreview
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for filedrop mode", async () => {
    const callbackFile = vi.fn();
    const { container } = render(
      <DxcFileInput
        label="File input"
        helperText="Helper Text"
        value={filesExamples}
        buttonLabel="Button Label"
        dropAreaLabel="Drop Area"
        margin="medium"
        mode="filedrop"
        multiple
        callbackFile={callbackFile}
        minSize={1000}
        maxSize={20000}
        showPreview
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
