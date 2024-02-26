import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import "./details.scss";

const initialForm = {
  title: "titulo",
  comment: "comentario",
};

const Details = () => {
  let { state } = useLocation();
  const [initialState, setInitialState] = useState(initialForm);
  const { title, comment } = initialState;

  const handleChange = (name: string, value: any) => {
    setInitialState((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log(initialState);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(event.target.title.value);
    console.log(initialState);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <h1>{state?.title}</h1>
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
        <div className="row">
          <div className="col-md-12">Comentarios</div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* COMENTARIO */}
      <div className="container-fluid bg-white ps-0">
        <div className="row">
          <div className="col-md-7">
            <div className="img__comentario"></div>
          </div>
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">titulo</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={title}
                onChange={(e: any) =>
                  handleChange(e.target.name, e.target.value)
                }
              />
              <hr />
              <label htmlFor="comment">Comentario</label>
              <textarea
                name="comment"
                value={comment}
                onChange={(e: any) =>
                  handleChange(e.target.name, e.target.value)
                }
              ></textarea>
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default Details;
