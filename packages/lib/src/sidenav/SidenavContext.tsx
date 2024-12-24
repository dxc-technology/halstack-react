import { createContext, Dispatch, SetStateAction, useContext } from "react";

type SidenavContextType = (_isSidenavVisible: boolean) => void;

const SidenavContext = createContext<SidenavContextType | null>(null);

export const GroupContext = createContext<Dispatch<SetStateAction<boolean>> | null>(null);

export const SidenavContextProvider = SidenavContext.Provider;

export const GroupContextProvider = GroupContext.Provider;

export const useResponsiveSidenavVisibility = () => {
  const changeResponsiveSidenavVisibility = useContext(SidenavContext);
  return changeResponsiveSidenavVisibility;
};
