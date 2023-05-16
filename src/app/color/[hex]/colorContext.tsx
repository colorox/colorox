"use client";

import { Colord, colord } from "colord";
import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

type State = {
  color: Colord;
};

type Action = {
  type: "SET_COLOR";
  payload: Colord;
};

type ContextType = {
  state: State;
  dispatch?: any;
};

const initialState: State = {
  color: colord("#111"),
};

const ColorContext = createContext<ContextType>({ state: initialState });

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  if (type === "SET_COLOR") {
    return { ...state, color: payload };
  }
  return state;
}

type Props = {
  hex: string;
  children: ReactNode;
};

export default function ColorProvider({ hex, children }: Props) {
  const initialState: State = {
    color: colord(hex),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <ColorContext.Provider value={{ state, dispatch }}>{children}</ColorContext.Provider>;
}

export function useColorContext() {
  return useContext(ColorContext);
}
