import Link from "next/link";
import { Maximize2 } from "react-feather";
import css from "./style.module.css";
import ColorCode from "./ColorCode";
import ColorItem from "./ColorItem";
import Color from "color";
import ColorPicker from "./ColorPicker";

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

function findHues(color: Color, n: number) {
  const hues: string[] = [];
  const factor = 10;
  for (let i = -7; i <= 7; i++) {
    const hue = color.rotate(factor * i).hex();
    hues.push(hue);
  }
  return hues;
}

function findComplement(color: Color) {
  return color.rotate(180);
}

function findAnalogous(color: Color) {
  const arr: Color[] = [];
  arr.push(color.rotate(-40));
  arr.push(color.rotate(0));
  arr.push(color.rotate(40));
  return arr;
}

function findTriadic(color: Color) {
  const arr: Color[] = [];
  arr.push(color.rotate(0));
  arr.push(color.rotate(120));
  arr.push(color.rotate(240));
  return arr;
}

function findTetradic(color: Color) {
  const arr: Color[] = [];
  arr.push(color.rotate(0));
  arr.push(color.rotate(60));
  arr.push(color.rotate(180));
  arr.push(color.rotate(240));
  return arr;
}

function findSplitComplement(color: Color) {
  const arr: Color[] = [];
  arr.push(color.rotate(0));
  arr.push(color.rotate(160));
  arr.push(color.rotate(200));
  return arr;
}

function findSquare(color: Color) {
  const arr: Color[] = [];
  arr.push(color.rotate(0));
  arr.push(color.rotate(90));
  arr.push(color.rotate(180));
  arr.push(color.rotate(270));
  return arr;
}

async function Page({ params }: Props) {
  const { hex } = params;
  const data = await getData(hex);

  if (data === "Invalid hex value") {
    throw new Error("Invalid hex value");
  }

  const color = Color("#" + hex);
  const hexString = color.hex().replace("#", "");
  const rgbString = color.rgb().string().replace("rgb(", "").replace(")", "");
  const hslString = color.hsl().string(0).replace("hsl(", "").replace(")", "");

  const shades = findTones(color, "black", 7);
  const tints = findTones(color, "white", 7);
  const tones = findTones(color, "grey", 7);
  const hues = findHues(color, 14);
  const analogous = findAnalogous(color);
  const triadic = findTriadic(color);
  const tetradic = findTetradic(color);
  const splitComplements = findSplitComplement(color);
  const square = findSquare(color);

  return (
    <div>
      <ColorPicker />

      {/* color */}
      <div className={css.color}>
        <div className={css.color__fill} style={{ backgroundColor: color.hex() }}>
          <h1 style={{ color: color.isLight() ? "black" : "white" }}> {data.name} </h1>
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
            <ColorItem color={tint} key={index} />
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
            <ColorItem color={shade} key={index} />
          ))}
        </div>
      </div>

      {/* Tones */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Tones </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {tones.map((tone, index) => (
            <ColorItem color={tone} key={index} />
          ))}
        </div>
      </div>

      {/* Hues */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Hues </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {hues.map((hue, index) => (
            <ColorItem color={hue} key={index} />
          ))}
        </div>
      </div>

      {/* Complementary */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Complementary </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          <ColorItem color={color.hex()} key={0} />
          <ColorItem color={findComplement(color).hex()} key={0} />
        </div>
      </div>

      {/* Analogous */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Analogous </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {analogous.map((color, index) => (
            <ColorItem color={color.hex()} key={index} />
          ))}
        </div>
      </div>

      {/* Triadic */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Triadic </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {triadic.map((color, index) => (
            <ColorItem color={color.hex()} key={index} />
          ))}
        </div>
      </div>

      {/* Tetradic */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Tetradic </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {tetradic.map((color, index) => (
            <ColorItem color={color.hex()} key={index} />
          ))}
        </div>
      </div>

      {/* Split Complementary */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Split Complementary </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {splitComplements.map((color, index) => (
            <ColorItem color={color.hex()} key={index} />
          ))}
        </div>
      </div>

      {/* Square */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Square </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {square.map((color, index) => (
            <ColorItem color={color.hex()} key={index} />
          ))}
        </div>
      </div>
      {/* ======== */}
    </div>
  );
}

export default Page;
