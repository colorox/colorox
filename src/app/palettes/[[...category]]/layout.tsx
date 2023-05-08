import React, { ReactNode } from "react";
import css from "./palettes.module.css";
import Link from "next/link";
import { Circle, Heart, Menu, Search, Star, TrendingUp } from "react-feather";
import { tags } from "./data";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={css.layout}>

      <div className={css.header}>
        <div className={css['header-wrapper']}>
          <div className={css['search-list']}> </div>
          <div className={css['search-icon']}>
            <Search size={20} />
          </div>
          <form className={css['search-form']}> 
            <input className={css['search-input']} type="text" placeholder="Search with color, styles or hex values..." />
          </form>
          <button className={css['menu-btn']}> 
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className={css.sidebar}>
        <div className={`${css.sidebar__nav} ${css.nav}`}>
          <div className={css.nav__item}>
            <Link href={"/palettes/latest"} className={css.nav__link}>
              <Star size={18} strokeWidth={1.5} /> Latest
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href={"/palettes/trending"} className={css.nav__link}>
              <TrendingUp size={18} strokeWidth={1.5} /> Trending
            </Link>
          </div>

          <div className={css.nav__item}>
            <Link href={"/palettes/popular"} className={css.nav__link}>
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
          {tags.map((tag, id) => {
            return (
              <Link href={`/palettes/${tag.toLowerCase()}`} className={css.tag__link} key={id}>
                {" "}
                {tag}{" "}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;
