import React from "react";
import Palette from "./Palette";
import css from "./palettes.module.css";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className={css["palette-grid"]}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((palette) => {
        return <Palette key={palette} />;
      })}
    </div>
  );
}
