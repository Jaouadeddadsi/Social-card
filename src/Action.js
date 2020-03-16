import React from "react";
import PropTypes from "prop-types";
import "./Action.css";

function Action({ item }) {
  return (
    <div className="actions">
      <ul>
        <li className="comment">
          <i class="fa fa-comment"></i> <span>{item.comments}</span>
        </li>
        <li className="retweet">
          <i class="fa fa-retweet"></i> <span>{item.replays}</span>
        </li>
        <li className="likes">
          <i class="fa fa-heart"></i>
          <span>{item.likes}</span>
        </li>
        <li className="messages">
          <i class="fa fa-envelope"></i>
        </li>
      </ul>
    </div>
  );
}

Action.propTypes = {
  item: PropTypes.object.isRequired
};

export default Action;
