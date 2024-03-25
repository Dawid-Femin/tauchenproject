import React, { FC } from "react";
import classes from "./HorizontalSection.module.scss";
import {ButtonPrimary} from "@/stories/Components/ButtonPrimary/ButtonPrimary";

interface IHorizontalSection {
  background: string;
  font?: string;
  title: string;
  description: string;
}

export const HorizontalSection: FC<IHorizontalSection> = ({
  background,
  font,
  title,
  description,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={classes.container}
    >
      <h2 style={{ fontFamily: font }}>{title}</h2>
      <p style={{ fontFamily: font }}>{description}</p>
      <div className={classes.btn}>
        <ButtonPrimary title={"Zobacz więcej"} font={font} />
      </div>
    </div>
  );
};
