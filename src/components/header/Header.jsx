import React, { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

import css from "./Header.module.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" />
        <span>Amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <FaBars />
        </div>

        <ul className={css.menu} style={{ display: showMenu ? "inherit" : "none" }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />

        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
