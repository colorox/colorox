import React from "react";
import css from "./palette.module.css";
import { Heart, MoreHorizontal } from "react-feather";
import { customToast } from "@/app/toast";

type Props = {};

function Palette({}: Props) {
  const likePalette = () => {};

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    customToast("Color copied to the clipboard !");
  };

  return (
    <div className={css.palette}>
      <div className={css.palette__colors}>
        <div className={css.palette__color} onClick={() => copyColor('FCC8D1')}>
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
