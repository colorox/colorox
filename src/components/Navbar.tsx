import React from "react";
import Link from "next/link";
import css from "./navbar.module.css";
import { Search } from "react-feather";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className={css.navbar}>
      <div className={css.navbar__logo}>
        <Link href={"/"}> Colorox </Link>
      </div>
      <form className={css.search}>
        <div className={css.search__icon}>
           <Search size={18} />     
        </div>
        <input className={css.search__input} type="text" placeholder="Search palettes" />
      </form>
      <nav className={`${css.navbar__nav} ${css.nav}`}>
        <div className={css.nav__item}>
          <Link className={css.nav__link} href={"/"}>
            Tools
          </Link>
        </div>
        <div className={css.nav__divider}> </div>
        <div className={css.nav__item}>
          <Link className={css.nav__link} href={"/"}>
            Sign in
          </Link>
        </div>
        <div className={css.nav__item}>
          <Link className={css.nav__btn} href={"/"}>
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
