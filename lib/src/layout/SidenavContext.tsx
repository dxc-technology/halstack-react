import { createContext, useContext } from "react";

type SidenavContextType = (isSidenavVisible: boolean) => void;
const SidenavContext = createContext<SidenavContextType | null>(null);

export const SidenavContextProvider = SidenavContext.Provider;

export const useResponsiveSidenavVisibility = () => {
  const changeResponsiveSidenavVisibility = useContext(SidenavContext);
  return changeResponsiveSidenavVisibility;
};
