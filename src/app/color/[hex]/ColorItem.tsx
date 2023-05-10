"use client";

import React from "react";
import css from "./style.module.css";
import { customToast } from "@/app/toast";
import namedColors from 'color-name-list';


type Props = {};

function ColorItem({}: Props) {

  const copyColor = (text: string) => {
    navigator.clipboard.writeText(text);
    customToast("Color copied to the clipboard !");
  };

  return <div className={css.tint__color} onClick={() => copyColor("000000")}></div>;
}

export default ColorItem;
