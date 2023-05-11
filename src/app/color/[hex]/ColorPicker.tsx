"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import css from "./style.module.css";
import Color from "color";

type Props = {};

function isValidHex(val: string) {
  if (val.length === 0) return false;

  const validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
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

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
  };

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(Color(e.target.value));
    setValue(e.target.value);
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

  return (
    <div className={css.picker}>
      <input
        className={css.picker__input}
        type="text"
        value={value}
        placeholder={color.hex()}
        onChange={handleTextInput}
        onBlur={handleTextBlur}
      />
      <div className={css.picker__wrapper} style={{ backgroundColor: color.hex() }}>
        <input className={css.picker__color} ref={colorRef} type="color" value={color.hex()} onChange={handleColorInput} />
      </div>
    </div>
  );
}

export default ColorPicker;
