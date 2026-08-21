import styled from "@emotion/styled";
import { useEffect, useId, useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { PopoverPropsType } from "./types";

const PopoverWrapper = styled.div`
  width: fit-content;
`;

const PopoverContent = styled.div`
  box-sizing: border-box;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-400);
  padding: var(--spacing-padding-xs);
  background-color: var(--color-bg-neutral-lightest);
`;

const handleTrigger = (
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
  offset = 4,
  onOpen,
  onOpenAutoFocus,
  onClose,
  onCloseAutoFocus,
  popoverContent,
  side = "bottom",
}: PopoverPropsType): JSX.Element => {
  const popOverId = `popover-${useId()}`;
  const isControlled = useRef(isOpen !== undefined);

  const [opened, setOpened] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalContainer(document?.getElementById(`${popOverId}-portal`));
  }, []);

  return (
    <>
      <Popover.Root open={isControlled.current ? isOpen : opened}>
        {asChild ? (
          <Popover.Trigger
            aria-controls={undefined}
            aria-expanded={undefined}
            aria-haspopup={undefined}
            type={undefined}
            asChild
          >
            {children}
          </Popover.Trigger>
        ) : (
          <Popover.Trigger
            style={{
              backgroundColor: "transparent",
              border: "none",
              margin: 0,
              padding: 0,
              textAlign: "inherit",
              font: "inherit",
              borderRadius: 0,
              appearance: "none",
            }}
            onClick={
              actionToOpen === "click" ? () => handleTrigger(isControlled.current, setOpened, true, onOpen) : undefined
            }
            onMouseEnter={
              actionToOpen === "hover" ? () => handleTrigger(isControlled.current, setOpened, true, onOpen) : undefined
            }
            onMouseLeave={
              actionToOpen === "hover"
                ? () => handleTrigger(isControlled.current, setOpened, false, onClose)
                : undefined
            }
          >
            <PopoverWrapper role="button" aria-controls={popOverId} aria-expanded={opened} aria-haspopup={true}>
              {children}
            </PopoverWrapper>
          </Popover.Trigger>
        )}
        {portalContainer && (
          <Popover.Portal container={portalContainer}>
            <Popover.Content
              aria-label="Popover content"
              align={align}
              side={side}
              sideOffset={offset}
              onOpenAutoFocus={(event) => {
                onOpenAutoFocus?.(event);
              }}
              onCloseAutoFocus={(event) => {
                onCloseAutoFocus?.(event);
              }}
              onInteractOutside={() => handleTrigger(isControlled.current, setOpened, false, onClose)}
              onEscapeKeyDown={() => handleTrigger(isControlled.current, setOpened, false, onClose)}
              onMouseEnter={
                actionToOpen === "hover"
                  ? () => handleTrigger(isControlled.current, setOpened, true, onOpen)
                  : undefined
              }
              onMouseLeave={
                actionToOpen === "hover"
                  ? () => handleTrigger(isControlled.current, setOpened, false, onClose)
                  : undefined
              }
            >
              <PopoverContent id={popOverId}>{popoverContent}</PopoverContent>
              {hasTip && <Popover.Arrow style={{ fill: "var(--color-bg-neutral-lightest)" }} />}
            </Popover.Content>
          </Popover.Portal>
        )}
      </Popover.Root>
      <div id={`${popOverId}-portal`} style={{ zIndex: "var(--z-contextualmenu)", position: "absolute" }} />
    </>
  );
};

export default DxcPopover;
