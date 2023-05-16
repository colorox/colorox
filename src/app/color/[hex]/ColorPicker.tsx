"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import css from "./style.module.css";
import Color from "color";
import { useRouter } from "next/navigation";
import { Zap } from "react-feather";
import { Colord, colord, random } from "colord";
import ColorCode from "./ColorCode";
import { getColorName } from "@/app/utils/color";

function isValidHex(val: string) {
  if (val.length === 0) return false;

  const validChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "A",
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "e",
    "E",
    "f",
    "F",
  ];
  for (let i = 0; i < val.length; i++) {
    if (!validChars.includes(val[i])) {
      return false;
    }
  }
  return true;
}

function isVaidHexColor(hex: string) {
  if (!isValidHex(hex)) return false;

  if (hex.length === 3 || hex.length === 6) {
    return true;
  }
}

type Props = {
  hex: string;
};

function ColorPicker({ hex }: Props) {
  const [value, setValue] = useState(hex);
  const [color, setColor] = useState<Colord>(colord(hex));
  const colorRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    // const newColor = Color(e.target.value);
    const newColor = colord(e.target.value);
    setColor(newColor);
    setValue(newColor.toHex());
  };

  const handleTextBlur = () => {
    setValue(color.toHex());
  };

  useEffect(() => {
    if (value.length > 0) {
      const val = value[0] === "#" ? String(value.slice(1)) : value;
      if (isVaidHexColor(val)) {
        setColor(colord("#" + val));
      }
    }
  }, [value]);

  const handleColorInputBlur = () => {
    const hex = color.toHex().replace("#", "");
    router.push("/color/" + hex);
  };

  const handleRandomColor = () => {
    const randomColor = random();
    router.push("/color/" + randomColor.toHex().replace("#", ""));
  };

  return (
    <>
      {/* topbar */}
      <div className={css.topbar}>
        <div className={css.picker}>
          <input
            className={css.picker__input}
            type="text"
            value={value}
            placeholder={value}
            onChange={handleTextInput}
            onBlur={handleTextBlur}
          />
          <div className={css.picker__wrapper} style={{ backgroundColor: color.toHex() }}>
            <input
              className={css.picker__color}
              ref={colorRef}
              type="color"
              value={color.toHex()}
              onChange={handleColorInput}
              onBlur={handleColorInputBlur}
            />
          </div>
        </div>
        {/* random color */}
        <button className={css.random__btn} onClick={handleRandomColor}>
          <Zap size={18} strokeWidth={1.2} />
        </button>
      </div>

      {/* color */}
      {/* color */}
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
    </>
  );
}

export default ColorPicker;
