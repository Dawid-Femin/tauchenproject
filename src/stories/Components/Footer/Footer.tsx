import React, { FC } from "react";
import classes from "./Footer.module.scss";
import logo from "../../../../public/images/logo-dark.webp";
import Image from "next/image";

interface IFooter {
  font?: string;
}

export const Footer: FC<IFooter> = ({ font }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.container} style={{ fontFamily: font }}>
        <div className={classes.column}>
          <Image
            src={logo}
            alt={"logo"}
            style={{ maxWidth: "220px", height: "auto" }}
          />
        </div>
        <div className={classes.column}>
          <h4>TITLE COLUMN</h4>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h4>TITLE COLUMN</h4>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h4>TITLE COLUMN</h4>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h4>TITLE COLUMN</h4>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
          </ul>
        </div>
      </div>
      <div style={{ fontFamily: font }} className={classes.copy}>
        Wszystkie prawa zastrzeżone. 2024
      </div>
    </div>
  );
};
