import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-logo">
        <img className="logo-img-sq" src={item.logo_url} alt="logo" />
      </div>
      <div className="card-title">
        <h1>{item.title}</h1>
      </div>
      <div className="card-author">
        <span className="name">{item.author}</span>
        <img className="author-img" src={item.author_img} alt="author img" />
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired
};

export default Card;
