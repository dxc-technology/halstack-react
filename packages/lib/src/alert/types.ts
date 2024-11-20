type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  icon?: string | SVG;
  label?: string;
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

type InlineProps = {
  message: Message | Message[];
  mode?: "banner" | "inline";
};

type ModalProps = {
  message: Message;
  mode: "modal";
};

type Props = CommonProps & (InlineProps | ModalProps);

export default Props;
