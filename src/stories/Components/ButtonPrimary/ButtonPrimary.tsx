import React, { FC } from "react";
import classes from "./ButtonPrimary.module.scss";

interface IButton {
  title: string;
  font?: string;
}

export const ButtonPrimary: FC<IButton> = ({ title, font }) => {
  return (
    <button
      style={{ fontFamily: font }}
      className={classes.button}
    >{`${title} ->`}</button>
  );
};
