import React, { Fragment } from "react";
import "./FrModal.scss";
import { NUMBER_STATE_SHOW } from "../../../lib";
import { formatDate } from "../../utils/utils";

export const FrModal = (props: any) => {
  console.log(props);

  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-end">
              <h5 className="modal-title w-100" id="exampleModalLabel">
                Comentarios
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-light">
              {props?.comentario?.map((d: any, i: number) => d?.estado === NUMBER_STATE_SHOW && (
                <div className="card" key={d?.id}>
                  <strong>{d?.avatar}</strong>
                  <p>{d?.comment}</p>
                  <span>{formatDate(d?.date_create)}</span>
                </div>
              ))}
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

