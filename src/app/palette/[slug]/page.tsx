import React from "react";
import css from "./style.module.css";
import PaletteItem from "./PaletteItem";
import PaletteAction from "./PaletteAction";
import Palette from "@/app/components/Palette";

type Props = {};

function Page({ }: Props) {
  return (
    <div>
      <div className={css.page__header}>
        <h1 className={css.page__title}> Palette </h1>
        <PaletteAction />
      </div>
      <div className={css.palette}>
        <PaletteItem color="#242" />
        <PaletteItem color="#999" />
        <PaletteItem color="#f2f232" />
        <PaletteItem color="#f20232" />
        <PaletteItem color="#f0f232" />
      </div>


      <h2 className={css.similar__title}> Similar Palettes </h2>


      <div className={css.similar__list}>
        <Palette />
        <Palette />
        <Palette />
        <Palette />
        <Palette />
      </div>

    </div>
  );
}

export default Page;
