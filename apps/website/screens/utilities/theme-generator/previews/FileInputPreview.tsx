import { useState } from "react";
import { DxcFileInput } from "@dxc-technology/halstack-react";

type FileData = {
  file: File;
  preview?: string;
  error?: string;
};

const FileInputPreview = () => {
  const [files, setFiles] = useState<FileData[]>([]);

  return <DxcFileInput label="Upload file" mode="filedrop" value={files} callbackFile={setFiles} />;
};

export default FileInputPreview;
