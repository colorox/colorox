"use client";
import css from './style.module.css'

import React from "react";
import { ChevronDown, Heart } from "react-feather";

type Props = {};

function PaletteAction({}: Props) {
  return (
    <div className={css.btn__group}>
      <button className={`${css.btn} ${css['btn-like']}`}> 
        <Heart size={18} />
        <span> 42.8k </span>
      </button>
      <button className={`${css.btn} ${css['btn-more']}`}>
        <ChevronDown size={18} />
      </button>
    </div>
  );
}

export default PaletteAction;
