import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import "./details.scss";
import { FrInput, FrTitle } from "../../../shared/commons";
import { COMMENT_H1, COMMENT_PHARAGRAPH, COMMENT_TITLE } from "../../../lib";

const initialForm = {
  title: "",
  comment: "",
};

export const Details = () => {
  let { state } = useLocation();
  const [initialState, setInitialState] = useState(initialForm);
  const { title, comment } = initialState;
  const [error, setError] = useState(false)

const handleClick = ()=>{
  setInitialState(initialForm)
}
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInitialState((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(initialState);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!comment.trim()) {
      setError(true)
    } else {
      setError(false)
      console.log(initialState);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 offset-md-3">
            <h1 className="my-4">{state?.title}</h1>
            {state.categories.map((category: string) => (
              <span className="badge bg-danger me-2">{category}</span>
            ))}
            <div className="text-end">
              <span className="">{state?.date_create}</span>
            </div>
            <div className="article">
              <p>{state?.description}</p>
              <pre>
                <code>
                  {`
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessagesService } from "../messages/messages.service";
import { MessagesComponent } from "../messages/messages.component";
@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
                `}
                </code>
              </pre>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                similique, itaque commodi a modi et vitae nemo distinctio,
                magnam pariatur eveniet, est nihil ut rerum quaerat fugiat
                sapiente iusto quia. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Soluta itaque sit modi dolor voluptas eaque
                deserunt atque voluptatem! Id illo natus commodi reprehenderit
                unde accusamus ipsa placeat aliquam nostrum doloribus.
              </p>
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*8v-bmIVjvtNKbpbm0bbwGw.png"
                alt=""
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                similique, itaquue sit modi dolor voluptas eaque deserunt atque
                voluptatem! Id illo natus commodi reprehenderit unde accusamus
                ipsa placeat aliquam nostrum doloribus.
              </p>
            </div>
            <label htmlFor="">Tags : </label>
            <div className="tags">
              {state?.tags.map((tag: string) => (
                <span>{tag}</span>
              ))}
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* COMENTARIO */}
      <div className="container-fluid bg-white ps-md-0">
        <div className="row">
          <div className="col-md-5">
            <div className="img__comentario"></div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 col-12 offset-md-3 mt-5 mb-4">
                <FrTitle title={COMMENT_TITLE} type={COMMENT_H1} />
                <p>{COMMENT_PHARAGRAPH}</p>
                <form onSubmit={handleSubmit}>
                  <hr />
                  <FrInput
                    type={"input"}
                    name={"title"}
                    label={"Título"}
                    value={title}
                    error={false}
                    placeholder={"Puede dejarlo en blanco"}
                    onChange={handleChange}
                  />
                  <FrInput
                    type={"textarea"}
                    name={"comment"}
                    label={"Comentario"}
                    value={comment}
                    error={error}
                    placeholder={"Deja un comentario aquí"}
                    onChange={handleChange}
                  />
                  {/* <div className="form-floating mb-md-3">
                    <input
                      className="form-control"
                      placeholder="puedes dejarlo en blanco"
                      id="title"
                      name="title"
                      value={title}
                      onChange={(e: any) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    <label htmlFor="floatingTextarea">Título</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Deja un comentario aquí"
                      id="comment"
                      name="comment"
                      value={comment}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Comentario</label>
                  </div> */}

                  <hr />
                  <div className="d-grid gap-2 col-12 d-md-block">
                    <button className="btn btn-primary me-md-2" type="submit">
                      Enviar
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={handleClick}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Fragment>
  );
};
