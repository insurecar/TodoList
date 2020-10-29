import React from "react";
import classNames from "classnames";

const Task = ({ text, done, onChange, id, onDelete }) => {
  const listItemClassnames = classNames("list-item", {
    "list-item_done": done,
  });
  return (
    <li className={listItemClassnames}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="list-item__delete-btn"
      ></button>
    </li>
  );
};

export default Task;
