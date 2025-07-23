import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcToast from "./Toast";
import { QueuedToast, Semantic, ToastsQueuePropsType, ToastType } from "./types";
import { responsiveSizes } from "../common/variables";
import ToastContext from "./ToastContext";

const ToastsQueue = styled.section`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${CoreTokens.spacing_8};
  padding: ${CoreTokens.spacing_24};

  @media (max-width: ${responsiveSizes.medium}rem) {
    align-items: center;
    width: 100%;
  }
`;

const generateUniqueToastId = (toasts: QueuedToast[]) => {
  let id = "";
  let exists = true;
  while (exists) {
    id = `${performance.now()}-${Math.random().toString(36).slice(2, 9)}`;
    exists = toasts.some((toast) => toast.id === id);
  }
  return id;
};

const DxcToastsQueue = ({ children, duration = 3000 }: ToastsQueuePropsType) => {
  const [toasts, setToasts] = useState<QueuedToast[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Next.js SSR mounting issue
  const adjustedDuration = useMemo(() => (duration > 5000 ? 5000 : duration < 3000 ? 3000 : duration), [duration]);

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
    setIsMounted(true);
  }, []);

  return (
    <ToastContext.Provider value={add}>
      {isMounted &&
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
          document.body
        )}
      {children}
    </ToastContext.Provider>
  );
};

export default DxcToastsQueue;
