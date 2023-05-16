"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import css from "./style.module.css";
import Color from "color";
import { useRouter } from "next/navigation";
import { Zap } from "react-feather";
import { Colord, colord, random } from "colord";

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
  );
}

export default ColorPicker;
