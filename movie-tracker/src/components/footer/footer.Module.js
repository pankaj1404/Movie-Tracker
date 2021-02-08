import React from "react";
import style from "../header/Navbar.Module.scss";

const Footer = () => {
  return (
    <>
      <nav className={style.navHeader}>
        <span className={style.footer}>
          Copyright @ 2021 Pankaj
        </span>
      </nav>
    </>
  );
};
export default Footer;
