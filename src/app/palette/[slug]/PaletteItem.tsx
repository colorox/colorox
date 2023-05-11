"use client";

import { customToast } from "@/app/toast";
import css from "./style.module.css";
import React, { MouseEvent } from "react";
import { getIconColor } from "@/app/utils/color";
import Color from "color";
import { MoreHorizontal, MoreVertical } from "react-feather";

type Props = {
  color: string;
};

function PaletteItem({ color }: Props) {
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    customToast("Color copied to the clipboard !");
  };

  const handleMoreClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
  };

  return (
    <div
      className={css.palette__item}
      style={{ backgroundColor: color, color: Color(color).isDark() ? "white" : "black" }}
      onClick={copyColor}
    >
      <div className={css.color__header}>
        <button className={css.color__more} onClick={handleMoreClick}>
          {" "}
          <MoreHorizontal size={18} />{" "}
        </button>
      </div>
      <div className={css.color__copy}> Click to copy </div>
      <div className={css.color__code}> {Color(color).hex().replace("#", "")} </div>
    </div>
  );
}

export default PaletteItem;
