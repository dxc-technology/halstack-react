type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type Action = {
  label: string;
  icon?: string | SVG;
  onClick: () => void;
};

type Message = {
  messageText: React.ReactNode;
  onClose?: () => void;
};

type CommonProps = {
  title: string;
  semantic?: "success" | "info" | "warning" | "error";
  primaryAction?: Action;
  secondaryAction?: Action;
  tabIndex?: number;
};

type InlineProps = CommonProps & {
  mode?: "inline";
  message: Message | Message[];
};

type BannerProps = CommonProps & {
  mode: "banner";
  message: Message | Message[];
};

type ModalProps = CommonProps & {
  mode: "modal";
  message: Message;
};

type Props = InlineProps | BannerProps | ModalProps;

export default Props;
