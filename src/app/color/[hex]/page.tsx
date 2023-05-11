import Link from "next/link";
import { Maximize2 } from "react-feather";
import css from "./style.module.css";
import ColorCode from "./ColorCode";
import ColorItem from "./ColorItem";
import { getIconColor } from "@/app/utils/color";
import Color from "color";

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

function findTones(color: Color, mixColor: string, n: number) {
  const shades: string[] = [];
  const factor = 1 / n;
  for (let i = 0; i <= n; i++) {
    const shade = color.mix(Color(mixColor), factor * i).hex();
    shades.push(shade);
  }
  return shades;
}

async function Page({ params }: Props) {
  const { hex } = params;
  const data = await getData(hex);

  if (data === "Invalid hex value") {
     throw new Error('Invalid hex value')
  }

  const color = Color("#" + hex);
  const hexString = color.hex().replace("#", "");
  const rgbString = color.rgb().string().replace("rgb(", "").replace(")", "");
  const hslString = color.hsl().string().replace("hsl(", "").replace(")", "");

  const shades = findTones(color, "#000", 5);
  const tints = findTones(color, "#fff", 5);

  return (
    <div>
      <div className={css.main}></div>
      {/* color */}
      <div className={css.color}>
        <div className={css.color__fill} style={{ backgroundColor: color.hex() }}>
          <h1 style={{ color: getIconColor(data.value) }}> {data.name} </h1>
        </div>
        <div className={css.color__codes}>
          <ColorCode type="hex" value={hexString} />
          <ColorCode type="rgb" value={rgbString} />
          <ColorCode type="hsl" value={hslString} />
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
          {tints.map((tint, index) => (
            <ColorItem color={tint} />
          ))}
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
          {shades.map((shade, index) => (
            <ColorItem color={shade} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
