import React from "react";
import css from "./palette.module.css";
import { Heart, MoreHorizontal } from "react-feather";
import { customToast } from "@/app/toast";

type Props = {};

function Palette({}: Props) {
  const likePalette = () => {};

  const notify = () => {
    customToast("Copied to clipboard");
  };

  const copyColor = () => {
    
  };

  return (
    <div className={css.palette}>
      <div className={css.palette__colors}>
        <div className={css.palette__color} onClick={notify}>
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
          <Heart size={16} strokeWidth={1.2} /> <span> 8,124 </span>
        </button>
        <button className={css.palette__more}>
          {" "}
          <MoreHorizontal size={20} strokeWidth={1.5} />{" "}
        </button>
      </div>
    </div>
  );
}

export default Palette;
