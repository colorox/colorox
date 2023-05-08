import React from "react";
import css from "./palette.module.css";
import { Heart, MoreHorizontal } from "react-feather";

type Props = {};

function Palette({}: Props) {
  return (
    <div className={css.palette}>
      <div className={css.palette__colors}>
        <div className={css.palette__color}>
          <div className={css.palette__hex}> FCC8D1 </div>
        </div>
        <div className={css.palette__color}>
          <div className={css.palette__hex}> FCC8D1 </div>
        </div>
        <div className={css.palette__color}>
          <div className={css.palette__hex}> FCC8D1 </div>
        </div>
        <div className={css.palette__color}>
          <div className={css.palette__hex}> FCC8D1 </div>
        </div>
      </div>
      <div className={css.palette__footer}>
        <button className={css.palette__like}>
          <Heart size={18} strokeWidth={1.2} /> <span> 6,014</span>
        </button>
        <div className={css.palette__date}> 3 months </div>
      </div>
    </div>
  );
}

export default Palette;
