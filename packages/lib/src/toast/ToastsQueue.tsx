import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import DxcToast from "./Toast";
import { QueuedToast, Semantic, ToastsQueuePropsType, ToastType } from "./types";
import { responsiveSizes } from "../common/variables";
import ToastContext from "./ToastContext";
import { generateUniqueToastId } from "./utils";

const ToastsQueue = styled.section`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-gap-s);
  padding: var(--spacing-padding-l);

  @media (max-width: ${responsiveSizes.medium}rem) {
    align-items: center;
    width: 100%;
  }
`;

export default function DxcToastsQueue({ children, duration = 3000 }: ToastsQueuePropsType) {
  const [toasts, setToasts] = useState<QueuedToast[]>([]);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const adjustedDuration = useMemo(() => (duration > 5000 ? 5000 : duration < 3000 ? 3000 : duration), [duration]);
  const id = useId();

  const remove = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const add = useCallback(
    (toast: ToastType, semantic: Semantic) => {
      const id = generateUniqueToastId(toasts);
      setToasts((prevToasts) => [...prevToasts, { id, semantic, ...toast }].slice(-5));
      return () => remove(id);
    },
    [duration]
  );

  useEffect(() => {
    setPortalContainer(document?.getElementById(`toasts-${id}-portal`));
  }, []);

  return (
    <ToastContext.Provider value={add}>
      <div id={`toasts-${id}-portal`} style={{ position: "absolute" }} />
      {portalContainer &&
        createPortal(
          <ToastsQueue>
            {toasts.map((t) => (
              <DxcToast
                key={t.id}
                duration={adjustedDuration}
                onClear={() => {
                  remove(t.id);
                }}
                {...t}
              />
            ))}
          </ToastsQueue>,
          document.getElementById(`toasts-${id}-portal`) || document.body
        )}
      {children}
    </ToastContext.Provider>
  );
}
