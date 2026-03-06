import { DxcFileInput, DxcFlex } from "@dxc-technology/halstack-react";

const FileInputPreview = () => {
  const file = new File(["file1"], "file.pdf", { type: "text/plain" });

  const fileExample = [
    {
      file: file,
    },
  ];

  const fileExampleError = [
    {
      error: "Error message",
      file: file,
    },
  ];
  return (
    <DxcFlex gap="2rem">
      <DxcFileInput label="Upload file" mode="filedrop" callbackFile={() => {}} value={fileExample} />
      <DxcFileInput label="Upload file - Error" mode="filedrop" callbackFile={() => {}} value={fileExampleError} />
    </DxcFlex>
  );
};

export default FileInputPreview;
