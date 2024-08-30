import { createContext, useCallback, useState } from "react";
import DxcToast from "./Toast";
import styled from "styled-components";
import { ToastType, ToastContextType, ToastsQueuePropsType } from "./types";
import CoreTokens from "../common/coreTokens";

export const ToastContext = createContext<ToastContextType | null>(null);

const DxcToastsQueue = ({ children, duration = 3000, position = "bottom" }: ToastsQueuePropsType) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const push = useCallback((toast: ToastType) => {
    setToasts((prevToasts) => [...prevToasts, toast].slice(-5));
    setTimeout(() => {
      pop();
    }, duration);
  }, []);

  const pop = useCallback(() => {
    setToasts((prevToasts) => prevToasts.slice(1));
  }, []);

  return (
    <ToastContext.Provider value={{ push, pop }}>
      <ToastsContainer position={position}>
        {toasts.map((t, i) => (
          <DxcToast
            key={i}
            onClear={() => {
              setToasts((prevToasts) => {
                const index = prevToasts.indexOf(t);
                if (index !== -1) prevToasts.splice(index, 1);
                return [...prevToasts];
              });
            }}
            {...t}
          />
        ))}
      </ToastsContainer>
      {children}
    </ToastContext.Provider>
  );
};

const ToastsContainer = styled.section<{ position: ToastsQueuePropsType["position"] }>`
  position: fixed;
  ${(props) => (props.position === "bottom" ? "bottom: 0;" : "top: 0;")}
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: ${(props) => (props.position === "top" ? "column-reverse" : "column")};
  gap: ${CoreTokens.spacing_8};
  padding: ${CoreTokens.spacing_24};
`;

export default DxcToastsQueue;
