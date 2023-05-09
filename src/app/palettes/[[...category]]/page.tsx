import React from "react";
import Palette from "./components/Palette";
import css from "./palettes.module.css";

type Props = {
  params: any,
};

export default function Page({params}: Props) {
  console.log(params.category)
  const checkCategory = () => {
    
  }

  return (
    <div className={css["palette-grid"]}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((palette) => {
        return <Palette key={palette} />;
      })}
    </div>
  );
}
