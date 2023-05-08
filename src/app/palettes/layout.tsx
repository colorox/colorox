import React, { ReactNode } from "react";
import css from "./palettes.module.css";
import Link from "next/link";
import { Circle, Heart, Star, TrendingUp } from "react-feather";
import { tags } from "./data";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={css.layout}>
      <div className={css.sidebar}>
        <div className={`${css.sidebar__nav} ${css.nav}`}>
          <div className={css.nav__item}>
            <Link href="" className={css.nav__link}>
              <Star size={18} strokeWidth={1.5} /> New
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href="" className={css.nav__link}>
              <TrendingUp size={18} strokeWidth={1.5} /> Popular
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href="" className={css.nav__link}>
              <Circle size={18} strokeWidth={1.5} /> Random
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href="" className={css.nav__link}>
              <Heart size={18} strokeWidth={1.5} /> Collection
            </Link>
          </div>
        </div>
        <div className={css.tags}>
          {tags.map((tag, id) => {
            return (
              <Link href={""} className={css.tag__link} key={id}>
                {" "}
                {tag}{" "}
              </Link>
            );
          })}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
