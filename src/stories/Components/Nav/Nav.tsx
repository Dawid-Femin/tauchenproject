import React, { FC } from "react";
import classes from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo-s.png";

interface INav {
  font: string;
}

export const Nav: FC<INav> = ({ font }) => {
  return (
    <nav className={classes.nav} style={{ fontFamily: font }}>
      <div
        className={classes.row}
        style={{ background: "#041023", color: "#FFF" }}
      >
        <div className={`${classes.rowContainer} ${classes.darkFont}`}>
          <div className={classes.logo}>
            <Image
              src={logo}
              alt={"logo"}
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
          <div className={classes.navigation} style={{ fontSize: "14px" }}>
            <ul>
              <li className={classes.lightFont}>
                <Link href="#">INFORMATION</Link>
              </li>
              <li className={classes.lightFont}>
                <Link href="#">IMPRESSUM</Link>
              </li>
              <li className={classes.lightFont}>
                <Link href="#">EN</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={classes.row}
        style={{ background: "#FFF", color: "#000" }}
      >
        <div className={classes.rowContainer}>
          <div className={classes.navigation}>
            <ul>
              <Link href="/">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  STRONA GŁÓWNA
                </li>
              </Link>
              <Link href="/diving-history">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  HISTORIA NURKOWANIA
                </li>
              </Link>
              <Link href="/about">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  O NAS
                </li>
              </Link>
              <Link href="/courses">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  KURSY
                </li>
              </Link>
              <Link href="/equipment">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  SPRZĘT NURKOWY
                </li>
              </Link>
              <Link href="/blog">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  AKTUALNOŚCI
                </li>
              </Link>
              <Link href="/apparel">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  ODZIEŻ
                </li>
              </Link>
              <Link href="/contact">
                <li className={`${classes.darkFont} ${classes.liHover}`}>
                  KONTAKT
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
