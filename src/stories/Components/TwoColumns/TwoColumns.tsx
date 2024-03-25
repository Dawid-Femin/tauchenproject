import React, { FC } from "react";
import classes from "./TwoColumns.module.scss";
import { ButtonPrimary } from "@/stories/Components/ButtonPrimary/ButtonPrimary";

interface ITwoColumns {
  backgroundFirst: string;
  titleFirst: string;
  descriptionFirst: string;
  backgroundSecond: string;
  titleSecond: string;
  descriptionSecond: string;
  font?: string;
}

export const TwoColumns: FC<ITwoColumns> = ({
  font,
  backgroundFirst,
  titleFirst,
  descriptionFirst,
  backgroundSecond,
  titleSecond,
  descriptionSecond,
}) => {
  return (
    <div className={classes.twoColumns}>
      <div
        style={{ backgroundImage: `url(${backgroundFirst})` }}
        className={classes.column}
      >
        <div className={classes.contentLeft}>
          <h3 style={{ fontFamily: font }}>{titleFirst}</h3>
          <p style={{ fontFamily: font }}>{descriptionFirst}</p>
          <div className={classes.btn}>
            <ButtonPrimary title={"Zobacz więcej"} font={font} />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundSecond})` }}
        className={classes.column}
      >
        <div className={classes.contentRight}>
          <h3 style={{ fontFamily: font }}>{titleSecond}</h3>
          <p style={{ fontFamily: font }}>{descriptionSecond}</p>
          <div className={classes.btn}>
            <ButtonPrimary title={"Zobacz więcej"} font={font} />
          </div>
        </div>
      </div>
    </div>
  );
};
