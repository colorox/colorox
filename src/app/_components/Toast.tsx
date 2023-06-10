'use client'

import React, {useEffect} from "react";
import css from "./toast.module.css";
import { Check } from "react-feather";

type Props = {
  text: string,
};

function Toast({text}: Props) {
  return (
    <div className={css.toast__content}>
      <div className={css.toast__icon}>
        <Check size={14} strokeWidth={4} />
      </div>
      <div className={css.toast__text}> {text} </div>
    </div>
  );
}

export default Toast;
