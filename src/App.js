import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { item } from "./static-data";
import Card from "./Card";
import Action from "./Action";

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img className="logo-img" src={item.logo_url} alt="logo" />
      </div>
      <div className="content">
        <div>
          <span className="community">{item.community}</span>{" "}
          <span className="date">
            @{item.community.replace(/\s+/g, "")} . {item.submit_date}
          </span>
          <span className="arrow">
            <i className="fa fa-angle-down"></i>
          </span>
          <br />
          <span className="title">{item.title}</span>
          <span className="author">
            {"{ author: "}
            <span style={{ color: "blue" }}>
              @{item.author.split(" ")[1].toLowerCase()}
            </span>{" "}
            }
          </span>
        </div>
        <Card item={item} />

        <div className="description">
          <span className="dec-title">{item.title}</span>
          <br />
          <span className="description-par">{item.description}</span>
          <br />
          <span className="url">{item.url}</span>
        </div>
        <Action item={item} />
      </div>
    </div>
  );
}

export default App;
