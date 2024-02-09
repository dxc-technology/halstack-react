import React, { createContext } from "react";

export const KeyboardContext = createContext<{
  consumedEscape: boolean;
  setConsumedEscape: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  consumedEscape: false,
  setConsumedEscape: () => {},
});

export default KeyboardContext;
