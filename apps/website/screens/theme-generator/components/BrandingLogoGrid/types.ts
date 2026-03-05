import { ReactNode } from "react";
import { Field, FileData, Logos } from "../../types";

type Props = {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
  logos: Logos;
  onLogoChange: (logoType: string, files: FileData[]) => void;
};

export default Props;
