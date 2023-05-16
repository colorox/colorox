import Link from "next/link";
import { Maximize2 } from "react-feather";
import css from "./style.module.css";
import ColorItem from "./ColorItem";
import Main from "./Main";

import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import harmoniesPlugin from "colord/plugins/harmonies";
extend([mixPlugin, harmoniesPlugin]);

type Props = {
  params: any;
};

// function findTones(color: Color, mixColor: string, n: number) {
//   const shades: string[] = [];
//   const factor = 1 / n;
//   for (let i = 0; i <= n; i++) {
//     const shade = color.mix(Color(mixColor), factor * i).hex();
//     shades.push(shade);
//   }
//   return shades;
// }

// function findHues(color: Color, n: number) {
//   const hues: string[] = [];
//   const factor = 10;
//   for (let i = -7; i <= 7; i++) {
//     const hue = color.rotate(factor * i).hex();
//     hues.push(hue);
//   }
//   return hues;
// }

// function findComplement(color: Color) {
//   return color.rotate(180);
// }

// function findAnalogous(color: Color) {
//   const arr: Color[] = [];
//   arr.push(color.rotate(-40));
//   arr.push(color.rotate(0));
//   arr.push(color.rotate(40));
//   return arr;
// }

// function findTriadic(color: Color) {
//   const arr: Color[] = [];
//   arr.push(color.rotate(0));
//   arr.push(color.rotate(120));
//   arr.push(color.rotate(240));
//   return arr;
// }

// function findTetradic(color: Color) {
//   const arr: Color[] = [];
//   arr.push(color.rotate(0));
//   arr.push(color.rotate(60));
//   arr.push(color.rotate(180));
//   arr.push(color.rotate(240));
//   return arr;
// }

// function findSplitComplement(color: Color) {
//   const arr: Color[] = [];
//   arr.push(color.rotate(0));
//   arr.push(color.rotate(160));
//   arr.push(color.rotate(200));
//   return arr;
// }

// function findSquare(color: Color) {
//   const arr: Color[] = [];
//   arr.push(color.rotate(0));
//   arr.push(color.rotate(90));
//   arr.push(color.rotate(180));
//   arr.push(color.rotate(270));
//   return arr;
// }

async function Page({ params }: Props) {
  const { hex } = params;
  const color = colord("#" + hex);

  if (!color.isValid()) {
    throw new Error("Invalid Color");
  }

  const tints = color.tints(7).map((c) => c.toHex());
  const shades = color.shades(7).map((c) => c.toHex());
  const tones = color.tones(7).map((c) => c.toHex());

  const analogous = color.harmonies("analogous").map((c) => c.toHex());
  const complementary = color.harmonies("complementary").map((c) => c.toHex());
  const doubleSplitComplementary = color.harmonies("double-split-complementary").map((c) => c.toHex());
  const square = color.harmonies("rectangle").map((c) => c.toHex());
  const splitComplements = color.harmonies("split-complementary").map((c) => c.toHex());
  const tetradic = color.harmonies("tetradic").map((c) => c.toHex());
  const triadic = color.harmonies("triadic").map((c) => c.toHex());

  return (
    <div>
      <Main />

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

      {/* Complementary */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Complementary </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {complementary.map((color, index) => (
            <ColorItem color={color} key={index} />
          ))}
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
            <ColorItem color={color} key={index} />
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
            <ColorItem color={color} key={index} />
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
            <ColorItem color={color} key={index} />
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
            <ColorItem color={color} key={index} />
          ))}
        </div>
      </div>

      {/* double Split Complementary */}
      <div className={css.tint}>
        <header className={css.tint__header}>
          <div className={css.tint__title}> Double Split Complementary </div>
          <Link href={""} className={css.tint__link}>
            <Maximize2 size={14} strokeWidth={1.5} />
          </Link>
        </header>
        <div className={css.tint__list}>
          {doubleSplitComplementary.map((color, index) => (
            <ColorItem color={color} key={index} />
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
            <ColorItem color={color} key={index} />
          ))}
        </div>
      </div>
      {/* ======== */}
    </div>
  );
}

export default Page;
