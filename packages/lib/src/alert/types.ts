type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  icon?: string | SVG;
  label: string; // no puede ser solo icono?
  onClick: () => void;
};

type Message = {
  text: React.ReactNode;
  onClose?: () => void;
};

type CommonProps = {
  primaryAction?: Action;
  secondaryAction?: Action;
  semantic?: "error" | "info" | "success" | "warning";
  tabIndex?: number;
  title: string;
};

type InlineProps = CommonProps & {
  message: Message | Message[];
  mode?:  "banner" | "inline";
};

type ModalProps = CommonProps & {
  message: Message;
  mode: "modal";
};

type Props = InlineProps | ModalProps;

export default Props;
