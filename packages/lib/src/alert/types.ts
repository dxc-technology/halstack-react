type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  icon?: string | SVG;
  label: string;
  onClick: () => void;
};

type Message = {
  messageText: React.ReactNode;
  onClose?: () => void;
};

type CommonProps = {
  primaryAction?: Action;
  secondaryAction?: Action;
  semantic?: "success" | "info" | "warning" | "error";
  tabIndex?: number;
  title: string;
};

type InlineProps = CommonProps & {
  message: Message | Message[];
  mode?: "inline" | "banner";
};

type ModalProps = CommonProps & {
  message: Message;
  mode: "modal";
};

type Props = InlineProps | ModalProps;

export default Props;
