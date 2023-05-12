"use client";

import React from "react";
import css from "./style.module.css";
import { customToast } from "@/app/toast";

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
    > {color} </div>
  );
}

export default ColorItem;
