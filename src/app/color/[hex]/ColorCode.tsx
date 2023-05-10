'use client'

import React from "react";
import css from "./style.module.css";
import { Copy } from "react-feather";
import { customToast } from "@/app/toast";

type Props = {};

function ColorCode({}: Props) {
  const copyColor = (text: string) => {
    navigator.clipboard.writeText(text);
    customToast("Color copied to the clipboard !");
  };

  return (
    <div className={css.color__code} onClick={() => copyColor("242F42")}>
      <div className={css.color__copy}>
        <span> HEX </span>
        <span> 242F42 </span>
      </div>
      <button className={css.color__btn}>
        <Copy size={16} strokeWidth={1.6} />
      </button>
    </div>
  );
}

export default ColorCode;
