import React, { Fragment } from "react";
import "./FrTitle.scss";

export const FrTitle = ({ type, title }: { type: string; title: string }) => {
  return (
    <Fragment>
      {(() => {
        switch (type) {
          case "h1":
            return <h1>{title}</h1>;
          case "h2":
            return <h2>{title}</h2>;
          case "h3":
            return <h3>{title}</h3>;
          default:
            return null;
        }
      })()}
    </Fragment>
  );
};
