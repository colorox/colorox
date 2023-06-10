"use client";

import css from "./style.module.css";
import ColorCode from "./ColorCode";
import { getColorName } from "@/app/_utils/color";
import { useColorContext } from "../colorContext";

type Props = {};

function Main({ }: Props) {
  const { state } = useColorContext();
  const { color } = state;

  return (
    <div className={css.color}>
      <div className={css.color__fill} style={{ backgroundColor: color.toHex() }}>
        <h1 style={{ color: color.isLight() ? "black" : "white" }}> {getColorName(color.toHex()).name} </h1>
      </div>
      <div className={css.color__codes}>
        <ColorCode type="hex" value={color.toHex()} />
        <ColorCode type="rgb" value={color.toRgbString().replace("rgb(", "").replace(")", "")} />
        <ColorCode type="hsl" value={color.toHslString().replace("hsl(", "").replace(")", "")} />
      </div>
    </div>
  );
}

export default Main;
