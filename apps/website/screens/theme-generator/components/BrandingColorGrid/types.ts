import { ReactNode } from "react";
import { Colors, Field } from "screens/theme-generator/types";

type Props = {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
  colors: Colors;
  onColorChange: (colorType: string) => (newColor: string) => void;
};

export default Props;
