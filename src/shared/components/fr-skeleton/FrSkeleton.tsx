import React, { Fragment } from "react";
import "./FrSkeleton.scss";

export const Skeleton = () => {
  return (
    <Fragment>
      <div className="kard">
        <div className="kard-body">
          <h3 className="kard-title skeleton"></h3>
          <span className="kard-table skeleton"></span>
          <span className="kard-table skeleton"></span>
          <span className="kard-table skeleton"></span>
          <span className="kard-table skeleton"></span>
        </div>
      </div>
    </Fragment>
  );
};
