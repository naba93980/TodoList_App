import React from "react";

export function Todoitem(props) {

  const del = () => {
    props.deleteTodo(props.item);
  };

  return (
    <>
      <div className="col-12">
        {<h2>{props.sno}</h2>}
        {<p>{props.item.title}</p>}
        {<p>{props.item.description}</p>}
        {
          <button onClick={del} type="button" className="btn btn-danger">
            Delete
          </button>
        }
      </div>
    </>
  );
}
