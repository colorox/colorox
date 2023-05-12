"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import css from "./style.module.css";
import Color from "color";
import { useRouter } from "next/navigation";

type Props = {};

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

function ColorPicker({}: Props) {
  const [value, setValue] = useState("");
  const [color, setColor] = useState<Color>(Color("red"));
  const colorRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = Color(e.target.value);
    setColor(newColor);
    setValue(newColor.hex());
  };

  const handleTextBlur = () => {
    setValue(color.hex());
  };

  useEffect(() => {
    if (value.length > 0) {
      const val = value[0] === "#" ? String(value.slice(1)) : value;
      if (isVaidHexColor(val)) {
        setColor(Color("#" + val));
      }
    }
  }, [value]);

  const handleColorInputBlur = () => {
    const hex = color.hex().replace("#", "");
    router.push("/color/" + hex);
  };

  return (
    <div className={css.picker}>
      <input
        className={css.picker__input}
        type="text"
        value={value}
        placeholder={value}
        onChange={handleTextInput}
        onBlur={handleTextBlur}
      />
      <div className={css.picker__wrapper} style={{ backgroundColor: color.hex() }}>
        <input
          className={css.picker__color}
          ref={colorRef}
          type="color"
          value={color.hex()}
          onChange={handleColorInput}
          onBlur={handleColorInputBlur}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
