import React, { ReactNode } from "react";
import css from "./palettes.module.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Provider } from "./context";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={css.layout}>
      <Provider>
        <Header />
        <Sidebar />
        {children}
      </Provider>
    </div>
  );
}

export default Layout;
