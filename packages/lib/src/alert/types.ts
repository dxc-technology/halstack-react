import { ReactNode, SVGProps } from "react";

type SVG = ReactNode & SVGProps<SVGSVGElement>;

type Action = {
  icon?: string | SVG;
  label: string;
  onClick: () => void;
};

type Message = {
  onClose?: () => void;
  text: ReactNode;
};

type CommonProps = {
  closable?: boolean;
  primaryAction?: Action;
  secondaryAction?: Action;
  semantic?: "error" | "info" | "success" | "warning";
  title: string;
};

type ModeSpecificProps =
  | {
      message?: Message | Message[];
      mode?: "inline" | "banner";
    }
  | {
      message: Required<Message>;
      mode: "modal";
    };

type Props = CommonProps & ModeSpecificProps;

export default Props;

export type ModalAlertWrapperProps = {
  condition: boolean;
  onClose?: () => void;
  children: ReactNode;
};
