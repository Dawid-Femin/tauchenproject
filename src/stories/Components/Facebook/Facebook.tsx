import React, { FC } from "react";
import classes from "./Facebook.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/facebook.webp";

interface IFacebook {
  font?: string;
}

export const Facebook: FC<IFacebook> = ({ font }) => {
  return (
    <div className={classes.facebook}>
      <h2 style={{ fontFamily: font }}>
        DOŁĄCZ DO NAS NA FACEBOOKU!
      </h2>
      <Image width={250} src={logo} alt="Facebook" />
    </div>
  );
};
