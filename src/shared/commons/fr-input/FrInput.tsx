import React, { ChangeEvent, Fragment } from "react";
import "./FrInput.scss";

export const FrInput = ({
  name,
  label,
  value,
  placeholder,
  type,
  error,
  onChange,
}: {
  name: string;
  label: string;
  value: any;
  placeholder: string;
  type: string;
  error: boolean;
  onChange: (e: ChangeEvent<any>) => void;
}) => {
  if (type === "input") {
    return (
      <Fragment>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder={placeholder}
            id={name}
            name={name}
            value={value}
            onChange={onChange}

            //   onChange={(e: any) =>
            //     handleChange(e.target.name, e.target.value)
            //   }
          />
          <label htmlFor={name}>{label}</label>
          {error && <p className="error">Input filed can't be empty!</p>}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder={placeholder}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
          <label htmlFor={name}>{label}</label>
          {error && <p className="error">textarea filed can't be empty!</p>}
        </div>
      </Fragment>
    );
  }
};
