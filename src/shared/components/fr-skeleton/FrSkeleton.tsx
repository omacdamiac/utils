import React, { Fragment } from "react";
import "./FrSkeleton.scss";

export const Skeleton = (): any => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title skeleton"></h2>
          <p className="card-intro skeleton"></p>
        </div>
      </div>
    </Fragment>
  );
};
