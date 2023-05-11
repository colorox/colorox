import React, { ReactNode } from "react";
import css from "./style.module.css";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={css.layout}>
      <div className={css.content}>{children}</div>
    </div>
  );
}

export default Layout;
