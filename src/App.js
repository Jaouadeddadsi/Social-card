import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { item } from "./static-data";

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
            <i class="fa fa-angle-down"></i>
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
      </div>
    </div>
  );
}

export default App;
