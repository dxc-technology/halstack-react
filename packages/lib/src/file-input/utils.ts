import { FileData } from "./types";

export const getFilePreview = async (file: File): Promise<string> => {
  if (file.type.includes("video")) return "filled_movie";
  else if (file.type.includes("audio")) return "music_video";
  else if (file.type.includes("image")) {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
    });
  } else return "draft";
};

export const isFileIncluded = (file: FileData, fileList: FileData[]) => {
  const fileListInfo = fileList.map((existingFile) => existingFile.file);
  return fileListInfo.some(
    ({ name, size, type, lastModified, webkitRelativePath }) =>
      name === file.file.name &&
      size === file.file.size &&
      type === file.file.type &&
      lastModified === file.file.lastModified &&
      webkitRelativePath === file.file.webkitRelativePath
  );
};

export const isRequired = (value: FileData[], optional: boolean) => value.length === 0 && !optional;