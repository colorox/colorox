"use client";

import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from "react";

type ContextType = {
  isSidebar: boolean;
  toggleSidebar: () => void;
};

const PaletteContext = createContext<ContextType>({ isSidebar: true, toggleSidebar: () => {} });

type Props = {
  children: ReactNode;
};

export function Provider({ children }: Props) {
  const [isSidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!isSidebar);
  };

  return <PaletteContext.Provider value={{ isSidebar, toggleSidebar }}>{children}</PaletteContext.Provider>;
}

export function usePaletteContext() {
  return useContext(PaletteContext);
}
