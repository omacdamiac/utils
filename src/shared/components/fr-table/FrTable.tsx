import React, { Fragment, useState } from "react";
import "./FrTable.scss";
import FrModal from "../fr-modal/FrModal";
import { Link } from "react-router-dom";

const FrTable = ({ data }: { data: any }) => {
  const [comentario, setComentario] = useState(undefined);
console.log(data);

return (
  <Fragment>
    <FrModal comentario={comentario} />
      <div className="content">
        <h2>{data.table_title}</h2>
        <div className="content__table">
          <table className="table table-hover">
            <thead>
              <tr>
                {data?.table_headers?.map((header: string, i: number) => (
                  <th key={i} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((bo: any, i: any) => (
                <tr key={i.toString()}>
                  <td className="px-4 py-4">
                    <div>
                      <h3>{bo?.title}</h3>
                      <p>{bo?.category}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p>{bo?.description}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      {bo?.tags.map((tag: string, i: any) => (
                        <span key={i} className="complete">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td
                    className="px-4 py-4 text-center"
                  >
                    <div
                      onClick={() => setComentario(bo?.comments)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-backdrop="static"  data-bs-keyboard="false"
                      data-info="Ventana Modal 3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chat-left-dots"
                        viewBox="0 0 16 16"
                        >
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                      </svg>
                    </div>
                        
                  </td>
                  <td className="px-4 py-4 text-center">{bo?.date_create}</td>
                  <td className="px-4 py-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                      alt=""
                    />
                  </td>

                  <td className="px-4 py-4">
                    <Link to="/details">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                    </Link>
                    {/* <div className="progress" role="progressbar">
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "50%" }}
                      ></div>
                    </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default FrTable;
