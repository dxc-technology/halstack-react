import { FileData } from "./types";

export const getFilePreview = async (file: File): Promise<string> => {
  if (file.type.includes("video")) return "filled_movie";
  else if (file.type.includes("audio")) return "music_video";
  else if (file.type.includes("image")) {
    return Promise.resolve(URL.createObjectURL(file));
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