import Link from "next/link";
import { Maximize2 } from "react-feather";
import css from "./style.module.css";
import ColorCode from "./ColorCode";
import ColorItem from "./ColorItem";
import tinyColor from "tinycolor2";

type Props = {
  params: any;
};

async function getData(hex: string) {
  const res = await fetch(`http://localhost:3000/api/color?hex=${hex}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Page({ params }: Props) {
  const { hex } = params;
  const data = await getData(hex);
  const color = tinyColor(data.value);

  return (
    <div>
      <div className={css.main}></div>
      {/* color */}
      <div className={css.color}>
        <div className={css.color__fill} style={{ backgroundColor: data.value }}>
          <h1 style={{ color: "white" }}> {data.name} </h1>
        </div>
        <div className={css.color__codes}>
          <ColorCode type="hex" value={color.toHex()} />
          <ColorCode type="rgb" value={color.toRgbString().replace("rgb(", "").replace(")", "")} />
          <ColorCode type="hsl" value={color.toHslString().replace("hsl(", "").replace(")", "")} />
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
