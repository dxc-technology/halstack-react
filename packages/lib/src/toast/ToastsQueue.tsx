import { createContext, useCallback, useEffect, useState } from "react";
import DxcToast from "./Toast";
import styled from "styled-components";
import { ToastType, ToastContextType, ToastsQueuePropsType, Semantic, ToastQueueType } from "./types";
import CoreTokens from "../common/coreTokens";
import { createPortal } from "react-dom";

export const ToastContext = createContext<ToastContextType | null>(null);

const DxcToastsQueue = ({ children, duration = 3000 }: ToastsQueuePropsType) => {
  const [toasts, setToasts] = useState<ToastQueueType[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Next.js SSR mounting issue

  const pop = useCallback(() => {
    setToasts((prevToasts) => {
      prevToasts[0].visible = false;
      return [...prevToasts];
    });

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 300);
  }, []);

  const push = useCallback(
    (toast: ToastType, semantic: Semantic) => {
      const timeoutID = setTimeout(() => {
        pop();
      }, duration);
      
      setToasts((prevToasts) => [...prevToasts, { semantic, timeoutID, visible: true, ...toast }].slice(-5));
    },
    [duration]
  );

  const remove = (toast: ToastQueueType) => {
    setToasts((prevToasts) => {
      const index = prevToasts.indexOf(toast);
      if (index !== -1) prevToasts[index].visible = false;
      return [...prevToasts];
    });

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 300);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ToastContext.Provider value={{ push, pop }}>
      {isMounted &&
        createPortal(
          <ToastsQueue>
            {toasts.map((t, i) => (
              <DxcToast
                key={i}
                onClear={() => {
                  remove(t);
                  clearTimeout(t.timeoutID);
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

const ToastsQueue = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2147483647;
  display: flex;
  flex-direction: column;
  gap: ${CoreTokens.spacing_8};
  padding: ${CoreTokens.spacing_24};
`;

export default DxcToastsQueue;
