"use client";

import React, { FormEvent, useState, useEffect, useRef } from "react";
import css from "./header.module.css";
import { Search, Menu, X } from "react-feather";
import { usePaletteContext } from "../context";

type Props = {};

function Header({}: Props) {
  const [searchList, setSearchList] = useState<string[]>([]);
  const [text, setText] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(false);

  const { isSidebar, toggleSidebar } = usePaletteContext();
  
  useEffect(() => {
    window.onscroll = () => {
      if (headerRef.current && headerRef.current.getBoundingClientRect().top === 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text) {
      setSearchList([...searchList, text]);
      setText("");
    }
  };

  useEffect(() => {
    if (searchList.length > 0) {
    }
  }, [searchList]);

  const deleteChip = (i: number) => {
    setSearchList(searchList.filter((chip, index) => index !== i));
  };

  return (
    <div className={`${css.header} ${isSticky ? css["header--sticky"] : ""}`} ref={headerRef}>
      <div className={css["header-wrapper"]}>
        
        <div className={css.header__logo}>
           Colorox
        </div>

        <div className={css["search-list"]}>
          {searchList.map((text, index) => {
            return (
              <div className={css["chip"]} key={index}>
                {text}
                <button className={css["delete-chip"]} onClick={() => deleteChip(index)}>
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            );
          })}
        </div>
        {searchList.length === 0 && (
          <div className={css["search-icon"]}>
            <Search size={20} strokeWidth={1.5} />
          </div>
        )}
        <form className={css["search-form"]} onSubmit={handleSubmit}>
          <input
            className={css["search-input"]}
            type="text"
            placeholder="Search with color, styles or hex values..."
            value={text}
            onChange={(e) => setText(e.target.value.trim())}
          />
        </form>
        <button className={`${css["menu-btn"]} ${isSidebar ? css["menu-btn--close"] : ""}`} onClick={() => toggleSidebar()}>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default Header;
