"use client";

import React from "react";
import css from "./style.module.css";

type Props = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: Props) {
  return (
    <div className={css.error}>
      <div className={css.error__message}> {error.message} </div>
    </div>
  );
}

export default Error;
