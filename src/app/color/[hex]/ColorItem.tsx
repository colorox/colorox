"use client";

import React from "react";
import css from "./style.module.css";
import { customToast } from "@/app/toast";
import Color from "color";

type Props = {
  color: string
};

function ColorItem({color}: Props) {
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    customToast("Color copied to the clipboard !");
  };

  return (
    <div
      className={css.tint__color}
      style={{ backgroundColor: color }}
      onClick={copyColor}
    ></div>
  );
}

export default ColorItem;
