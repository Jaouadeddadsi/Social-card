import React from "react";
import PropTypes from "prop-types";

function Action({ item }) {
  return (
    <div className="actions">
      <ul>
        <li className="comment">
          <i class="fa fa-comment"></i>
        </li>
        <li className="retweet">
          <i class="fa fa-retweet"></i>
        </li>
        <li className="likes">
          <i class="fa fa-heart"></i>
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
