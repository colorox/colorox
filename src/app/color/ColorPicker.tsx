"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import css from "./style.module.css";
import { useParams, useRouter } from "next/navigation";
import { Zap } from "react-feather";
import { colord, random } from "colord";
import { useColorContext } from "./colorContext";

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

};

function ColorPicker({ }: Props) {
  const { state, dispatch } = useColorContext();
  const { color } = state;
  const [value, setValue] = useState(color.toHex());

  const colorRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter()
  const params = useParams();

  console.log(params)

  useEffect(() => {
    setMounted(true);
    setValue(color.toHex())
  }, []);

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    // const newColor = Color(e.target.value);
    const newColor = colord(e.target.value);
    dispatch({ type: "SET_COLOR", payload: newColor });
    setValue(newColor.toHex());
  };

  const handleTextBlur = () => {
    setValue(color.toHex());
  };

  useEffect(() => {
    if (value.length > 0) {
      const val = value[0] === "#" ? String(value.slice(1)) : value;
      if (isVaidHexColor(val)) {
        dispatch({ type: "SET_COLOR", payload: colord("#" + val) });
      }
    }
  }, [value]);

  const handleColorInputBlur = () => {
    const hex = color.toHex().replace("#", "");
    router.push(`/color/${hex}`);
  };

  const handleRandomColor = () => {
    const randomColor = random();
    setValue(randomColor.toHex());
    router.push(`/color/${randomColor.toHex().replace("#", "")}`);
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
          {mounted && (
            <input
              className={css.picker__color}
              ref={colorRef}
              type="color"
              value={color.toHex()}
              onChange={handleColorInput}
              onBlur={handleColorInputBlur}
            />
          )}
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
