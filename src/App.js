import React from "react";
import "./App.css";
import { item } from "./static-data";

function App() {
  return <div className="app">{item.title}</div>;
}

export default App;
