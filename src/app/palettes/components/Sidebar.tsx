"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./sidebar.module.css";
import { Star, TrendingUp, Circle, Heart, ChevronLeft } from "react-feather";
import { tags } from "../data";
import { usePaletteContext } from "../context";

type Props = {};

function Sidebar({}: Props) {
  const pathname = usePathname();
  const { isSidebar, toggleSidebar } = usePaletteContext();

  return (
    <div className={`${css.sidebar} ${!isSidebar ? css["sidebar--closed"] : ""}`}>
      <div className={css.sidebar__wrapper}>
        <div className={css.sidebar__header}> 
          <button className={css.sidebar__close} onClick={toggleSidebar}> <ChevronLeft size={18} /> </button>
        </div>
        <div className={`${css.sidebar__nav} ${css.nav}`}>
          <div className={css.nav__item}>
            <Link
              href={"/palettes/latest"}
              className={`${css.nav__link} ${pathname === "/palettes/latest" ? css["nav__link--active"] : ""}`}
            >
              <Star size={18} strokeWidth={1.5} /> Latest
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link
              href={"/palettes/trending"}
              className={`${css.nav__link} ${pathname === "/palettes/trending" ? css["nav__link--active"] : ""}`}
            >
              <TrendingUp size={18} strokeWidth={1.5} /> Trending
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link
              href={"/palettes/random"}
              className={`${css.nav__link} ${pathname === "/palettes/popular" ? css["nav__link--active"] : ""}`}
            >
              <Circle size={18} strokeWidth={1.5} /> Popular
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href="" className={css.nav__link}>
              <Heart size={18} strokeWidth={1.5} /> Collection
            </Link>
          </div>
        </div>
        <div className={css.tags}>
          {tags.map(({ id, text, url }) => {
            return (
              <Link
                href={url}
                className={`${css.tag__link} ${pathname === url ? css["tag__link--active"] : ""}`}
                key={id}
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
