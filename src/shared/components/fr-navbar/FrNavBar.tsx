import React, { Fragment, useState } from "react";
import "./FrNavBar.scss";
import { Link } from "react-router-dom";

const initialForm = {
  buscador: "",
};

export const FrNavBar = ({
  caracteres,
  setCaracteres,
}: {
  caracteres: any;
  setCaracteres: any;
}) => {
  const [initialState, setInitialState] = useState(initialForm);

  const handleChange = (event: any) => {
    // console.log(event.target.value);
    setCaracteres(event.target.value);
    // setTypeSearch(event.target.nodeName);
    // setSearch(event.target.value);
  };
  // console.log(caracteres);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(event.target.title.value);
    // console.log(initialState);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-md-3 text-center">
            <Link to="/dashboard">
              <span className="logo logo__hidden"></span>
            </Link>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  name="buscador"
                  className="form-control"
                  placeholder="Buscar tip"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="col-md-3 text-end position-relative">
            <span className="apoyo__span">¡Puedes apoyarnos!</span>
            <div className="position-absolute apoyo__yape">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXygN73kw9K5v_oLc5fjN2Tpi1NvcsWX_GRA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Fragment>
  );
};
