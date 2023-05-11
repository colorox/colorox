"use client";

import React from "react";
import Color from "color";
import css from "./style.module.css";
import { Copy } from "react-feather";
import { customToast } from "@/app/toast";

type Props = {
  type: string;
  value: string;
};

function ColorCode({ type, value }: Props) {
  const copyColor = () => {
    navigator.clipboard.writeText(value);
    customToast("Color copied to the clipboard !");
  };

  return (
    <div className={css.color__code} onClick={copyColor}>
      <div className={css.color__copy}>
        <span> {type} </span>
        <span>{value} </span>
      </div>
      <button className={css.color__btn}>
        <Copy size={16} strokeWidth={1.6} />
      </button>
    </div>
  );
}

export default ColorCode;
