import React, { ReactNode } from "react";
import css from "./style.module.css";
import Header from "./Header";
import ColorProvider from "./colorContext";

type Props = {
    children: ReactNode;
};

function layout({ children }: Props) {
    return (
        <div className={css.layout}>
            <div className={css.content}>
                <ColorProvider>
                    <Header />
                    {children}
                </ColorProvider>
            </div>
        </div>
    );
}

export default layout;
