"use client";

import React, { useEffect, useState } from "react";
import css from "./palette.module.css";
import Palette from "./Palette";
import { usePaletteContext } from "../context";

type Props = {};

function PaletteGrid({}: Props) {
  const {isSidebar} = usePaletteContext();
  const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const [palettes, setPalettes] = useState(date);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight) {
      setPalettes((value) => [...value, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);
    }
  };

  useEffect(() => {
    console.log(palettes);
  }, [palettes]);

  return (
    <div className={`${css["palette-grid"]} ${!isSidebar ? css['palette-grid--full'] : ''}`}>
      {palettes.map((palette, index) => {
        return <Palette key={index} />;
      })}
    </div>
  );
}

export default PaletteGrid;
