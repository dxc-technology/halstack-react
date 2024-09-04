import { useRef, useCallback, useEffect } from "react";

type UseTimeoutType = (callback: () => void, delay: number) => () => void;

/**
 * Custom hook to handle setTimeout in a declarative way.
 * Inspired by Dan Abramov's article: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * @param callback Function to be executed after the delay
 * @param delay Time in milliseconds to wait before executing the callback
 * @returns Function to clear the timeout
 */
const useTimeout: UseTimeoutType = (callback, delay) => {
  const savedCallback = useRef<() => void>();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const clearTimerCallback = useCallback(() => clearTimeout(timerRef.current), []);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    timerRef.current = setTimeout(savedCallback.current!, delay);
    return clearTimerCallback;
  }, [delay, clearTimerCallback]);

  return clearTimerCallback;
};

export default useTimeout;
