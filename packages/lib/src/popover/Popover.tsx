import styled from "@emotion/styled";
import { useId, useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { PopoverPropsType } from "./types";

const PopoverContent = styled.div`
  box-sizing: border-box;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-400);
  padding: var(--spacing-gap-s);
  background-color: var(--color-bg-neutral-lightest);
`;

const HandleTrigger = (
  isControlled: boolean,
  setOpened: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean,
  onTrigger?: () => void
) => {
  if (isControlled) {
    if (onTrigger) {
      onTrigger();
    }
  } else {
    setOpened(open);
  }
};

const DxcPopover = ({
  actionToOpen = "click",
  align = "center",
  asChild,
  children,
  hasTip = false,
  isOpen,
  onOpen,
  onClose,
  popoverContent,
  side = "bottom",
}: PopoverPropsType): JSX.Element => {
  const popOverId = `popover-${useId()}`;
  const isControlled = useRef(isOpen !== undefined);

  const [opened, setOpened] = useState(false);

  return (
    <>
      <Popover.Root open={isControlled.current ? isOpen : opened}>
        <Popover.Trigger aria-controls={undefined} asChild>
          {asChild ? (
            children
          ) : (
            <div
              role="button"
              style={{ width: "fit-content" }}
              onClick={
                actionToOpen === "click"
                  ? () => HandleTrigger(isControlled.current, setOpened, true, onOpen)
                  : undefined
              }
              onMouseEnter={
                actionToOpen === "hover"
                  ? () => HandleTrigger(isControlled.current, setOpened, true, onOpen)
                  : undefined
              }
              onMouseLeave={
                actionToOpen === "hover"
                  ? () => HandleTrigger(isControlled.current, setOpened, false, onClose)
                  : undefined
              }
            >
              {children}
            </div>
          )}
        </Popover.Trigger>
        <Popover.Portal container={document.getElementById(`${popOverId}-portal`)}>
          <Popover.Content
            aria-label="Popover content"
            align={align}
            side={side}
            sideOffset={4}
            style={{ zIndex: "var(--z-contextualMenu)" }}
            onInteractOutside={() => HandleTrigger(isControlled.current, setOpened, false, onClose)}
            onEscapeKeyDown={() => HandleTrigger(isControlled.current, setOpened, false, onClose)}
            onMouseEnter={
              actionToOpen === "hover" ? () => HandleTrigger(isControlled.current, setOpened, true, onOpen) : undefined
            }
            onMouseLeave={
              actionToOpen === "hover"
                ? () => HandleTrigger(isControlled.current, setOpened, false, onClose)
                : undefined
            }
          >
            <PopoverContent id={popOverId}>{popoverContent}</PopoverContent>
            {hasTip && <Popover.Arrow style={{ fill: "var(--color-bg-neutral-lightest)" }} />}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <div id={`${popOverId}-portal`} />
    </>
  );
};

export default DxcPopover;
