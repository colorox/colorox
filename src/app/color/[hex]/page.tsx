import Link from "next/link";
import { Maximize2 } from "react-feather";
import css from "./style.module.css";
import ColorCode from "./ColorCode";
import ColorItem from "./ColorItem";

type Props = {};

function Page({}: Props) {
  return (
    <div>
      <div className={css.main}></div>
      {/* color */}
      <div className={css.color}>
        <div className={css.color__fill}></div>
        <div className={css.color__codes}>
          <ColorCode />
          <ColorCode />
          <ColorCode />
        </div>
      </div>

      {/* tints */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Tints </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
        </div>
      </div>

      {/* shades */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Shades </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
          <ColorItem />
        </div>
      </div>
    </div>
  );
}

export default Page;
