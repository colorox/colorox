import React from "react";
import Main from "../Main";
import css from "./style.module.css";
import ColorPicker from "../ColorPicker";
import ColorProvider from "../colorContext";
import { colord } from "colord";

type Props = {
  params: any;
};

function page({ params }: Props) {
  const {hex} = params;
  const color = colord("#" + hex)
  if(!color.isValid()) {
    throw new Error('Invalid Color')
  }

  return (
    <div>
      <ColorProvider color={color} >
        <ColorPicker />
      </ColorProvider>
      <div className={css.shades}>
        <div className={css.shade} > </div>
        <div className={css.shade}> </div>
        <div className={css.shade}> </div>
        <div className={css.shade}> </div>
        <div className={css.shade}> </div>
      </div>
    </div>
  );
}

export default page;
