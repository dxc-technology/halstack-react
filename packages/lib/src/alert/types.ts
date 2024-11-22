type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  icon?: string | SVG;
  label: string;
  onClick: () => void;
};

type Message = {
  onClose?: () => void;
  text: React.ReactNode;
};

type CommonProps = {
  primaryAction?: Action;
  secondaryAction?: Action;
  semantic?: "error" | "info" | "success" | "warning";
  tabIndex?: number;
  title: string;
};

type ModeSpecificProps =
  | {
      closable?: boolean;
      message?: Message | Message[];
      mode?: "inline";
    }
  | {
      message: Message | Message[];
      mode: "banner";
    }
  | {
      message: Message;
      mode: "modal";
    };

type Props = CommonProps & ModeSpecificProps;

export default Props;

export type ModalAlertWrapperProps = {
  condition: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};
