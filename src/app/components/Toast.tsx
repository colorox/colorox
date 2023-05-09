'use client'

import React, {useEffect} from "react";
import css from "./toast.module.css";
import { Check } from "react-feather";

type Props = {};

function Toast({}: Props) {
  
  useEffect(() => {
    setTimeout(() => {

    })
  }, [])

  return (
    <div className={css.toast}>
      <div className={css.toast__icon}>
        <Check size={14} strokeWidth={4} />
      </div>
      <div className={css.toast__text}>Copied to clipboard successfully !</div>
    </div>
  );
}

export default Toast;
